import { gql, useQuery } from '@apollo/client';
import { MeQuery } from '../__generated__/graphql.tsx';

const ME_QUERY = gql(/* GraphQL */ `
  query me {
    me {
      ok
      error
      user {
        id
        username
        email
        createdAt
        profile {
          firstName
          lastName
          id
        }
      }
    }
  }
`);

const useMe = () => {
  return useQuery<MeQuery>(ME_QUERY);
};

export default useMe;
