import { fetchProducts, selectProductStatus } from "@entities/product";
import { useAppDispatch, useAppSelector } from "@shared/lib/hooks";
import { BasketView } from "@widgets/cart/BasketView";
import { ProductList } from "@widgets/catalog/ProductList";
import { useEffect } from "react";

export default function HomePage() {
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectProductStatus);

    useEffect(() => {
        // if (status === "idle") dispatch(fetchProducts());
    }, [dispatch, status]);

    return (
        <main className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">🛍 Product Store</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <ProductList />
                </div>
                <div className="sticky top-6 self-start h-fit">
                    <BasketView />
                </div>
            </div>
        </main>
    );
}
