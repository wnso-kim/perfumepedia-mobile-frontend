import Button from "../components/common/Button";

// 다양한 버튼 사용 예시(예시 합쳐서 다양한 조합으로 사용 가능)
// 기본 버튼
export const DefaultButton = () => {
  return <Button id="default">싱글</Button>;
};
// 비활성화 버튼(기본과 디자인 다름)
export const DisabledButton = () => {
  return (
    <Button id="disabled" disabled>
      싱글
    </Button>
  );
};
// 확인 버튼(크기가 작음)
export const CheckButton = () => {
  return (
    <Button id="check" className="w-[7rem]">
      확인
    </Button>
  );
};
// 제출 버튼(type이 submit)
export const SubmitButton = () => {
  return (
    <Button id="submit" type="submit" className="w-[35rem]">
      로그인
    </Button>
  );
};
// 변경 버튼(기본과 디자인 다름)
export const ChangeButton = () => {
  return (
    <Button
      id="change"
      className="w-[17.6rem] h-[4rem] rounded-[50px] border border-[#D9D9D9] bg-[#FFF] text-[#333236]"
    >
      닉네임 변경
    </Button>
  );
};
