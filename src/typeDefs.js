import { gql } from "apollo-server-express";

const typeDefs = gql`

    type Product {
        id: ID,
        name: String,
        price: String,
        description: String
    },

    input ProductInput{
        name:String,
        price:String,
        description:String
    },

    type Query {
        getAllProducts: [Product],
        getProduct(id: ID): Product,
    },
    
    type Mutation {
        createProduct(Product: ProductInput): Product
        deleteProduct(id: ID): Product,
        updateProduct(id: ID, Product: ProductInput): Product
    }

`;

export default typeDefs;
