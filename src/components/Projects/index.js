import React, { useState } from "react";
import "./styles.scss";
import Title from "../Title";
import Carousel from "../ControlledCarousel";
import CardCertificate from "../CardCertificate";
import CodepenProjects from "../CodepenProjects";

export function Projects() {
  const [index, setIndex] = useState(0);

  return (
    <div className="box">
      <Title title="Projetos" />
      <section className="projects-rocketseat">
        <h3>Rocketseat</h3>
        <p>
          Mais a frente, aproveitei a chance de aprender muito através dos
          eventos. Os{" "}
          <strong>
            {" "}
            bootcamps da{" "}
            <a href="https://www.rocketseat.com.br/" target={"blank"}>
              {" "}
              Rocketseat.
            </a>
          </strong>
        </p>
        <div className="projects-rocketseat_content">
          <div className="projects-rocketseat_carousel">
            <Carousel onClick={(value) => setIndex(value)} />
          </div>

          <div className="projects-rocketseat_text">
            {index === 0 && (
              <>
                <span>LauchBase da Rocketseat </span>
                <p>
                  Iniciei por introdução a programação web, entendendo conceitos
                  básicos do Javascript, aprendendo Strings, Numbers, Vetores,
                  Funções, Métodos e Conceitos. Logo após, desafios práticos
                  para fixar melhor. Conheci alguns conceitos básicos de
                  back-end. Desenvolvi meu servidor local com Nodejs, utilizei
                  das dependências express e nunjucks, para uma melhor
                  renderização e manipulação dos conteúdos HTML com Javascript.
                </p>
              </>
            )}

            {index === 1 && (
              <>
                <span>LauchBase da Rocketseat </span>
                <p>
                  Iniciei por introdução a programação web, entendendo conceitos
                  básicos do Javascript, aprendendo Strings, Numbers, Vetores,
                  Funções, Métodos e Conceitos. Logo após, desafios práticos
                  para fixar melhor. Conheci alguns conceitos básicos de
                </p>
              </>
            )}

            {index === 2 && (
              <>
                <span>LauchBase da Rocketseat </span>
                <p>
                  Iniciei por introdução a programação web, entendendo conceitos
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <div className="divisor"></div>

      <section className="projects-alura">
        <h3>Alura</h3>
        <p>
          Lembro-me do quanto tenho a agradecer minha mãe! <br />
          <a href="https://www.alura.com.br/" target={"blank"}>
            Alura{" "}
          </a>{" "}
          &#40; plataforma de educação em tecnologia &#41; foi um dos presentes
          que ganhei dela em 2020, <br />
          Isto abrangeu mais os meus horizontes no percurso de aprendizado.
        </p>
        <div className="alura-certificate">
          <span>Certificados</span>
          <div className="certificate_content">
            <CardCertificate
              img="./img/certificate.svg"
              text="Html e Css 01"
              onClick={() =>
                window.open(
                  "https://cursos.alura.com.br/user/hana-sayuri/course/html5-css3-primeiros-passos/certificate",
                  "_blank"
                )
              }
            />
            <CardCertificate
              img="./img/certificate.svg"
              text="Html e Css 02"
              onClick={() =>
                window.open(
                  "https://cursos.alura.com.br/user/hana-sayuri/course/html5-css3-posicionamento-listas-navegacao/certificate",
                  "_blank"
                )
              }
            />
            <CardCertificate
              img="./img/certificate.svg"
              text="Html e Css 03"
              onClick={() =>
                window.open(
                  "https://cursos.alura.com.br/user/hana-sayuri/course/html5-css3-formularios-tabelas/certificate",
                  "_blank"
                )
              }
            />
            <CardCertificate
              img="./img/certificate.svg"
              text="Html e Css avançado"
              onClick={() =>
                window.open(
                  "https://cursos.alura.com.br/user/hana-sayuri/course/html5-css3-avancando-css/certificate",
                  "_blank"
                )
              }
            />
            <CardCertificate
              img="./img/certificate.svg"
              text="Style guide"
              onClick={() =>
                window.open(
                  "https://cursos.alura.com.br/user/hana-sayuri/course/guia-estilos-paginas-componentes/certificate",
                  "_blank"
                )
              }
            />
            <CardCertificate
              img="./img/certificate.svg"
              text="Web design responsivo"
              onClick={() =>
                window.open(
                  "https://cursos.alura.com.br/user/hana-sayuri/course/web-design-responsivo/certificate",
                  "_blankA"
                )
              }
            />
          </div>
        </div>

        <div className="alura-imersao-dev">
          <span>Imersão Dev</span>
          <p>
            Partindo dos conhecimentos front-end para ImersãoDev, 7 dias de
            evento do Alura.
            <br /> 7 projetos com Html, Css e muito Javascript.
          </p>
          <div className="alura-imersao-dev_content">
            <CodepenProjects />
            <div className="imersao_content_text">
              <strong className="content_text">AnimeFlix</strong>
              <div className="content_text-two">
                Inspirado em Netflix. Criei um programa de animes, onde podemos
                selecionar por nome, clicar para ver ao trailer e também podemos
                adicionar um novo anime na lista.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="projects-link-codepen">
        <span>
          Demais projetos no codePen{" "}
          <a href="https://codepen.io/arakaki-code" target={"_blank"}>
            <svg
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.5 15H18V19.5C18 20.325 17.325 21 16.5 21H1.5C0.675 21 0 20.325 0 19.5V4.5C0 3.675 0.675 3 1.5 3H6V4.5H1.5V19.5H16.5V15ZM9 3L12.375 6.375L7.5 11.25L9.75 13.5L14.625 8.625L18 12V3H9Z"
                fill="black"
              />
            </svg>
          </a>
        </span>
      </div>
    </div>
  );
}
