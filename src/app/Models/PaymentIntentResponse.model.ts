export interface PaymentIntentResponse {
  id: string;
  amount: number;
  currency: string;
  clientSecret: string;
  status: string;
}
