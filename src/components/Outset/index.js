import UIButton from "../UIButton";
import "./styles.scss";

function Outset(props) {
  const { isDark } = props;
  return (
    <div
      style={
        isDark ? { backgroundColor: "#252A32" } : { backgroundColor: "#F2F2F2" }
      }
      className={[isDark ? "dark" : "", "outset"].join(" ")}
      id="first"
    >
      <div className="content-outset">
        <div className="outset-apresentation">
          <div>
            <span>Olá, me chamo</span>
            <h1>Mayuri <span className="outset-sobrenome">Cristina</span> Arakaki</h1>
            <p>Desenvolvedora web | Front-end</p>
            <UIButton
              component={"a"}
              href="/mayuri_cv2022.pdf"
              download="Curriculum-mayuri"
              target={"blank"}
            >
              Baixar CV
            </UIButton>
          </div>
        </div>

        <div className="outset-my-photo">
          {isDark ? (
            <img src="/img/my-photo-dark.png" alt="myPhoto" />
          ) : (
            <img src="/img/my-photo-light.png" alt="myPhoto" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Outset;
