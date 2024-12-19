// 다른 페이지에서 버튼 컴포넌트 사용 시, id,type 필수
const Button = ({
  id,
  type = "button",
  disabled = false,
  onClick = () => {},
  className,
  children,
  isChange,
}) => (
  <button
    id={id}
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={`w-[16rem] h-[5rem] text-[1.8rem]  bg-gray-33  disabled:bg-gray-a6 focus:bg-gray-d9 focus:text-gray-33 focus:border focus:border-gray-c9 ${className} ${isChange ? "text-gray-33 rounded-[50px]" : "text-white rounded-lg"}`}
  >
    {children}
  </button>
);

export default Button;
