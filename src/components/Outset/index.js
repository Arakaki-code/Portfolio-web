import UIButton from "../UIButton";
import "./styles.scss";

function Outset() {
  return (
    <div className="outset">
      <div className="outset-apresentation">
        <div>
          <span>Olá, me chamo</span>
          <h1>Mayuri Cristina Arakaki</h1>
          <p>Desenvolvedora web | Front-end</p>
          <UIButton component={'a'} href="/mayuri_cv2022.pdf" download="Curriculum-mayuri" target={"blank"}>Baixar CV</UIButton>
        </div>
      </div>

      <div className="outset-my-photo">
        <img src="/img/my-photo-light.svg" alt="" />
      </div>
    </div>
  );
}

export default Outset;
