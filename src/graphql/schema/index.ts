import gql from "graphql-tag";

export const typeDefs = gql`
  scalar Date

  type ListItem {
    _id: ID!
    title: String!
    description: String!
    workSection: String!
    status: Boolean!
    createdAt: Date!
  }

  input listInfo {
    title: String!
    description: String!
    workSection: String!
  }
  input editTaskInfo {
    id: ID!
    title: String
    description: String
    workSection: String
  }

  input ChangeStatus {
    status: Boolean
    TaskId: ID!
  }
  type Query {
    getList: [ListItem!]!
  }

  type Mutation {
    createList(input: listInfo!): ListItem!
    deleteTask(id: ID!): ListItem!
    editTask(input: editTaskInfo!): ListItem!
    uptadeStatus(input: ChangeStatus!): ListItem!
  }
`;
