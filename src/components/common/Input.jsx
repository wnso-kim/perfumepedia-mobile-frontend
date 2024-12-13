import React from "react";

const Input = ({
  label,
  name,
  type = "text",
  register,
  error,
  placeholder,
  labelClassName,
  inputClassName,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className={`block w-full mb-2 text-16 text-black ${labelClassName}`}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`w-[35.1rem] h-[5rem] px-4 py-4 border rounded-lg ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-d9"
        } ${inputClassName}`}
      />
      {error && <span className="text-sm text-red-500 mt-1 block">{error.message}</span>}
    </div>
  );
};

export default Input;
