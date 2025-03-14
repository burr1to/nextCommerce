"use client";

import Image from "next/image";

import { ButtonProps } from "@/types";

const Button = ({
  isDisabled,
  btnType,
  containerStyles,
  title,
  handleClick,
}: ButtonProps) => (
  <button
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={() => {
      handleClick;
    }}
  >
    <span className={`flex-1`}>{title}</span>
  </button>
);

export default Button;
