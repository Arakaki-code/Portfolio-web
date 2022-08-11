import "./styles.scss";
import React from "react";
import Toggle from "../Toggle-swift";

function Header() {
  const [isChecked, setChecked] = React.useState(false);
  const handleCheck = () => {
    setChecked((prevState) => !prevState);
    console.log(isChecked);
  };

  return (
    <div className="header">
      <section className="code-symbol">
        <img src="/img/code-symbol.svg" alt="symbol-svg" />
      </section>

      <section className="nav-menu">
        <ul className="list-menu">
          <li className="list-menu_item">Inicio</li>
          <li className="list-menu_item">Projetos</li>
          <li className="list-menu_item">Habilidades</li>
          <li className="list-menu_item">Contato</li>
        </ul>
      </section>
      
      <section className="header-toggle">
        <Toggle isOn={isChecked} handleCheck={handleCheck}/>
      </section>

    </div>
  );
}

export default Header;
