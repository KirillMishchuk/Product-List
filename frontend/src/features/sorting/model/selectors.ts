import type { RootState } from "@app/store";

export const selectSortBy = (state: RootState) => state.productSorting.sortBy;
export const selectOrder = (state: RootState) => state.productSorting.order;
