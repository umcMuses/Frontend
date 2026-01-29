interface SettlementTabProps {
  projectId?: string;
}

const SettlementTab = ({ projectId }: SettlementTabProps) => {
  return (
<div className="w-[768px] p-8 bg-color-white-solid rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-color-grey-96 inline-flex flex-col justify-start items-start gap-6">
    <div className="w-[702px] inline-flex justify-start items-center gap-[510.02px]">
        <div className="inline-flex flex-col justify-start items-start">
            <div className="justify-center text-color-azure-17 text-xl font-bold font-['Pretendard_Variable'] leading-7">정산</div>
        </div>
    </div>
    <div className="w-[702px] flex flex-col justify-start items-start gap-6">
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-color-azure-27 text-sm font-medium font-['Pretendard'] leading-5">총 모금액</div>
            </div>
            <div className="self-stretch relative flex flex-col justify-start items-start">
                <div className="self-stretch h-14 relative bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-grey-91 overflow-hidden">
                    <div className="w-[637px] left-[17px] top-[19.50px] absolute inline-flex flex-col justify-start items-start overflow-hidden">
                        <div className="justify-center text-color-azure-34 text-base font-normal font-['Pretendard'] leading-6">지역 문화예술 축제를 통해 커뮤니티를 연결합니다.</div>
                    </div>
                </div>
                <div className="w-3.5 h-6 left-[672.17px] top-[17px] absolute" />
            </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-color-azure-27 text-sm font-medium font-['Pretendard'] leading-5">수수료</div>
            </div>
        </div>
        <div className="self-stretch px-4 py-5 bg-color-white-solid rounded-xl outline outline-1 outline-offset-[-1px] outline-color-grey-91 inline-flex justify-center items-start overflow-hidden">
            <div className="flex-1 inline-flex flex-col justify-start items-start overflow-hidden">
                <div className="self-stretch justify-center text-color-azure-65 text-base font-normal font-['Pretendard']">#태그 입력 (Enter)</div>
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
                            <div className="justify-center text-color-orange-29 text-base font-semibold font-['Pretendard'] leading-6">지급액</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch p-4 bg-color-grey-95 rounded-xl inline-flex justify-start items-start">
                <div className="pl-3 inline-flex flex-col justify-start items-start">
                    <div className="flex flex-col justify-start items-start gap-1">
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="justify-center text-color-orange-29 text-base font-semibold font-['Pretendard'] leading-6">지급 완료</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default SettlementTab;
