import React from "react";

import "./styles.scss";

const UIButton = ({
  children,
  className,
  type,
  onClick,
  component: Component,
  isDark,
  ...restProps
}) => {
  return (
    <Component className={[`button ${className}`, isDark ? "dark" : ""].join(" ")} {...restProps}>
      {children}
    </Component>
  );
};

UIButton.defaultProps = {
  className: "",
  component: "button",
};

export default UIButton;
