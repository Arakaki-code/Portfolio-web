import "./styles.scss";
import React from "react";
import Toggle from "../Toggle-swift";
import { Link } from "react-scroll";

function Header(props) {
  const {isDark, onClick} = props;

  const [isChecked, setChecked] = React.useState(false);
  const handleCheck = () => {
    setChecked((prevState) => !prevState);
    onClick(isChecked)
  };


  return (
    <div className={["header", (isDark ? "dark" : "")].join(" ")}>
      <div className="container">
        <Link
          to="first"
          spy={true}
          smooth={true}
          duration={500}
          className="code-symbol"
        >
          <img src="/img/code-symbol.svg" alt="symbol-svg" />
        </Link>

        <nav className="nav-menu">
          <ul className="list-menu">
            <li className="list-menu_item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Sobre
              </Link>
            </li>
            <li className="list-menu_item">
              <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Portfólio
              </Link>
            </li>
            <li className="list-menu_item">
              <Link
                activeClass="active"
                to="ability"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Habilidades
              </Link>
            </li>
            <li className="list-menu_item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-180}
                duration={500}

              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <section className="header-toggle">
          <Toggle isOn={isChecked} handleCheck={handleCheck} />
        </section>
      </div>
    </div>
  );
}

export default Header;
