import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';
import { LOCAL_STORAGE_TOKEN } from './constants.ts';

const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

export const isLoggedInVar = makeVar(Boolean(token));
export const authTokenVar = makeVar(token);

export const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            },
          },
          token: {
            read() {
              return authTokenVar();
            },
          },
        },
      },
    },
  }),
});
