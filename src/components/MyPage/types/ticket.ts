export const mapTicketToItem = (ticket: TicketResponse): TicketItem => ({
  id: ticket.ticketId, // 내부 key용
  ticketId: String(ticket.ticketId), // 체크인 API에 쓸 실제 ID
  bgClassName:
    'bg-[linear-gradient(135deg,var(--color-blue-34,#312E81)_0%,var(--color-violet-32,#581C87)_50%,var(--color-black-solid,#000)_100%)]',
  title: ticket.projectTitle,
  date: new Date(ticket.opening).toLocaleString(),
  seatLabel: ticket.optionLabel,
  selectedSeat: ticket.optionLabel,
});


export interface TicketItem {
  id: number;
  title: string;
  date: string;
  seatLabel: string;
  selectedSeat: string;
  ticketId: string; 
  bgClassName: string;
}

export interface CheckinTokenResponse {
  success: boolean;
  data: {
    ticketToken: string;
  };
}


export interface TicketResponse {
  ticketId: number;
  projectTitle: string;
  opening: string;
  optionLabel: string;
  ticketToken: string;
  status: string;
}
