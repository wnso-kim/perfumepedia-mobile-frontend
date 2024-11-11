// 다른 페이지에서 버튼 컴포넌트 사용 시, id,type 필수
const Button = ({
  id,
  type = "button",
  disabled = false,
  onClick = () => {},
  className,
  children,
}) => (
  <button
    id={id}
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={`w-[16rem] h-[5rem] text-[1.8rem] text-white bg-[#333236] rounded-lg disabled:bg-[#A6A6A6] focus:bg-[#D9D9D9] focus:text-[#333236] focus:border focus:border-[#C9C9C9] ${className}`}
  >
    {children}
  </button>
);

export default Button;
