import "./style.css";
import ServiceCard from "../../ui/Cards/ServiceCard";
import IconLink from "../../ui/IconLink";
const Services = () => {
  return (
    <section id="services" className="services">
      <div className="title-wrapper">
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
          <img src="/images/chat.webp" alt="imagem de um chat" />
        </div>
      </div>
      <IconLink
        imageSrc="/images/chevron-down.svg"
        link={{ href: "#get-started", className: "anchor" }}
      />
    </section>
  );
};

export default Services;
