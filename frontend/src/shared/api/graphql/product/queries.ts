import { gql } from "@apollo/client";

export const COMMENT_FRAGMENT = gql`
    fragment CommentFragment on Comment {
        id
        content
    }
`;

export const GET_PRODUCTS = gql`
    query GetProducts {
        products {
            id
            title
            description
            price
            image
        }
    }
`;

export const GET_PRODUCT = gql`
    query GetProduct($id: ID) {
        product(id: $id) {
            id
            title
            description
            price
            image
            comments {
                ...CommentFragment
            }
        }
    }

    ${COMMENT_FRAGMENT}
`;
