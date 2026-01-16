import React, { useEffect } from "react";
import clsx from "clsx";

/**
 * MODAL – REUSABLE UI COMPONENT
 */
const Modal = ({
  open,
  onClose,
  title,
  children,
  size = "md",
  closeOnBackdrop = true,
  className,
}) => {
  // CLOSE ON ESC KEY
  useEffect(() => {
    if (!open) return;

    const handleEsc = e => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={closeOnBackdrop ? onClose : undefined}
      />

      {/* MODAL CONTAINER */}
      <div
        className={clsx(
          "relative z-10 w-full rounded-xl bg-white shadow-lg transition-all",
          {
            "max-w-sm p-4": size === "sm",
            "max-w-md p-6": size === "md",
            "max-w-lg p-8": size === "lg",
          },
          className
        )}
      >
        {/* HEADER */}
        {title && (
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        )}

        {/* CONTENT */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
