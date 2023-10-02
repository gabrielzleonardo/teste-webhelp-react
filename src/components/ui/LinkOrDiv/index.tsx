import { ReactNode } from "react";
import AutoLink from "../../nav/AutoLink";

type Props = {
  children: ReactNode;
  title?: string;
  href?: string;
  className?: string;
};

const LinkOrDiv = ({ href, className, title, children }: Props) => {
  if (href) {
    return (
      <AutoLink href={href} title={title ?? ""} className={className}>
        {children}
      </AutoLink>
    );
  }
  return <div className={className}>{children}</div>;
};

export default LinkOrDiv;
