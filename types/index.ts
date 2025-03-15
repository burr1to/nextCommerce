import { MouseEventHandler } from "react";

export interface ButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CardProps {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: Object;
  description: string;
  image: string;
}
