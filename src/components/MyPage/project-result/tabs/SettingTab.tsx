import { Lightbulb, Lock, PencilLine } from 'lucide-react';
import { useState } from 'react';

interface TabProps {
  projectId?: string;
}

const SettingTab = ({ projectId }: TabProps) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {!isEditing ? (
        // 기존 SettingTab UI
        <div className="w-[768px] p-8 bg-white rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-white80 flex flex-col gap-6">
          {/* header */}
          <div className="flex items-center justify-between">
            <div className="text-mainBlack text-xl font-boldFont leading-7">
              프로젝트 설정
            </div>

            <button
              data-variant="1"
              className="px-4 py-2 bg-[#9333EA] rounded-lg flex items-center gap-2 text-white cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              <PencilLine size={16} />
              <div className="text-base font-mainFont leading-6">수정</div>
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {/* description */}
            <div className="flex flex-col gap-2">
              <div className="text-[#374151] text-sm font-mediumFont leading-5">
                프로젝트 설명
              </div>
              <input
                placeholder="지역 문화예술 축제를 통해 커뮤니티를 연결합니다."
                className="p-4 bg-[#F8F9FC] rounded-xl text-black80 text-base font-mainFont leading-6"
              ></input>
            </div>

            {/* tags */}
            <div className="flex flex-col gap-2">
              <div className="text-[#374151] text-sm font-mediumFont leading-5">
                태그
              </div>
              <div className="flex flex-wrap gap-2">
                {['음악', '축제', '지역문화'].map((tag) => (
                  <div
                    key={tag}
                    className="px-3 py-1 bg-[#F3E8FF] rounded-full text-[#7E22CE] text-sm font-mainFont leading-5"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* info */}
            <div className="pt-6 border-t border-white60 flex gap-4">
              <div className="flex-1 flex flex-col gap-2">
                <div className="text-black60 text-sm font-mediumFont leading-5">
                  목표 금액
                </div>
                <div className="px-4 py-3 bg-white80 rounded-xl flex items-center gap-2 text-black60">
                  <Lock size={16} />
                  <div className="text-base font-mainFont leading-6">
                    15,000,000원
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-2">
                <div className="text-black60 text-sm font-mediumFont leading-5">
                  마감일
                </div>
                <div className="px-4 py-3 bg-white80 rounded-xl flex items-center gap-2 text-black60">
                  <Lock size={16} />
                  <div className="text-base font-mainFont leading-6">
                    2025-01-10
                  </div>
                </div>
              </div>
            </div>

            {/* tip */}
            <div className="p-4 bg-[#EEF2FF] text-[#1D4ED8] text-sm font-mainFont rounded-xl flex gap-3">
              <Lightbulb size={20} className="mt-0.5" />
              <div className="flex flex-col gap-1">
                <div className="text-[#1E40AF] text-base font-semiBoldFont leading-6">
                  프로젝트 관리 팁
                </div>
                <div className="leading-5">
                  • 메이커와 주기적으로 소통하세요
                  <br />
                  • 프로젝트 진행 상황을 업데이트하세요
                  <br />• 리워드 재고를 정기적으로 확인하세요
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // 수정 모드 UI
        <div className="w-[768px] p-8 bg-white rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-white80 flex flex-col gap-6">
          {/* header */}
          <div className="flex items-center justify-between">
            <div className="text-mainBlack text-xl font-boldFont leading-7">
              프로젝트 설정
            </div>

            <button
              data-variant="1"
              className="px-4 py-2 bg-[#9333EA] rounded-lg flex items-center gap-2 text-white cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              <PencilLine size={16} />
              <div className="text-base font-mainFont leading-6">수정</div>
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {/* description */}
            <div className="flex flex-col gap-2">
              <div className="text-[#374151] text-sm font-mediumFont leading-5">
                프로젝트 설명
              </div>
              <input
                placeholder="지역 문화예술 축제를 통해 커뮤니티를 연결합니다."
                className="p-4 bg-[#F8F9FC] rounded-xl text-black80 text-base font-mainFont leading-6"
              ></input>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-color-azure-27 text-sm font-medium font-['Pretendard'] leading-5">
                  태그
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-2 flex-wrap content-start">
                <div className="w-16 h-7 relative bg-color-grey-95 rounded-full">
                  <div className="left-[12px] top-[4px] absolute justify-center text-color-violet-47 text-sm font-normal font-['Pretendard'] leading-5">
                    음악
                  </div>
                  <div className="w-3 h-3 left-[40.50px] top-[8px] absolute overflow-hidden">
                    <div className="w-2.5 h-1.5 left-[1px] top-[2.50px] absolute outline outline-[0.60px] outline-offset-[-0.30px] outline-purple-700" />
                  </div>
                </div>
                <div className="w-16 h-7 relative bg-color-grey-95 rounded-full">
                  <div className="left-[12px] top-[4px] absolute justify-center text-color-violet-47 text-sm font-normal font-['Pretendard'] leading-5">
                    축제
                  </div>
                  <div className="w-3 h-3 left-[40.50px] top-[8px] absolute overflow-hidden">
                    <div className="w-2.5 h-1.5 left-[1px] top-[2.50px] absolute outline outline-[0.60px] outline-offset-[-0.30px] outline-purple-700" />
                  </div>
                </div>
                <div className="w-16 h-7 relative bg-color-grey-95 rounded-full">
                  <div className="left-[12px] top-[4px] absolute justify-center text-color-violet-47 text-sm font-normal font-['Pretendard'] leading-5">
                    공연
                  </div>
                  <div className="w-3 h-3 left-[40.50px] top-[8px] absolute overflow-hidden">
                    <div className="w-2.5 h-1.5 left-[1px] top-[2.50px] absolute outline outline-[0.60px] outline-offset-[-0.30px] outline-purple-700" />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-5 bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-grey-91 inline-flex justify-center items-start overflow-hidden">
              <div className="flex-1 inline-flex flex-col justify-start items-start overflow-hidden">
                <div className="self-stretch justify-center text-color-azure-65 text-base font-normal font-['Pretendard']">
                  #태그 입력 (Enter)
                </div>
              </div>
            </div>
            <div className="self-stretch pt-6 border-t border-color-grey-91 flex flex-col justify-start items-start gap-4">
              <div className="self-stretch p-4 bg-color-grey-95 rounded-xl inline-flex justify-start items-start">
                <div className="w-5 h-5 pt-0.5 inline-flex flex-col justify-start items-start">
                  <div data-variant="3" className="w-5 h-5 relative">
                    <div className="w-3.5 h-2.5 left-[2.50px] top-[9.17px] absolute outline outline-[1.67px] outline-offset-[-0.83px] outline-color-orange-40" />
                    <div className="w-2 h-2 left-[5.83px] top-[1.67px] absolute outline outline-[1.67px] outline-offset-[-0.83px] outline-color-orange-40" />
                  </div>
                </div>
                <div className="pl-3 inline-flex flex-col justify-start items-start">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch flex flex-col justify-start items-start">
                      <div className="justify-center text-color-orange-29 text-base font-semibold font-['Pretendard'] leading-6">
                        수정 불가 항목
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-center items-start gap-4">
                <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-color-grey-46 text-sm font-medium font-['Pretendard'] leading-5">
                      목표 금액
                    </div>
                  </div>
                  <div className="self-stretch px-4 py-3 bg-color-grey-96 rounded-xl inline-flex justify-start items-center">
                    <div data-variant="4" className="w-4 h-4 relative">
                      <div className="w-3 h-2 left-[2px] top-[7.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-color-grey-46" />
                      <div className="w-1.5 h-1.5 left-[4.67px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-color-grey-46" />
                    </div>
                    <div className="pl-2 inline-flex flex-col justify-start items-start">
                      <div className="justify-center text-color-grey-46 text-base font-normal font-['Pretendard'] leading-6">
                        15,000,000원
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center text-color-grey-46 text-sm font-medium font-['Pretendard'] leading-5">
                      마감일
                    </div>
                  </div>
                  <div className="self-stretch px-4 py-3 bg-color-grey-96 rounded-xl inline-flex justify-start items-center">
                    <div data-variant="5" className="w-4 h-4 relative">
                      <div className="w-3 h-2 left-[2px] top-[7.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-color-grey-46" />
                      <div className="w-1.5 h-1.5 left-[4.67px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-color-grey-46" />
                    </div>
                    <div className="pl-2 inline-flex flex-col justify-start items-start">
                      <div className="justify-center text-color-grey-46 text-base font-normal font-['Pretendard'] leading-6">
                        2025-01-10
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch px-6 pt-12 pb-6 relative bg-color-white-solid rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-color-grey-94 flex flex-col justify-start items-start gap-4">
                <div className="left-[586.46px] top-[17px] absolute inline-flex justify-start items-start gap-2">
                  <div className="self-stretch px-2 py-1 bg-zinc-100 rounded inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-black text-xs font-bold font-['Pretendard_Variable'] leading-4">
                      Reward #1
                    </div>
                  </div>
                  <div
                    data-:hover="false"
                    data-variant="1"
                    className="py-1 inline-flex flex-col justify-start items-start"
                  >
                    <div data-variant="3" className="w-4 h-4 relative">
                      <div className="w-2.5 h-3 left-[2.67px] top-[2px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-color-azure-65" />
                    </div>
                  </div>
                </div>
                <div className="w-[670px] pb-4 border-b border-color-grey-96 inline-flex justify-end items-center gap-96">
                  <div className="flex justify-start items-center gap-1">
                    <div data-variant="4" className="w-4 h-4 relative">
                      <div className="w-3 h-2.5 left-[2px] top-[3.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-black" />
                    </div>
                    <div className="justify-center text-black text-sm font-bold font-['Pretendard_Variable'] leading-5">
                      티켓형
                    </div>
                  </div>
                  <div className="w-60 p-4 bg-zinc-100 rounded-xl outline outline-1 outline-offset-[-1px] outline-color-grey-96 inline-flex flex-col justify-center items-end">
                    <div className="inline-flex justify-start items-center gap-20">
                      <div className="flex justify-start items-center gap-1">
                        <div className="w-6 h-6 relative overflow-hidden">
                          <div className="w-5 h-4 left-[3px] top-[3px] absolute bg-black" />
                        </div>
                        <div className="justify-center text-black text-xs font-bold font-['Pretendard_Variable'] leading-4">
                          QR 발급
                        </div>
                      </div>
                      <div className="flex justify-start items-center gap-2">
                        <div className="w-4 h-4 bg-color-white-solid rounded-sm border border-color-grey-46" />
                        <div className="inline-flex flex-col justify-start items-start">
                          <div className="justify-center text-color-azure-11 text-xs font-normal font-['Pretendard'] leading-4">
                            사용함
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[670px] inline-flex justify-center items-start gap-4">
                  <div className="flex-1 self-stretch pt-1.5 inline-flex flex-col justify-start items-start gap-1.5">
                    <div className="justify-center text-color-grey-46 text-xs font-bold font-['Pretendard_Variable'] leading-4">
                      리워드 이름
                    </div>
                    <div className="self-stretch px-3 py-3.5 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-grey-91 inline-flex justify-center items-start overflow-hidden">
                      <div className="flex-1 inline-flex flex-col justify-start items-start overflow-hidden">
                        <div className="self-stretch justify-center text-color-azure-65 text-sm font-normal font-['Pretendard']">
                          예) VIP 관람권
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 self-stretch pt-1.5 inline-flex flex-col justify-start items-start gap-1.5">
                    <div className="justify-center text-color-grey-46 text-xs font-bold font-['Pretendard_Variable'] leading-4">
                      후원 금액
                    </div>
                    <div className="self-stretch h-11 relative bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-grey-91 overflow-hidden">
                      <div className="w-72 left-[13px] top-[14.50px] absolute inline-flex flex-col justify-start items-start overflow-hidden">
                        <div className="justify-center text-color-azure-65 text-sm font-normal font-['Pretendard']">
                          0
                        </div>
                      </div>
                      <div className="w-72 left-[13px] top-[13px] absolute inline-flex justify-start items-center">
                        <div className="flex-1 h-5 relative" />
                        <div className="w-3.5 self-stretch min-w-3.5 opacity-0" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[670px] p-4 bg-zinc-100 rounded-xl outline outline-1 outline-offset-[-1px] outline-color-grey-96 flex flex-col justify-center items-start">
                  <div className="inline-flex justify-start items-center gap-[520px]">
                    <div className="flex justify-start items-center gap-1">
                      <div className="w-3 h-3 relative overflow-hidden">
                        <div className="w-2 h-2 left-[1.50px] top-[1.50px] absolute bg-black" />
                      </div>
                      <div className="justify-center text-black text-xs font-bold font-['Pretendard_Variable'] leading-4">
                        수량 설정
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                      <div className="w-4 h-4 bg-color-white-solid rounded-sm border border-color-grey-46" />
                      <div className="inline-flex flex-col justify-start items-start">
                        <div className="justify-center text-color-azure-11 text-xs font-normal font-['Pretendard'] leading-4">
                          사용함
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[670px] py-1.5 flex flex-col justify-start items-start gap-1.5">
                  <div className="justify-center text-color-grey-46 text-xs font-bold font-['Pretendard_Variable'] leading-4">
                    리워드 설명
                  </div>
                  <div className="self-stretch px-3 pt-3 pb-8 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-grey-91 inline-flex justify-center items-start overflow-hidden">
                    <div className="flex-1 inline-flex flex-col justify-start items-start">
                      <div className="self-stretch justify-center text-color-azure-65 text-sm font-normal font-['Pretendard'] leading-5">
                        리워드 구성품 상세 설명
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingTab;
