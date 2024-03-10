import React from "react";
import classNames from "classnames";

interface ButtonInterface {
  variant?: "primary" | "ghost" | "link"
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
        "bg-primary text-white font-semibold": (variant == "primary" || !variant),
        "bg-brightGrey hover:bg-gray-200 text-black font-semibold": variant == "ghost",
        "bg-transparent text-white font-semibold hover:underline": (variant == "link"),
        "text-sm": size=="sm"
      },
      "inline-block  rounded-md border border-black px-6 py-3 transition-all",
      className
    )}>{children}</button>
  )
}

export default Button;