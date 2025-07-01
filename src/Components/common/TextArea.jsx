// src/components/common/TextArea.jsx
import React from "react";

export const TextArea = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder = "",
  error = "",
  required = false,
  rows = 4,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-200 mb-1"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`w-full px-4 py-2 bg-zinc-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none ${error ? "border-red-500" : ""} ${className}`}
        {...props}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};
