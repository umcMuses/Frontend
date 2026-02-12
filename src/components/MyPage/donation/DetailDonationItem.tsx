import { X } from 'lucide-react';
import {type OrderDetail } from '../types/order';

interface Props {
  item: OrderDetail;
  onClose: () => void;
}

const DetailDonationItem = ({ item, onClose }: Props) => {
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[6px]">
      {/* 카드 */}
      <div className="relative w-[672px] max-w-[672px] h-[607px] p-8 bg-white rounded-[32px] shadow-2xl flex flex-col items-center gap-3 overflow-hidden">
        {/* 헤더 */}
        <div className="self-stretch pb-4 border-b border-white80 flex justify-between items-center">
          <div className="text-mainBlack text-xl font-boldFont leading-7">
            응원 상세 정보
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-white80 rounded-full transition hover:bg-white60 cursor-pointer"
          >
            <div className=" relative">
              <X size={20} />
            </div>
          </button>
        </div>
        <div className="px-5 py-6 bg-stone-50 rounded-[32px] flex flex-col justify-start items-center gap-2.5">
          <div className="w-[531px] flex flex-col justify-start items-start gap-3">
            <div className="w-44 flex flex-col justify-start items-start">
              <div className="flex flex-col justify-start items-start">
                <div className="justify-center text-[#9198A7] text-sm font-boldFont leading-7">
                  {item.projectTitle}
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-center text-mainBlack text-base font-boldFont leading-7">
                  {item.locationDetail}
                </div>
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-20">
              <div className="w-52 inline-flex flex-col justify-start items-start">
                <div className="flex flex-col justify-start items-start">
                  <div className="justify-center text-[#9198A7] text-sm font-boldFont leading-7">
                    일시
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="justify-center text-mainBlack text-base font-boldFont leading-7">
                    {item.opening}
                  </div>
                </div>
              </div>
              <div className="w-56 inline-flex flex-col justify-start items-start">
                <div className="flex flex-col justify-start items-start">
                  <div className="justify-center text-[#9198A7] text-sm font-boldFont leading-7">
                    장소
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="justify-center text-mainBlack text-base font-boldFont leading-7">
                    {item.locationDetail}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-60 flex flex-col justify-start items-start">
              <div className="flex flex-col justify-start items-start">
                <div className="justify-center text-[#9198A7] text-sm font-boldFont leading-7">
                  옵션
                </div>
              </div>
              <div className="w-[523px] inline-flex justify-start items-center gap-3">
                <div className="justify-center text-mainBlack text-base font-boldFont leading-6">
                  {item.optionTitle}
                </div>
                <div className="justify-center text-black60 text-sm font-mainFont leading-5">
                  {item.optionDescription}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 py-3 border-b border-white80 flex flex-col justify-start items-start gap-1">
          <div className="w-[548px] inline-flex justify-center items-start gap-96">
            <div className="inline-flex flex-col justify-start items-start">
              <div className="justify-center text-[#9198A7] text-base font-mediumFont leading-7">
                결제일시
              </div>
            </div>
            <div className="inline-flex flex-col justify-start items-start">
              <div className="justify-center text-[#222] text-base font-mediumFont leading-7">
                {item.paidAt}
              </div>
            </div>
          </div>
          <div className="w-[548px] inline-flex justify-center items-start gap-96">
            <div className="inline-flex flex-col justify-start items-start">
              <div className="justify-center text-[#9198A7] text-base font-mediumFont leading-7">
                결제수단
              </div>
            </div>
            <div className="inline-flex flex-col justify-start items-start">
              <div className="justify-center text-[#222] text-base font-mediumFont leading-7">
                {item.paymentProvider}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center gap-16">
          <div className="w-[548px] inline-flex justify-center items-start gap-96">
            <div className="inline-flex flex-col justify-start items-start">
              <div className="justify-center text-black text-base font-boldFont leading-7">
                결제금액
              </div>
            </div>
            <div className="inline-flex flex-col justify-start items-start">
              <div className="justify-center text-[#645DE8] text-base font-boldFont leading-7">
                {item.amount}
              </div>
            </div>
          </div>
          <div className="justify-center text-[#F00] text-base font-mainFont leading-7">
            결제 취소
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDonationItem;
