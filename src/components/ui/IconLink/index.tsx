import { IIconLink } from "../../../types";
import AutoLink from "../../nav/AutoLink";
import "./style.css";
const IconLink = ({ link, imageSrc }: IIconLink) => {
  const { href, title, className } = link;
  return (
    <AutoLink
      className={className}
      href={href}
      title={title ? title : "Saiba mais"}
    >
      <img src={imageSrc} alt="Icone" />
    </AutoLink>
  );
};

export default IconLink;
