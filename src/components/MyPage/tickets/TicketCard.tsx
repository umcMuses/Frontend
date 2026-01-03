import { QrCode } from 'lucide-react';

interface TicketCardProps {
  id: string;
  title: string;
  date: string;
  seat: string;
  color: 'purple' | 'blue';
}

const COLOR_THEME: Record<
  TicketCardProps['color'],
  { bg: string }
> = {
  purple: {
    bg: 'bg-[linear-gradient(135deg,_#312E81_0%,_#581C87_50%,_#000000_100%)]',
  },
  blue: {
    bg: 'bg-gradient-to-br from-[#1E3A8A] to-[#0E7490]',
  },
};

const TicketCard = ({ id, title, date, seat, color }: TicketCardProps) => {
  const { bg } = COLOR_THEME[color];

  return (
    <div
      className={`
        relative inline-flex flex-col overflow-hidden
        rounded-2xl p-5 text-white shadow
        ${bg}
      `}
    >
      {/* 배경 QR */}
      <QrCode
        className="
          absolute right-5 top-5
          w-24 h-24 text-white/30
        "
      />

      <div className="relative z-10">
        <div className="mb-2 text-xs opacity-80">#{id}</div>

        <div className="mb-1 font-semibold">{title}</div>
        <div className="mb-10 text-sm opacity-80">{date}</div>

        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[11px]">
            {seat}
          </span>

          <button className="rounded-full bg-white px-4 py-1 text-sm text-black">
            QR 보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
