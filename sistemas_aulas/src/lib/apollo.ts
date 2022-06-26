import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ue1g6i0vvs01t70mdw2m58/master',
  cache: new InMemoryCache()
})