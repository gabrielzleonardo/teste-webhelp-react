import { IFaq } from "../../../types";
import "./style.css";
import Accordion from "../../global/Accordion";
const Faq = ({ questions }: IFaq) => {

  return (
    <section id="faq" className="faq container">
      <div className="section-title">
        <h2>Perguntas frequentes</h2>
        <p>Tire suas dúvidas</p>
      </div>
      <Accordion questions={questions} />
    </section>
  );
};

export default Faq;
