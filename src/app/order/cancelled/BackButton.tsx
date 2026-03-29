"use client";

export default function BackButton() {
  return (
    <button
      onClick={() => {
        if (window.history.length > 1) {
          window.history.back();
        } else {
          window.location.href = "/";
        }
      }}
      className="bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all"
    >
      Try Again
    </button>
  );
}
