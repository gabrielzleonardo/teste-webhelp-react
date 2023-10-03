import "./style.css";
import ServiceCard from "../../ui/Cards/ServiceCard";
import ChevronAnchorLink from "../../nav/ChevronAnchorLink";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="section-title">
        <h2>Atendimento personalizado</h2>
        <p>Diversos canais, para cada necessidade.</p>
      </div>
      <div className="container cards-wrapper">
        <ServiceCard
          backgroundImagePath="/images/cardservice1.webp"
          imageSrc="/images/phoneicon.webp"
          imageAlt="Ícone de telefone"
          title="Ligação"
          description="Agilidade onde estiver"
        />
        <ServiceCard
          backgroundImagePath="/images/cardservice2.webp"
          imageSrc="/images/whatsapp.webp"
          imageAlt="Ícone do WhatsApp"
          title="WhatsApp"
          description="Praticidade"
        />
        <div className="card card-1">
          <div>
            <span>Mensagens de texto</span>
            <p>
              <span>Chat</span> Online
            </p>
          </div>
          <img width={364} height={193} src="/images/chat.webp" alt="imagem de um chat" />
        </div>
      </div>
      <ChevronAnchorLink href="#get-started" />
    </section>
  );
};

export default Services;
