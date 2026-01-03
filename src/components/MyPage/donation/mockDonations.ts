import { type DonationItem } from "../types/types";

export const mockDonations: DonationItem[] = [
  {
    id: 1,
    title: "밴드 ‘새벽’ 단독 콘서트",
    amount: 65000,
    date: "2025.10.01",
    initial: "밴",
    status: "결제 완료"
  },
  {
    id: 2,
    title: "재즈 페스티벌 얼리버드",
    amount: 88000,
    date: "2024.12.15",
    initial: "재",
    status: "결제 완료"
  },
];
