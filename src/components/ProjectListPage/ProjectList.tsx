import { MapPin, Bell } from 'lucide-react';

interface Project {
  id: number;
  location: string;
  status: '진행중' | '오픈예정';
  statusColor: 'purple' | 'orange';
  tags: string[];
  title: string;
  progress?: number;
  deadline?: string;
  backgroundColor: string;
  hasNotification?: boolean;
}

const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    location: '서울',
    status: '진행중',
    statusColor: 'purple',
    tags: ['#졸업전시', '#미디어아트'],
    title: "A대 시각디자인 졸전 'Trace'",
    progress: 120,
    deadline: 'D-5',
    backgroundColor: 'bg-lime-100',
  },
  {
    id: 2,
    location: '서울',
    status: '진행중',
    statusColor: 'purple',
    tags: ['#인디밴드', '#라이브'],
    title: "인디밴드 '새벽' 단독 공연",
    progress: 85,
    backgroundColor: 'bg-purple-100',
  },
  {
    id: 3,
    location: '경기',
    status: '진행중',
    statusColor: 'purple',
    tags: ['#생일카페', '#아이들'],
    title: "원우 생일 카페 'Spring'",
    backgroundColor: 'bg-blue-100',
  },
  {
    id: 4,
    location: '서울',
    status: '오픈예정',
    statusColor: 'orange',
    tags: ['#재즈', '#페스티벌'],
    title: '2025 뉴이어 재즈 페스티벌',
    backgroundColor: 'bg-cyan-100',
    hasNotification: true,
  },
];

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {MOCK_PROJECTS.map((project) => (
        <div
          key={project.id}
          className={`${project.backgroundColor} rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
        >
          {/* 상단: 위치 및 상태 */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700">{project.location}</span>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                project.statusColor === 'purple'
                  ? 'bg-purple-200 text-purple-700'
                  : 'bg-orange-200 text-orange-700'
              }`}
            >
              {project.status}
            </span>
          </div>

          {/* 태그 */}
          <div className="flex gap-2 mb-3 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-600 bg-white/60 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 제목 */}
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            {project.title}
          </h3>

          {/* 하단: 진행률 또는 알림 버튼 */}
          <div className="flex items-center justify-between">
            {project.progress && (
              <div className="flex items-center gap-3">
                <span className="text-purple-600 font-semibold">
                  {project.progress}%
                </span>
                {project.deadline && (
                  <span className="text-gray-500 text-sm">
                    {project.deadline}
                  </span>
                )}
              </div>
            )}
            {project.hasNotification && (
              <button className="flex items-center gap-2 bg-blue-200 hover:bg-blue-300 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                <Bell className="w-4 h-4" />
                알림신청
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
