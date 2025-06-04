import { productSchema } from "@entities/product";
import { z } from "zod";

export const basketItemSchema = productSchema.extend({
    quantity: z.number().int().min(1),
});

export const basketArraySchema = z.array(basketItemSchema);

// Types
export type BasketItemType = z.infer<typeof basketItemSchema>;
