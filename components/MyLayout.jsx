/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-09 10:41:01
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-14 20:49:49
 */

import Header from "./Header";
import css from "./Layout.less";

const Layout = (props) => (
  <div>
    <div className={css.content}>
      <Header />
      {props.children}
    </div>
  </div>
);

export default Layout;
