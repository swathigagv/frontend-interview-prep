import { useState, useMemo } from 'react'
import type { Filters, Transaction } from '../types'
import useStore from '../store/useStore'
import TransactionFilters from '../transactions/TransactionFilters'
import TransactionTable from '../transactions/TransactionTable'
import TransactionModal from '../transactions/TransactionModel'
import './transaction.css'

const defaultFilters: Filters = {
  search: '', type: '', category: '', month: '',
}

export default function Transactions() {
  const { transactions, role, deleteTransaction } = useStore()
  const [filters, setFilters] = useState<Filters>(defaultFilters)
  const [editData, setEditData] = useState<Transaction | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  // Derived filter options
  const categories = useMemo(() => (
    [...new Set(transactions.map((t) => t.category))].sort()
  ), [transactions])

  const months = useMemo(() => {
    const keys = [...new Set(transactions.map((t) => t.date.slice(0, 7)))].sort().reverse()
    return keys.map((k) => {
      const d = new Date(k + '-01')
      return {
        value: k,
        label: d.toLocaleString('default', { month: 'long', year: 'numeric' }),
      }
    })
  }, [transactions])

  // Apply filters
  const filtered = useMemo(() => {
    return transactions.filter((t) => {
      if (filters.type && t.type !== filters.type) return false
      if (filters.category && t.category !== filters.category) return false
      if (filters.month && !t.date.startsWith(filters.month)) return false
      if (filters.search) {
        const q = filters.search.toLowerCase()
        if (!t.description.toLowerCase().includes(q) &&
            !t.category.toLowerCase().includes(q)) return false
      }
      return true
    })
  }, [transactions, filters])

  function handleEdit(tx: Transaction) {
    setEditData(tx)
    setModalOpen(true)
  }

  function handleDelete(id: number) {
    if (window.confirm('Delete this transaction?')) {
      deleteTransaction(id)
    }
  }

  function handleClose() {
    setModalOpen(false)
    setEditData(null)
  }

  return (
    <div>
      {/* Header */}
      <div className="tx-page-header">
        <div>
          <h2 className="tx-page-title">All Transactions</h2>
          <p className="tx-page-sub">{filtered.length} record{filtered.length !== 1 ? 's' : ''}</p>
        </div>
      </div>

      <TransactionFilters
        filters={filters}
        categories={categories}
        months={months}
        onChange={setFilters}
      />

      <TransactionTable
        transactions={filtered}
        isAdmin={role === 'admin'}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <TransactionModal
        open={modalOpen}
        onClose={handleClose}
        editData={editData}
      />
    </div>
  )
}