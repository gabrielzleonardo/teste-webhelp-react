import { ICard } from "../../../../types";
import "./style.css";
const GetStartedCard = ({ i, cardImage, cardLabel, cardTitle }: ICard) => {
  const cardNumber = +i! + 1;

  return (
    <div className="get-started-card">
      <div className="card-data">
        {cardNumber && <span className="card-number">{cardNumber}</span>}
        <p className="card-title">{cardTitle}</p>
        <span className="card-label">{cardLabel}</span>
      </div>
      <img src={cardImage} alt="Imagem" />
    </div>
  );
};

export default GetStartedCard;
