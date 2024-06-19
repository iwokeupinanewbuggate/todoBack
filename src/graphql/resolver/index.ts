import { createList, deleteTask, editTask, uptadeStatus } from "./mutiation";
import { getList } from "./query";

export const resolvers = {
  Query: {
    getList,
  },
  Mutation: {
    createList,
    deleteTask,
    editTask,
    uptadeStatus,
  },
};
