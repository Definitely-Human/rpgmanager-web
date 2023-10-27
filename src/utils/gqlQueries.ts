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

export const ALL_TASKS_BY_CATEGORY = gql(/* GraphQL */ `
  query getAllTasksByCategory($input: GetTasksInput) {
    getTasks(input: $input) {
      ok
      error
      tasks {
        id
        content
        title
        due_to
        completion_time
        is_complete
        is_deleted
        is_favorite
        category {
          id
          name
        }
      }
    }
  }
`);
