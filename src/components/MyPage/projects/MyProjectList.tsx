import MyProjectItem from './MyProjectItem';

interface Project {
  id: number;
  title: string;
  deadline: string;
  progress: number;
  amount: number;
}

interface Props {
  projects: Project[];
}

const MyProjectList = ({ projects }: Props) => {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">내 프로젝트</h3>
        <button className="w-fit text-xs px-2 py-0.5 bg-[#EEF2FF] text-blue-700 rounded">
          + 새 프로젝트
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <MyProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default MyProjectList;
