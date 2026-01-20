import type { StepProps } from './StepProps';
import { Upload } from 'lucide-react';

export default function OverviewStep({ data, onChange }: StepProps) {
  const age = data.ageLimit;

  return (
    <div className="self-stretch pb-4 flex flex-col gap-8">
      {/* 제목 */}
      <h2 className="text-mainBlack text-2xl font-boldFont leading-8">
        Step 1. 프로젝트 기본 정보
      </h2>

      {/* 프로젝트 제목 */}
      <div className="flex flex-col gap-2">
        <label className="text-black80 text-sm font-boldFont">
          프로젝트 제목 *
        </label>

        <div
          className="
            px-4 py-5 bg-white rounded-xl
            border border-white60
            focus-within:ring-1
            focus-within:ring-mainBlack
          "
        >
          <input
            type="text"
            value={data.title}
            onChange={(e) => onChange('title', e.target.value)}
            aria-required="true"
            placeholder="예) 밴드 '새벽'의 첫 단독 콘서트"
            className="w-full text-mainBlack placeholder:text-black40 font-mainFont focus:outline-none"
          />
        </div>
      </div>

      {/* 대표 이미지 */}
      <div className="flex flex-col gap-2">
        <label className="text-black80 text-sm font-boldFont">
          대표 이미지 (포스터)
        </label>

        <label
          className="
            h-48 rounded-2xl
            border-2 border-dashed border-[#D1D5DB]
            flex flex-col justify-center items-center
            bg-mainWhite cursor-pointer
            hover:bg-[#EEF2FF] hover:border-[#818CF8]
          "
        >
          <Upload className="text-black40 mb-2" />
          <span className="text-black40 text-sm font-mainFont leading-5">
            이미지를 드래그하거나 클릭하여 업로드
          </span>
          <input type="file" className="hidden" />
        </label>
      </div>

      {/* 태그 */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <label className="text-black80 text-sm font-boldFont">
            태그 정보
          </label>
          <span className="text-black40 text-[10px] font-mainFont leading-4">
            *최대 4개까지 입력 가능
          </span>
        </div>

        <div
          className="
            px-4 py-5 bg-white rounded-xl
            border border-gray-200
            focus-within:ring-1
            focus-within:ring-mainBlack
          "
        >
          <input
            type="text"
            placeholder="#태그 입력 (Enter)"
            className="w-full text-mainBlack placeholder:text-black40 font-mainFont focus:outline-none"
          />
        </div>
      </div>

      {/* 후원 가능 연령 */}
      <div className="flex flex-col gap-2">
        <label className="text-black80 text-sm font-boldFont">
          후원 가능 연령
        </label>

        <div className="flex gap-4">
          {/* 전체 이용가 */}
          <label
            className={`
              flex-1 p-4 bg-white rounded-xl cursor-pointer
              flex items-center gap-3 border
              ${age === 'ALL' ? 'border-mainBlack' : 'border-white60'}
            `}
            onClick={() => onChange('ageLimit', 'ALL')}
          >
            <input
              type="radio"
              name="age"
              value="ALL"
              checked={age === 'ALL'}
              readOnly
              className="hidden"
            />

            <div
              className={`
                w-4 h-4 rounded-full border flex items-center justify-center
                ${age === 'ALL' ? 'border-mainBlack' : 'border-black40'}
              `}
            >
              {age === 'ALL' && (
                <div className="w-2.5 h-2.5 bg-mainBlack rounded-full" />
              )}
            </div>

            <span className="text-mainBlack text-sm font-mediumFont">
              전체 이용가
            </span>
          </label>

          {/* 성인 */}
          <label
            className={`
              flex-1 p-4 bg-white rounded-xl cursor-pointer
              flex items-center gap-3 border
              ${age === 'ADULT' ? 'border-mainBlack' : 'border-white60'}
            `}
            onClick={() => onChange('ageLimit', 'ADULT')}
          >
            <input
              type="radio"
              name="age"
              value="ADULT"
              checked={age === 'ADULT'}
              readOnly
              className="hidden"
            />

            <div
              className={`
                w-4 h-4 rounded-full border flex items-center justify-center
                ${age === 'ADULT' ? 'border-mainBlack' : 'border-black40'}
              `}
            >
              {age === 'ADULT' && (
                <div className="w-2.5 h-2.5 bg-mainBlack rounded-full" />
              )}
            </div>

            <span className="text-mainBlack text-sm font-mediumFont">
              성인 (만 19세 이상)
            </span>
          </label>
        </div>
      </div>

      {/* 프로젝트 간략 소개 */}
      <div className="flex flex-col gap-2">
        <label className="text-black80 text-sm font-boldFont">
          프로젝트 간략 소개
        </label>

        <div
          className="
            px-4 pt-4 pb-16 bg-white rounded-xl
            border border-white60
            focus-within:ring-1
            focus-within:ring-mainBlack
          "
        >
          <textarea
            value={data.summary}
            onChange={(e) => onChange('summary', e.target.value)}
            placeholder="프로젝트를 한 문장으로 소개해 주세요."
            className="
              w-full resize-none
              text-mainBlack placeholder:text-black40
              font-mainFont focus:outline-none
            "
          />
        </div>
      </div>
    </div>
  );
}
