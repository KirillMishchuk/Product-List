import type { RootState } from "@app/store";

export const selectAllProducts = (state: RootState) => state.product.items;
export const selectProductStatus = (state: RootState) => state.product.status;
