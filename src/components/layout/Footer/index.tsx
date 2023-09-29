import "./style.css"
import AutoLink from "../../nav/AutoLink";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="image-wrapper">
          <img src="/images/webhelp-2.svg" alt="Logo branca Webhelp" />
        </div>
        <div className="footer-nav">
          <p>
            <strong>Sobre</strong>
          </p>
          <ul>
            <li>
              <AutoLink href="#">Quem somos</AutoLink>
            </li>
            <li>
              <a href="#">Política de privacidade</a>
            </li>
          </ul>
        </div>
        <div className="footer-nav">
          <p>
            <strong>Fale com a gente</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
