import React from "react";
import clsx from "clsx";

const Button = ({
  variant = "login",
  children,
  size = "md",
  className,
  ...props
}) => {
  const variantButton = {
    login:
      "text-white text-sm sm:text-base  bg-black rounded-full py-2 px-8",
      largelogin: "text-white text-sm sm:text-base w-full  bg-black rounded-md py-2 px-8",
  };

  const buttonSizes = {
    sm: "text-sm sm:text-base",
    md: "text-base sm:text-lg",
    lg: "text-lg sm:text-xl",
  };

  return (
    // <button className={clsx(variantButton[variant], buttonSizes[size], className)} {...props}>
    //     {children}
    // </button>

    <button
      className={clsx(variantButton[variant], buttonSizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
  
};

export default Button;
