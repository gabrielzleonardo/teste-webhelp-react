import LinkOrDiv from "../LinkOrDiv";
import "./style.css";
interface IIconLinkOrDiv {
  image?: string;
  href?: string;
  alt?: string;
  title?: string;
}

const IconLinkOrDiv = ({ image, href, alt, title }: IIconLinkOrDiv) => {
  return (
    <LinkOrDiv title={title} className="icon-wrapper" href={href}>
      <img src={image} alt={alt ?? "imagem"} />
    </LinkOrDiv>
  );
};

export default IconLinkOrDiv;
