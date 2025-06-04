import type { RootState } from "@app/store";

export const selectBasketItems = (state: RootState) => state.basket.items;

export const selectTotalItems = (state: RootState) =>
    state.basket.items.reduce((total, item) => total + item.quantity, 0);

export const selectTotalPrice = (state: RootState) =>
    state.basket.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
