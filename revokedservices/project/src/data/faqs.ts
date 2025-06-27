import { FAQ } from '../types';

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How does the purchase process work?',
    answer: 'After selecting your desired account, click the "Purchase" button and proceed to checkout. Once payment is confirmed, account credentials will be delivered to your email within 10 minutes.',
    category: 'purchase'
  },
  {
    id: '2',
    question: 'Are these accounts secure?',
    answer: 'All accounts are obtained through legitimate means and undergo security verification before listing. We recommend changing the password upon receipt for added security.',
    category: 'security'
  },
  {
    id: '3',
    question: 'How long does delivery take?',
    answer: 'Account credentials are typically delivered within 10 minutes of confirmed payment. During high-volume periods, this may extend to 30 minutes maximum.',
    category: 'delivery'
  },
  {
    id: '4',
    question: 'What is your warranty policy?',
    answer: 'Each account comes with a specific warranty period (listed in the product description). If any issues occur during this period, we\'ll provide a replacement account at no additional cost.',
    category: 'warranty'
  },
  {
    id: '5',
    question: 'What payment methods do you accept?',
    answer: 'We accept major credit/debit cards, PayPal, Bitcoin, and Ethereum. All transactions are encrypted and secure.',
    category: 'payment'
  },
  {
    id: '6',
    question: 'What if I don\'t receive my account details?',
    answer: 'If you haven\'t received your account credentials within 30 minutes, please contact our support team via Discord or email with your order number.',
    category: 'delivery'
  }
];