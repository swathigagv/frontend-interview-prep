import { create } from 'zustand'
import { mockTransactions } from '../data/mockData';
import { persist } from 'zustand/middleware';
import  type { Transaction, Role , Summary , Theme } from '../types';


interface StoreState  {
  transactions: Transaction[]
  role: Role
  theme: Theme
  setRole: (role: Role) => void
  addTransaction: (tx: Omit<Transaction, 'id'>) => void
  updateTransaction: (id: number, updated: Partial<Transaction>) => void
  deleteTransaction: (id: number) => void
  toggleTheme: () => void
  getSummary: ()=> Summary
}

const useStore = create<StoreState>()(
    persist((set, get) => ({
  transactions: mockTransactions,
  role: "admin", 
  theme: "dark",

 addTransaction: (tx) =>
        set((s) => ({
          transactions: [...s.transactions, { ...tx, id: Date.now() }],
        })),

      updateTransaction: (id, updated) =>
        set((s) => ({
          transactions: s.transactions.map((t) =>
            t.id === id ? { ...t, ...updated } : t
          ),
        })),

      deleteTransaction: (id) =>
        set((s) => ({
          transactions: s.transactions.filter((t) => t.id !== id),
        })),

      setRole: (role) => set({ role }),

      toggleTheme: () =>
        set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),

      getSummary: () => {
        const { transactions } = get()
        const income  = transactions.filter((t) => t.type === 'income').reduce((s, t) => s + t.amount, 0)
        const expense = transactions.filter((t) => t.type === 'expense').reduce((s, t) => s + t.amount, 0)
        return { income, expense, balance: income - expense }
      },
    }),
    { name: 'finio-storage' }
  )
)

export default useStore