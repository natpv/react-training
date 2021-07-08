import React, { useContext } from "react";
import { ThemeContext } from "../context";
function Column(props) {
  const theme = useContext(ThemeContext);
  const color = theme === "light" ? "text-dark" : "text-white";
  const colSize = props.size || 12;
  const cls = "col-md-" + colSize + " " + color;
  return <div className={cls}>{props.children}</div>;
}
export default Column;
