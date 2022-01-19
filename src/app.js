import express from "express";
import graphql, { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { graphqlHTTP } from "express-graphql";
import database from "./database";
const app = express();

const userObjctType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLInt },
        userName: { type: GraphQLString },
        password: { type: GraphQLString },
    })
});

const queryHandler = new GraphQLObjectType({
    name: "queryHandler",
    fields: {
        getAllUsers: {
            type: new GraphQLList(userObjctType), // oque essa query retornara ?
            args: {
              id: { type: GraphQLInt },
              userName: { type: GraphQLString },
              password: { type: GraphQLString },
            },

            resolve(parent, args) {
                return database.FindAll(args);
            }
        }
    }
});
const mutationHandler = new GraphQLObjectType({
    name: "mutationHandler",
    fields: {
        userCreate: {
            type: userObjctType,
            args: {
                userName: { type: GraphQLString },
                password: { type: GraphQLString },
            },

            resolve(parents,args) {
                return database.Create(args);
            }
        }
    },

    resolve(parent, args) {
        return database.Create(args);
    }
});


const schema = new GraphQLSchema({
    query: queryHandler,
    mutation: mutationHandler
});

app.use("/graphql", graphqlHTTP({
    schema, // Todas as Query's e Mutations.
    graphiql: true // Interface Grafica na rota.
}));


export default app;