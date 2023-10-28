/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation createCategory($input: CreateCategoryInput!) {\n    createCategory(input: $input) {\n      ok\n      error\n      category {\n        id\n        name\n        parentCategoryId\n      }\n    }\n  }\n": types.CreateCategoryDocument,
    "\n  query me {\n    me {\n      ok\n      error\n      user {\n        id\n        username\n        email\n        createdAt\n        profile {\n          firstName\n          lastName\n          id\n        }\n      }\n    }\n  }\n": types.MeDocument,
    "\n  query my_login($loginInput: LoginInput!) {\n    login(input: $loginInput) {\n      ok\n      token\n      error\n    }\n  }\n": types.My_LoginDocument,
    "\n  mutation createAccount($createAccountInput: CreateAccountInput!) {\n    createAccount(input: $createAccountInput) {\n      ok\n      error\n    }\n  }\n": types.CreateAccountDocument,
    "\n  query getAllCategories {\n    getCategories {\n      ok\n      error\n      categories {\n        id\n        name\n        parentCategoryId\n      }\n    }\n  }\n": types.GetAllCategoriesDocument,
    "\n  query getAllTasksByCategory($input: GetTasksInput) {\n    getTasks(input: $input) {\n      ok\n      error\n      tasks {\n        id\n        content\n        title\n        due_to\n        completion_time\n        is_complete\n        is_deleted\n        is_favorite\n        category {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.GetAllTasksByCategoryDocument,
    "\n  query getOneTask($input: GetTaskInput!) {\n    getTask(input: $input) {\n      ok\n      error\n      task {\n        id\n        content\n        title\n        due_to\n        completion_time\n        is_complete\n        is_deleted\n        is_favorite\n        createdAt\n        updatedAt\n        category {\n          id\n          name\n        }\n        reward {\n          id\n          coins\n          experience\n          isReceived\n        }\n      }\n    }\n  }\n": types.GetOneTaskDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createCategory($input: CreateCategoryInput!) {\n    createCategory(input: $input) {\n      ok\n      error\n      category {\n        id\n        name\n        parentCategoryId\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createCategory($input: CreateCategoryInput!) {\n    createCategory(input: $input) {\n      ok\n      error\n      category {\n        id\n        name\n        parentCategoryId\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query me {\n    me {\n      ok\n      error\n      user {\n        id\n        username\n        email\n        createdAt\n        profile {\n          firstName\n          lastName\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query me {\n    me {\n      ok\n      error\n      user {\n        id\n        username\n        email\n        createdAt\n        profile {\n          firstName\n          lastName\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query my_login($loginInput: LoginInput!) {\n    login(input: $loginInput) {\n      ok\n      token\n      error\n    }\n  }\n"): (typeof documents)["\n  query my_login($loginInput: LoginInput!) {\n    login(input: $loginInput) {\n      ok\n      token\n      error\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createAccount($createAccountInput: CreateAccountInput!) {\n    createAccount(input: $createAccountInput) {\n      ok\n      error\n    }\n  }\n"): (typeof documents)["\n  mutation createAccount($createAccountInput: CreateAccountInput!) {\n    createAccount(input: $createAccountInput) {\n      ok\n      error\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAllCategories {\n    getCategories {\n      ok\n      error\n      categories {\n        id\n        name\n        parentCategoryId\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAllCategories {\n    getCategories {\n      ok\n      error\n      categories {\n        id\n        name\n        parentCategoryId\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAllTasksByCategory($input: GetTasksInput) {\n    getTasks(input: $input) {\n      ok\n      error\n      tasks {\n        id\n        content\n        title\n        due_to\n        completion_time\n        is_complete\n        is_deleted\n        is_favorite\n        category {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAllTasksByCategory($input: GetTasksInput) {\n    getTasks(input: $input) {\n      ok\n      error\n      tasks {\n        id\n        content\n        title\n        due_to\n        completion_time\n        is_complete\n        is_deleted\n        is_favorite\n        category {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getOneTask($input: GetTaskInput!) {\n    getTask(input: $input) {\n      ok\n      error\n      task {\n        id\n        content\n        title\n        due_to\n        completion_time\n        is_complete\n        is_deleted\n        is_favorite\n        createdAt\n        updatedAt\n        category {\n          id\n          name\n        }\n        reward {\n          id\n          coins\n          experience\n          isReceived\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getOneTask($input: GetTaskInput!) {\n    getTask(input: $input) {\n      ok\n      error\n      task {\n        id\n        content\n        title\n        due_to\n        completion_time\n        is_complete\n        is_deleted\n        is_favorite\n        createdAt\n        updatedAt\n        category {\n          id\n          name\n        }\n        reward {\n          id\n          coins\n          experience\n          isReceived\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;