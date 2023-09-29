import { IIconLink } from "../../../types";
const IconLink = ({ link, imageSrc }: IIconLink) => {
  const { href, title } = link;
  return (
    <a href={href} title={title ? title : "Saiba mais"}>
      <img src={imageSrc} alt="Icone" />
    </a>
  );
};

export default IconLink;
