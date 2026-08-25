import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import useStore from '../store/useStore'
import  type { Transaction, TransactionType } from '../types'
import { expenseCategories, incomeCategories } from '../data/mockData'
import './TransactionModel.css'

interface Props {
  open: boolean
  onClose: () => void
  editData?: Transaction | null
}

const emptyForm = {
  description: '',
  amount: '',
  type: 'expense' as TransactionType,
  category: 'Food',
  date: new Date().toISOString().split('T')[0],
}

export default function TransactionModal({ open, onClose, editData = null }: Props) {
  const { addTransaction, updateTransaction } = useStore()
  const [form, setForm] = useState(emptyForm)

  useEffect(() => {
    if (editData) {
      setForm({ ...editData, amount: String(editData.amount) })
    } else {
      setForm(emptyForm)
    }
  }, [editData, open])

  if (!open) return null

  const categories = form.type === 'income' ? incomeCategories : expenseCategories

  function setField<K extends keyof typeof form>(field: K, value: (typeof form)[K]) {
    setForm((prev) => {
      const next = { ...prev, [field]: value }
      if (field === 'type') {
        next.category = value === 'income' ? 'Salary' : 'Food'
      }
      return next
    })
  }

  function handleSave() {
    if (!form.description.trim() || !form.amount || !form.date) return
    const payload = {
      description: form.description.trim(),
      amount: parseFloat(form.amount),
      type: form.type,
      category: form.category,
      date: form.date,
    }
    if (editData) {
      updateTransaction(editData.id, payload)
    } else {
      addTransaction(payload)
    }
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">

        {/* Header */}
        <div className="modal-header">
          <h2 className="modal-title">
            {editData ? 'Edit Transaction' : 'Add Transaction'}
          </h2>
          <button className="modal-close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">

          <div className="form-field">
            <label className="form-label">Description</label>
            <input
              className="form-input"
              placeholder="e.g. Grocery shopping"
              value={form.description}
              onChange={(e) => setField('description', e.target.value)}
            />
          </div>

          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Amount (USD)</label>
              <input
                type="number"
                min="0"
                step="0.01"
                className="form-input"
                placeholder="0.00"
                value={form.amount}
                onChange={(e) => setField('amount', e.target.value)}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Type</label>
              <select
                className="form-input"
                value={form.type}
                onChange={(e) => setField('type', e.target.value as TransactionType)}
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Category</label>
              <select
                className="form-input"
                value={form.category}
                onChange={(e) => setField('category', e.target.value)}
              >
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-input"
                value={form.date}
                onChange={(e) => setField('date', e.target.value)}
              />
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-accent" onClick={handleSave}>
            {editData ? 'Update' : 'Save'}
          </button>
        </div>

      </div>
    </div>
  )
}