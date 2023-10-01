import { IFaq } from "../../../types";
import "./style.css";
import Accordion from "../../global/Accordion";
const Faq = ({ questions }: IFaq) => {
  // console.log(questions);
  return (
    <section id="faq" className="faq container">
      <div className="title-wrapper">
        <h3>Perguntas frequentes</h3>
        <span>Tire suas dúvidas</span>
      </div>
      <Accordion questions={questions} />
    </section>
  );
};

export default Faq;
