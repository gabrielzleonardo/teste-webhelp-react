import LoginForm from "../../global/forms/LoginForm";
import IconLink from "../../ui/IconLink";
import "./style.css";
const BannerOne = () => {
  return (
    <section className="container banner-one">
      <h1>
        <span>Tenha aqui</span> <span>a melhor</span> <span>experiência</span>
      </h1>
      <LoginForm />
      <div className="mouse-anchor-wrapper">
        <IconLink
          link={{ href: "#benefits", title: "Saiba mais" }}
          imageSrc="/images/mouse-icon.svg"
        />
        <span>Saiba mais</span>
      </div>
    </section>
  );
};

export default BannerOne;
