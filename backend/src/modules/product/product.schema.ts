import { z } from "zod";
import { commentSchema } from "../comment/comment.schema";

export const productSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    price: z.number(),
    image: z.string().url(),
    comments: z.array(commentSchema).optional(),
});

export const productArraySchema = z.array(productSchema);
export const productInputSchema = productSchema.omit({
    id: true,
    comments: true,
});

export type Product = z.infer<typeof productSchema>;
export type ProductInput = z.infer<typeof productInputSchema>;
