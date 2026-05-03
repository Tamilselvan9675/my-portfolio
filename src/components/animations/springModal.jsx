import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { FiAlertCircle } from "react-icons/fi";

export const SpringModal = ({
  isOpen,
  setIsOpen,
  title = "One more thing!",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  icon = <FiAlertCircle />,
  onConfirm,
  onCancel,
  confirmText = "Understood!",
  cancelText = "Nah, go back",
}) => {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);

  useLayoutEffect(() => {
    if (!isOpen) return;
    if (!overlayRef.current || !panelRef.current) return;

    gsap.killTweensOf([overlayRef.current, panelRef.current]);

    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.set(panelRef.current, { scale: 0, rotate: 12.5 });

    gsap
      .timeline({ defaults: { ease: "power2.out" } })
      .to(overlayRef.current, { opacity: 1, duration: 0.2 }, 0)
      .to(
        panelRef.current,
        { scale: 1, rotate: 0, duration: 0.45, ease: "back.out(1.4)" },
        0,
      );
  }, [isOpen]);

  const close = () => {
    if (!overlayRef.current || !panelRef.current) {
      setIsOpen(false);
      return;
    }

    gsap
      .timeline({
        defaults: { ease: "power2.inOut" },
        onComplete: () => setIsOpen(false),
      })
      .to(panelRef.current, { scale: 0, rotate: 0, duration: 0.2 }, 0)
      .to(overlayRef.current, { opacity: 0, duration: 0.15 }, 0);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={close}
      className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
    >
      <div
        ref={panelRef}
        onClick={e => e.stopPropagation()}
        className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
      >
        <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />

        <div className="relative z-10">
          <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
            {icon}
          </div>

          <h3 className="text-3xl font-bold text-center mb-2">{title}</h3>

          <p className="text-center mb-6">{description}</p>

          <div className="flex gap-2">
            <button
              onClick={() => {
                onCancel?.();
                close();
              }}
              className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
            >
              {cancelText}
            </button>

            <button
              onClick={() => {
                onConfirm?.();
                close();
              }}
              className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
