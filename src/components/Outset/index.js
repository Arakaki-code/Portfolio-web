import "./styles.scss";

function Outset() {
  return (
    <div className="outset">
      <div className="outset-apresentation">
        <div>
          <span>Olá, me chamo</span>
          <h1>Mayuri Cristina Arakaki</h1>
          <p>Desenvolvedora web | Front-end</p>
          <div className="button-cv"></div>
        </div>
      </div>

      <div className="outset-my-photo">
        <img src="/img/my-photo-light.svg" alt="" />
      </div>
    </div>
  );
}

export default Outset;
