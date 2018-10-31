const router = require("koa-router")();

module.exports = app => {
  const { project } = app.controller;
  router.get("/project/list", project.list);
  router.post("/project", project.post);
  router.put("/project/:id", project.put);
  router.delete("/project/:id", project.delete);

  app.use(router.routes()).use(router.allowedMethods());
};
