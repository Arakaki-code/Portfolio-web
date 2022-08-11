import "./styles.scss";
import React from "react";

export function CardCertificate(props) {
  const { img, onClick, text } = props;

  return (
    <div className="card-box" onClick={onClick} >
      <div className="card-box_content">
        <img src={img}></img>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default CardCertificate;
