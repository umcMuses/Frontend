import axios from 'axios';
import { ENDPOINTS } from './endpoints';

export const getCreatorSummary = async () => {
  const res = await axios.get(ENDPOINTS.CREATOR_SUMMARY);
  return res.data.data;
};
