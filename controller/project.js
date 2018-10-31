module.exports = {
  list: async (ctx, next) => {
    const { app } = ctx;
    let params = ctx.request.query;
    let page = Number(params.page);
    let size = Number(params.size);
    let res = await app.service.project.list(size, page);
    ctx.response.body = res;
  },
  post: async (ctx, next) => {
    const { app } = ctx;
    let params = ctx.request.body;
    let res = await app.service.project.post({ ...params });
    ctx.response.body = res;
  },
  put: async (ctx, next) => {
    const { app } = ctx;
    let params = ctx.request.body;
    let id = ctx.params.id;
    let res = await app.service.project.put(id, { ...params });
    ctx.response.body = res;
  },
  delete: async (ctx, next) => {
    const { app } = ctx;
    let id = ctx.params.id;
    let res = await app.service.project.delete(id);
    ctx.response.body = res;
  }
};
