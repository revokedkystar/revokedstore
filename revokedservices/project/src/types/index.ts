export interface Product {
  id: string;
  platform: string;
  accountType: string;
  price: number;
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  description: string;
  platformIcon: string;
  subscriptionOptions: SubscriptionOption[];
}

export interface SubscriptionOption {
  id: string;
  duration: string;
  price: number;
  priceId: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'purchase' | 'security' | 'delivery' | 'warranty' | 'payment';
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
  platform: string;
}

export interface CartItem {
  id: string;
  productId: string;
  platform: string;
  accountType: string;
  duration: string;
  price: number;
}