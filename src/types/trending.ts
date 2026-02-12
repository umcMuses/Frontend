export type TrendingItem = {
  projectId: number;
  title: string;
  thumbnailUrl: string;
  achieveRate: number;
  dday: number;
  deadline: string;
  fundingStatus: 'FUNDING' | 'CLOSING' | 'SUCCESS' | 'FAIL';
  region: string;
  tags: string[];
};

export type TrendingListResponse = {
  success: boolean;
  data: TrendingItem[];
  page?: { offset: number; limit: number; total: number };
  error?: { code: string; message: string; detail: string };
};
