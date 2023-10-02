
import LoginForm from "../../global/forms/LoginForm";
import AutoLink from "../../nav/AutoLink";

import "./style.css";
const BannerOne = () => {
  return (
    <section className="container banner-one">
      <h1>
        <span>Tenha aqui</span> <span>a melhor</span> <span>experiência</span>
      </h1>
      <LoginForm />

      <AutoLink
        href="#benefits"
        title="Saiba mais"
        className="mouse-anchor-wrapper"
      >
        <img src="/images/mouse-icon.svg" alt="Ícone de um mouse" />
        <span>Saiba mais</span>
      </AutoLink>
    </section>
  );
};

export default BannerOne;
