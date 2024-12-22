import { useForm } from "react-hook-form";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import imageIcon from "../asset/icon/imageIcon.svg";

const UserEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center">
        <h1 className="text-20 mt-[1.9rem] mb-[2.4rem] font-[Paperlogy]">수정 요청 페이지</h1>
        <div className="flex flex-col gap-[1.6rem]">
          <div className="w-[20rem] h-[20rem] border border-solid border-gray-d9 rounded-[1rem] bg-gray-ee flex justify-center items-center">
            <img src={imageIcon} alt="이미지 아이콘" />
          </div>
          <div className="w-[20rem] h-[20rem] border border-solid border-gray-d9 rounded-[1rem] bg-gray-ee flex justify-center items-center">
            <img src={imageIcon} alt="이미지 아이콘" />
          </div>
        </div>
        <form className="w-[35rem] mt-[4rem] mb-[8rem]" onSubmit={handleSubmit(onSubmit)}>
          <section className="mb-[1.6rem]">
            <Input
              labelClassName="font-semibold"
              label="브랜드"
              name="brand"
              placeholder="브랜드 이름을 입력해주세요"
              register={register}
              error={errors.username}
            />
            <Input
              labelClassName="font-semibold"
              label="브랜드 (수정 요청)"
              name="brandEdit"
              placeholder="브랜드 이름을 입력해주세요"
              register={register}
              error={errors.username}
            />
          </section>
          <section className="mb-[1.6rem]">
            <Input
              labelClassName="font-semibold"
              label="향수 이름"
              name="perfume"
              placeholder="향수 이름을 입력해주세요"
              register={register}
              error={errors.username}
            />
            <Input
              labelClassName="font-semibold"
              label="향수 이름 (수정 요청)"
              name="perfumeEdit"
              placeholder="향수 이름을 입력해주세요"
              register={register}
              error={errors.username}
            />
          </section>
          <section className="mb-[1.6rem]">
            <p className="text-16 font-semibold mb-2">노트 선택</p>
            <div className="flex justify-center items-center gap-[3.1rem]">
              <Button id="default">싱글</Button>
              <Button id="default">혼합</Button>
            </div>
          </section>
          <section className="mb-[7.2rem]">
            <p className="text-16 font-semibold mb-2">노트 이름</p>
            <Input
              label="싱글 노트"
              name="single"
              placeholder="이메일을 입력해주세요"
              register={register}
              error={errors.username}
            />
            <Input
              label="싱글 노트 (수정 요청)"
              name="singleEdit"
              placeholder="이메일을 입력해주세요"
              register={register}
              error={errors.username}
            />
            {/* 혼합일 경우 */}
            {/* <Input
              label="탑 노트"
              name="top"
              placeholder="이메일을 입력해주세요"
              register={register}
              error={errors.username}
            />
            <Input
              label="탑 노트 (수정 요청)"
              name="topEdit"
              placeholder="이메일을 입력해주세요"
              register={register}
              error={errors.username}
            />
            <Input
              label="미들 노트"
              name="middle"
              placeholder="이메일을 입력해주세요"
              register={register}
              error={errors.username}
            />
            <Input
              label="미들 노트 (수정 요청)"
              name="middleEdit"
              placeholder="이메일을 입력해주세요"
              register={register}
              error={errors.username}
            />
            <Input
              label="베이스 노트"
              name="base"
              placeholder="이메일을 입력해주세요"
              register={register}
              error={errors.username}
            />
            <Input
              label="베이스 노트 (수정 요청)"
              name="baseEdit"
              placeholder="이메일을 입력해주세요"
              register={register}
              error={errors.username}
            />
            */}
          </section>
          <Button id="submit" type="submit" className="w-[35rem] mb-[0.8rem]">
            수정 요청하기
          </Button>
        </form>
      </main>
    </>
  );
};
export default UserEdit;
