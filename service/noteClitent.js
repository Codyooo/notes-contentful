/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-09 11:10:36
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-12 18:38:19
 */

import { createClient } from "contentful";
import { createClient as createManagementClient } from "contentful-management";

export const noteClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID.replace(/'/g, ""),
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN.replace(
    /'/g,
    ""
  ),
  //   host:'preview.contentful.com'
});

export const manageClient = createManagementClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_TOKEN.replace(
    /'/g,
    ""
  ),
});
