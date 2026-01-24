import { useEffect, useState } from 'react';
import {
  MOCK_PROJECT_DETAILS,
  type ProjectReward,
} from '../../types/projectDetails';
import { ProjectRewardCard } from './ProjectRewardCard';
import { X } from 'lucide-react';

interface ProjectRewardListProps {
  projectId: number;
}

export const ProjectRewardList = ({ projectId }: ProjectRewardListProps) => {
  const detail = MOCK_PROJECT_DETAILS.find(
    (item) => item.projectId === projectId
  );

  // 결제 모달
  const [selectedReward, setSelectedReward] = useState<ProjectReward | null>(
    null
  );
  const [paymentMethod, setPaymentMethod] = useState('카드');
  const openPaymentModal = (reward: ProjectReward) => {
    setSelectedReward(reward);
    setPaymentMethod('카드');
  };
  const closePaymentModal = () => {
    setSelectedReward(null);
  };
  const handlePayment = () => {
    if (!selectedReward) return;
    console.log('reservePayment', {
      rewardId: selectedReward.id,
      paymentMethod,
    });
  };
  // 결제 모달 오버플로우 처리
  useEffect(() => {
    if (!selectedReward) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedReward]);

  return (
    <div className="flex flex-col gap-4 mb-6">
      <p className="text-lg font-boldFont text-mainBlack px-2">리워드 선택</p>
      <div className="flex flex-col gap-4">
        {detail?.rewards?.map((reward) => (
          <ProjectRewardCard
            key={reward.id}
            reward={reward}
            onClick={openPaymentModal}
          />
        ))}
      </div>
      {selectedReward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* 배경 어두움 처리 */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            onClick={closePaymentModal}
          />
          <div
            className="relative z-10 w-full max-w-[620px] rounded-[48px] bg-white p-10 mx-4"
            role="dialog"
            aria-modal="true"
          >
            <h3 className="text-2xl font-boldFont text-mainBlack mb-8">
              후원 결제하기
            </h3>
            <div className="rounded-2xl border border-white40 bg-white80 p-10 mb-10 w-full">
              <p className="text-base text-solidBlue mb-5 font-boldFont">
                선택한 리워드
              </p>
              <p className="text-2xl font-boldFont text-mainBlack mb-2.5">
                {selectedReward.title}
              </p>
              <p className="text-base text-black60 font-mediumFont mb-7.5">
                {selectedReward.description}
              </p>
              <div className="w-full border-b border-white40 mb-7.5" />
              <div className="flex items-center justify-between">
                <p className="text-2xl text-black80 font-boldFont">결제 금액</p>
                <p className="text-2xl font-blackFont text-solidBlue">
                  {selectedReward.price.toLocaleString()}원
                </p>
              </div>
            </div>
            {/* 결제수단 선택 일단은 토스페이먼츠 하나만 등록 */}
            <div className="flex flex-col gap-2">
              {['토스페이먼츠'].map((method) => (
                <label
                  key={method}
                  className="flex items-center justify-between rounded-xl border border-white60 px-4 py-3 cursor-pointer hover:border-solidBlue"
                >
                  <span className="text-sm text-mainBlack"></span>
                  <input
                    type="radio"
                    name="payment-method"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={() => setPaymentMethod(method)}
                  />
                </label>
              ))}
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-solidBlue text-white py-3 font-boldFont hover:bg-solidBlue/90 transition-colors"
              onClick={handlePayment}
            >
              결제하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
