import { useAppSelector } from "@shared/lib/hooks";
import {
    BasketItem,
    selectBasketItems,
    selectTotalItems,
    selectTotalPrice,
} from "@features/basket";

export const BasketView = () => {
    const items = useAppSelector(selectBasketItems);
    const total = useAppSelector(selectTotalItems);
    const totalPrice = useAppSelector(selectTotalPrice);

    return (
        <div className="p-4 border rounded-xl shadow bg-white space-y-4">
            <h2 className="text-xl font-semibold">🛒 Your Basket</h2>

            {items.length === 0 ? (
                <p className="text-gray-500">Your basket is empty.</p>
            ) : (
                <>
                    <div className="space-y-2">
                        {items.map((item) => (
                            <BasketItem key={item.id} item={item} />
                        ))}
                    </div>
                    <div className="text-right font-semibold text-blue-600">
                        Total Items: {total}
                    </div>
                    <div className="text-right font-semibold text-blue-600">
                        Total Price: ${totalPrice.toFixed(2)}
                    </div>
                </>
            )}
        </div>
    );
};
