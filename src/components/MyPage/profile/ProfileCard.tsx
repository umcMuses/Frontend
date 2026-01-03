import { Users, LogOut } from 'lucide-react';

interface Stats {
  supportTicketCount?: number;
  supportCount?: number;
  projectCount?: number;
}

interface Props {
  name: string;
  email: string;
  levelLabel: string;
  isCreator?: boolean;
  avatarFallback?: React.ReactNode;
  stats?: Stats;
  onLogout?: () => void;
}

const ProfileCard = ({
  name,
  email,
  levelLabel,
  isCreator,
  avatarFallback,
  stats,
  onLogout,
}: Props) => {
  const {
    supportTicketCount,
    supportCount,
    projectCount,
  } = stats || {};

  return (
    <section className="flex w-full max-w-[848px] gap-6 rounded-[40px] bg-white p-8 shadow">
      {/* 아바타 */}
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#C7D2FE] to-[#E9D5FF]">
        {avatarFallback ?? <Users size={40} />}
      </div>

      <div className="flex-1">
        {/* 뱃지 */}
        <div
          className={`mb-1 inline-flex rounded-full px-3 py-1 text-xs font-bold ${
            isCreator
              ? 'bg-[#E9D5FF] text-orange-600'
              : 'bg-[#FDF2F8] text-[#4F46E5]'
          }`}
        >
          {isCreator ? '인증된 크리에이터' : levelLabel}
        </div>

        {/* 이름 */}
        <div className="text-lg font-bold">{name} 님</div>

        {/* 이메일 / 로그아웃 */}
        {onLogout && (
          <button
            onClick={onLogout}
            className="inline-flex items-center gap-1 text-sm font-light text-gray-500"
          >
            {email} | 로그아웃
            <LogOut size={16} strokeWidth={1} />
          </button>
        )}

        {/* 통계 */}
        <div className="mt-4 flex items-center gap-6 text-sm">
          <StatItem label="후원 티켓" value={supportTicketCount} />

          <Divider />

          <StatItem label="후원참여" value={supportCount} />

          {isCreator && (
            <>
              <Divider />
              <StatItem
                label="내 프로젝트"
                value={projectCount}
                highlight
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

interface StatItemProps {
  label: string;
  value?: number;
  highlight?: boolean;
}

const StatItem = ({ label, value, highlight }: StatItemProps) => (
  <div className="flex flex-col items-center">
    <div
      className={`text-lg font-semibold ${
        highlight ? 'text-orange-500' : ''
      }`}
    >
      {value}
    </div>
    <div className="text-xs text-gray-400">{label}</div>
  </div>
);

const Divider = () => <div className="h-8 w-px bg-gray-200" />;

export default ProfileCard;
