import { ReactNode } from "react";

export interface ILayout {
  children: ReactNode;
}

export interface ITextInput {
  label: string;
  placeholder: string;
  disabled?: boolean;
  alertIsOpen?: boolean;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
}

export interface IAutoLink {
  title?: string;
  href: string;
  className?: string;
  children?: ReactNode;
}

export interface IFooterLink extends IAutoLink {
  id: number;
  image?: string;
}

export interface ICard {
  cardLabel: string;
  cardImage: string;
  cardTitle?: string;
  i?: number;
  id: number;
}

export interface IIconLink {
  imageSrc: string;
  link: IAutoLink;
}

export interface IFormFields {
  id: number;
  fieldTitle: string;
  fieldType: string;
  placeholder: string;
}

export interface IFormOptions {
  id: number;
  formTitle: string;
  formValue: string;
  formFields: IFormFields[];
}

export interface ILoginForm {
  formLabel: string;
  formOptions: IFormOptions[];
}

export interface IContent {
  type: string;
  id: number;
  title?: string;
  label?: string;
}
export interface IBannerOne extends IContent {
  title: string;
  loginFormData: ILoginForm;
  backgroundImage: string;
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
  questionAnswer: string;
  id: number;
}

export interface IAccordion {
  questions: IQuestion[];
}

export interface IFaq extends IContent {
  questions: IQuestion[];
}
