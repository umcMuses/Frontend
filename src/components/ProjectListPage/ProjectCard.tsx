import { MapPin, Bell, Calendar, Bookmark } from 'lucide-react';

export interface Project {
  id: number;
  location: string;
  status: '진행중' | '오픈예정' | '종료';
  tags: string[];
  title: string;
  progress?: number;
  deadline?: string;
  backgroundColor: string;
  hasNotification?: boolean;
  openDate?: string;
}

interface ProjectCardProps {
  project: Project;
}

// 날짜 형식 변환
function formatOpenDate(dateString: string): string {
  const parts = dateString.split('.');
  if (parts.length >= 3) {
    return `${parts[1]}.${parts[2]} 오픈`;
  }
  return dateString;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col group cursor-pointer font-mainFont h-fit">
      {/* 상단: 위치 및 상태 */}
      <div
        className={`${project.backgroundColor} rounded-3xl p-4 shadow-sm cursor-pointer h-[400px] w-[300px] mb-4 group-hover:shadow-lg transition-all`}
      >
        <div className="flex items-center mb-4">
          <div className="flex items-center gap-1 bg-white/90 rounded-lg px-2.5 py-1 shadow-sm mr-2">
            <MapPin className="w-4 h-4 text-solidBlue" />
            <span className="text-[10px] font-semibold text-[#1F2937]">
              {project.location}
            </span>
          </div>
          <span
            className={`px-2 py-1 rounded text-[10px] font-semibold ${
              project.status === '진행중'
                ? 'bg-solidBlue text-white'
                : project.status === '오픈예정'
                  ? 'bg-[#FACC15] text-black'
                  : 'bg-black60 text-white'
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>
      <div className="group-hover:-translate-y-[-8px] transition-all">
        {/* 태그 */}
        <div className="flex gap-2 mb-3 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-black60 bg-white80 px-2 py-0.5 rounded border border-white60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 제목 */}
        <h3 className="text-[20px] font-bold text-mainBlack mb-4 group-hover:text-solidBlue transition-all duration-500">
          {project.title}
        </h3>

        {/* 하단: 상태별 다른 표시 */}
        {project.status === '진행중' && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[18px] font-blackFont text-[#4F46E5]">
                {project.progress || 0}%
              </span>
              {project.deadline && (
                <span className="text-xs font-boldFont text-black60 bg-white80 px-2 py-1 rounded">
                  {project.deadline}
                </span>
              )}
            </div>
            {/* 진행 바 */}
            <div className="w-full h-2 bg-white60 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${Math.min(project.progress || 0, 100)}%`,
                  background: 'linear-gradient(to right, #A855F7, #6366F1)',
                }}
              />
            </div>
          </div>
        )}

        {project.status === '오픈예정' && (
          <div className="flex items-center justify-between">
            {project.openDate && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-solidBlue" />
                <span className="text-[14px] text-[#1F2937] font-boldFont">
                  {formatOpenDate(project.openDate)}
                </span>
              </div>
            )}
            {project.hasNotification && (
              <button className="flex items-center gap-2 bg-pastelPurple hover:bg-purple-200 text-solidPurple px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                <Bell className="w-4 h-4" />
                알림신청
              </button>
            )}
          </div>
        )}

        {project.status === '종료' && (
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-black60" />
            <span className="text-[12px] text-black60">펀딩 마감</span>
            {project.progress && (
              <span className="text-[12px] text-black60 ml-1">
                {project.progress}% 달성
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
