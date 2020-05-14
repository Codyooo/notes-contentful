/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-11 19:59:10
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-12 20:06:11
 */
// /**
//  * @file: description
//  * @author: hufan
//  * @Date: 2020-05-11 19:59:10
//  * @LastEditors: hufan
//  * @LastEditTime: 2020-05-11 20:14:17
//  */
// import {
//   commentAddAsync,
//   commentsGetAsync,
//   postsGetAsync,
// } from "../service/index";
// import { runInAction, decorate, observable } from "mobx";

// class PostStore {
//   @observable posts = [];
//   @observable status = "";

//   async getPosts() {
//     try {
//       const data = await postsGetAsync();
//       runInAction(() => (this.posts = data));
//     } catch (error) {
//       runInAction(() => (this.status = "error"));
//     }
//   }

//   async addPost(post) {
//     this.posts.push(post);
//   }
// }

// decorate(PostStore, {
//   status: observable,
//   posts: observable,
// });

// export default new PostStore();
