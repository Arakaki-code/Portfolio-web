import React from "react";

import "./styles.scss";

const UIButton = ({
  children,
  className,
  type,
  onClick,
  component: Component,
  ...restProps
}) => {
  return (
    <Component className={`button ${className}`} {...restProps}>
      {children}
    </Component>
  );
};

UIButton.defaultProps = {
  className: "",
  component: "button",
};

export default UIButton;
