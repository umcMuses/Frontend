interface Props {
  step: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function NavigationButtons({ step, onPrev, onNext }: Props) {
  return (
    <div className="flex justify-between pt-8">
      {step > 1 ? (
        <button
          onClick={onPrev}
          className="px-6 py-3 bg-white80 rounded-xl inline-flex flex-col justify-center items-center text-black80 font-boldFont cursor-pointer hover:bg-white60"
        >
          이전
        </button>
      ) : (
        <div />
      )}

      <button
        onClick={onNext}
        className="text-center justify-center px-8 py-3 bg-mainBlack text-white font-boldFont rounded-xl leading-6 cursor-pointer hover:bg-solidBlue"
      >
        {step === 5 ? '제출하기' : '다음 단계'}
      </button>
    </div>
  );
}
