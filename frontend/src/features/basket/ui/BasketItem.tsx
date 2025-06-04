import type { BasketItemType } from "../model/basket";
import { useAppDispatch } from "@shared/lib/hooks";
import { removeItem } from "../model/basketSlice";

type Props = {
    item: BasketItemType;
};

export const BasketItem = ({ item }: Props) => {
    const dispatch = useAppDispatch();

    return (
        <div className="flex justify-between items-center border-b py-2">
            <div>
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-gray-600">
                    ${item.price.toFixed(2)}
                </div>
            </div>
            <button
                className="text-red-500 hover:underline text-sm"
                onClick={() => dispatch(removeItem(item.id))}
            >
                Remove
            </button>
        </div>
    );
};
