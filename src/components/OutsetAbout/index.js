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
            Olá, meu nome é Mayuri e tenho 24 anos, e atualmente sou
            estudante em{" "}
            <strong>
              Análise e Desenvolvimento de Sistemas na{" "}
              <a
                target={"blank"}
                href="https://descomplica.com.br/faculdade/?utm_source=google&utm_medium=cpc&utm_campaign=psq-institucional-faculdade-ongoing&utm_term=institucional&utm_content=institucional&gclid=Cj0KCQjwxb2XBhDBARIsAOjDZ37Y_INSOODPojGuQgn8LkXldkCJLFhO3lPaD-etMsjMCFn7NNWjpgUaAnICEALw_wcB"
              >
                Descomplica faculdade digital.
              </a>
            </strong>
            . Sejam bem-vindo(a), é um prazer compartilhar um pouco sobre mim.
            <br />
            <br />
            Desde que tive meu primeiro computador aos 13 anos... ao longo dos
            meus 17 anos, fui me encantando com a possibilidade de explorar um
            mundo totalmente novo através da tecnologia. comecei a me envolver
            cada vez mais no estudo de como as coisas funcionam, e foi assim que
            acabei codificando meus primeiros algoritmos com o auxilio do
            professor Guanabara, no Youtube.
            <br />
            <br />
            {mostrarMais ? (
              <>
                A partir daí, o meu interesse pela tecnologia só cresceu. Fiquei
                fascinado com a maneira como ela pode fazer "magias acontecerem"
                e sempre busco por compreender e aprender mais sobre esse
                universo. E desde então, no ano de 2022 resolvi
                por fazer uma graduação. <br />
                <br />
                Hoje, como estudante de Análise e Desenvolvimento de Sistemas,
                estou aberto a novos desafios e novas oportunidades de
                aprendizado. Acredito que o profissionalismo é fundamental em
                qualquer área de atuação, e por isso sempre busco me atualizar e
                me aprimorar para oferecer soluções criativas e eficazes aos
                projetos nos quais trabalho. Estou animada para ver o que o
                futuro reserva e espero continuar avançando nessa jornada com
                pessoas e experiências incríveis.
                <button className="btn__leia-mais" onClick={toggleMostrarMais}>Ler menos</button>
              </>
            ) : (
              <button className="btn__leia-mais" onClick={toggleMostrarMais}>Ler mais</button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OutsetAbout;
