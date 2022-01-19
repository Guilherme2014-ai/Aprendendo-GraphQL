import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

export default new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLInt },
        userName: { type: GraphQLString },
        password: { type: GraphQLString },
    })
});