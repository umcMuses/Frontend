import DonationItem from "./DonationItem";
import { type DonationItem as DonationItemType } from "../types/types";

interface Props {
  items: DonationItemType[];
}

const RecentDonations = ({ items }: Props) => {
  return (
    <div className="h-[312px] flex flex-col gap-6">
      <h2 className="font-semibold">최근 후원 내역</h2>

      <div className="space-y-3">
        {items.map((item) => (
          <DonationItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RecentDonations;
