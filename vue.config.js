/*
 * @Author: WaterFly
 * @Date: 2022-06-02 18:14:51
 * @Description:
 * Just enjoy code.
 */

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
