import { MutationEditTaskArgs } from "@/generated";
import listModel from "@/model/model";

export const editTask = async (_: any, input: MutationEditTaskArgs) => {
  const { title, description, workSection, id } = input.input;
  try {
    const body = await listModel.findByIdAndUpdate(id, {
      title: title,
      description: description,
      workSection: workSection,
    });
    return body;
  } catch (err) {
    throw new Error("Couldn't Uptade the task");
  }
};
