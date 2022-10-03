import "./styles.scss";
import React from "react";

function Title(props) {
  const {isDark, title} = props;
  return (
    <div className={["content-title", (isDark ? "dark" : "")].join(" ")}>
      <div></div>
      <span>{title}</span>
      <div></div>
    </div>
  );
}
export default Title;
