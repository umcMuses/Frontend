import EventsBanner from '../components/ProjectListPage/EventsBanner';
import SearchBar from '../components/ProjectListPage/SearchBar';
import ProjectList from '../components/ProjectListPage/ProjectList';

export default function ProjectListPage() {
  return (
    <div className="min-h-screen px-6 py-24 min-w-screen bg-mainWhite flex flex-col items-center">
      <EventsBanner />
      <SearchBar />
      <ProjectList />
    </div>
  );
}
