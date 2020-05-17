/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-12 16:23:01
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-14 14:08:27
 */
import React, { PureComponent, useState } from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import "./index.less";
import {
  agate,
  darcula,
  androidstudio,
  arduinoLight,
  ascetic,
  atelierCaveDark,
  atelierDuneDark,
  atelierEstuaryLight,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeBlock = ({ value, language = null }) => {
  // const [theme, setTheme] = useState(() => agate);
  return (
    <div>
      <div>
        {/* <InputLabel id="code-theme">主题</InputLabel> */}
        {/* <Select
          labelId="code-theme"
          id="demo-simple-select"
          value={""}
          onChange={() => setTheme()}
        >
          {Object.keys(Theme).map((theme) => (
            <MenuItem value={"androidstudio"}>androidstudio</MenuItem>
          ))}
        </Select> */}
      </div>
      <SyntaxHighlighter language={language} style={darcula}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
