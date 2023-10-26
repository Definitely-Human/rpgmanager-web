import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  makeVar,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Category } from './__generated__/graphql.ts';
import { LOCAL_STORAGE_TOKEN } from './constants.ts';

const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

export const isLoggedInVar = makeVar(Boolean(token));
export const authTokenVar = makeVar(token);
export const selectedCategoryVar = makeVar<Category | null>(null);

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-jwt': authTokenVar() || '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
          selectedCategory: {
            read() {
              return selectedCategoryVar();
            },
          },
        },
      },
    },
  }),
});
