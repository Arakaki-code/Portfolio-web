import "./styles.scss";
import Title from "../Title";
import CardCertificate from "../CardCertificate";
import CodepenProjects from "../CodepenProjects";
import CarouselSlide, { CarouselItem } from "../CarouselSlide";
import { useState } from "react";

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="box">
      <Title title="Projetos" />
      <section className="projects-rocketseat">
        <h3>Rocketseat</h3>
        <p>
          Agregando conhecimentos de back-end e front-end com bootcamps da{" "}
          <strong>
            <a href="https://www.rocketseat.com.br/" target={"blank"}>
              {" "}
              Rocketseat.
            </a>
          </strong>
        </p>
        <div className="projects-rocketseat_content">
          <div className="projects-rocketseat_carousel">
            <CarouselSlide onClick={(value) => setActiveIndex(value)}>
              <CarouselItem>
                <img
                  className="rocketseat_carousel_img"
                  src="./img/rocketseat-project-gif.gif"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  className="rocketseat_carousel_img"
                  src="./img/doe-gif.gif"
                />
              </CarouselItem>
            </CarouselSlide>
          </div>
          {activeIndex === 0 && (
            <div className="rocketseat_content_text fade-in-image">
              <span className="rocketseat_content_text_span">
                LauchBase da Rocketseat{" "}
              </span>
              <p className="rocketseat_content_text_p">
                Projeto do bootcamp Launch Base que apresenta um portfólio ,
                cursos de aulas e alguns vídeos tutoriais da rocketseat. Por
                aqui conheci alguns conceitos básicos de back-end. Desenvolvi
                meu servidor local com Nodejs; utilizando das dependências
                express e nunjucks para uma melhor renderização e manipulação
                dos conteúdos HTML com Javascript.
              </p>
              <a href="https://github.com/Arakaki-code/LauchBase-da-Rocketseat" className="rocketseat_content_github" target={"blank"}>
                <svg
                className="rocketseat_content_icon"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.9999 4.68066C20.053 4.68087 15.2675 6.44132 11.4998 9.64701C7.73212 12.8527 5.22802 17.2945 4.43559 22.1775C3.64316 27.0605 4.6141 32.0662 7.17468 36.2989C9.73527 40.5316 13.7184 43.715 18.4114 45.2796C19.4531 45.4619 19.8437 44.837 19.8437 44.29C19.8437 43.7952 19.8176 42.1546 19.8176 40.4098C14.5832 41.3733 13.2291 39.1338 12.8124 37.962C12.3501 36.8222 11.6171 35.8122 10.677 35.0192C9.94781 34.6286 8.90614 33.665 10.6509 33.639C11.3171 33.7113 11.9561 33.9432 12.5137 34.3149C13.0713 34.6866 13.5311 35.1872 13.8541 35.7744C14.139 36.2863 14.5221 36.7369 14.9815 37.1004C15.4409 37.464 15.9676 37.7333 16.5312 37.893C17.0949 38.0526 17.6845 38.0995 18.2663 38.0309C18.8481 37.9623 19.4107 37.7795 19.9217 37.4931C20.0119 36.434 20.4839 35.4438 21.2499 34.7068C16.6145 34.1859 11.7707 32.389 11.7707 24.4203C11.7415 22.3498 12.5055 20.3465 13.9061 18.8214C13.2692 17.0218 13.3438 15.0469 14.1145 13.3005C14.1145 13.3005 15.8592 12.7536 19.8436 15.4359C23.2526 14.4984 26.8514 14.4984 30.2603 15.4359C34.2446 12.7276 35.9895 13.3005 35.9895 13.3005C36.7603 15.0469 36.8348 17.0218 36.1978 18.8214C37.6027 20.3439 38.3674 22.3489 38.3332 24.4203C38.3332 32.415 33.4634 34.1859 28.828 34.7068C29.3252 35.2107 29.7081 35.8157 29.9508 36.4807C30.1934 37.1458 30.2901 37.8552 30.2343 38.5609C30.2343 41.3474 30.2082 43.5869 30.2082 44.2901C30.2082 44.837 30.5988 45.488 31.6405 45.2797C36.3252 43.7023 40.2969 40.5114 42.8466 36.2766C45.3963 32.0418 46.358 27.0386 45.5601 22.1603C44.7621 17.282 42.2565 12.846 38.4905 9.64423C34.7244 6.44244 29.943 4.68324 24.9999 4.68066Z"
                    fill="#4C4F5A"
                  />
                </svg>
                <p className="rocketseat_content_github_p">Projeto no Github</p>
              </a>
            </div>
          )}
          {activeIndex === 1 && (
            <div className="rocketseat_content_text fade-in-image">
              <span className="rocketseat_content_text_span">
                Doe - MaratonaDev 3.0 da Rocketseat{" "}
              </span>
              <p className="rocketseat_content_text_p">
                Um sistema minimalista para cadastrar doadores de sangue.
                <br />
                Tecnologias: HTML &#40;estrutura&#41;; CSS &#40;estilo&#41;;
                JavaScript &#40;inteligência&#41;; Node.js &#40;sevidor, motor
                de JavaScript&#41;; PostgreSQL &#40;banco de dados&#41;.
              </p>

              <a href="https://github.com/Arakaki-code/doe-rocketseat" className="rocketseat_content_github" target={"blank"}>
                <svg
                className="rocketseat_content_icon"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.9999 4.68066C20.053 4.68087 15.2675 6.44132 11.4998 9.64701C7.73212 12.8527 5.22802 17.2945 4.43559 22.1775C3.64316 27.0605 4.6141 32.0662 7.17468 36.2989C9.73527 40.5316 13.7184 43.715 18.4114 45.2796C19.4531 45.4619 19.8437 44.837 19.8437 44.29C19.8437 43.7952 19.8176 42.1546 19.8176 40.4098C14.5832 41.3733 13.2291 39.1338 12.8124 37.962C12.3501 36.8222 11.6171 35.8122 10.677 35.0192C9.94781 34.6286 8.90614 33.665 10.6509 33.639C11.3171 33.7113 11.9561 33.9432 12.5137 34.3149C13.0713 34.6866 13.5311 35.1872 13.8541 35.7744C14.139 36.2863 14.5221 36.7369 14.9815 37.1004C15.4409 37.464 15.9676 37.7333 16.5312 37.893C17.0949 38.0526 17.6845 38.0995 18.2663 38.0309C18.8481 37.9623 19.4107 37.7795 19.9217 37.4931C20.0119 36.434 20.4839 35.4438 21.2499 34.7068C16.6145 34.1859 11.7707 32.389 11.7707 24.4203C11.7415 22.3498 12.5055 20.3465 13.9061 18.8214C13.2692 17.0218 13.3438 15.0469 14.1145 13.3005C14.1145 13.3005 15.8592 12.7536 19.8436 15.4359C23.2526 14.4984 26.8514 14.4984 30.2603 15.4359C34.2446 12.7276 35.9895 13.3005 35.9895 13.3005C36.7603 15.0469 36.8348 17.0218 36.1978 18.8214C37.6027 20.3439 38.3674 22.3489 38.3332 24.4203C38.3332 32.415 33.4634 34.1859 28.828 34.7068C29.3252 35.2107 29.7081 35.8157 29.9508 36.4807C30.1934 37.1458 30.2901 37.8552 30.2343 38.5609C30.2343 41.3474 30.2082 43.5869 30.2082 44.2901C30.2082 44.837 30.5988 45.488 31.6405 45.2797C36.3252 43.7023 40.2969 40.5114 42.8466 36.2766C45.3963 32.0418 46.358 27.0386 45.5601 22.1603C44.7621 17.282 42.2565 12.846 38.4905 9.64423C34.7244 6.44244 29.943 4.68324 24.9999 4.68066Z"
                    fill="#4C4F5A"
                  />
                </svg>
                <p className="rocketseat_content_github_p">Projeto no Github</p>
              </a>
            </div>
          )}
        </div>
      </section>

      <div className="divisor"></div>

      <section className="projects-alura">
        <h3>Alura</h3>
        <p>
          <a href="https://www.alura.com.br/" target={"blank"}>
            Alura{" "}
          </a>{" "}
          &#40; plataforma de educação em tecnologia &#41; foi um dos presentes especial que ganhei em 2020, <br />
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

      <a href="https://codepen.io/arakaki-code" target={"blank"} className="projects-link-codepen">
        <span>
          Demais projetos no codePen
        </span>
        <img src="./img/Link-pink.svg" alt="link"/>
      </a>
    </div>
  );
}
