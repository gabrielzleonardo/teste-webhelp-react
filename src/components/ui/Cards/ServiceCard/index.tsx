import "./style.css";

const ServiceCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  backgroundImagePath,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  backgroundImagePath?: string;
}) => {
  return (
    <div
      className="service-card card"
      style={{ backgroundImage: `url(${backgroundImagePath})`, backgroundSize: "cover" }}
    >
      <img src={imageSrc} alt={imageAlt || "Imagem"} />
      <div>
        <span>{description}</span>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
