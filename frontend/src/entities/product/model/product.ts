import z from "zod";

export const productSchema = z.object({
    id: z.string(),
    title: z.string().min(1, "Title is required"),
    description: z
        .string()
        .min(10, "Description must be at least 10 characters"),
    price: z.number().min(0.01, "Price must be greater than 0"),
    image: z.string().url("Must be a valid URL"),
});

export const productArraySchema = z.array(productSchema);
export const productInputSchema = productSchema.omit({ id: true });

export type ProductType = z.infer<typeof productSchema>;
