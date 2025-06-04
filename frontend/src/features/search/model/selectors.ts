import type { RootState } from "@app/store";

export const selectSearchQuery = (state: RootState) =>
    state.productSearch.query;
export const selectPriceRange = (state: RootState) => ({
    min: state.productSearch.minPrice,
    max: state.productSearch.maxPrice,
});
