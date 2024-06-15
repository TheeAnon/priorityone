import React from "react";

export const InputComponent = ({
  type,
  name,
  placeholder,
  required,
  error,
  value,
  onChange,
  className,
}) => {
  return (
    <input
      type={type && type}
      name={name}
      placeholder={placeholder}
      required={required}
      isInvalid={error}
      className={`w-full rounded p-3 border text-black ${className}`}
      value={value}
      onChange={onChange}
    />
  );
};
