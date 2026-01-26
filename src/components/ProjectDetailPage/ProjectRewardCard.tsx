import type { ProjectReward } from '../../types/projectDetails';
import { CircleCheckBig } from 'lucide-react';

interface ProjectRewardCardProps {
  reward: ProjectReward;
  onClick?: (reward: ProjectReward) => void;
  quantity?: number;
  onQuantityChange?: (quantity: number) => void;
  isSelected?: boolean;
}

export const ProjectRewardCard = ({
  reward,
  onClick,
  quantity,
  onQuantityChange,
  isSelected = false,
}: ProjectRewardCardProps) => {
  const canAdjustQuantity = quantity !== undefined && onQuantityChange;
  return (
    <div
      className={`group relative w-full rounded-[32px] border p-6 bg-white cursor-pointer hover:border-solidBlue hover:shadow-md hover:shadow-solidBlue/10 transition-all duration-300 ${isSelected ? 'border-solidBlue shadow-md shadow-solidBlue/10' : 'border-white60 '}`}
      role="button"
      tabIndex={0}
      onClick={() => onClick?.(reward)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick?.(reward);
        }
      }}
    >
      {canAdjustQuantity && (
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <button
            type="button"
            className="w-8 h-8 rounded-full border border-white60 bg-white text-mainBlack hover:border-solidBlue disabled:opacity-40"
            onClick={(event) => {
              event.stopPropagation();
              onQuantityChange(Math.max(0, (quantity ?? 1) - 1));
            }}
            disabled={(quantity ?? 0) <= 0}
          >
            -
          </button>
          <span className="w-8 text-center text-sm font-boldFont text-mainBlack">
            {quantity}
          </span>
          <button
            type="button"
            className="w-8 h-8 rounded-full border border-white60 bg-white text-mainBlack hover:border-solidBlue disabled:opacity-40"
            onClick={(event) => {
              event.stopPropagation();
              onQuantityChange(
                Math.min(reward.numberOfAvailable, (quantity ?? 1) + 1)
              );
            }}
            disabled={(quantity ?? 1) >= reward.numberOfAvailable}
          >
            +
          </button>
        </div>
      )}
      <span
        className={`mb-1 text-lg font-boldFont transition-all duration-300 ${
          isSelected ? 'text-solidBlue' : 'text-mainBlack'
        } group-hover:text-solidBlue`}
      >
        {reward.price.toLocaleString()}원
      </span>
      <p className="mb-2 text-base font-mediumFont text-mainBlack">
        {reward.title}
      </p>
      <p className="mb-4 text-sm text-black60 leading-relaxed">
        {reward.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <CircleCheckBig className="w-3 h-3 text-solidBlue" />
          <p className="text-xs font-boldFont text-black40">
            {reward.numberOfFunded}명 선택함
          </p>
        </div>
        <p className="text-xs font-boldFont text-[#F87171]">
          {reward.numberOfAvailable}개 남음
        </p>
      </div>
    </div>
  );
};
