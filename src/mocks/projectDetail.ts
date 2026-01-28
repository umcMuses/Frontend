import cheeringImage from '../assets/images/cheering.png';
import mockPoster1 from '../assets/images/mockposters/1.png';
import mockPoster2 from '../assets/images/mockposters/2.png';
import mockPoster3 from '../assets/images/mockposters/3.png';
import type { ProjectDetailData } from '../types/projectDetails';

export const MOCK_PROJECT_DETAILS: ProjectDetailData[] = [
  {
    projectId: 1,
    creatorName: 'Band Dawn',
    contents: {
      project_id: 1,
      story_html: `
        <p>A대 시각디자인 졸업전시 “Trace”는 기록과 기억의 형태를 시각적으로 탐구하는 전시입니다.</p>
        <p>학생들의 다양한 시선이 모여 도시의 흔적, 개인의 일상, 그리고 시간의 결을 디자인으로 풀어냈습니다.</p>
        <img src="${cheeringImage}" alt="전시 준비 현장" />
        <p>여러분의 펀딩은 전시 공간 조성, 작품 설치, 전시 운영에 사용됩니다. 함께 전시의 마지막 퍼즐이 되어주세요.</p>
      `,
      refund_policy: '프로젝트 종료 후 7일 이내 환불 요청 시 전액 환불됩니다.',
      location_detail: '서울시 성동구 성수동 전시장',
    },
    manager: {
      host_id: 101,
      project_id: 1,
      host_profile_img: null,
      host_phone: '010-1111-2222',
      host_birth: '1996-03-12',
      host_address: '서울시 성동구 성수동',
      host_intro: '프로젝트 진행을 맡은 운영자입니다.',
      manager_name: '김민지',
      manager_phone: '010-1234-5678',
      manager_email: 'minji.kim@example.com',
    },
    tags: [
      { tag_id: 1, project_id: 1, tag_name: '졸업전시' },
      { tag_id: 2, project_id: 1, tag_name: '디자인' },
    ],
    posters: [mockPoster1, mockPoster2, mockPoster3],
    likes: 100,
    rewards: [
      {
        reward_id: 1,
        project_id: 1,
        reward_name: '감사 메시지',
        description:
          '프로젝트 종료 후 감사 메시지와 결과 리포트를 보내드립니다.',
        price: 5000,
        total_quantity: 100,
        sold_quantity: 0,
        entry_at: null,
        type: 'NONE',
      },
      {
        reward_id: 2,
        project_id: 1,
        reward_name: '전시 초대권',
        description: '전시 오픈 당일 입장 가능한 초대권 1매가 제공됩니다.',
        price: 20000,
        total_quantity: 54,
        sold_quantity: 46,
        entry_at: '2025-10-20T00:00:00',
        type: 'TICKET',
      },
    ],
  },
  {
    projectId: 2,
    creatorName: 'Band Dawn',
    contents: {
      project_id: 2,
      story_html: `
        <p>깊어가는 가을 밤, 여러분을 '새벽'의 첫 번째 단독 콘서트에 초대합니다. 지난 3년간 유튜브를 통해 들려드렸던 노래들을 이제 라이브로 생생하게 전달하려 합니다.</p>
        <img src="${cheeringImage}" alt="콘서트 포스터" />
        <p>홍대 웨스트브릿지에서 진행되며, 현장 리허설과 아티스트 스페셜 세션이 준비되어 있습니다.</p>
        <p>깊어가는 가을 밤, 여러분을 '새벽'의 첫 번째 단독 콘서트에 초대합니다. 지난 3년간 유튜브를 통해 들려드렸던 노래들을 이제 라이브로 생생하게 전달하려 합니다.</p>
        <img src="${cheeringImage}" alt="콘서트 포스터" />
        <p>홍대 웨스트브릿지에서 진행되며, 현장 리허설과 아티스트 스페셜 세션이 준비되어 있습니다.</p>
        <p>깊어가는 가을 밤, 여러분을 '새벽'의 첫 번째 단독 콘서트에 초대합니다. 지난 3년간 유튜브를 통해 들려드렸던 노래들을 이제 라이브로 생생하게 전달하려 합니다.</p>
        <img src="${cheeringImage}" alt="콘서트 포스터" />
        <img src="${cheeringImage}" alt="콘서트 포스터" />
        <img src="${cheeringImage}" alt="콘서트 포스터" />
        <p>홍대 웨스트브릿지에서 진행되며, 현장 리허설과 아티스트 스페셜 세션이 준비되어 있습니다.</p>
      `,
      refund_policy: '공연 전날 18시 이전 취소 시 전액 환불됩니다.',
      location_detail: '서울시 마포구 홍대 웨스트브릿지',
    },
    manager: {
      host_id: 102,
      project_id: 2,
      host_profile_img: null,
      host_phone: '010-2222-3333',
      host_birth: '1994-07-02',
      host_address: '서울시 마포구',
      host_intro: '공연 기획 및 운영을 담당하고 있습니다.',
      manager_name: '박지훈',
      manager_phone: '010-2345-6789',
      manager_email: 'jihun.park@example.com',
    },
    tags: [
      { tag_id: 3, project_id: 2, tag_name: '콘서트' },
      { tag_id: 4, project_id: 2, tag_name: '라이브' },
    ],
    posters: [mockPoster2, mockPoster3],
    likes: 100,
    rewards: [
      {
        reward_id: 3,
        project_id: 2,
        reward_name: '온라인 라이브 관람권',
        description: '온라인 라이브 스트리밍 관람권을 제공합니다.',
        price: 15000,
        total_quantity: 54,
        sold_quantity: 46,
        entry_at: '2025-10-22T00:00:00',
        type: 'TICKET',
      },
      {
        reward_id: 4,
        project_id: 2,
        reward_name: '현장 스탠딩 티켓',
        description: '콘서트 현장 스탠딩 티켓 1매가 제공됩니다.',
        price: 45000,
        total_quantity: 54,
        sold_quantity: 46,
        entry_at: '2025-10-22T00:00:00',
        type: 'TICKET',
      },
      {
        reward_id: 5,
        project_id: 2,
        reward_name: 'MD 패키지',
        description: '포스터 + 사인 카드 + 스페셜 굿즈 세트.',
        price: 65000,
        total_quantity: 100,
        sold_quantity: 0,
        entry_at: null,
        type: 'NONE',
      },
    ],
  },
  {
    projectId: 3,
    creatorName: 'Band Dawn',
    contents: {
      project_id: 3,
      story_html: `
        <p>원우 생일 카페 'Spring'은 팬들이 함께 만든 따뜻한 공간입니다.</p>
        <img src="${cheeringImage}" alt="카페 이벤트 안내 이미지" />
        <p>방문객을 위한 포토존, 한정 굿즈, 그리고 함께 나누는 메시지 월이 준비되어 있어요.</p>
      `,
      refund_policy: '행사 시작 24시간 전까지 환불 가능합니다.',
      location_detail: '경기도 수원시 팔달구 카페 Spring',
    },
    manager: {
      host_id: 103,
      project_id: 3,
      host_profile_img: null,
      host_phone: '010-3333-4444',
      host_birth: '1998-11-05',
      host_address: '경기도 수원시',
      host_intro: '팬 이벤트 운영을 맡고 있습니다.',
      manager_name: '이서연',
      manager_phone: '010-3456-7890',
      manager_email: 'seoyeon.lee@example.com',
    },
    tags: [
      { tag_id: 5, project_id: 3, tag_name: '팬카페' },
      { tag_id: 6, project_id: 3, tag_name: '생일카페' },
    ],
    posters: [mockPoster3],
    likes: 100,
    rewards: [
      {
        reward_id: 6,
        project_id: 3,
        reward_name: '카페 음료 쿠폰',
        description: '카페 방문 시 사용할 수 있는 음료 쿠폰 1매.',
        price: 8000,
        total_quantity: 54,
        sold_quantity: 46,
        entry_at: '2025-10-18T00:00:00',
        type: 'TICKET',
      },
      {
        reward_id: 7,
        project_id: 3,
        reward_name: '굿즈 패키지',
        description: '포토카드 + 스티커 + 기념 배지가 포함됩니다.',
        price: 25000,
        total_quantity: 100,
        sold_quantity: 0,
        entry_at: null,
        type: 'NONE',
      },
    ],
  },
];
