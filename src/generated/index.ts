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
  Date: { input: any; output: any; }
};

export type ChangeStatus = {
  TaskId: Scalars['ID']['input'];
  status?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ListItem = {
  __typename?: 'ListItem';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  workSection: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createList: ListItem;
  deleteTask: ListItem;
  editTask: ListItem;
  uptadeStatus: ListItem;
};


export type MutationCreateListArgs = {
  input: ListInfo;
};


export type MutationDeleteTaskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEditTaskArgs = {
  input: EditTaskInfo;
};


export type MutationUptadeStatusArgs = {
  input: ChangeStatus;
};

export type Query = {
  __typename?: 'Query';
  getList: Array<ListItem>;
};

export type EditTaskInfo = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  workSection?: InputMaybe<Scalars['String']['input']>;
};

export type ListInfo = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
  workSection: Scalars['String']['input'];
};


