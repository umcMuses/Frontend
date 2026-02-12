import axios from 'axios';
import ENDPOINTS from './endpoints';

const token = localStorage.getItem('accessToken');

export const getMyInfo = async () => {
  const res = await axios.get(ENDPOINTS.MY_INFO, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });

  return res.data.data; // 🔥 이게 핵심
};

export const getCreatorSummary = async () => {
  const res = await axios.get(ENDPOINTS.CREATOR_SUMMARY);
  return res.data.data;
};
