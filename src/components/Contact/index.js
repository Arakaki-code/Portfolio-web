import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

import Title from "../Title";
import UIButton from "../UIButton";
import "./styles.scss";

const schema = yup
  .object({
    name: yup.string().required("Campo nome é obrigatório"),
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("Campo email é obrigatório"),
    message: yup.string().required("Campo mensagem é obrigatório"),
  })
  .required();

function Contact(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const { isDark } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onEvent(userData) {
    console.log(userData);

    const templateParams = {
      from_name: userData.name,
      message: userData.message,
      email: userData.email,
    };

    emailjs
      .send(
        "service_bauwd1v",
        "template_r78zmok",
        templateParams,
        "f7XYpzmM8ddXviCoT"
      )
      .then(
        (response) => {
          setModalVisible(true);
          console.log("email enviado: ", response.status, response.text);
          const modal = document.querySelector(".modal");

          setTimeout(() => {
            setModalVisible(false);
            modal.classList.add("hide");

            setTimeout(() => {
              modal.classList.remove("hide");
            }, 2000);
          }, 5000);
        },
        (err) => {
          console.log("error: ", err);
        }
      );
  }

  return (
    <div
      className={["container-contact", isDark ? "dark" : ""].join(" ")}
      id="contact"
      style={
        isDark ? { backgroundColor: "#382B49" } : { backgroundColor: "#ffdde6" }
      }
    >
      <div className="content-contact">
        <Title title="Contato" />
        <div className="content-contact_box">
          <div className="contact_box_info">
            <address className="info-data">
              <ul className="info-data_list">
                <li className="info-data_location">
                  <img
                    src={
                      isDark ? "/img/location-dark.svg" : "/img/location.svg"
                    }
                    alt="location-icon"
                  />{" "}
                  Praia Grande / SP
                </li>

                <li className="info-data_email">
                  <img
                    src={isDark ? "/img/email-dark.svg" : "/img/email.svg"}
                    alt="email-icon"
                  />
                  <a href="mailto: arakaki2212@gmail.com">
                    arakaki2212@gmail.com
                  </a>
                </li>

                <li className="info-data_telephone">
                  <img
                    src={
                      isDark ? "/img/whatsapp-dark.svg" : "/img/whatsapp.svg"
                    }
                    alt="whatsapp-icon"
                  />{" "}
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
                  <img
                    src={
                      isDark ? "/img/linkedin-dark.svg" : "/img/linkedin.svg"
                    }
                    alt="linkedin"
                  />
                </a>
                <a href="https://github.com/Arakaki-code" target={"blank"}>
                  <img
                    src={isDark ? "/img/github-dark.svg" : "/img/github.svg"}
                    alt="github"
                  />
                </a>
                <a href="https://codepen.io/arakaki-code" target={"blank"}>
                  <img
                    src={isDark ? "/img/codepen-dark.svg" : "/img/codepen.svg"}
                    alt="codepen"
                  />
                </a>
              </div>
              <div className="info-link_qrcode">
                <img src="/img/qrcode.png" alt="Qr-code" />
              </div>
            </div>
          </div>
          <div
            className="modal"
            style={{ display: modalVisible ? "block" : "none" }}
          >
            <div className="modal-content">
              <span>Mensagem enviada com sucesso!</span>
            </div>
          </div>
          <form className="contact_box_form" onSubmit={handleSubmit(onEvent)}>
            <span className="form-text-span">Entre em contato comigo</span>
            <div className="box-form-item">
              <input
                type={"text"}
                name="name"
                placeholder="Nome"
                {...register("name", { required: true })}
              />
              {<span className="span-input-error">{errors.name?.message}</span>}
            </div>
            <div className="box-form-item">
              <input
                type={"text"}
                name="email"
                placeholder="E-mail"
                {...register("email", { required: true })}
              />
              {
                <span className="span-input-error">
                  {errors.email?.message}
                </span>
              }
            </div>
            <div className="box-form-item">
              <textarea
                type={"textarea"}
                name="message"
                placeholder="Mensagem"
                {...register("message", { required: true })}
              ></textarea>
              {
                <span className="span-input-error">
                  {errors.message?.message}
                </span>
              }
            </div>
            <UIButton component="button" type="submit">
              Enviar{" "}
            </UIButton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
