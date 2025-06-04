import { gql } from "@apollo/client";

export const ADD_COMMENT_MUTATION = gql`
    mutation AddComment($input: CommentInput!) {
        addComment(input: $input) {
            id
            title
            description
            price
            image
            comments {
                id
                content
            }
        }
    }
`;
