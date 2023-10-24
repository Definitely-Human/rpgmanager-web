/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  lists: Array<List>;
  name: Scalars['String']['output'];
  parentCategory?: Maybe<Category>;
  parentCategoryId?: Maybe<Scalars['Int']['output']>;
  tasks: Array<Task>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type Character = {
  __typename?: 'Character';
  coins: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  experience: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  lists: Array<List>;
  name: Scalars['String']['output'];
  rewards: Array<Reward>;
  tasks: Array<Task>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type CreateAccountInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateAccountOutput = {
  __typename?: 'CreateAccountOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type CreateCategoryInput = {
  name: Scalars['String']['input'];
  parentCategoryId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateCategoryOutput = {
  __typename?: 'CreateCategoryOutput';
  category?: Maybe<Category>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateCharacterInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCharacterOutput = {
  __typename?: 'CreateCharacterOutput';
  character?: Maybe<Character>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateListInput = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  is_favorite: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type CreateListItemInput = {
  listId: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type CreateListItemOutput = {
  __typename?: 'CreateListItemOutput';
  error?: Maybe<Scalars['String']['output']>;
  listItem?: Maybe<ListItem>;
  ok: Scalars['Boolean']['output'];
};

export type CreateListOutput = {
  __typename?: 'CreateListOutput';
  error?: Maybe<Scalars['String']['output']>;
  list?: Maybe<List>;
  ok: Scalars['Boolean']['output'];
};

export type CreateRewardInput = {
  coins: Scalars['Int']['input'];
  experience: Scalars['Int']['input'];
};

export type CreateRewardOutput = {
  __typename?: 'CreateRewardOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  reward?: Maybe<Reward>;
};

export type CreateTaskInput = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  due_to: Scalars['DateTime']['input'];
  is_favorite: Scalars['Boolean']['input'];
  rewardId?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type CreateTaskOutput = {
  __typename?: 'CreateTaskOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  task?: Maybe<Task>;
};

export type DeleteCategoryInput = {
  categoryId: Scalars['Int']['input'];
};

export type DeleteCategoryOutput = {
  __typename?: 'DeleteCategoryOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteCharacterInput = {
  name: Scalars['String']['input'];
};

export type DeleteCharacterOutput = {
  __typename?: 'DeleteCharacterOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteListInput = {
  listId: Scalars['Int']['input'];
};

export type DeleteListItemInput = {
  listItemId: Scalars['Int']['input'];
};

export type DeleteListItemOutput = {
  __typename?: 'DeleteListItemOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteListOutput = {
  __typename?: 'DeleteListOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteRewardInput = {
  rewardId: Scalars['Int']['input'];
};

export type DeleteRewardOutput = {
  __typename?: 'DeleteRewardOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteTaskInput = {
  taskId: Scalars['Int']['input'];
};

export type DeleteTaskOutput = {
  __typename?: 'DeleteTaskOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditCategoryInput = {
  categoryId: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  parentCategoryId?: InputMaybe<Scalars['Int']['input']>;
};

export type EditCategoryOutput = {
  __typename?: 'EditCategoryOutput';
  category?: Maybe<Category>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditCharacterInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EditCharacterOutput = {
  __typename?: 'EditCharacterOutput';
  character?: Maybe<Character>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditListInput = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  listId: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EditListItemInput = {
  is_complete?: InputMaybe<Scalars['Boolean']['input']>;
  listId?: InputMaybe<Scalars['Int']['input']>;
  listItemId: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EditListItemOutput = {
  __typename?: 'EditListItemOutput';
  error?: Maybe<Scalars['String']['output']>;
  listItem?: Maybe<ListItem>;
  ok: Scalars['Boolean']['output'];
};

export type EditListOutput = {
  __typename?: 'EditListOutput';
  error?: Maybe<Scalars['String']['output']>;
  list?: Maybe<List>;
  ok: Scalars['Boolean']['output'];
};

export type EditProfileInput = {
  aboutMe?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type EditProfileOutput = {
  __typename?: 'EditProfileOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  profile?: Maybe<Profile>;
};

export type EditRewardInput = {
  coins?: InputMaybe<Scalars['Int']['input']>;
  experience?: InputMaybe<Scalars['Int']['input']>;
  rewardId: Scalars['Int']['input'];
};

export type EditRewardOutput = {
  __typename?: 'EditRewardOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  reward?: Maybe<Reward>;
};

export type EditTaskInput = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  due_to?: InputMaybe<Scalars['DateTime']['input']>;
  is_complete?: InputMaybe<Scalars['Boolean']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  rewardId?: InputMaybe<Scalars['Int']['input']>;
  taskId: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EditTaskOutput = {
  __typename?: 'EditTaskOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  task?: Maybe<Task>;
};

export type EditUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type EditUserOutput = {
  __typename?: 'EditUserOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type GetCategoriesOutput = {
  __typename?: 'GetCategoriesOutput';
  categories?: Maybe<Array<Category>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type GetCategoryInput = {
  categoryId: Scalars['Int']['input'];
};

export type GetCategoryOutput = {
  __typename?: 'GetCategoryOutput';
  category?: Maybe<Category>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type GetCharacterInput = {
  characterId: Scalars['Int']['input'];
};

export type GetCharacterOutput = {
  __typename?: 'GetCharacterOutput';
  character?: Maybe<Character>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type GetListInput = {
  listId: Scalars['Int']['input'];
};

export type GetListOutput = {
  __typename?: 'GetListOutput';
  error?: Maybe<Scalars['String']['output']>;
  list?: Maybe<List>;
  ok: Scalars['Boolean']['output'];
};

export type GetListsOutput = {
  __typename?: 'GetListsOutput';
  error?: Maybe<Scalars['String']['output']>;
  lists?: Maybe<Array<List>>;
  ok: Scalars['Boolean']['output'];
};

export type GetProfileInput = {
  profileId: Scalars['Float']['input'];
};

export type GetProfileOutput = {
  __typename?: 'GetProfileOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  profile?: Maybe<Profile>;
};

export type GetRewardInput = {
  rewardId: Scalars['Int']['input'];
};

export type GetRewardOutput = {
  __typename?: 'GetRewardOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  reward?: Maybe<Reward>;
};

export type GetRewardsInput = {
  isReceived?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GetRewardsOutput = {
  __typename?: 'GetRewardsOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  rewards?: Maybe<Array<Reward>>;
};

export type GetTaskInput = {
  taskId: Scalars['Int']['input'];
};

export type GetTaskOutput = {
  __typename?: 'GetTaskOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  task?: Maybe<Task>;
};

export type GetTasksOutput = {
  __typename?: 'GetTasksOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  tasks?: Maybe<Array<Task>>;
};

export type GetUserInput = {
  userId: Scalars['Float']['input'];
};

export type GetUserOutput = {
  __typename?: 'GetUserOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  user?: Maybe<PublicUserOutput>;
};

export type List = {
  __typename?: 'List';
  category?: Maybe<Category>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  is_deleted: Scalars['Boolean']['output'];
  is_favorite: Scalars['Boolean']['output'];
  listItems?: Maybe<Array<ListItem>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ListItem = {
  __typename?: 'ListItem';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  is_complete: Scalars['Boolean']['output'];
  list?: Maybe<List>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type LoginInput = {
  password: Scalars['String']['input'];
  usernameOrEmail: Scalars['String']['input'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type MeOutput = {
  __typename?: 'MeOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: CreateAccountOutput;
  createCategory: CreateCategoryOutput;
  createCharacter: CreateCharacterOutput;
  createList: CreateListOutput;
  createListItem: CreateListItemOutput;
  createReward: CreateRewardOutput;
  createTask: CreateTaskOutput;
  deleteCategory: DeleteCategoryOutput;
  deleteCharacter: DeleteCharacterOutput;
  deleteList: DeleteListOutput;
  deleteListItem: DeleteListItemOutput;
  deleteReward: DeleteRewardOutput;
  deleteTask: DeleteTaskOutput;
  editCategory: EditCategoryOutput;
  editCharacter: EditCharacterOutput;
  editList: EditListOutput;
  editListItem: EditListItemOutput;
  editProfile: EditProfileOutput;
  editReward: EditRewardOutput;
  editTask: EditTaskOutput;
  editUser: EditUserOutput;
  verifyEmail: VerifyEmailOutput;
};


export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationCreateCharacterArgs = {
  input: CreateCharacterInput;
};


export type MutationCreateListArgs = {
  input: CreateListInput;
};


export type MutationCreateListItemArgs = {
  input: CreateListItemInput;
};


export type MutationCreateRewardArgs = {
  input: CreateRewardInput;
};


export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};


export type MutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};


export type MutationDeleteCharacterArgs = {
  input: DeleteCharacterInput;
};


export type MutationDeleteListArgs = {
  input: DeleteListInput;
};


export type MutationDeleteListItemArgs = {
  input: DeleteListItemInput;
};


export type MutationDeleteRewardArgs = {
  input: DeleteRewardInput;
};


export type MutationDeleteTaskArgs = {
  input: DeleteTaskInput;
};


export type MutationEditCategoryArgs = {
  input: EditCategoryInput;
};


export type MutationEditCharacterArgs = {
  input: EditCharacterInput;
};


export type MutationEditListArgs = {
  input: EditListInput;
};


export type MutationEditListItemArgs = {
  input: EditListItemInput;
};


export type MutationEditProfileArgs = {
  input: EditProfileInput;
};


export type MutationEditRewardArgs = {
  input: EditRewardInput;
};


export type MutationEditTaskArgs = {
  input: EditTaskInput;
};


export type MutationEditUserArgs = {
  input: EditUserInput;
};


export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};

export type Profile = {
  __typename?: 'Profile';
  aboutMe?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isOnline: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: Scalars['Float']['output'];
};

export type PublicUserOutput = {
  __typename?: 'PublicUserOutput';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  lastLoginDate?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getCategories: GetCategoriesOutput;
  getCategory: GetCategoryOutput;
  getCharacter: GetCharacterOutput;
  getList: GetListOutput;
  getLists: GetListsOutput;
  getProfile: GetProfileOutput;
  getReward: GetRewardOutput;
  getRewards: GetRewardsOutput;
  getTask: GetTaskOutput;
  getTasks: GetTasksOutput;
  getUser: GetUserOutput;
  login: LoginOutput;
  me: MeOutput;
};


export type QueryGetCategoryArgs = {
  input: GetCategoryInput;
};


export type QueryGetCharacterArgs = {
  input: GetCharacterInput;
};


export type QueryGetListArgs = {
  input: GetListInput;
};


export type QueryGetProfileArgs = {
  input: GetProfileInput;
};


export type QueryGetRewardArgs = {
  input: GetRewardInput;
};


export type QueryGetRewardsArgs = {
  input: GetRewardsInput;
};


export type QueryGetTaskArgs = {
  input: GetTaskInput;
};


export type QueryGetUserArgs = {
  input: GetUserInput;
};


export type QueryLoginArgs = {
  input: LoginInput;
};

export type Reward = {
  __typename?: 'Reward';
  coins: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  experience: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isReceived: Scalars['Boolean']['output'];
  tasks: Array<Task>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Task = {
  __typename?: 'Task';
  category?: Maybe<Category>;
  completion_time?: Maybe<Scalars['DateTime']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  due_to: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  is_complete: Scalars['Boolean']['output'];
  is_deleted: Scalars['Boolean']['output'];
  is_favorite: Scalars['Boolean']['output'];
  reward?: Maybe<Reward>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type User = {
  __typename?: 'User';
  categories: Array<Category>;
  character?: Maybe<Character>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isActive: Scalars['Boolean']['output'];
  isStuff: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  lastLoginDate: Scalars['DateTime']['output'];
  password: Scalars['String']['output'];
  profile: Profile;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type VerifyEmailInput = {
  code: Scalars['String']['input'];
};

export type VerifyEmailOutput = {
  __typename?: 'VerifyEmailOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateAccountMutationVariables = Exact<{
  createAccountInput: CreateAccountInput;
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount: { __typename?: 'CreateAccountOutput', ok: boolean, error?: string | null } };


export const CreateAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createAccountInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createAccountInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<CreateAccountMutation, CreateAccountMutationVariables>;