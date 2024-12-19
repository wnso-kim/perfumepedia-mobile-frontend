import React from "react";
import { useForm } from "react-hook-form";
import SearchInput from "../components/common/SearchInput";
import searchIcon from "../asset/icon/searchIcon.svg";

const SearchInputTest = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleSearchClick = () => {
    console.log("버튼클릭");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* 검색창 input */}
          <SearchInput
            placeholder="향수를 검색해 보세요"
            register={register}
            onSearchClick={handleSearchClick}
            buttonImage={searchIcon}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchInputTest;
