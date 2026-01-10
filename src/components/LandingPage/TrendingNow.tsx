import { ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import TrendingList from '../ProjectListPage/ProjectList';

export default function TrendingNow() {
  return (
    <section className="w-[1440px] px-20 py-40 bg-gradient-to-b from-color-white--0%/0 to-color-white--80%/80 inline-flex flex-col justify-start items-start overflow-hidden">
      <div className="w-full max-w-[1280px] px-6 inline-flex flex-col justify-start items-start gap-6">

        {/* 상단 제목과 버튼 */}
        <div className="self-stretch inline-flex justify-between items-end">
          <div className="inline-flex flex-col justify-start items-start gap-4">
            <h2 className="justify-center font-blackFont text-5xl leading-[48px]">
                Trending Now
            </h2>
            <p className="justify-center font-mediumFont text-xl text-black60 leading-7">
              지금 가장 뜨거운 크리에이터들의 무대
            </p>
          </div>
          <div className="inline-flex justify-start items-start gap-2">
              <div className="w-14 h-14 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-center items-center">
                <ArrowLeft className="w-6 h-6 text-black80 relative" />
              </div>
              <div className="w-14 h-14 bg-gray-900 rounded-full shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg inline-flex justify-center items-center overflow-hidden">
                <ArrowRight className="w-6 h-6 text-white relative" />
              </div>
          </div>
        </div>
        
        {/* 카드 */}
        <div className="border self-stretch h-[720.50px] relative overflow-hidden">
            <TrendingList />
        </div>
      </div>
    </section>
  );
}
