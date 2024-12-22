import Header from "../components/common/Header";

const RequestList = () => {
  return (
    <>
      <Header />
      <main className="w-[32.4rem] mt-[3.4rem] ml-[2.5rem]">
        <nav className="h-[10.7rem] flex gap-[2.4rem] text-[2.4rem]">
          <section className="w-[9.2rem] rounded-[1.5rem] bg-white border border-solid border-gray-d9 flex flex-col justify-center items-center">
            <p>등록</p>
            <p>3개</p>
          </section>
          <section className="w-[9.2rem] rounded-[1.5rem] bg-white border border-solid border-gray-d9 flex flex-col justify-center items-center">
            <p>수정</p>
            <p>13개</p>
          </section>
          <section className="w-[9.2rem] rounded-[1.5rem] bg-white border border-solid border-gray-d9 flex flex-col justify-center items-center">
            <p>삭제</p>
            <p>113개</p>
          </section>
        </nav>
        <aside className="mt-[5.6rem]">
          <ul>
            <li className="flex gap-[2.4rem] items-center text-[2rem]">
              <div className="w-[6rem] h-[4rem] rounded-[5rem]  text-white bg-gray-33 flex justify-center items-center">
                등록
              </div>
              <span>플레르 드 뽀</span>
            </li>
          </ul>
        </aside>
      </main>
    </>
  );
};
export default RequestList;
