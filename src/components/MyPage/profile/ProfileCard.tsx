import { useNavigate } from "react-router-dom";

export default function ProfileCard() {
    const navigate = useNavigate();

  return (
    <div className="self-stretch h-64 p-8 bg-[#fff] rounded-[40px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-[#F3F4F6] inline-flex justify-start items-start gap-6 overflow-hidden">
      <div className="w-32 h-32 bg-gradient-to-br from-color-blue-89 to-color-grey-92 rounded-full shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)] flex justify-center items-center">
        <div className="w-32 h-32 relative">
          <div className="w-32 h-32 left-0 top-0 absolute bg-white rounded-full border border-stone-300" />
          <div className="w-9 h-8 left-[60.34px] top-[28.52px] absolute origin-top-left rotate-[96deg] bg-neutral-900 rounded-[3px]" />
          <div className="w-9 h-8 left-[62.14px] top-[33.08px] absolute origin-top-left rotate-[96deg] bg-zinc-300 rounded-[3px]" />
          <div className="w-9 h-8 left-[100.80px] top-[25.08px] absolute origin-top-left rotate-[84deg] bg-neutral-900 rounded-[3px]" />
          <div className="w-9 h-8 left-[99.10px] top-[29.65px] absolute origin-top-left rotate-[84deg] bg-zinc-300 rounded-[3px]" />
          <div className="w-20 h-16 left-[22.14px] top-[41.01px] absolute bg-neutral-900 rounded-full" />
        </div>
      </div>
      <div className="w-[608px] inline-flex flex-col justify-start items-start gap-2">
        <div className="px-3 py-1 bg-[#EEF2FF] rounded-full inline-flex justify-start items-start">
          <div className="justify-center text-xs font-boldFont text-[#4F46E5] leading-4">
            Lv.3 열정적인 서포터
          </div>
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-96">
          <div className="justify-center text-2xl text-mainBlack font-boldFont leading-8">
            푸른 오렌지
          </div>
          <button
            onClick={() => navigate('/mypage/editprofile')}
            data-variant="5"
            className="px-5 py-2 bg-[#000] rounded-full inline-flex flex-col justify-center items-center cursor-pointer transition hover:bg-solidBlue"
          >
            <div className="text-center justify-center text-[#FFF] text-sm font-boldFont leading-5">
              프로필 편집
            </div>
          </button>
        </div>
        <div className="self-stretch h-16 relative border-l-4 border-[#E0E7FF]">
          <div className="w-81 h-11 left-[19.40px] top-[11px] absolute justify-center text-black80 text-sm font-mainFont leading-6">
            새벽의 차분함과 아침의 희망을 노래하는 밴드 '새벽'입니다.
            <br />
            우리의 음악이 당신의 하루에 작은 위로가 되길 바랍니다.
          </div>
        </div>
        <div className="w-[608px] inline-flex justify-start items-start gap-4">
          <div className="self-stretch inline-flex flex-col justify-start items-start">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="justify-center text-lg text-mainBlack font-boldFont leading-7">
                2
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="justify-center text-xs text-black40 font-mainFont leading-4">
                보유 티켓
              </div>
            </div>
          </div>
          <div className="w-px h-8 bg-white60" />
          <div className="self-stretch inline-flex flex-col justify-start items-start">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="justify-center text-lg text-mainBlack font-boldFont leading-7">
                2
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="justify-center text-xs text-black40 font-mainFont leading-4">
                후원 참여
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
