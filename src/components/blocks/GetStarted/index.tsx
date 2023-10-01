import "./style.css";
import { RefObject, useEffect, useRef } from "react";
import { IGetStarted } from "../../../types";
import GetStartedCard from "../../ui/Cards/GetStartedCard";
import IconLink from "../../ui/IconLink";

const GetStarted = ({ title, label, cards }: IGetStarted) => {
  const carouselRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const carousel = carouselRef?.current;
    if (!carousel) return;

    let isDragging = false,
      prevPageX: number | undefined,
      prevScrollLeft: number | undefined;

    const dragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      isDragging = true;
      prevPageX = e.pageX;
      prevScrollLeft = carousel.scrollLeft;
      carousel.style.cursor = "grabbing";
    };
    const dragStop = () => {
      isDragging = false;
      carousel.style.cursor = "grab";
    };
    const dragging = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      if (!isDragging) return;
      const delta = e.pageX - prevPageX!;
      carousel.scrollLeft = prevScrollLeft! - delta;
    };

    carousel.addEventListener(
      "mousedown",
      dragStart as unknown as EventListener
    );
    carousel.addEventListener("mouseup", dragStop as unknown as EventListener);
    carousel.addEventListener(
      "mousemove",
      dragging as unknown as EventListener
    );
  }, []);
  return (
    <section id="get-started" className="get-started">
      <div className="title-wrapper">
        <h2>{title}</h2>
        <p>{label}</p>
      </div>
      <div className="cards-wrapper">
        <div ref={carouselRef} className="carousel container">
          {cards.map((card, i: number) => (
            <GetStartedCard key={card.id} i={i} {...card} />
          ))}
        </div>
      </div>
      <IconLink
        imageSrc="/images/chevron-down.svg"
        link={{ href: "#faq", className: "anchor" }}
      />
    </section>
  );
};

export default GetStarted;
