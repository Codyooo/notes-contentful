/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-15 15:33:56
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-15 15:37:22
 */
import { manageClient, noteClient } from "./noteClitent";

export const getContentModels = async () => {
  const res = await noteClient.getContentTypes();
  console.log("res", res);
};

// getContentModels();
