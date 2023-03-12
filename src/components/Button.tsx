import React from "react";
import classNames from "classnames";

interface ButtonInterface {
  variant?: "primary" | "ghost"
  children: React.ReactNode
  className?: string
  size?: "lg" | "md" | "sm"
}
const Button: React.FC<ButtonInterface> = ({
  children,
  variant = "primary",
  className,
  size,
}) => {
  return (
    <button className={classNames(
      {
        "bg-primary text-white": (variant == "primary" || !variant),
        "bg-brightGrey hover:bg-primary hover:text-white": variant == "ghost",
        "text-sm": size=="sm"
      },
      "inline-block  rounded-md border border-black px-6 py-3 transition-all",
      className
    )}>{children}</button>
  )
}

export default Button;