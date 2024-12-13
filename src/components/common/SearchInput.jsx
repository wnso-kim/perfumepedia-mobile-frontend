import React from "react";

const SearchInput = ({
  name = "search",
  type = "text",
  register,
  placeholder,
  onSearchClick,
  buttonImage,
  className,
}) => {
  return (
    <div className="flex items-center gap-4">
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`w-[32.5rem] h-[5rem] px-6 py-4 border rounded-full border-gray-d9 ${className}`}
      />
      <button
        type="button"
        onClick={onSearchClick}
        className="flex items-center justify-center w-[5rem] h-[5rem] rounded-full border border-gray-d9"
      >
        <img src={buttonImage} alt="Search" className="w-8 h-8" />
      </button>
    </div>
  );
};

export default SearchInput;
