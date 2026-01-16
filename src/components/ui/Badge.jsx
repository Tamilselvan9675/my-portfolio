import React from "react";
import clsx from "clsx";

/**
 * BADGE – REUSABLE UI COMPONENT
 */

const Badge = ({
  label,
  variant = "primary",
  size = "md",
  rounded = true,
  className,
}) => {
  return (
    <span
      className={clsx(
        // BASE
        "inline-flex items-center font-medium whitespace-nowrap transition-colors",

        // VARIANT
        {
          "bg-blue-100 text-blue-700": variant === "primary",
          "bg-gray-100 text-gray-700": variant === "secondary",
          "bg-green-100 text-green-700": variant === "success",
          "bg-yellow-100 text-yellow-800": variant === "warning",
          "bg-red-100 text-red-700": variant === "danger",
        },

        // SIZE
        {
          "px-2 py-0.5 text-xs": size === "sm",
          "px-3 py-1 text-sm": size === "md",
          "px-4 py-1.5 text-base": size === "lg",
        },

        // SHAPE
        rounded ? "rounded-full" : "rounded-md",

        // CUSTOM
        className
      )}
    >
      {label}
    </span>
  );
};

export default Badge;
