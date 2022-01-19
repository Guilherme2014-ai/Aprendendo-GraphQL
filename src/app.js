import express from "express";
import { graphqlHTTP } from "express-graphql";
import schemaGraphQL from "./graphQL/schema";
const app = express();

app.use("/graphql", graphqlHTTP({
    schema: schemaGraphQL, // Todas as Queries e Mutations.
    graphiql: true // Interface Gráfica na Rota.
}));


export default app;