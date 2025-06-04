// features/comments/hooks/useAddComment.ts
import { useMutation } from "@apollo/client";
import { ADD_COMMENT_MUTATION } from "@shared/api/graphql/comment/mutations";
import { GET_PRODUCTS } from "@shared/api/graphql/product/queries";

export const useAddComment = () => {
    const [addComment, { data, loading, error }] = useMutation(
        ADD_COMMENT_MUTATION
        // {
        //     refetchQueries: [{ query: GET_PRODUCTS }],
        // }
    );

    const submitComment = async (input: any) => {
        try {
            const response = await addComment({
                variables: { input },
            });
            return response.data.addComment;
        } catch (err) {
            console.error("Error adding comment:", err);
            throw err;
        }
    };

    return {
        addComment: submitComment,
        loading,
        error,
        data,
    };
};
