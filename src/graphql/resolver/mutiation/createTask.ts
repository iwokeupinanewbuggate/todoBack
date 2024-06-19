import { MutationCreateListArgs } from "@/generated";
import listModel from "@/model/model";

export const createList = async (_: any, input: MutationCreateListArgs) => {
  const { title, description, workSection } = input.input;
  try {
    const body = await listModel.create({ title, description, workSection });
    return body;
  } catch (err) {
    throw new Error("Couldn't post");
  }
};
