import { GraphQLObjectType, GraphQLString } from "graphql";
import database from "../../../database";
import userTypeGraphQL from "../../types/userTypeGraphQL";

export default new GraphQLObjectType({
    name: "mutationHandler",
    fields: {
        userCreate: {
            type: userTypeGraphQL,
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