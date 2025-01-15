import "./styles.scss";

function Footer(props) {
const {isDark} = props;
    return(
        <div className={["container-footer", (isDark ? "dark" : "")].join(" ")} style={
            isDark ? { backgroundColor: "#AA3FFF" } : { backgroundColor: "#EC4F78" }
          }>
            <div className="content-footer">
                <span>Todos os direitos reservados &#169;2022 Mayuri Arakaki</span>
            </div>

        </div>
    )
}

export default Footer;