/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-09 10:41:01
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-11 14:37:48
 */

import Header from "./Header";

const layoutStyle = {};

const contentStyle = {
  margin: "0 auto",
  width: 700,
  // border: "1px solid #DDD",
  padding: "0 20px",
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <div style={contentStyle}>
      <Header />
      {props.children}
    </div>
  </div>
);

export default Layout;
