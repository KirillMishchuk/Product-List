import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "./productThunks";
import { productArraySchema, productSchema, type ProductType } from "./product";

interface ProductState {
    items: ProductType[];
    status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: ProductState = {
    items: [],
    status: "idle",
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProducts(state, action: PayloadAction<ProductType[]>) {
            const parsed = productArraySchema.safeParse(action.payload);

            if (!parsed.success) {
                console.warn("Invalid products", parsed.error);
                return;
            }

            state.items = parsed.data;
            state.status = "succeeded";
        },
        addProduct(state, action: PayloadAction<ProductType>) {
            const parsed = productSchema.safeParse(action.payload);

            if (!parsed.success) {
                console.warn("Invalid product", parsed.error);
                return;
            }

            state.items.push(parsed.data);
        },
        updateProduct: (state, action) => {
            const index = state.items.findIndex(
                (p) => p.id === action.payload.tempId
            );
            if (index !== -1) {
                state.items[index] = action.payload.actual;
            }
        },
        removeProduct: (state, action) => {
            state.items = state.items.filter((p) => p.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = "succeeded";
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export const { addProducts, addProduct, updateProduct, removeProduct } =
    productSlice.actions;
export const productReducer = productSlice.reducer;
