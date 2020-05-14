/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-09 10:30:31
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-14 17:45:08
 */
import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/new">
      <a style={linkStyle}>New</a>
    </Link>
  </div>
);

export default Header;
