import { IAccordion, IQuestion } from "../../../types";
import "./style.css";

import { useState } from "react";
const Accordion = ({ questions }: IAccordion) => {
  const [selected, setSelected] = useState(0);

  const selectItem = (i: number) => {
    setSelected(i);
    if (selected === i) {
      setSelected(-1);
    }
  };

  const isSelected = (i: number) => {
    return selected === i;
  };

  return (
    <div className="accordion">
      {questions.map(
        (
          { questionTitle: question, questionAnswer: answer, id }: IQuestion,
          i: number
        ) => (
          <div key={id} className="accordion--item">
            <div className="question-title-wrapper">
              <h3>{question}</h3>
              <button
                className={isSelected(i) ? "rotate" : ""}
                onClick={() => selectItem(i)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clipPath="url(#clip0_656_83)">
                    <path
                      d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                      stroke="white"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M11 16H21"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 11V21"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_656_83">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>

            <div
              className={`${
                isSelected(i)
                  ? "accordion--content accordion--content__show"
                  : "accordion--content"
              }`}
            >
              {answer}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Accordion;
