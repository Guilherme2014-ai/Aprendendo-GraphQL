import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import database from "../../../database";
import userTypeGraphQL from "../../types/userTypeGraphQL";

export default new GraphQLObjectType({
    name: "queryHandler",
    fields: {
        getAllUsers: {
            type: new GraphQLList(userTypeGraphQL), // oque essa query retornara ?
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