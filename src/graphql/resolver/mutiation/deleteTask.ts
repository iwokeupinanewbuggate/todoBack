import { MutationDeleteTaskArgs } from "@/generated";
import listModel from "@/model/model";

export const deleteTask = async (_: any, id: MutationDeleteTaskArgs) => {
  try {
    console.log(id);
    const deletedTask = await listModel.findByIdAndDelete(id.id);
    console.log(deletedTask);
    return deletedTask;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete or Task alreay deleted");
  }
};
