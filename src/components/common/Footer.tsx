const footerLinks = ['서비스 소개', '이용약관', '개인정보처리방침', '고객센터'];

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#F3F4F6] bg-white py-16 px-[72.5px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-6">
        <div className="flex justify-center items-start gap-10">
          {footerLinks.map((text) => (
            <p
              key={text}
              className="text-center text-sm font-medium leading-5 text-gray-500"
            >
              {text}
            </p>
          ))}
        </div>

        <p className="text-center text-sm font-normal leading-5 text-gray-400">
          © 2025 Muses Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
