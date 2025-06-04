import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "@shared/api/graphql/product/queries";

export const useProductFromApollo = (id: string) => {
    const { data, loading, error, refetch } = useQuery(GET_PRODUCT, {
        variables: { id },
        fetchPolicy: "cache-first",
    });

    return {
        data: data?.product,
        loading,
        error,
        refetch,
    };
};
