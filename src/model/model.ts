import mongoose from "mongoose";

const list = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  workSection: String,
  status: {
    type: Boolean,
    default: false,
  },
  createdAt: { type: Date, default: Date.now },
});

const listModel = mongoose.models.list || mongoose.model("list", list);

export default listModel;
