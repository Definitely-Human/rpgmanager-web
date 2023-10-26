/* eslint-disable import/prefer-default-export */
import { gql } from '../__generated__/index.ts';

export const ALL_CATEGORIES_QUERY = gql(/* GraphQL */ `
  query getAllCategories {
    getCategories {
      ok
      error
      categories {
        id
        name
        parentCategoryId
      }
    }
  }
`);
