import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { BasketItemType } from "./basket";
import { basketItemSchema } from "./basket";

interface BasketState {
    items: BasketItemType[];
}

const initialState: BasketState = { items: [] };

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<BasketItemType>) {
            const parsed = basketItemSchema.safeParse(action.payload);
            if (!parsed.success) {
                console.warn("Invalid basket item", parsed.error);
                return;
            }

            const existing = state.items.find((i) => i.id === parsed.data.id);
            if (existing) {
                existing.quantity += parsed.data.quantity;
            } else {
                state.items.push(parsed.data);
            }
        },
        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter((i) => i.id !== action.payload);
        },
        decrementItem(state, action: PayloadAction<string>) {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.items = state.items.filter(
                    (i) => i.id !== action.payload
                );
            }
        },
        clearBasket(state) {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, decrementItem, clearBasket } =
    basketSlice.actions;
export default basketSlice.reducer;
