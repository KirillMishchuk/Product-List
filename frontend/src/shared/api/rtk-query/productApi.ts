// entities/product/api/productApi.ts
import type { ProductType } from "@entities/product";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4200/" }),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductType[], void>({
            query: () => "products", // GET /api/products
        }),
        getProductById: builder.query({
            query: (id: string) => `products/${id}`, // GET /api/products/:id
        }),
        createProduct: builder.mutation({
            query: (newProduct) => ({
                url: "products",
                method: "POST",
                body: newProduct,
            }),
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useCreateProductMutation,
} = productApi;
