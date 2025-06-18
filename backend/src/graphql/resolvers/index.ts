import { productInputSchema, Product } from "../modules/product/product.schema";
import { mockProducts } from "../modules/product/mockProducts";
import { commentInputSchema } from "../modules/comment/comment.schema";
import { v4 as uuidv4 } from "uuid";

let products: Product[] = [...mockProducts];

export const rootResolver = {
    products: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return products;
    },

    product: async ({ id }: { id: string }) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return products.find((product) => product.id === id);
    },

    addProduct: async ({ input }: { input: unknown }) => {
        const result = productInputSchema.safeParse(input);

        if (!result.success) {
            throw new Error(
                "Invalid product input: " +
                    JSON.stringify(result.error.format())
            );
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));

        const newProduct: Product = {
            id: uuidv4(),
            ...result.data,
            image: `https://yavuzceliker.github.io/sample-images/image-${
                products.length + 1
            }.jpg`,
        };

        products.push(newProduct);
        return newProduct;
    },

    addComment: ({ input }: { input: unknown }) => {
        const result = commentInputSchema.safeParse(input);

        if (!result.success) {
            throw new Error(
                "Invalid product input: " +
                    JSON.stringify(result.error.format())
            );
        }

        const { productId, content } = result.data;

        const targetProduct = products.find(
            (product) => product.id === productId
        );

        if (!targetProduct) {
            throw new Error("Cannot find product!!!");
        }

        const productComments = targetProduct.comments || [];

        targetProduct.comments = [
            ...productComments,
            { id: uuidv4(), content },
        ];

        return targetProduct;
    },
};
