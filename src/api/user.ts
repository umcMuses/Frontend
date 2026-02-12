import axios from 'axios';
import ENDPOINTS from './endpoints';

const token = localStorage.getItem('accessToken');

export const getMyInfo = async () => {
  const res = await axios.get(ENDPOINTS.MY_INFO, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const getCreatorSummary = async () => {
  const res = await axios.get(ENDPOINTS.CREATOR_SUMMARY);
  return res.data.data;
};
