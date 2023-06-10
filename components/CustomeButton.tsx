"use client";
import { CustomeButtonProps } from "@/types";
import React from "react";

const CustomeButton = ({
  title,
  containerStyles,
  btnType,
  handleClick,
}: CustomeButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomeButton;
