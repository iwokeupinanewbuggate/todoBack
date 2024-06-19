import listModel from "@/model/model";

export const getList = async  () => {
  try {
    const list = await listModel.find({});
    console.log(list);
    return list;
  } catch (err) {
    throw new Error("Failed to fetch");
  }
};
