[toc]

# VueComponentDemo

[Vue CLI](https://cli.vuejs.org/zh/)创建Vue组件示例



## 创建步骤

### 下载Vue CLI，并创建工程

```
// 1.瞎子啊 vue/cli
npm install -g @vue/cli
or
yarn global add @vue/cli

// 2.使用Vue CLI创建工程
vue create vue-component-demo

// 或使用图形化创建
vue ui
```

### 修改目录结构

* 修改`scr`目录为`examples`，用来做Demo
* 增加 `packages`目录，存放组件源码

### 创建`vue.config.js`

添加以下配置支持`packages`目录编译

```
module.exports = {
  // 修改src目录为examples目录
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  // 扩展webpack配置，使packages加入编译
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => options);
  },
  productionSourceMap: true,
};

```

### 在`packages`目录下编写组件

添加组件`HelloVueComponent.vue`和`index.js`，在`index.js`里实现`HelloVueComponent`的install方法

```javascript
import HelloVueComponent from "./HelloVueComponent.vue";

HelloVueComponent.install = function (Vue) {
  Vue.component(HelloVueComponent.name, HelloVueComponent);
};

export default HelloVueComponent;

```

### 增加打包命令

在`package.json`文件里增加组件打包命令`lib`

```javascript
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lib": "vue-cli-service build --target lib --name vue-component-demo --dest lib packages/index.js",
    "lint": "vue-cli-service lint"
  },
```



### 配置json文件参数

对`package.json`增加配置，增加以下字段：

* description，库作用描述
* keywords，关键字，用于搜索
* license，证书
* author，作者
* repository，仓库说明
* homepage，主页
* main，组件库的主入口地址

```javascript
// 示例
"description": "Vue组件Demo",
  "keywords": [
    "Vue",
    "组件",
    "Demo"
  ],
  "license": "ISC",
  "author": {
    "name": "waterFly",
    "email": "yiyeff@gmail.com"
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:waterfly/vue-component-demo.git"
  },
  "homepage": "https://github.com/waterfly/vue-component-demo",
  "main": "lib/vue-component-demo.umd.min.js",
```

注：详见[package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#homepage)文件字段解释

### 增加`.npmignore`文件

`.npmignore`用于过滤不需要发布的文件或文件夹。

```
doc/
examples/
packages/
public/
babel.config.js
vue.config.js
```

过滤文件有三种方式：

1. 设置`.gitignore`文件，在`git`和`npm publish`都会被过滤
2. 设置`.npmignore`文件，在`npm publish`会被过滤
3. 设置`package.json`文件的`files`字段，用来设置发布那些文件或目录

优先级： `files` > `.npmignore` > `.gitignore`



### 发布

```shell
// 1. 编译
yarn lib

// 2. 登录
yarn login

// 3. 发布
yarn publish

```



## 附录

* [Vue CLI](https://cli.vuejs.org/zh/)
* [package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#homepage)
* [从零到一教你基于vue开发一个组件库](https://juejin.cn/post/6844904085808742407)

