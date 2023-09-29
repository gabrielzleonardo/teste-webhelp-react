import { ReactNode } from "react";

export interface ILayout {
  children: ReactNode;
}

export interface IIconLink {
  imageSrc: string;
  link: IAutoLink;
}

export interface IAutoLink {
  title?: string;
  href: string;
  className?: string;
  children?: ReactNode;
}
