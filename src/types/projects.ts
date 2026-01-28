export interface Project {
  project_id: number;
  user_id: number;
  status: string;
  last_saved_step: number;
  title: string;
  description: string;
  age_limit: 'ALL' | 'ADULT';
  region: string;
  target_amount: number;
  deadline: string;
  opening: string;
  achieve_rate: number;
  supporter_count: number;
  created_at: string;
  updated_at: string;
  funding_status: 'FUNDING' | 'CLOSING' | 'SUCCESS' | 'FAIL';
}
