import { cn } from "@/libs/utils";
import { IconType } from "@/types/iconType";
import React from "react";

const Arrow: React.FC<IconType> = ({
  onClick,
  height,
  width,
  className,
  fill,
}) => {
  return (
    <svg
      onClick={onClick}
      className={cn("cursor-pointer", className)}
      width={width || 10}
      height={height || 18}
      viewBox="0 0 256 512"
      fill={fill || "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
    </svg>
  );
};

export default Arrow;
