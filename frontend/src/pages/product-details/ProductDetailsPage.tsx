import { useProductFromApollo } from "@entities/product/api/useProductFromApollo";
import { addItem } from "@features/basket";
import { useAppDispatch } from "@shared/lib/hooks";
import { toBasketItem } from "@shared/lib/toBasketItem";
import { FullScreenLoader } from "@shared/ui/FullScreenLoader";
import { ProductDetailsCard } from "@widgets/product-details";
import { useParams } from "react-router-dom";

export default function ProductDetailsPage() {
    const { productId } = useParams<{ productId: string }>();
    const dispatch = useAppDispatch();

    const {
        data: product,
        loading,
        error,
        refetch,
    } = useProductFromApollo(productId!);

    if (loading) {
        return <FullScreenLoader />;
    }

    return (
        <div className="p-6">
            <div className="flex justify-center mt-10 px-4">
                <ProductDetailsCard
                    product={product}
                    onAddToBasket={() =>
                        dispatch(addItem(toBasketItem(product)))
                    }
                />
            </div>
        </div>
    );
}
