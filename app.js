const Koa = require("koa");
const app = new Koa();
const router = require("./router");
const middleware = require("./middleware");
const mongoose = require("mongoose");
// 连接数据库
mongoose.connect(
  "mongodb://localhost:27017/choucexcx",
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.error("Failed to connect to database");
    } else {
      console.log("Connecting database successfully");
    }
  }
);

middleware(app);
router(app);
app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
