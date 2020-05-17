/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-15 11:15:43
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-15 14:59:42
 */
import { AppProps } from "next/app";
import "../styles/global.less";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
