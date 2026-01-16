import React from "react";
import clsx from "clsx";

/**
 * INPUT – REUSABLE UI COMPONENT
 */
const Input = ({
  label,
  error,
  helperText,
  id,
  disabled = false,
  required = false,
  className,
  ...props
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1">
      {/* LABEL */}
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      {/* INPUT FIELD */}
      <input
        id={inputId}
        disabled={disabled}
        {...props}
        className={clsx(
          // BASE STYLES
          "rounded-lg border px-3 py-2 text-sm outline-none transition-colors",

          // STATE STYLES
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-blue-500",

          // DISABLED STATE
          disabled && "bg-gray-100 cursor-not-allowed opacity-60",

          // CUSTOM OVERRIDE
          className
        )}
      />

      {/* ERROR / HELPER TEXT */}
      {error ? (
        <span className="text-xs text-red-500">{error}</span>
      ) : (
        helperText && (
          <span className="text-xs text-gray-500">{helperText}</span>
        )
      )}
    </div>
  );
};

export default Input;
