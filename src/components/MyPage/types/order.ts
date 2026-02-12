// types/order.ts

export interface OrderItem {
  orderId: number;
  projectTitle: string;
  orderStatus: string;
  paymentStatus: string;
  amount: number;
  displayDate: string;
}

export interface OrderDetail {
  orderId: number;
  projectTitle: string;
  opening: string;
  locationDetail: string;
  optionTitle: string;
  optionDescription: string;
  quantity: number;
  paidAt: string;
  paymentProvider: string;
  amount: string;
  orderStatus: number;
  paymentStatus: string;
}

export interface OrderListResponse {
  success: boolean;
  data: {
    items: OrderItem[];
  };
}

export interface OrderDetailResponse {
  success: boolean;
  data: OrderDetail;
}
