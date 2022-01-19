import query from "./queries";
import mutation from "./mutations";
import { GraphQLSchema } from "graphql";

export default new GraphQLSchema({ query, mutation });
