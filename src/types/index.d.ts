import { ReactNode } from "react";

export interface ILayout {
  children: ReactNode;
}

export interface IAutoLink {
  title?: string;
  href: string;
  className?: string;
  children?: ReactNode;
}

export interface ICard {
  cardLabel: string;
  cardImage: string;
  cardTitle?: string;
}

export interface IIconLink {
  imageSrc: string;
  link: IAutoLink;
}

export interface IContent {
  type: string;
  id: number;
  title?: string;
  label?: string;
}

export interface ITextContent extends IContent {
  description: string;
}

export interface IImageContent extends IContent {
  title: string;
  description: string;
}

export interface IFormFields {
  fieldTitle: string;
  fieldType: string;
  placeholder: string;
}

export interface IFormOptions {
  formTitle: string;
  formValue: string;
  formFields: IFormFields[];
}

export interface ILoginForm {
  formLabel: string;
  formOptions: IFormOptions[];
}
export interface IBannerOne extends IContent {
  title: string;
  loginForm: ILoginForm;
  bacgroundImage: string;
}
export interface IBenefits extends IContent {
  cards: ICard[];
}

export interface IServices extends IContent {
  cards: ICard[];
}

export interface IGetStarted extends IContent {
  cards: ICard[];
}

export interface IQuestion {
  questionTitle: string;
  qeustionAnswer: string;
}

export interface IFaq extends IContent {
  questions: IQuestion[];
}
