import { MOCK_PROJECT_DETAILS } from '../../types/projectDetails';
import { ProjectCreatorCard } from './ProjectCreatorCard';
import { ProjectRewardList } from './ProjectRewardList';
import { Heart, Share2 } from 'lucide-react';

interface ProjectInfoProps {
  projectId: number;
}

export default function ProjectInfo({ projectId }: ProjectInfoProps) {
  const detail = MOCK_PROJECT_DETAILS.find(
    (item) => item.projectId === projectId
  );

  return (
    <div className="w-full font-mainFont">
      <div className="w-full border-b border-white60">
        <div className="w-full mx-auto max-w-[976px] px-6 h-[54px] text-sm font-boldFont text-solidBlue">
          <div className="flex items-center justify-center w-fit h-full border-b-2 border-solidBlue">
            프로젝트 스토리
          </div>
        </div>
      </div>

      <div className="mt-12 flex gap-12 lg:flex-row flex-col justify-center">
        <div className="max-w-[720px]">
          <p className="text-2xl font-boldFont text-mainBlack">프로젝트 소개</p>
          {detail ? (
            <div
              className="project-detail-content mt-6 text-base text-black80 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: detail.contentHtml }}
            />
          ) : (
            <p className="mt-6 text-base text-black80 leading-relaxed">
              프로젝트 소개글이 준비 중이에요.
            </p>
          )}
        </div>
        <div className="w-[336px]">
          <ProjectCreatorCard projectId={projectId} />
          <ProjectRewardList projectId={projectId} />
          <div className="flex gap-2 w-full">
            <div className="w-1/2 border border-white60 rounded-xl hover:bg-mainWhite transition-all duration-300 py-3 flex items-center justify-center">
              <Heart className="w-4 h-4 text-black80" />
              <span className="text-sm font-boldFont text-black80 ml-2">
                {detail?.likes}
              </span>
            </div>
            <div className="w-1/2 border border-white60 rounded-xl hover:bg-mainWhite transition-all duration-300 py-3 flex items-center justify-center">
              <Share2 className="w-4 h-4 text-black80" />
              <span className="text-sm font-boldFont text-black80 ml-2">
                {detail?.shares}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
