import { MutationUptadeStatusArgs } from "@/generated";
import listModel from "@/model/model";

export const uptadeStatus = async (_: any, input: MutationUptadeStatusArgs) => {
  try {
    const body = await listModel.findByIdAndUpdate(input.input.TaskId, {
      status: input.input.status,
    });
    return body;
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't uptade");
  }
};
