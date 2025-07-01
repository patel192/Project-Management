// src/components/common/CustomButton.jsx
import React from "react";

const variants = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-gray-700 hover:bg-gray-800 text-white",
  danger: "bg-red-600 hover:bg-red-700 text-white",
  outline: "border border-gray-300 text-gray-200 hover:bg-gray-800",
};

export const CustomButton = ({
  children,
  variant = "primary",
  isLoading = false,
  disabled = false,
  onClick,
  className = "",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md ${
        variants[variant]
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};
