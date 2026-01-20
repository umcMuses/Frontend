import { QrCode } from 'lucide-react';
import { useState } from 'react';
import QrCard from './QrCard';

type SelectedTicket = {
  title: string;
  seat: string;
  ticketId: string;
} | null;

const TicketCard = () => {
  const [selectedTicket, setSelectedTicket] = useState<SelectedTicket>(null);

  return (
    <div className="self-stretch pb-6 inline-flex justify-start items-start gap-6 overflow-hidden">
      <div className="self-stretch min-w-72 p-6 relative bg-[linear-gradient(135deg,var(--color-blue-34,#312E81)_0%,var(--color-violet-32,#581C87)_50%,var(--color-black-solid,#000)_100%)] rounded-[32px] shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] shadow-xl inline-flex flex-col justify-start items-start overflow-hidden">
        <div className="absolute top-6 right-6 opacity-20">
          <QrCode className="text-white" size={96} />
        </div>
        <div className="w-80 h-40 relative">
          <div className="w-80 left-0 top-0 absolute inline-flex flex-col justify-start items-start">
            <div className="justify-center text-white/60 text-xs font-mainFont leading-4">
              #789012
            </div>
          </div>
          <div className="w-80 left-0 top-[40px] absolute inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="justify-center text-white text-xl font-boldFont leading-7">
              밴드 '새벽' 단독 콘서트 : 밤을 걷는 시간
            </div>
          </div>
          <div className="w-80 left-0 top-[72px] absolute inline-flex flex-col justify-start items-start">
            <div className="justify-center text-white/80 text-sm font-mainFont leading-5">
              2025.10.24 (금) 19:00
            </div>
          </div>
          <div className="w-80 left-0 top-[124px] absolute inline-flex justify-between items-end">
            <div className="px-3 py-1 bg-white/20 rounded-lg backdrop-blur-sm inline-flex flex-col justify-start items-start">
              <div className="justify-center text-white text-xs font-mainFont leading-4">
                VIP 스탠딩석
              </div>
            </div>
            <button
              onClick={() =>
                setSelectedTicket({
                  title: "밴드 '새벽' 단독 콘서트 : 밤을 걷는 시간",
                  seat: 'VIP ACCESS',
                  ticketId: '1234-5678-9012',
                })
              }
              className="px-4 py-2 bg-white rounded-full inline-flex flex-col justify-center items-center cursor-pointer transition-transform hover:scale-105"
            >
              <div className="text-center justify-center text-black text-xs font-boldFont leading-4">
                QR 보기
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch min-w-72 p-6 relative bg-[linear-gradient(135deg,var(--color-azure-33,#1E3A8A)_0%,var(--color-cyan-31,#0E7490)_50%)] rounded-[32px] shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] shadow-xl inline-flex flex-col justify-start items-start overflow-hidden">
        <div className="absolute top-6 right-6 opacity-20">
          <QrCode className="text-white" size={96} />
        </div>
        <div className="w-64 h-40 relative">
          <div className="w-64 left-0 top-0 absolute inline-flex flex-col justify-start items-start">
            <div className="justify-center text-white/60 text-xs font-mainFont leading-4">
              #321098
            </div>
          </div>
          <div className="w-64 left-0 top-[40px] absolute inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="justify-center text-white text-xl font-boldFont leading-7">
              2025 뉴이어 재즈 페스티벌
            </div>
          </div>
          <div className="w-64 left-0 top-[72px] absolute inline-flex flex-col justify-start items-start">
            <div className="justify-center text-white/80 text-sm font-mainFont leading-5">
              2025.01.15 (토) 14:00
            </div>
          </div>
          <div className="w-64 left-0 top-[124px] absolute inline-flex justify-between items-end">
            <div className="px-3 py-1 bg-white/20 rounded-lg backdrop-blur-sm inline-flex flex-col justify-start items-start">
              <div className="justify-center text-white text-xs font-mainFont leading-4">
                1일권 (토요일)
              </div>
            </div>
            <button
              onClick={() =>
                setSelectedTicket({
                  title: '2025 뉴이어 재즈 페스티벌',
                  seat: 'NORMAL ACCESS',
                  ticketId: '1234-5678-9012',
                })
              }
              className="px-4 py-2 bg-white rounded-full inline-flex flex-col justify-center items-center cursor-pointer transition-transform hover:scale-105"
            >
              <div className="text-center justify-center text-black text-xs font-boldFont leading-4">
                QR 보기
              </div>
            </button>
          </div>
        </div>
      </div>
      {selectedTicket && (
        <QrCard
          title={selectedTicket.title}
          seat={selectedTicket.seat}
          ticketId={selectedTicket.ticketId}
          onClose={() => setSelectedTicket(null)}
        />
      )}
    </div>
  );
};

export default TicketCard;
