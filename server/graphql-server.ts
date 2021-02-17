import { ApolloServer, AuthenticationError } from "apollo-server-micro";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
import '../src/configureAmplify';

import { withSSRContext } from "aws-amplify";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      getAuth: async () => {
        console.log("getAuth called");
        const Auth = withSSRContext({ req }).Auth;
        return Auth.currentAuthenticatedUser().catch(err => {
          return Promise.reject(new AuthenticationError('must authenticate'))
        });
      }
    };
  },
});

export default apolloServer;
