import React from "react";
import { useForm } from "react-hook-form";
import Input from "../components/common/Input";

const InputTest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* 글씨 굵기 regular input */}
          <Input
            label="이메일"
            name="email"
            placeholder="이메일을 입력해주세요"
            register={register}
            error={errors.username}
          />
          {/* 글씨 굵기 semibold label */}
          <Input
            labelClassName="font-semibold"
            label="이메일"
            name="email"
            placeholder="이메일을 입력해주세요"
            register={register}
            error={errors.username}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputTest;
