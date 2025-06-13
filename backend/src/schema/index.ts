import { buildSchema } from "graphql";

import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";

export const schema = buildSchema(`
  type Product {
    id: ID!
    title: String!
    description: String!
    price: Float!
    image: String!
    comments: [Comment]
  }

  type Comment {
    id: ID!
    content: String!
  }

  input ProductInput {
    title: String!
    description: String!
    price: Float!
    image: String!
  }

  input CommentInput {
    productId: ID!
    content: String!
  }

  type Query {
    products: [Product!]!
    product(id: ID): Product
  }

  type Mutation {
    addProduct(input: ProductInput!): Product!
    addComment(input: CommentInput!): Product!
  }
`);
