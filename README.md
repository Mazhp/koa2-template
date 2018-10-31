# koa2-template

在 [ikcamp 教程](https://github.com/ikcamp/koa2-tutorial) 代码的基础上增加了一个基于 mongo 的普通的增删改查的 koa2 的模板框架.

### 环境要求

node7.6+ 、 mongo

### 结构

├── controller // 控制器
├── errorPage // 错误页面
├── models // 数据模型，同数据库的表结构
├── middleware // 中间件
├── public // 静态资源文件
├── service // 数据库操作类
├── app.js // 启动项
├── router.js // router 控制器

### 运行步骤

1、clone 到本地代码

```
  git clone https://github.com/Mazhp/koa2-template
```

2、进入到项目目录

```
  cd koa2-template
```

3、 安装依赖

```
 npm install
```

4、 运行程序

```
  node app.js
```
