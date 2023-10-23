import { ApolloClient, InMemoryCache } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});
