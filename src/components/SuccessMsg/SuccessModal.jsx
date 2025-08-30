import React from "react";

export default function SuccessModal({
  open,
  onClose,
  title = "Success!",
  message = "Operation completed successfully.",
  buttonText = "OK",
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center relative">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-700"
        >
          ✕
        </button>

        {/* Green success icon */}
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Dynamic content */}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-slate-600 mb-6">{message}</p>

        {/* Action button */}
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-700"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
