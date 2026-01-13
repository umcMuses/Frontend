import backgoundcircle from '../../assets/images/backgroundcircle.png';
import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

export default function LandingBanner() {
  return (
    <section className="relative min-h-[675px] flex justify-center">
      <img src={backgoundcircle} alt="Background Circle" className="absolute" />

      {/* 내용없는 컨테이너(위치 잡는 용도) */}
      <div className="relative flex w-full max-w-[1280px] min-h-[684px] items-center justify-center pt-13 px-20">
        {/* 실제 내용 컨테이너 */}
        <div className="flex flex-col items-center w-full max-w-[1231px] gap-8">
          {/* 내용 */}
          <div className="self-stretch inline-flex flex-col justify-start items-center">
            <h1 className="text-center">
              <FadeIn delay={200}>
                <span className="block font-blackFont text-8xl leading-8xl text-mainBlack">
                Your Space,
              </span>
              </FadeIn>
              <FadeIn delay={400}>
                <span className="block font-blackFont text-8xl leading-[108px] bg-gradient-to-r from-solidPurple to-solidBlue bg-clip-text text-transparent">
                Our Stage
              </span>
              </FadeIn>
            </h1>
          </div>

          <FadeIn delay={600}>
            <div className="w-[672px] max-w-[672px] inline-flex flex-col fustify-start items-center">
              <p className="text-black80 font-mediumFont text-xl text-center">
              기다렸던 팬들과 만나는 가장 확실한 방법,
              <br />
              당신의 시작을 함께 만들어갑니다.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={600}>
            <div className="pt-4">
              <button className="flex gap-2 items-center px-10 py-5 shadow-[0px_8px_10px_-6px_rgba(233,213,255,1.00)] shadow-[0px_20px_25px_-5px_rgba(233,213,255,1.00)] rounded-full bg-mainBlack text-white font-boldFont text-xl cursor-pointer hover:scale-105">
              프로젝트 시작하기
                <ArrowRight className="w-5 h-5 relative" />
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
