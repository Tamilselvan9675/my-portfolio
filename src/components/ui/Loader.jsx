import React from "react";
import clsx from "clsx";

/**
 * LOADER – REUSABLE COMPONENT
 */
const Loader = ({
  fullscreen = false,
  size = "md",
  text,
  overlay = false,
  className,
}) => {
  return (
    <div
      className={clsx(
        // BASE
        "flex items-center justify-center",

        // FULLSCREEN MODE
        fullscreen && "fixed inset-0 z-[9999]",

        // OVERLAY BACKGROUND
        overlay && "bg-white",

        className
      )}
    >
      <div className="flex flex-col items-center gap-3">
        {/* SPINNER */}
        <div
          className={clsx(
            "animate-spin rounded-full border-4 border-blue-600 border-t-transparent",
            {
              "h-6 w-6": size === "sm",
              "h-10 w-10": size === "md",
              "h-14 w-14": size === "lg",
            }
          )}
        />

        {/* OPTIONAL TEXT */}
        {text && <p className="text-sm text-gray-600">{text}</p>}
      </div>
    </div>
  );
};

export default Loader;
