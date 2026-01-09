interface LoginSigninButtonProps {
  onClick?: () => void;
}

const LoginSigninButton = ({ onClick }: LoginSigninButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
        flex flex-col items-center justify-center py-2.5 px-5 rounded-full bg-gray-900 cursor-pointer hover:px-[21px] hover:py-[10.5px]"
    >
      <span className="text-center text-sm font-boldFont text-white">
        로그인/회원가입
      </span>
    </button>
  );
};

export default LoginSigninButton;
