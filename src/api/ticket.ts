import axios from 'axios';
import ENDPOINTS from './endpoints';
import { type TicketResponse } from '../components//MyPage/types/ticket';

export const getMyTickets = async (): Promise<TicketResponse[]> => {
  const res = await axios.get(ENDPOINTS.TICKET_INFO);
  return res.data.data;
};


export const getCheckinToken = async (ticketId: string) => {
  const response = await fetch(
    `${ENDPOINTS.TICKET_TOKEN}/${ticketId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('토큰 발급 실패');
  }

  return response.json();
};
