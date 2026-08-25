export type TransactionType = 'income' | 'expense'

export type Role = "viewer" | "admin"

export type Theme = 'dark' | 'light'

export interface Transaction {
    id:number;
    description:string;
    date:string;
    category:string;
    amount:number;
    type:TransactionType;
};

export interface Summary {
    income:number;
    expense:number;
    balance:number;
}

export type SortDirection = 'asc' | 'desc'

export type SortField = 'date' | 'amount' | 'description' | 'category'

export interface Filters {
  search: string
  type: TransactionType | ''
  category: string
  month: string
}