import { type DonationItem as DonationItemType } from '../types/types';

interface Props {
  item: DonationItemType;
}

const DonationItem = ({ item }: Props) => {
  return (
<div className="bg-white rounded-[32px] p-7 flex items-center shadow-sm">
  <div className="flex gap-4 items-center w-full">

        <div className="flex gap-4 items-start w-full">
          {/* 왼쪽 아이콘 */}
          <div className="w-[56px] h-[56px] rounded-xl bg-[#EEF2FF] flex items-center justify-center text-lg text-blue-700 font-bold shrink-0">
            {item.initial}
          </div>

          {/* 오른쪽 전체 영역 */}
          <div className="flex-1 w-full grid grid-cols-[1fr_auto] gap-y-1">
            {/* 1줄: 결제 상태 / 날짜 */}
            <span className="w-fit text-xs px-2 py-0.5 bg-[#EEF2FF] text-blue-700 rounded">
              {item.status}
            </span>

            <span className="text-xs text-gray-400 justify-self-end">
              {item.date}
            </span>

            {/* 2줄: 타이틀 */}
            <span className="w-full text-sm font-semibold">{item.title}</span>
            <span />

            {/* 3줄: 금액 */}
            <span className="w-full text-xs text-gray-500">
              {item.amount.toLocaleString()}원
            </span>
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationItem;
