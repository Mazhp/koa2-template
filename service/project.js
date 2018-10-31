const Project_col = require("../models/project");
module.exports = {
  list: async function(size, page) {
    const projects = await Project_col.find({})
      .skip((page - 1) * size)
      .limit(size)
      .sort({ _id: -1 });
    const totalCount = await Project_col.count();
    let data;
    data = {
      code: 0,
      data: {
        list: { ...projects },
        totalCount: totalCount
      }
    };
    return data;
  },
  post: async function(params) {
    return Project_col.create({ ...params })
      .then(graph => {
        return { code: 0, message: "保存成功", _id: graph._id };
      })
      .catch(err => {
        return { code: 1, err };
      });
  },
  put: async function(id, params) {
    return Project_col.findOneAndUpdate({ _id: id }, { ...params })
      .then(graph => {
        return { code: 0, message: "保存成功", _id: graph._id };
      })
      .catch(err => {
        return { code: 1, err };
      });
  },
  delete: async function(id) {
    return Project_col.deleteOne({ _id: id })
      .then(() => {
        return { code: 0, message: "删除成功" };
      })
      .catch(err => {
        return { code: 1, err };
      });
  }
};
