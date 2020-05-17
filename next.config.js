/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-09 16:07:46
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-15 15:08:37
 */
// next.config.js
const withLess = require("@zeit/next-less");
module.exports = withLess({
  cssModules: true,
  // lessLoaderOptions: {
  //   javascriptEnabled: true,
  // },
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     const antStyles = /antd\/.*?\/style.*?/;
  //     const origExternals = [...config.externals];
  //     config.externals = [
  //       (context, request, callback) => {
  //         if (request.match(antStyles)) return callback();
  //         if (typeof origExternals[0] === "function") {
  //           origExternals[0](context, request, callback);
  //         } else {
  //           callback();
  //         }
  //       },
  //       ...(typeof origExternals[0] === "function" ? [] : origExternals),
  //     ];

  //     config.module.rules.unshift({
  //       test: antStyles,
  //       use: "null-loader",
  //     });
  //   }
  //   return config;
  // },

  /* config options here */
});
