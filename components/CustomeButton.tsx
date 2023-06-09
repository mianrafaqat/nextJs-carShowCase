"use client";
import { CustomeButtonProps } from "@/types";
import React from "react";

const CustomeButton = ({
  title,
  containerStyles,
  handleClick,
}: CustomeButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomeButton;
