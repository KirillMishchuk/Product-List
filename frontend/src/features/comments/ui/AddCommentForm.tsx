import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@shared/ui";
import { Textarea } from "@shared/ui/textarea";

import z from "zod";
import { useAddComment } from "../model/useAddComment";

export const commentSchema = z.object({
    id: z.string(),
    content: z.string().min(10, "Comment must be at least 10 characters"),
});

export const commentInputSchema = commentSchema.omit({ id: true });

export type commentSchemaType = z.infer<typeof commentSchema>;

type addCommentFormData = z.infer<typeof commentInputSchema>;

type Props = {
    productId: string;
    onSuccess: () => void;
};

export const AddCommentForm = ({ productId, onSuccess }: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<addCommentFormData>({
        resolver: zodResolver(commentInputSchema),
    });

    const { addComment, loading, error, data } = useAddComment();

    const onSubmit = (formData: addCommentFormData) => {
        console.log("productId", productId, formData);

        addComment({ ...formData, productId }); // ← optimistic mutation
        reset(); // ← clear form right away
        onSuccess(); // ← close modal right away
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Textarea {...register("content")} className="mb-4" />
            {errors.content && (
                <p className="text-red-500 text-sm">
                    {errors.content?.message}
                </p>
            )}
            <div className="flex justify-end">
                <Button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </Button>
            </div>
        </form>
    );
};
