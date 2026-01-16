import React from "react";
import clsx from "clsx";

/**
 * CARD – REUSABLE UI COMPONENT
 */
const Card = ({
  children,
  className,
  padding = "md",
  shadow = "sm",
  rounded = true,
  hoverable = false,
  onClick,
  role,
}) => {
  const isClickable = typeof onClick === "function";

  return (
    <div
      // CLICK HANDLER
      onClick={onClick}
      role={role || (isClickable ? "button" : undefined)}
      tabIndex={isClickable ? 0 : undefined}
      className={clsx(
        // BASE STYLES
        "bg-white border border-gray-200 transition-all",

        // PADDING VARIANTS
        {
          "p-3": padding === "sm",
          "p-5": padding === "md",
          "p-7": padding === "lg",
        },

        // SHADOW VARIANTS
        {
          "shadow-none": shadow === "none",
          "shadow-sm": shadow === "sm",
          "shadow-md": shadow === "md",
          "shadow-lg": shadow === "lg",
        },

        // ROUNDED CORNERS
        rounded && "rounded-xl",

        // HOVER EFFECTS (ONLY WHEN ENABLED)
        hoverable && "hover:shadow-lg hover:-translate-y-0.5",

        // CLICKABLE STATE
        isClickable &&
          "cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500",

        // CUSTOM CLASS OVERRIDE
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
