import express from "express";

import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolver.js";

import connectDB from "./db.js";

const app = express();
connectDB();

async function start() {

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({app})

    app.get('/', (req, res) => {
        res.send('Welcome to my GraphQL server');
    });

    app.use('*', (req, res) => {
        res.status(404).send('Endpoint not found');
    });

    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });

}

export default app;

start();
