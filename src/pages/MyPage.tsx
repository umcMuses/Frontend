import { useState } from 'react';

import { useMyPageTab } from '../components/MyPage/hooks/useMyPageTab';
import MyPageTab from '../components/MyPage/MyPageTab';
import ProfileCard from '../components/MyPage/profile/ProfileCard';
import MyActivitySection from '../components/MyPage/section/MyActivitySection';
import CreatorSection from '../components/MyPage/section/CreatorSection';
import CreatorEmptySection from '../components/MyPage/section/CreatorEmptySection';

const MOCK_PROJECTS = [
  {
    id: 1,
    title: '새벽 2집 앨범 발매 기념 굿즈',
    progress: 142,
    amount: 2840000,
    deadline: 'D-3',
  },
];

export default function MyPage() {
  const { activeTab, setActiveTab, isActivityTab, isCreatorTab } =
    useMyPageTab();

  const isCreator = false;

  const handleLogout = () => {
    console.log('logout');
  };

  return (
    <div className="relative min-h-[713px] bg-[#F8F9FC]">
      <div className="relative z-10">
        <div className="max-w-[1425px] mx-auto px-[264.5px] pb-[80px]">
          <div className="max-w-[896px] mx-auto flex flex-col gap-[32px] pt-[96px] px-[24px]">
            <ProfileCard
              name="김뮤즈"
              email="kim.muse@example.com"
              levelLabel="Lv.3 열정적인 서포터"
              isCreator={isCreator}
              stats={{
                projectCount: 1,
                supportTicketCount: 2,
                supportCount: 2,
              }}
              onLogout={handleLogout}
            />

            <MyPageTab
              activeTab={activeTab}
              onChange={setActiveTab}
              isCreator={isCreator}
            />

            {isActivityTab && <MyActivitySection />}

            {isCreatorTab &&
              (isCreator ? (
                <CreatorSection projects={MOCK_PROJECTS} />
              ) : (
                <CreatorEmptySection />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
