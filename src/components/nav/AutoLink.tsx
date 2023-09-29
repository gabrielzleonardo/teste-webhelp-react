import { IAutoLink } from "../../types";
const AutoLink = ({ href, className, title, children }: IAutoLink) => {
  return (
    <a href={href} className={className} title={title ? title : "Saiba mais"}>
      {children || title || "Saiba mais"}
    </a>
  );
};

export default AutoLink;
