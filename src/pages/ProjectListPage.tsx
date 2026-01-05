import EventsBanner from '../components/ProjectListPage/EventsBanner';
import SearchBar from '../components/ProjectListPage/SearchBar';
import ProjectList from '../components/ProjectListPage/ProjectList';

export default function ProjectListPage() {
  return (
    <div className="min-h-screen py-24 w-full bg-mainWhite flex flex-col items-center overflow-x-hidden">
      <EventsBanner />
      <SearchBar />
      <ProjectList />
    </div>
  );
}
