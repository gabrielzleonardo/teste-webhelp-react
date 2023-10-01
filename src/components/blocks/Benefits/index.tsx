import IconLink from "../../ui/IconLink";
import "./style.css";
const Benefits = () => {
  return (
    <section id="benefits" className="benefits">
      <h2 className="container">
        Beneficios para ajudar
        <br /> <strong>você e sua empresa.</strong>
      </h2>
      <div className="cards-wrapper container">
        <div className="card card-1">
          <span>Negociação</span>
          <img
            src="/images/cardsbenefits1.webp"
            alt="Ícone ilustrativo de um documento"
          />
          <p>
            Negociação <br /> rápida e segura
          </p>
        </div>
        <div className="card card-1">
          <span>Segunda via</span>
          <img
            src="/images/cardsbenefits2.webp"
            alt="Ícone ilustrativo de um documento"
          />
          <p>
            Consulta de <br /> débitos em atraso
          </p>
        </div>
        <div className="card card-2">
          <span>Navegação fácil</span>
          <img
            src="/images/phonewithapp.webp"
            alt="Ícone ilustrativo de um documento"
          />
        </div>
        <div className="card card-3">
          <div>
            <span>Pagamento</span>
            <p>
              Seu pagamento,
              <br /> como preferir.
            </p>
          </div>
          <img
            src="/images/paymentmethods.webp"
            alt="Ícone ilustrativo de um documento"
          />
        </div>
      </div>
      <IconLink
        imageSrc="/images/chevron-down.svg"
        link={{ href: "#services", className: "anchor" }}
      />
    </section>
  );
};

export default Benefits;
