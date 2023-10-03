import ChevronAnchorLink from "../../nav/ChevronAnchorLink";

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
            width={123}
            height={122}
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
            height={130}
            width={130}
            src="/images/cardsbenefits2.webp"
            alt="Ícone ilustrativo de um documento com uma lupa em cima"
          />
          <p>
            Consulta de <br /> débitos em atraso
          </p>
        </div>
        <div className="card card-2">
          <span>Navegação fácil</span>
          <img
            src="/images/image-76.png"
            alt="Imagem de um celular com o aplicativo da webhelp aberto"
            width={385}
            height={547}
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
            width={364}
            height={280}
            src="/images/paymentmethods.webp"
            alt="circulos coloridos com as formas de pagamentos ilustradas"
          />
        </div>
      </div>
      <ChevronAnchorLink href="#services" />
    </section>
  );
};

export default Benefits;
