// 엔드포인트가 추가/변경될 경우 이 파일에서 수정하면 됩니다.

const BASE_URL = 'https://mymuses.site/api';

export const ENDPOINTS = {
  // 회원
  LOGIN: `${BASE_URL}/auth/login`,
  SIGNUP: `${BASE_URL}/auth/signup`,

  //프로젝트
  PROJECT_LIST: `${BASE_URL}/projects`,
  PROJECT_DETAIL: `${BASE_URL}/projects/{projectId}`,

  //주문
  ORDERS_PREPARE: `${BASE_URL}/orders/prepare`,

  //결제
  BILLING_ISSUE: `${BASE_URL}/billing-auth/issue`,

  //티켓

  //랜딩페이지

  //이벤트

  //마이페이지

  //어드민
};

export default ENDPOINTS;
