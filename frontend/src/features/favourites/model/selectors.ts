import type { RootState } from "@app/store";

export const selectFavoriteIds = (state: RootState) =>
    state.favorites.productIds;

export const isProductFavorite = (id: string) => (state: RootState) =>
    state.favorites.productIds.includes(id);
