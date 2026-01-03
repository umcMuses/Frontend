interface Project {
  id: number;
  title: string;
  deadline: string;
  progress: number;
  amount: number;
}

interface Props {
  project: Project;
}

const MyProjectItem = ({ project }: Props) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100">
      {/* 썸네일 */}
      <div className="w-[64px] h-[64px] rounded-[12px] bg-indigo-200 flex items-center justify-center text-white font-bold text-xl shrink-0">
        새
      </div>

      {/* 중앙 내용 */}
      <div className="flex-1">
        <div className="text-xs text-gray-400 mb-1">
          <span className="w-fit text-xs font-bold px-2 py-0.5 bg-[#EEF2FF] text-blue-700 rounded">진행중</span> {project.deadline}
        </div>

        <div className="text-sm font-semibold mb-2">
          {project.title}
        </div>

        <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full bg-indigo-500"
            style={{ width: `${Math.min(project.progress, 100)}%` }}
          />
        </div>
      </div>

      {/* 오른쪽 수치 */}
      <div className="text-right shrink-0">
        <div className="text-sm font-semibold text-indigo-600">
          {project.progress}%
        </div>
        <div className="text-xs text-gray-400">
          {project.amount.toLocaleString()}원
        </div>
      </div>
    </div>
  );
};

export default MyProjectItem;
