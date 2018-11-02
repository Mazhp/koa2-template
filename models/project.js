const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  {
    collection: "project", // 这里是为了避免新建的表会带上 s 后缀
    versionKey: false // 不需要 __v 字段，默认是加上的
  }
);

module.exports = mongoose.model("project", projectSchema);
