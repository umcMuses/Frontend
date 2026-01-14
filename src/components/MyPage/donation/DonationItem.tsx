import { type DonationItem as DonationItemType } from '../types/types';

interface Props {
  item: DonationItemType;
}
const DonationItem = ({ item }: Props) => {
  return (
    <div className="self-stretch p-6 bg-white rounded-[32px] outline outline-1 outline-offset-[-1px] outline-gray-100 inline-flex justify-start items-center gap-6">
      <div className="w-14 h-14 bg-color-grey-97 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-center items-center">
        <div className="text-center text-color-blue-67 text-2xl font-bold leading-8">
          {item.initial}
        </div>
      </div>

      <div className="flex-1 inline-flex flex-col gap-1">
        <div className="flex justify-between">
          <div className="px-2 py-0.5 bg-color-grey-97 rounded">
            <div className="text-color-blue-59 text-xs font-bold">
              {item.status}
            </div>
          </div>
          <div className="text-color-azure-65 text-xs">
            {item.date}
          </div>
        </div>

        <div className="text-color-azure-11 text-base font-bold leading-6 truncate">
          {item.title}
        </div>

        <div className="text-color-grey-46 text-sm font-bold">
          {item.amount.toLocaleString()}원
        </div>
      </div>

      <div className="w-5 h-5 relative" />
    </div>
  );
};

export default DonationItem