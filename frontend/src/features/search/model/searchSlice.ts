import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
    query: string;
    minPrice?: number;
    maxPrice?: number;
}

const initialState: SearchState = {
    query: "",
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setQuery(state, action: PayloadAction<string>) {
            state.query = action.payload;
        },
        setMinPrice(state, action: PayloadAction<number | undefined>) {
            state.minPrice = action.payload;
        },
        setMaxPrice(state, action: PayloadAction<number | undefined>) {
            state.maxPrice = action.payload;
        },
        resetFilters() {
            return initialState;
        },
    },
});

export const { setQuery, setMinPrice, setMaxPrice, resetFilters } =
    searchSlice.actions;
export const searchReducer = searchSlice.reducer;
