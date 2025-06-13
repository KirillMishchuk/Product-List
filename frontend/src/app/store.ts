import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "@features/basket";
import { productReducer } from "@entities/product";
import { favouritesReducer } from "@features/favourites";
import { searchReducer } from "@features/search";
import { sortingReducer } from "@features/sorting";
import { uiModalReducer } from "@features/uiModal";
import { productApi } from "@shared/api/rtk-query/productApi";
import { requestTypeReducer } from "@features/request-type/model/requestTypeSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        basket: basketReducer,
        favorites: favouritesReducer,
        requestType: requestTypeReducer,
        productSearch: searchReducer,
        productSorting: sortingReducer,
        uiModal: uiModalReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
