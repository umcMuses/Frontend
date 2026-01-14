import { ChevronRight } from 'lucide-react';

const RecentDonations = () => {
  return (
    <div className="self-stretch inline-flex flex-col justify-start items-start gap-4">
      <div
        data-:hover="false"
        data-variant="1"
        className="self-stretch p-6 bg-white rounded-[32px] border border-white80 inline-flex justify-start items-center gap-6"
      >
        <div className="w-14 h-14 bg-[#EEF2FF] rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-center items-center">
          <div className="text-center justify-center text-solidBlue text-2xl font-boldFont leading-8">
            밴
          </div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="self-stretch px-2 py-0.5 bg-[#EEF2FF] rounded inline-flex flex-col justify-start items-start">
              <div className="justify-center text-[#4F46E5] text-xs font-boldFont leading-4">
                결제완료
              </div>
            </div>
            <div className="self-stretch inline-flex flex-col justify-start items-start">
              <div className="justify-center text-black40 text-xs font-mainFont leading-4">
                2025.10.01
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
            <div className="self-stretch justify-center text-[#111827] text-base font-boldFont leading-6">
              밴드 '새벽' 단독 콘서트
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-black60 text-sm font-boldFont leading-5">
              55,000원
            </div>
          </div>
        </div>
        <div data-variant="8" className="w-5 h-5 relative">
          <ChevronRight className="text-white60" />
        </div>
      </div>
      <div
        data-:hover="false"
        data-variant="1"
        className="self-stretch p-6 bg-white rounded-[32px] border border-white80 inline-flex justify-start items-center gap-6"
      >
        <div className="w-14 h-14 bg-[#EEF2FF] rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-center items-center">
          <div className="text-center justify-center text-solidBlue text-2xl font-boldFont leading-8">
            재
          </div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="self-stretch px-2 py-0.5 bg-[#EEF2FF] rounded inline-flex flex-col justify-start items-start">
              <div className="justify-center text-[#4F46E5] text-xs font-boldFont leading-4">
                결제완료
              </div>
            </div>
            <div className="self-stretch inline-flex flex-col justify-start items-start">
              <div className="justify-center text-black40 text-xs font-mainFont leading-4">
                2024.12.15
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
            <div className="self-stretch justify-center text-[#111827] text-base font-boldFont leading-6">
              재즈 페스티벌 얼리버드
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-center text-black60 text-sm font-boldFont leading-5">
              88,000원
            </div>
          </div>
        </div>
        <div data-variant="8" className="w-5 h-5 relative">
          <ChevronRight className="text-white60" />
        </div>
      </div>
    </div>
  );
};

export default RecentDonations;
