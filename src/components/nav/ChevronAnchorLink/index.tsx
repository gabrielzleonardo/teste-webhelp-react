import { IAutoLink } from "../../../types";
import AutoLink from "../AutoLink";
import "./style.css";

const ChevronAnchorLink = ({ href, className }: IAutoLink) => {
  return (
    <AutoLink className={`${className} anchor`} href={href}>
      <img width={40} height={40} src="images/chevron-down.svg" alt="Ícone de seta para baixo" />
    </AutoLink>
  );
};

export default ChevronAnchorLink;
