import React from "react";
import classNames from "classnames";

interface ButtonInterface {
  variant?: "primary" | "ghost"
  children: React.ReactNode
  className?: string
}
const Button: React.FC<ButtonInterface> = ({
  children,
  variant = "primary",
  className,
}) => {
  return (
    <button className={classNames(
      {
        "bg-primary": (variant == "primary" || !variant),
        "bg-brightGrey": variant == "ghost",
        "text-white": (!variant || variant == "primary"),
        "hover:bg-primary": variant == "ghost",
        "hover:text-white": variant == "ghost",
      },
      "inline-block  rounded-md border border-black px-6 py-3 transition-all",
      className
    )}>{children}</button>
  )
}

export default Button;