import { useState } from "react";
import "./styles.scss";

function OutsetAbout(props) {
  const { isDark } = props;
  const [mostrarMais, setMostrarMais] = useState(false);

  function toggleMostrarMais() {
    setMostrarMais(!mostrarMais);
  }

  return (
    <div
      style={
        isDark ? { backgroundColor: "#382B49" } : { backgroundColor: "#ffdde6" }
      }
      className={["box-about", isDark ? "dark" : ""].join(" ")}
      id="about"
    >
      <div className="triangle-div"></div>
      <div className="about">
        <div className="about-content">
          <h3>Sobre</h3>
          <p className="about-content__description">
            Olá, meu nome é Mayuri, tenho 26 anos e sou estudante de{" "}
            <strong>
              Análise e Desenvolvimento de Sistemas na{" "}
              <a
                target={"blank"}
                href="https://descomplica.com.br/faculdade/?utm_source=google&utm_medium=cpc&utm_campaign=psq-institucional-faculdade-ongoing&utm_term=institucional&utm_content=institucional&gclid=Cj0KCQjwxb2XBhDBARIsAOjDZ37Y_INSOODPojGuQgn8LkXldkCJLFhO3lPaD-etMsjMCFn7NNWjpgUaAnICEALw_wcB"
              >
                Descomplica faculdade digital, Centro Universitário UniAmérica.
              </a>
            </strong>
            É um prazer receber você no meu portfólio e compartilhar um pouco
            sobre minha trajetória.
            <br />
            <br />
            Quando ganhei meu primeiro computador, aos 13 anos, adorava jogar e
            explorar cada canto do sistema. Eventualmente, precisei entender
            sobre hardware para limpar e trocar peças, melhorando o desempenho
            da minha CPU. Em 2016, minha motivação pela incrível capacidade dos
            gráficos e pela interatividade dos sistemas me levou a explorar o
            poder da tecnologia em criar e transformar ideias em realidades
            virtuais, abrindo um mundo cheio de possibilidades.
            <br />
            <br />
            {mostrarMais ? (
              <>
                Essa curiosidade e interesse me levaram a criar meus primeiros
                algoritmos com o professor Guanabara, no Curso em Vídeo. Em
                2022, decidi cursar Análise e Desenvolvimento de Sistemas, onde
                venho adquirindo habilidades práticas e teóricas essenciais para
                minha formação.
                <br />
                <br />
                Atualmente, como estudante, estou focada em expandir
                meus conhecimentos e aplicar o que aprendo em projetos criativos
                e desafiadores. Busco aprimorar minhas habilidades de desenvolvimento e impactar
                positivamente com os meus serviços. Estou animada com o que o futuro
                reserva e determinada a colaborar com pessoas e projetos que compartilhem essa visão.

                <button className="btn__leia-mais" onClick={toggleMostrarMais}>
                  Ler menos
                </button>
              </>
            ) : (
              <button className="btn__leia-mais" onClick={toggleMostrarMais}>
                Ler mais
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OutsetAbout;
