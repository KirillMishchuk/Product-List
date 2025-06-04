import { isProductFavorite, toggleFavorite } from "@features/favourites";
import type { ProductType } from "../model/product";
import { useAppDispatch, useAppSelector } from "@shared/lib/hooks";

type Props = {
    product: ProductType;
    children?: React.ReactNode;
};

export function ProductCard({ product, children }: Props) {
    const dispatch = useAppDispatch();
    const isFavorite = useAppSelector(isProductFavorite(product.id));

    return (
        <div className="relative rounded-xl shadow p-4 border flex flex-col gap-2 h-full">
            <img
                src={product.image}
                alt={""}
                className="rounded-lg flex h-30 object-cover"
            />
            <h2 className="font-semibold text-lg">{product.title}</h2>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="font-bold text-blue-600">
                ${product.price.toFixed(2)}
            </p>
            <button
                className="absolute top-2 right-2 text-red-500"
                onClick={(e) => {
                    e.preventDefault(); // prevent Link navigation
                    e.stopPropagation(); // prevent bubbling
                    dispatch(toggleFavorite(product.id));
                }}
                aria-label={
                    isFavorite ? "Remove from favorites" : "Add to favorites"
                }
                title={
                    isFavorite ? "Remove from favorites" : "Add to favorites"
                }
            >
                {isFavorite ? "❤️" : "🤍"}
            </button>
            {children}
        </div>
    );
}
