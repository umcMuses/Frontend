import type { Project } from './TrendingCard';

interface TrendingCardFooterProps {
  project: Project;
}

export default function TrendingCardFooter({ project }: TrendingCardFooterProps) {
  return (
    <>
      {/* 달성률, 마감일 */}
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
    </>
  );
}
