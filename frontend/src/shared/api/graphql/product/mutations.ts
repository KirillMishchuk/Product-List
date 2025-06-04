import { gql } from "@apollo/client";

export const ADD_PRODUCT = gql`
    mutation AddProduct($input: ProductInput!) {
        addProduct(input: $input) {
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
