import express from "express";
import { graphqlHTTP } from "express-graphql";
import schemaGraphQL from "./graphQL/schema";
const app = express();

app.use("/graphql", graphqlHTTP({
    schema: schemaGraphQL, // Todas as Query's e Mutations.
    graphiql: true // Interface Grafica na rota.
}));


export default app;