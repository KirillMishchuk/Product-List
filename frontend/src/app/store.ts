import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "@features/basket";
import { productReducer } from "@entities/product";
import { favouritesReducer } from "@features/favourites";
import { searchReducer } from "@features/search";
import { sortingReducer } from "@features/sorting";
import { uiModalReducer } from "@features/uiModal";

export const store = configureStore({
    reducer: {
        product: productReducer,
        basket: basketReducer,
        favorites: favouritesReducer,
        productSearch: searchReducer,
        productSorting: sortingReducer,
        uiModal: uiModalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
