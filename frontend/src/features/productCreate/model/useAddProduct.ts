// features/productCreate/model/useAddProduct.ts
import { gql, useMutation, type Reference } from "@apollo/client";
import { useAppDispatch } from "@shared/lib/hooks";
import { ADD_PRODUCT } from "@shared/api/graphql/product/mutations";
import {
    addProduct as addProductAction,
    removeProduct,
    updateProduct,
} from "@entities/product";
import type { ProductType } from "@entities/product";

export const useAddProduct = () => {
    const dispatch = useAppDispatch();

    const [addProductMutation, { loading, error }] = useMutation(ADD_PRODUCT);

    const addProduct = (input: Omit<ProductType, "id">) => {
        const optimisticProduct = {
            __typename: "Product",
            id: crypto.randomUUID(),
            ...input,
        };

        // Immediately dispatch optimistic product to Redux
        dispatch(addProductAction(optimisticProduct));

        addProductMutation({
            variables: { input },
            optimisticResponse: {
                addProduct: optimisticProduct,
            },
            update: (cache, { data }) => {
                if (!data?.addProduct) return;

                cache.modify({
                    fields: {
                        products(
                            existingRefs:
                                | Reference
                                | readonly Reference[]
                                | undefined,
                            { readField }
                        ): readonly Reference[] {
                            const refsArray = !existingRefs
                                ? []
                                : Array.isArray(existingRefs)
                                ? existingRefs
                                : [existingRefs];

                            const newProductRef = cache.writeFragment({
                                data: data.addProduct,
                                fragment: gql`
                                    fragment NewProduct on Product {
                                        id
                                        title
                                        description
                                        price
                                        image
                                    }
                                `,
                            });

                            const alreadyExists = refsArray.some(
                                (ref) =>
                                    readField("id", ref) === data.addProduct.id
                            );

                            if (alreadyExists) {
                                return refsArray;
                            }

                            return [...refsArray, newProductRef];
                        },
                    },
                });
            },
            onCompleted: (data) => {
                dispatch(
                    updateProduct({
                        tempId: optimisticProduct.id,
                        actual: data.addProduct,
                    })
                );
            },
            onError: () => {
                dispatch(removeProduct(optimisticProduct.id));
            },
        });
    };

    return { addProduct, loading, error };
};
