import type { ProductType } from "@entities/product";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
    productIds: ProductType["id"][];
}

const initialState: FavoritesState = {
    productIds: [],
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<ProductType["id"]>) {
            const id = action.payload;
            if (state.productIds.includes(id)) {
                state.productIds = state.productIds.filter((pid) => pid !== id);
            } else {
                state.productIds.push(id);
            }
        },
    },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
