import Title from "../Title";
import UIButton from "../UIButton";
import "./styles.scss";

function Contact() {
  return (
    <div className="container-contact">
      <div className="content-contact">
        <Title title="Contato" />
        <div className="content-contact_box">
          <div className="contact_box_info">
            <address className="info-data">
              <ul className="info-data_list">
                <li className="info-data_location">
                  <img src="/img/location.svg" alt="location-icon" /> Praia
                  Grande / SP
                </li>

                <li className="info-data_email">
                  <img src="/img/email.svg" alt="email-icon" />
                  <a href="mailto: arakaki2212@gmail.com">
                    arakaki2212@gmail.com
                  </a>
                </li>

                <li className="info-data_telephone">
                  <img src="/img/whatsapp.svg" alt="whatsapp-icon" />{" "}
                  <a href="tel:+13981431903"> &#40;13&#41; 98143-1903</a>
                </li>
              </ul>
            </address>
            <div className="info-link">
              <div className="info-link_icons">
                <a
                  href="https://www.linkedin.com/in/mayuri-arakaki-63ba4613a/"
                  target={"blank"}
                >
                  <img src="/img/linkedin.svg" alt="linkedin" />
                </a>
                <a href="https://github.com/Arakaki-code" target={"blank"}>
                  <img src="/img/github.svg" alt="github" />
                </a>
                <a href="https://codepen.io/arakaki-code" target={"blank"}>
                  <img src="/img/codepen.svg" alt="codepen" />
                </a>
              </div>
              <div className="info-link_qrcode">
                <img src="/img/qrcode.png" alt="Qr-code" />
              </div>
            </div>
          </div>
          <div className="contact_box_form">
            <span className="form-text-span">Envie uma mensagem</span>
            <div className="box_form form-name">
              <label id="name">Nome</label>
              <input type={"text"} id="name" placeholder="Nome"></input>
            </div>

            <div className="box_form form-email">
              <label id="email">email</label>
              <input type={"text"} id="email" placeholder="E-mail"></input>
            </div>
            <div className="box_form form-message">
              <label id="message">Mensagem</label>
              <textarea
                type={"textarea"}
                id="message"
                placeholder="Mensagem"
              ></textarea>
            </div>
            <UIButton component="button" type="submit">
              Enviar{" "}
            </UIButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
