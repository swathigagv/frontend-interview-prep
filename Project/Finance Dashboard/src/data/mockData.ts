import  type { Transaction } from '../types'

export const mockTransactions: Transaction[] = [
  { id: 1,  description: 'Monthly Salary',    category: 'Salary',        type: 'income',  amount: 5200, date: '2025-01-31' },
  { id: 2,  description: 'Apartment Rent',     category: 'Housing',       type: 'expense', amount: 1450, date: '2025-01-01' },
  { id: 3,  description: 'Grocery Run',        category: 'Food',          type: 'expense', amount: 230,  date: '2025-01-08' },
  { id: 4,  description: 'Transport Card',     category: 'Transport',     type: 'expense', amount: 55,   date: '2025-01-10' },
  { id: 5,  description: 'Investment Return',  category: 'Investment',    type: 'income',  amount: 410,  date: '2025-01-15' },
  { id: 6,  description: 'Clothing',           category: 'Shopping',      type: 'expense', amount: 175,  date: '2025-01-19' },
  { id: 7,  description: 'Monthly Salary',     category: 'Salary',        type: 'income',  amount: 5200, date: '2025-02-28' },
  { id: 8,  description: 'Apartment Rent',     category: 'Housing',       type: 'expense', amount: 1450, date: '2025-02-01' },
  { id: 9,  description: 'Groceries',          category: 'Food',          type: 'expense', amount: 210,  date: '2025-02-07' },
  { id: 10, description: 'Valentine Dinner',   category: 'Food',          type: 'expense', amount: 120,  date: '2025-02-14' },
  { id: 11, description: 'Freelance Work',     category: 'Freelance',     type: 'income',  amount: 650,  date: '2025-02-20' },
  { id: 12, description: 'Gym & Wellness',     category: 'Health',        type: 'expense', amount: 70,   date: '2025-02-22' },
  { id: 13, description: 'Monthly Salary',     category: 'Salary',        type: 'income',  amount: 5500, date: '2025-03-31' },
  { id: 14, description: 'Apartment Rent',     category: 'Housing',       type: 'expense', amount: 1450, date: '2025-03-01' },
  { id: 15, description: 'Groceries',          category: 'Food',          type: 'expense', amount: 220,  date: '2025-03-05' },
  { id: 16, description: 'Spotify Premium',    category: 'Entertainment', type: 'expense', amount: 15,   date: '2025-03-10' },
  { id: 17, description: 'Investment Return',  category: 'Investment',    type: 'income',  amount: 530,  date: '2025-03-18' },
  { id: 18, description: 'Electric Bill',      category: 'Utilities',     type: 'expense', amount: 88,   date: '2025-03-20' },
  { id: 19, description: 'Coffee & Cafe',      category: 'Food',          type: 'expense', amount: 62,   date: '2025-03-25' },
]

export const categoryColors: Record<string, string> = {
  Food:          '#f5a742',
  Housing:       '#7b5ea7',
  Transport:     '#42c8f5',
  Entertainment: '#f54267',
  Health:        '#42f5a8',
  Shopping:      '#f5e642',
  Utilities:     '#a7845e',
  Education:     '#5ea7f5',
  Salary:        '#c8f542',
  Freelance:     '#5ef5a7',
  Investment:    '#f542c8',
  Other:         '#888899',
}

export const expenseCategories = [
  'Food', 'Housing', 'Transport', 'Entertainment',
  'Health', 'Shopping', 'Utilities', 'Education', 'Other',
]

export const incomeCategories = [
  'Salary', 'Freelance', 'Investment', 'Other',
]