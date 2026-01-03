import { Lock } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { type MyPageTabType } from './hooks/useMyPageTab';

interface Props {
  activeTab: MyPageTabType;
  onChange: (tab: MyPageTabType) => void;
  isCreator: boolean;
}

const MyPageTab = ({ activeTab, onChange, isCreator }: Props) => {
  const activityRef = useRef<HTMLButtonElement>(null);
  const creatorRef = useRef<HTMLButtonElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  const moveUnderline = () => {
    const target =
      activeTab === 'activity'
        ? activityRef.current
        : creatorRef.current;

    if (!target || !underlineRef.current) return;

    underlineRef.current.style.width = `${target.offsetWidth}px`;
    underlineRef.current.style.left = `${target.offsetLeft}px`;
  };

  useEffect(() => {
    moveUnderline();
  }, [activeTab]);

  return (
    <section className="relative flex h-[41px] w-full max-w-[848px] gap-6 border-b border-gray-200 pb-4">
      <button
        ref={activityRef}
        onClick={() => onChange('activity')}
        className={`font-semibold ${
          activeTab === 'activity'
            ? 'text-blue-700'
            : 'text-gray-400'
        }`}
      >
        내 활동
      </button>

      <button
        ref={creatorRef}
        onClick={() => onChange('creator')}
        className={`inline-flex items-center gap-1 font-semibold ${
          activeTab === 'creator'
            ? 'text-[#EA580C]'
            : 'text-gray-400'
        }`}
      >
        크리에이터 센터
        {!isCreator && <Lock size={16} />}
      </button>

      <div
        ref={underlineRef}
        className={`absolute bottom-0 h-0.5 transition-all duration-300 ${
          activeTab === 'creator'
            ? 'bg-[#EA580C]'
            : 'bg-blue-700'
        }`}
      />
    </section>
  );
};

export default MyPageTab;
