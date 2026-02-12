// TicketItemCard.tsx
import { QrCode } from 'lucide-react';
import type { TicketItem } from '../types/ticket';

interface Props {
  item: TicketItem;
  onSelect: (ticketId: string) => void;
}

const TicketItemCard = ({ item, onSelect }: Props) => {
  return (
    <div
      className={`self-stretch min-w-72 p-6 relative ${item.bgClassName} rounded-[32px] shadow-xl inline-flex flex-col overflow-hidden`}
    >
      {/* 디자인 QR */}
      <div className="absolute top-6 right-6 opacity-20">
        <QrCode className="text-white" size={96} />
      </div>

      <div className="w-80 h-40 relative">
        {/* 티켓 ID */}
        <div className="w-64 absolute top-0 left-0 text-white/60 text-xs font-mainFont leading-4">
          {item.ticketId}
        </div>

        {/* 타이틀 */}
        <div className="w-80 absolute top-[40px] left-0 text-white text-xl font-boldFont leading-7 overflow-hidden">
          {item.title}
        </div>

        {/* 날짜 */}
        <div className="w-80 absolute top-[72px] left-0 text-white/80 text-sm font-mainFont leading-5">
          {item.date}
        </div>

        {/* 좌석 & QR 버튼 */}
        <div className="w-80 absolute top-[124px] left-0 flex justify-between items-end">
          <div className="px-3 py-1 bg-white/20 rounded-lg backdrop-blur-sm text-white text-xs font-mainFont leading-4">
            {item.seatLabel}
          </div>
          <button
            type="button"
            className="px-4 py-2 bg-white rounded-full transition-transform hover:scale-105 text-black text-xs font-boldFont leading-4 cursor-pointer"
            onClick={() => onSelect(item.ticketId)}
          >
            QR 보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketItemCard;
