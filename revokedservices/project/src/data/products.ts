import { Product } from '../types';
import { products as stripeProducts } from '../stripe-config';

export const products: Product[] = [
  {
    id: '1',
    platform: 'Netflix',
    accountType: 'Premium 4K',
    price: 2.00,
    stockStatus: 'In Stock',
    description: 'Full access to Netflix Premium with 4K streaming capability. Watch on 4 screens simultaneously.',
    platformIcon: 'tv',
    subscriptionOptions: [
      { 
        id: '1-1', 
        duration: '1 Month', 
        price: 2.00,
        priceId: stripeProducts.netflix.priceId
      }
    ]
  }
];