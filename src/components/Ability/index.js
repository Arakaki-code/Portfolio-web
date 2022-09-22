import "./styles.scss";
import Title from "../Title";
import { useState } from "react";

function Ability() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container-ability">
      <div className="content-ability">
        <Title title="Habilidades" />
        <div className="content-ability_box">
          <div className="ability-skill_icon">
            <div className="ability_icons" style={activeIndex === 0 ? {background: "#F75421"}: {}} onClick={() => setActiveIndex(0)}>
              <img src="./img/html.svg" alt="icon-html" />
            </div>
            <div className="ability_icons" style={activeIndex === 1 ? {background: "#0082C0"}: {}} onClick={() => setActiveIndex(1)}>
              <img src="./img/css.svg" alt="icon-html" />
            </div>
            <div className="ability_icons" style={activeIndex === 2 ? {background: "#EAD41C"}: {}} onClick={() => setActiveIndex(2)}>
              <img src="./img/javascript.svg" alt="icon-html" />
            </div>
          </div>
          <div className="ability-skill_text">
            {activeIndex === 0 && (
              <div className="skill_text_item ability-fade-in-down ">
                <span>HTML5</span>
                <p>
                  é uma linguagem de marcação para construção de páginas web.
                  Como um bloco de notas, porém bem mais avançado. É um
                  documento escrito com suas tags e atributos, separando e
                  organizando cada elemento do mesmo, além também de suportar
                  diversos arquivos. Um documento permite manipulação desses
                  elementos com CSS e Javascript.{" "}
                </p>
              </div>
            )}
            {activeIndex === 1 && (
              <div className="skill_text_item  ability-fade-in-down">
                <span>CSS3</span>
                <p>
                  Um recurso que estiliza elementos do meu documento Html e dá
                  vida as minhas páginas web. Um dos conceitos que mais utilizo
                  do Css3 é o flexbox, torna elementos do html flexíveis de
                  acordo com a responsividade do layout. Sass é uma ótima
                  extensão do css, com ele podemos criar variáveis, funções e
                  reutilizar código, facilita a manutenção e melhora a
                  performance do meu guia de estilo. Conheci também o Bootstrap, um
                  framework que disponibiliza diversas classes css pré-prontas,
                  oferecendo componentes, cores, responsividade e mais, para
                  melhor experiência do usuário.
                </p>
              </div>
            )}

            {activeIndex === 2 && (
              <div className="skill_text_item  ability-fade-in-down">
                <span>Javascript</span>
                <p>
                  Javascript é uma linguagem de programação que permite o HTML e
                  CSS ser mais dinâmico e funcional. Trabalhei juntamente com
                  NodeJS que oferece uma biblioteca gigantesca, que utilizei
                  para criar meu servidor local para melhorar os processos e
                  serviços da minha aplicação, permitindo também interação com banco de
                  dados no PostgreSQL.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ability;
