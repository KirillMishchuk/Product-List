import z from "zod";

export const commentSchema = z.object({
    id: z.string(),
    content: z.string(),
});

export const commentInputSchema = z.object({
    productId: z.string(),
    content: z.string(),
});

export type Comment = z.infer<typeof commentSchema>;
export type CommentInput = z.infer<typeof commentInputSchema>;
