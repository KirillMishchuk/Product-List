import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type SortField = "title" | "price";
type SortOrder = "asc" | "desc";

interface SortingState {
    sortBy: SortField;
    order: SortOrder;
}

const initialState: SortingState = {
    sortBy: "title",
    order: "asc",
};

const sortingSlice = createSlice({
    name: "sorting",
    initialState,
    reducers: {
        setSortBy(state, action: PayloadAction<SortField>) {
            state.sortBy = action.payload;
        },
        setOrder(state, action: PayloadAction<SortOrder>) {
            state.order = action.payload;
        },
    },
});

export const { setSortBy, setOrder } = sortingSlice.actions;
export const sortingReducer = sortingSlice.reducer;
