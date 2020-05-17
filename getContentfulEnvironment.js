/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-15 15:41:20
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-15 15:48:02
 */
const contentfulManagement = require("contentful-management");

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: "CFPAT-eahVW5jIHjtYVK2V9BhJJ9b5thHZkngTDcmYpPjsLuw",
  });

  return contentfulClient
    .getSpace("ih3u2aja8x2o")
    .then((space) => space.getEnvironment("master"));
};
