import "./styles.scss";
import React from "react";

function Title(props) {
    return( 
        <div className="box-title">
            <div></div>
            <span>{props.title}</span>
            <div></div>
        </div>
    );
}
export default Title;
