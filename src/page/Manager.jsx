import Header from "../components/common/Header";

const Manager = () => {
  return (
    <>
      <Header />
      <main className="w-[30.2rem] mt-[7.2rem] ml-[3.6rem] flex flex-col gap-[5.5rem] justify-center items-center font-[Paperlogy]">
        <h1 className="text-[4rem]">관리자 페이지</h1>
        <div className="flex gap-[2.6rem] text-[3.2rem]">
          <section className="w-[13.8rem] h-[16rem] rounded-[1.5rem] bg-white border border-solid border-gray-d9 flex flex-col justify-center items-center">
            <p>향수</p>
            <p>
              <span className="font-bold text-[3.6rem]">128</span>개
            </p>
          </section>
          <section className="w-[13.8rem] h-[16rem] rounded-[1.5rem] bg-white border border-solid border-gray-d9 flex flex-col justify-center items-center">
            <p>브랜드</p>
            <p>
              <span className="font-bold text-[3.6rem]">28</span>개
            </p>
          </section>
        </div>
        <section className="w-full h-[20.9rem] rounded-[1.5rem] bg-white border border-solid border-gray-d9 flex flex-col justify-center items-center gap-[2.6rem] text-[3.2rem]">
          <p>
            요청 <span className="font-bold text-[3.6rem]">998</span>개
          </p>
          <div className="w-full flex text-[2.4rem] justify-evenly">
            <section className="flex flex-col justify-center items-center">
              <p>등록</p>
              <p>3개</p>
            </section>
            <section className="flex flex-col justify-center items-center">
              <p>수정</p>
              <p>13개</p>
            </section>
            <section className="flex flex-col justify-center items-center">
              <p>삭제</p>
              <p>113개</p>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};
export default Manager;
