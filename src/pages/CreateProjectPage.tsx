import { useState } from 'react';
import Stepper from '../components/CreateProjectPage/Stepper';
import OverviewStep from '../components/CreateProjectPage/steps/OverviewStep';
import FundingStep from '../components/CreateProjectPage/steps/FundingStep';
import RewardStep from '../components/CreateProjectPage/steps/RewardStep';
import StoryStep from '../components/CreateProjectPage/steps/StoryStep';
import InfoStep from '../components/CreateProjectPage/steps/InfoStep';
import NavigationButtons from '../components/CreateProjectPage/NavigationButtons';
import CreateNavbar from '../components/CreateProjectPage/CreateNavbar';

export interface ProjectData {
  title: string;
  thumbnail: File | null;
  tags: string[];
  ageLimit: 'ALL' | 'ADULT';
  summary: string;
  funding: {};
  rewards: any[];
  story: string;
  info: {};
}

export default function CreateProjectPage() {
  const [step, setStep] = useState(1);

  const [projectData, setProjectData] = useState<ProjectData>({
    title: '',
    thumbnail: null,
    tags: [],
    ageLimit: 'ALL',
    summary: '',
    funding: {},
    rewards: [],
    story: '',
    info: {},
  });

  const updateProjectData = (key: keyof ProjectData, value: any) => {
    setProjectData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <CreateNavbar />
      <div className="flex flex-col min-h-screen px-6 pt-28 pb-20 max-w-[768px] mx-auto gap-12">
        <Stepper step={step} />

        {step === 1 && (
          <OverviewStep data={projectData} onChange={updateProjectData} />
        )}
        {step === 2 && (
          <FundingStep data={projectData} onChange={updateProjectData} />
        )}
        {step === 3 && (
          <RewardStep data={projectData} onChange={updateProjectData} />
        )}
        {step === 4 && (
          <StoryStep data={projectData} onChange={updateProjectData} />
        )}
        {step === 5 && (
          <InfoStep data={projectData} onChange={updateProjectData} />
        )}

        <NavigationButtons
          step={step}
          onPrev={() => setStep((s) => Math.max(1, s - 1))}
          onNext={() => setStep((s) => Math.min(5, s + 1))}
        />
      </div>
    </>
  );
}
