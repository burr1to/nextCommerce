"use client";

import Image from "next/image";

import { ButtonProps } from "@/types";

const Button = ({
  isDisabled,
  btnType,
  containerStyles,
  title,
  onClick,
}: ButtonProps) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={onClick}
  >
    <span className={`flex-1`}>{title}</span>
  </button>
);

export default Button;
