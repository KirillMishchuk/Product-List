import {
    addProduct,
    addProducts,
    ProductCard,
    type ProductType,
} from "@entities/product";
import { useAppDispatch, useAppSelector } from "@shared/lib/hooks";
import { addItem } from "@features/basket";
import { toBasketItem } from "@shared/lib/toBasketItem";
import { selectFilteredAndSortedProducts } from "./model/selector";
import { SearchBar } from "@features/search";
import { useEffect } from "react";
import { openModal } from "@features/uiModal";
import { Plus } from "lucide-react";
import { useProductsFromApollo } from "@entities/product/api/useProductsFromApollo";
import { Spinner } from "@shared/ui/Spinner";
import { FullScreenLoader } from "@shared/ui/FullScreenLoader";
import { Link } from "react-router-dom";
import { Button } from "@shared/ui";

export const ProductList = () => {
    const dispatch = useAppDispatch();

    const { data, loading, error, refetch } = useProductsFromApollo();

    const products = useAppSelector(selectFilteredAndSortedProducts);

    useEffect(() => {
        if (data?.products && !loading && !error) {
            console.log("update");

            dispatch(addProducts(data.products));
        }
    }, [data, dispatch]);

    if (loading) {
        return <FullScreenLoader />;
    }

    return (
        <div className="space-y-6 relative">
            <div className="sticky top-6 self-start h-fit bg-white z-40">
                <SearchBar>
                    <Button
                        onClick={() =>
                            dispatch(openModal({ type: "addProduct" }))
                        }
                        className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded"
                    >
                        Add Product
                    </Button>
                    <Button
                        onClick={() =>
                            dispatch(openModal({ type: "addProduct" }))
                        }
                        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
                    >
                        <Plus className="w-5 h-5" />
                    </Button>
                    <Button
                        onClick={() => refetch()}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded"
                    >
                        Refetch
                    </Button>
                </SearchBar>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {products.map((product) => (
                    <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="block"
                    >
                        <ProductCard product={product}>
                            <Button
                                onClick={(e) => {
                                    e.preventDefault(); // prevent Link navigation
                                    e.stopPropagation(); // prevent bubbling
                                    dispatch(addItem(toBasketItem(product)));
                                }}
                                className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded"
                            >
                                Add to Basket
                            </Button>
                        </ProductCard>
                    </Link>
                ))}
                {products.length === 0 && (
                    <p className="col-span-full text-center text-gray-500">
                        No products found.
                    </p>
                )}
            </div>
        </div>
    );
};
