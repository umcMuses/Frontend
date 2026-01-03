const CreatorEmptySection = () => {
  return (
    <section className="max-w-[848px]">
      <div className="bg-white rounded-[32px] p-[64px] flex flex-col items-center text-center gap-6 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
          🚀
        </div>

        <h2 className="text-lg font-semibold">아직 크리에이터가 아니신가요?</h2>

        <p className="text-sm text-gray-500">
          나만의 프로젝트를 개설하고, 팬들과 소통해보세요.
          <br />
          간단한 인증 절차 후 바로 시작할 수 있습니다.
        </p>

        <button
          className="
    mt-4
    px-6
    py-3
    rounded-xl
    bg-orange-500
    text-white
    font-semibold
    shadow-[0_12px_24px_rgba(234,88,12,0.45)]
  "
        >
          크리에이터 전환 신청하기
        </button>
      </div>
    </section>
  );
};

export default CreatorEmptySection;
