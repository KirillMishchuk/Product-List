import type { ProductType } from "@entities/product";
import type { BasketItemType } from "@features/basket";

export function toBasketItem(product: ProductType): BasketItemType {
    return { ...product, quantity: 1 };
}
