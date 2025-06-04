import { createAsyncThunk } from "@reduxjs/toolkit";
import { mockProducts } from "../data/mockProducts";
import { productArraySchema } from "./product";
import type { ProductType } from "./product";

export const fetchProducts = createAsyncThunk<ProductType[]>(
    "product/fetchAll",
    async () => {
        await new Promise((res) => setTimeout(res, 500));

        const result = productArraySchema.safeParse(mockProducts);

        if (!result.success) {
            throw new Error("Product data is invalid");
        }

        return result.data;
    }
);
