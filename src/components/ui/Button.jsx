import React from "react";
import clsx from "clsx";

/**
 * BUTTON – PRODUCTION READY
 */
const Button = ({
  label,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  type = "button",
  className,
  onClick,
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={clsx(
        // BASE
        "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200",

        // VARIANTS
        {
          "bg-blue-600 text-white hover:bg-blue-700":
            variant === "primary",
          "bg-gray-200 text-gray-800 hover:bg-gray-300":
            variant === "secondary",
          "bg-red-600 text-white hover:bg-red-700":
            variant === "danger",
        },

        // SIZES
        {
          "px-3 py-1.5 text-sm": size === "sm",
          "px-4 py-2 text-base": size === "md",
          "px-6 py-3 text-lg": size === "lg",
        },

        // DISABLED
        isDisabled && "opacity-50 cursor-not-allowed",

        className
      )}
    >
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      )}
      {label}
    </button>
  );
};

export default Button;
