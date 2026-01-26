import { useEffect, useState } from 'react';
import {
  MOCK_PROJECT_DETAILS,
  type ProjectReward,
} from '../../types/projectDetails';
import { ProjectRewardCard } from './ProjectRewardCard';
import tosspayLogo from '../../assets/images/TossPay_Logo_Primary.png';

interface ProjectRewardListProps {
  projectId: number;
}

export const ProjectRewardList = ({ projectId }: ProjectRewardListProps) => {
  const [paymentMethod, setPaymentMethod] = useState('토스페이먼츠');
  const [selectedQuantities, setSelectedQuantities] = useState<
    Record<number, number>
  >({});
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [showSelectNotice, setShowSelectNotice] = useState(false);
  const detail = MOCK_PROJECT_DETAILS.find(
    (item) => item.projectId === projectId
  );
  const selectedRewards =
    detail?.rewards?.filter(
      (reward) => (selectedQuantities[reward.id] ?? 0) > 0
    ) ?? [];
  const totalAmount = selectedRewards.reduce(
    (sum, reward) => sum + reward.price * (selectedQuantities[reward.id] ?? 0),
    0
  );

  const handleSelectReward = (reward: ProjectReward) => {
    setSelectedQuantities((prev) => {
      if (prev[reward.id]) return prev;
      return { ...prev, [reward.id]: 1 };
    });
  };

  const handleQuantityChange = (rewardId: number, quantity: number) => {
    setSelectedQuantities((prev) => {
      if (quantity <= 0) {
        const next = { ...prev };
        delete next[rewardId];
        return next;
      }
      const maxAvailable =
        detail?.rewards?.find((reward) => reward.id === rewardId)
          ?.numberOfAvailable ?? quantity;
      return {
        ...prev,
        [rewardId]: Math.min(quantity, maxAvailable),
      };
    });
  };

  useEffect(() => {
    if (!isPaymentOpen) return;
    setPaymentMethod('토스페이먼츠');
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isPaymentOpen]);

  useEffect(() => {
    if (selectedRewards.length > 0) {
      setShowSelectNotice(false);
    }
  }, [selectedRewards.length]);

  return (
    <div className="flex flex-col gap-4 mb-6">
      <p className="text-lg font-boldFont text-mainBlack px-2">리워드 선택</p>
      <div className="flex flex-col gap-4">
        {detail?.rewards?.map((reward) => {
          const selectedQuantity = selectedQuantities[reward.id] ?? 0;
          return (
            <ProjectRewardCard
              key={reward.id}
              reward={reward}
              onClick={handleSelectReward}
              isSelected={selectedQuantity > 0}
              quantity={selectedQuantity > 0 ? selectedQuantity : undefined}
              onQuantityChange={
                selectedQuantity > 0
                  ? (nextQuantity) =>
                      handleQuantityChange(reward.id, nextQuantity)
                  : undefined
              }
            />
          );
        })}
      </div>
      {showSelectNotice && (
        <p className="text-sm font-mediumFont text-[#EF4444] px-2">
          리워드를 선택해주세요!
        </p>
      )}
      <button
        type="button"
        className={`w-full h-14 mb-2 rounded-xl font-boldFont text-base cursor-pointer ${
          selectedRewards.length === 0
            ? 'bg-black40 text-mainWhite'
            : 'bg-mainBlack text-mainWhite'
        }`}
        onClick={() => {
          if (selectedRewards.length === 0) {
            setShowSelectNotice(true);
            return;
          }
          setIsPaymentOpen(true);
        }}
      >
        {selectedRewards.length === 0
          ? '응원하기'
          : `총 ${totalAmount.toLocaleString()}원 응원하기`}
      </button>
      {isPaymentOpen && selectedRewards.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            onClick={() => setIsPaymentOpen(false)}
          />
          <div
            className="relative z-10 w-fit min-w-[620px] rounded-[48px] bg-white p-10 mx-4"
            role="dialog"
            aria-modal="true"
          >
            <h3 className="text-2xl font-boldFont text-mainBlack mb-8">
              응원하기
            </h3>
            <div className="rounded-2xl border border-white40 bg-white80 p-10 mb-10 w-full">
              <p className="text-base text-solidBlue mb-5 font-boldFont">
                선택한 리워드
              </p>
              <div className="flex flex-col gap-5 border-b border-white40 pb-7.5 mb-7.5">
                {selectedRewards.map((reward) => (
                  <div
                    key={reward.id}
                    className="flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="flex gap-4 items-center mb-2.5">
                        <p className="text-2xl font-boldFont text-mainBlack">
                          {reward.title}
                        </p>
                        <p className="text-base text-black60 font-mediumFont">
                          x {selectedQuantities[reward.id]}
                        </p>
                      </div>
                      <p className="text-base text-black60 font-mediumFont">
                        {reward.description}
                      </p>
                    </div>
                    <p className="text-lg font-boldFont text-solidBlue">
                      {(
                        reward.price * (selectedQuantities[reward.id] ?? 0)
                      ).toLocaleString()}
                      원
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <p className="text-2xl text-black80 font-boldFont">결제 금액</p>
                <p className="text-2xl font-blackFont text-solidBlue">
                  {totalAmount.toLocaleString()}원
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {['토스페이먼츠'].map((method) => (
                <label
                  key={method}
                  className="h-20 flex items-center rounded-xl border border-white40 bg-white80 cursor-pointer hover:border-solidBlue hover:bg-pastelBlue transition-all px-7 mb-10"
                >
                  <input
                    className="w-6 h-6"
                    type="radio"
                    name="payment-method"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={() => setPaymentMethod(method)}
                  />
                  <span className="text-sm text-mainBlack pl-7">
                    <img src={tosspayLogo} alt="토스페이먼츠" width={120} />
                  </span>
                </label>
              ))}
            </div>

            <button
              type="button"
              className="w-full h-20 rounded-xl bg-mainBlack text-mainWhite font-boldFont text-2xl cursor-pointer"
            >
              결제하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
