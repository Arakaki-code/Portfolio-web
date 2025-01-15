import "./styles.scss";
import React from "react";

function Toggle(props) {
  const {isOn} = props
  return (
    <div onClick={props.handleCheck} className={`toggle ${isOn ? 'start' : 'end'}`}>
     <div className="toggle-cicle">
        <img src={`${isOn ? '/img/moon-dark.svg' : '/img/sun-light.svg'}`} alt="mode-light-dark" />
     </div>
    </div>
  );
}

export default Toggle;
