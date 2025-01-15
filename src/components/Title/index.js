import "./styles.scss";
import React from "react";

function Title(props) {
  const {isDark, title} = props;
  return (
    <div className={["content-title", (isDark ? "dark" : "")].join(" ")}>
      <div className="divisor-title"></div>
      <span className="span-title">{title}</span>
      <div className="divisor-title"></div>
    </div>
  );
}
export default Title;
