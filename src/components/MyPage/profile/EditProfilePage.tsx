export default function EditProfilePage() {
  return (
    <div className="w-full max-w-[1440px] min-h-[713px] px-64 pb-20 relative bg-white80 inline-flex flex-col justify-start items-start overflow-visible">
      <div className="w-[1440px] h-[486px] left-0 top-0 absolute" />
      <div className="w-full max-w-[896px] px-6 pt-24 flex flex-col justify-start items-start gap-8">
        <div className="self-stretch p-8 bg-[#FFF] rounded-[40px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-white80 inline-flex justify-start items-start gap-6 overflow-hidden">
          <div className="w-32 h-32 relative">
            <div className="w-32 h-32 left-0 top-0 absolute bg-white rounded-full border border-stone-300" />
            <div className="w-9 h-8 left-[60.34px] top-[28.52px] absolute origin-top-left rotate-[96deg] bg-neutral-900 rounded-[3px]" />
            <div className="w-9 h-8 left-[62.14px] top-[33.08px] absolute origin-top-left rotate-[96deg] bg-zinc-300 rounded-[3px]" />
            <div className="w-9 h-8 left-[100.80px] top-[25.08px] absolute origin-top-left rotate-[84deg] bg-neutral-900 rounded-[3px]" />
            <div className="w-9 h-8 left-[99.10px] top-[29.65px] absolute origin-top-left rotate-[84deg] bg-zinc-300 rounded-[3px]" />
            <div className="w-20 h-16 left-[22.14px] top-[41.01px] absolute bg-neutral-900 rounded-full" />{' '}
          </div>
          <div className="w-7 h-7 bg-gray-50 rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
          <div className="w-3 h-3 bg-black" />
          <div className="w-[608px] inline-flex flex-col justify-start items-start gap-3">
            <div className="px-3 py-1 bg-color-grey-97 rounded-full inline-flex justify-start items-start">
              <div className="justify-center text-color-blue-59 text-xs font-bold font-['Pretendard'] leading-4">
                Lv.3 열정적인 서포터
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch inline-flex justify-start items-start gap-2">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch inline-flex justify-start items-center gap-44">
                    <div className="justify-center text-color-azure-27 text-sm font-medium font-['Pretendard'] leading-5">
                      닉네임
                    </div>
                    <div className="p-1 bg-neutral-200 rounded-[5px] flex justify-center items-center gap-2.5">
                      <div className="justify-center text-color-azure-27 text-xs font-bold font-['Pretendard'] leading-5">
                        중복확인
                      </div>
                    </div>
                  </div>
                  <div className="w-64 flex flex-col justify-start items-start">
                    <div className="w-64 p-4 bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-azure-84 inline-flex justify-center items-start overflow-hidden">
                      <div className="flex-1 inline-flex flex-col justify-center items-center overflow-hidden">
                        <div className="self-stretch justify-center text-color-azure-65 text-base font-normal font-['Pretendard']">
                          푸른 오렌지
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-:hover="false"
                  data-variant="5"
                  className="px-5 py-2 bg-black rounded-full inline-flex flex-col justify-center items-center"
                >
                  <div className="text-center justify-center text-color-white-solid text-sm font-bold font-['Pretendard'] leading-5">
                    프로필 편집
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-44">
                <div className="justify-center text-color-azure-27 text-sm font-medium font-['Pretendard'] leading-5">
                  이메일
                </div>
                <div className="p-1 bg-neutral-200 rounded-[5px] flex justify-center items-center gap-2.5">
                  <div className="justify-center text-color-azure-27 text-xs font-bold font-['Pretendard'] leading-5">
                    중복확인
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch pl-10 pr-4 py-4 relative bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-azure-84 inline-flex justify-center items-start overflow-hidden">
                  <div
                    data-variant="3"
                    className="w-5 h-5 left-[13px] top-[17px] absolute"
                  >
                    <div className="w-4 h-3.5 left-[1.67px] top-[3.33px] absolute outline outline-[1.67px] outline-offset-[-0.83px] outline-color-azure-65" />
                    <div className="w-4 h-[5px] left-[1.67px] top-[5.83px] absolute outline outline-[1.67px] outline-offset-[-0.83px] outline-color-azure-65" />
                  </div>
                  <div className="flex-1 inline-flex flex-col justify-center items-center overflow-hidden">
                    <div className="self-stretch justify-center text-color-azure-65 text-base font-normal font-['Pretendard']">
                      example@muses.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch justify-center text-color-azure-27 text-sm font-medium font-['Pretendard'] leading-5">
                소개글
              </div>
              <div className="self-stretch p-4 bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-azure-84 inline-flex justify-start items-center overflow-hidden">
                <div className="w-80 inline-flex flex-col justify-center items-start overflow-hidden">
                  <div className="self-stretch justify-center text-color-azure-34 text-sm font-normal font-['Pretendard'] leading-6">
                    새벽의 차분함과 아침의 희망을 노래하는 밴드 '새벽'입니다.
                    <br />
                    우리의 음악이 당신의 하루에 작은 위로가 되길 바랍니다.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch inline-flex justify-start items-start gap-7">
                <div className="flex-1 h-20 inline-flex flex-col justify-center items-center gap-1">
                  <div className="self-stretch justify-center text-color-azure-27 text-sm font-medium font-['Pretendard'] leading-5">
                    생년월일
                  </div>
                  <div className="w-44 flex flex-col justify-start items-start">
                    <div className="self-stretch px-4 py-3.5 bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-azure-84 inline-flex justify-center items-start overflow-hidden">
                      <div className="flex-1 inline-flex flex-col justify-center items-center overflow-hidden">
                        <div className="self-stretch justify-center text-color-azure-65 text-base font-normal font-['Pretendard']">
                          980102
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-center items-center gap-1">
                  <div className="w-32 justify-center text-color-azure-27 text-sm font-medium font-['Pretendard'] leading-5">
                    성별
                  </div>
                  <div className="w-32 h-12 flex flex-col justify-center items-end">
                    <div className="self-stretch h-12 px-4 py-3.5 bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-azure-84 inline-flex justify-center items-center gap-7 overflow-hidden">
                      <div className="inline-flex flex-col justify-center items-center">
                        <div className="text-center justify-center text-color-azure-34 text-base font-bold font-['Pretendard'] leading-6">
                          여자
                        </div>
                      </div>
                      <div data-variant="6" className="w-4 h-4 relative">
                        <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-color-azure-34" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
