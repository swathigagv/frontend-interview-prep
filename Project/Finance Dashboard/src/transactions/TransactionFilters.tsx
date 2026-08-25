import type { Filters } from '../types'
import { Search } from 'lucide-react'
import './TransactionFilters.css'

interface Props {
  filters: Filters
  categories: string[]
  months: { label: string; value: string }[]
  onChange: (filters: Filters) => void
}

export default function TransactionFilters({ filters, categories, months, onChange }: Props) {
  function set<K extends keyof Filters>(key: K, value: Filters[K]) {
    onChange({ ...filters, [key]: value })
  }

  return (
    <div className="filters-bar">
      {/* Search */}
      <div className="search-wrap">
        <Search size={14} className="search-icon" />
        <input
          className="search-input"
          placeholder="Search transactions..."
          value={filters.search}
          onChange={(e) => set('search', e.target.value)}
        />
      </div>

      {/* Type */}
      <select
        className="filter-select"
        value={filters.type}
        onChange={(e) => set('type', e.target.value as Filters['type'])}
      >
        <option value="">All Types</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* Category */}
      <select
        className="filter-select"
        value={filters.category}
        onChange={(e) => set('category', e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      {/* Month */}
      <select
        className="filter-select"
        value={filters.month}
        onChange={(e) => set('month', e.target.value)}
      >
        <option value="">All Months</option>
        {months.map((m) => (
          <option key={m.value} value={m.value}>
            {m.label}
          </option>
        ))}
      </select>

      {/* Clear */}
      {(filters.search || filters.type || filters.category || filters.month) && (
        <button
          className="clear-btn"
          onClick={() => onChange({ search: '', type: '', category: '', month: '' })}
        >
          Clear
        </button>
      )}
    </div>
  )
}