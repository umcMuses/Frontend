import RecentDonations from '../donation/RecentDonation';
import { mockDonations } from '../donation/mockDonations';
import TicketCard from '../tickets/TicketCard';
import { Ticket } from 'lucide-react';

const MyActivitySection = () => {
  return (
    <section className="max-w-[848px] flex flex-col gap-[48px]">
      {/* 나의 티켓 */}
      <div className="h-[280px] flex flex-col gap-[24px]">
        <h2 className="font-semibold inline-flex items-center"><Ticket className='text-blue-700 h-[20px] w-[20px] mr-2'/>나의 티켓 (2)</h2>

        <div className="flex flex-wrap gap-6">
          <TicketCard
            id="789012"
            title="밴드 ‘새벽’ 단독 콘서트 : 밤을 걷는 시간"
            date="2025.10.24 (금) 19:00"
            seat="VIP 스탠딩석"
            color="purple"
          />

          <TicketCard
            id="321098"
            title="2025 뉴이어 재즈 페스티벌"
            date="2025.01.15 (토) 14:00"
            seat="1일권 (토요일)"
            color="blue"
          />
        </div>
      </div>

      {/* 최근 후원 내역 */}
      <div className="h-[312px] flex flex-col gap-[24px]">
        <RecentDonations items={mockDonations} />
      </div>
    </section>
  );
};

export default MyActivitySection;
