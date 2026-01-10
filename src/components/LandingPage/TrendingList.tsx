import TrendingCard from './TrendingCard';
import type { Project } from './TrendingCard';
import winterconcert from '../../assets/images/winterconcert.png';
import tomorrow from '../../assets/images/tomorrow.png';
import MRAconcert from '../../assets/images/MRAconcert.png';

const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    location: '서울',
    status: '진행중',
    tags: ['#졸업전시', '#미디어아트'],
    title: "A대 시각디자인 졸전 'Trace'",
    progress: 120,
    deadline: 'D-5',
    backgroundImage: winterconcert,
  },
  {
    id: 2,
    location: '서울',
    status: '진행중',
    tags: ['#인디밴드', '#라이브'],
    title: "인디밴드 '새벽' 단독 공연",
    progress: 85,
    deadline: 'D-12',
    backgroundImage: tomorrow,
  },
  {
    id: 3,
    location: '경기',
    status: '진행중',
    tags: ['#생일카페', '#아이돌'],
    title: "원우 생일 카페 'Spring'",
    progress: 210,
    deadline: 'D-3',
    backgroundImage: MRAconcert,
  },
];

export default function ProjectList() {
  return (
    <div className="w-full max-w-[1247px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {MOCK_PROJECTS.map((project) => (
          <TrendingCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
