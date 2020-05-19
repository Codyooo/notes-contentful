/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-11 14:47:25
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-19 19:45:36
 */

import { manageClient, deliveryClient } from "./client";
import moment from "moment";
import {
  ICommentFields,
  IDocFields,
  ITagFields,
  IMovieFields,
} from "../@types/generated/contentful";

/**
 * 新增评论
 */
export const commentAddAsync = async (comment: string, postId: string) => {
  try {
    const space = await manageClient.getSpace("ih3u2aja8x2o");
    localStorage.setItem;
    const env = await space.getEnvironments();
    console.log("env", env);

    const entry = await space.createEntry("comment", {
      fields: {
        comment: {
          "en-US": comment,
        },

        commentDate: {
          "en-US": moment().toDate(),
        },

        postId: {
          "en-US": {
            sys: {
              type: "Link",
              linkType: "Entry",
              id: postId,
            },
          },
        },
      },
    });

    await entry.publish();
  } catch (error) {
    console.log("error", error);
  }
};

/**
 * 获取评论
 */
export const commentsGetAsync = async (postId: string) => {
  try {
    const res = await deliveryClient.getEntries<ICommentFields>({
      content_type: "comment",
      "fields.postId.en-US.sys.id": postId,
    });

    const comm = res.items.map(({ fields }) => ({
      comment: fields.comment,
      date: fields.commentDate,
      // postId: c.fields.postId.sys.id,
    }));
    return comm;
  } catch (error) {
    return [];
  }
};

/**
 * 根据id获取post
 *
 */
export const postGetByIdAsync = async (id: string) => {
  try {
    const { fields, sys } = await deliveryClient.getEntry<IDocFields>(id);
    return {
      title: fields.title,

      content: fields.content,
      cover: fields.cover.fields.file?.url,
      tags: fields.tags.map(({ fields, sys }) => ({
        tag: fields.tag,
        id: sys.id,
      })),
    };
  } catch (error) {
    return {};
  }
};

/**
 * 获取全部标签
 */
export const tagsGetAsync = async () => {
  try {
    const res = await deliveryClient.getEntries<ITagFields>({
      content_type: "tag",
    });

    const data = res.items.map(({ fields, sys }) => ({
      tag: fields.tag,
    }));

    return {
      tags: data,
    };
  } catch (error) {
    return {};
  }
};

/**
 * 获取全部posts
 */
export const postsGetAsync = async (page = 1, limit = 3) => {
  try {
    const res = await deliveryClient.getEntries<IDocFields>({
      content_type: "doc",
      select: `fields.title,fields.preview,sys.id,sys.updatedAt,fields.cover`,
      limit,
      skip: (page - 1) * limit,
      // "fields.title": "测试",
    });

    const data = res.items.map(({ fields, sys }) => ({
      title: fields.title,
      preview: fields.preview,
      cover: fields.cover,
      id: sys.id,
      date: sys.updatedAt,
    }));

    return {
      posts: data,
      total: res.total,
      skip: res.skip,
      limit: res.limit,
    };
  } catch (error) {
    return {};
  }
};

/**
 * 新增评论
 */
export const movieAddAsync = async (title: string, postId: string) => {
  try {
    const space = await manageClient.getSpace("ih3u2aja8x2o");
    space.createAsset({
      fields: {
        title: {
          "en-US": title,
        },
        file: {
          "en-US": {
            contentType: "image/jpeg",
            fileName: `${title}_${moment().toString()}.jpeg`,
          },
        },
        description: {},
      },
    });
    const entry = await space.createEntry("movie", {
      fields: {
        title: {
          "en-US": title,
        },

        commentDate: {
          "en-US": moment().toDate(),
        },

        postId: {
          "en-US": {
            sys: {
              type: "Link",
              linkType: "Entry",
              id: postId,
            },
          },
        },
      },
    });

    await entry.publish();
  } catch (error) {
    console.log("error", error);
  }
};

/** 获取全部电影 */
export const getMoivesAsync = async (query = "") => {
  try {
    const res = await deliveryClient.getEntries<IMovieFields>({
      content_type: "movie",
      "fields.title[match]": query,
    });

    return res.items.map(({ fields, sys }) => ({
      title: fields.title,
      cover: fields.cover.fields.file.url,
      actors: fields.actors,
      rating: fields.rating,
      desc: fields.desc,
      id: sys.id,
    }));
  } catch (error) {
    console.log("error", error);
    return [];
  }
};
