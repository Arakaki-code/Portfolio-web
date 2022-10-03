import "./styles.scss";
import React from "react";

export function CardCertificate(props) {
  const { onClick, text, isDark } = props;

  return (
    <div className={["card-box", (isDark ? "dark" : "")].join(" ")} onClick={onClick} >
      <div className="card-box_content">
        <img src={isDark ? "./img/certificate-dark.svg" :"./img/certificate.svg"} alt='certificado'></img>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default CardCertificate;
