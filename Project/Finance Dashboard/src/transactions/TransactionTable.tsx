import { useState } from 'react'
import type { Transaction, SortField, SortDirection } from '../types'
import { categoryColors } from '../data/mockData'
import { Pencil, Trash2, ChevronUp, ChevronDown } from 'lucide-react'
import './TransactionTable.css'

interface Props {
  transactions: Transaction[]
  isAdmin: boolean
  onEdit: (tx: Transaction) => void
  onDelete: (id: number) => void
}

const PAGE_SIZE = 10

export default function TransactionTable({ transactions, isAdmin, onEdit, onDelete }: Props) {
  const [sortField, setSortField] = useState<SortField>('date')
  const [sortDir, setSortDir]     = useState<SortDirection>('desc')
  const [page, setPage]           = useState(1)

  // Sort
  const sorted = [...transactions].sort((a, b) => {
    let va: string | number = a[sortField]
    let vb: string | number = b[sortField]
    if (sortField === 'amount') { va = +va; vb = +vb }
    if (sortField === 'date')   { va = new Date(va).getTime(); vb = new Date(vb).getTime() }
    if (va < vb) return sortDir === 'asc' ? -1 : 1
    if (va > vb) return sortDir === 'asc' ? 1 : -1
    return 0
  })

  // Paginate
  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE))
  const safePage   = Math.min(page, totalPages)
  const slice      = sorted.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)

  function handleSort(field: SortField) {
    if (sortField === field) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    else { setSortField(field); setSortDir(field === 'date' ? 'desc' : 'asc') }
    setPage(1)
  }

  function SortIcon({ field }: { field: SortField }) {
    if (sortField !== field) return <span className="sort-icon sort-icon--inactive"><ChevronUp size={12} /></span>
    return sortDir === 'asc'
      ? <ChevronUp size={12} className="sort-icon sort-icon--active" />
      : <ChevronDown size={12} className="sort-icon sort-icon--active" />
  }

  // Pagination buttons
  function pageNumbers() {
    const nums: (number | '...')[] = []
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - safePage) <= 1) nums.push(i)
      else if (nums[nums.length - 1] !== '...') nums.push('...')
    }
    return nums
  }

  if (transactions.length === 0) {
    return (
      <div className="tx-empty">
        <p className="tx-empty-icon">🔍</p>
        <p>No transactions match your filters</p>
      </div>
    )
  }

  return (
    <div className="tx-table-wrap">
      <div className="tx-table-scroll">
        <table className="tx-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('description')} className="th-sortable">
                Description <SortIcon field="description" />
              </th>
              <th onClick={() => handleSort('category')} className="th-sortable">
                Category <SortIcon field="category" />
              </th>
              <th onClick={() => handleSort('date')} className="th-sortable">
                Date <SortIcon field="date" />
              </th>
              <th onClick={() => handleSort('amount')} className="th-sortable">
                Amount <SortIcon field="amount" />
              </th>
              <th>Type</th>
              {isAdmin && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {slice.map((t) => (
              <tr key={t.id}>
                <td className="td-desc">{t.description}</td>
                <td>
                  <span
                    className="cat-badge"
                    style={{
                      background: (categoryColors[t.category] ?? '#888') + '22',
                      color: categoryColors[t.category] ?? '#888',
                    }}
                  >
                    {t.category}
                  </span>
                </td>
                <td className="td-date">
                  {new Date(t.date).toLocaleDateString('en-US', {
                    month: 'short', day: 'numeric', year: '2-digit',
                  })}
                </td>
                <td
                  className="td-amount"
                  style={{ color: t.type === 'income' ? 'var(--income)' : 'var(--expense)' }}
                >
                  {t.type === 'income' ? '+' : '-'}${t.amount.toLocaleString()}
                </td>
                <td>
                  <span className={`type-badge type-badge--${t.type}`}>
                    {t.type}
                  </span>
                </td>
                {isAdmin && (
                  <td>
                    <div className="action-btns">
                      <button
                        className="action-btn action-btn--edit"
                        onClick={() => onEdit(t)}
                        title="Edit"
                      >
                        <Pencil size={13} />
                      </button>
                      <button
                        className="action-btn action-btn--delete"
                        onClick={() => onDelete(t.id)}
                        title="Delete"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <span className="pagination-info">
          {(safePage - 1) * PAGE_SIZE + 1}–{Math.min(safePage * PAGE_SIZE, sorted.length)} of {sorted.length}
        </span>
        <div className="pagination-btns">
          <button
            className="page-btn"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={safePage === 1}
          >
            ‹
          </button>
          {pageNumbers().map((n, i) =>
            n === '...'
              ? <span key={`ellipsis-${i}`} className="page-ellipsis">…</span>
              : <button
                  key={n}
                  className={`page-btn ${safePage === n ? 'page-btn--active' : ''}`}
                  onClick={() => setPage(n)}
                >
                  {n}
                </button>
          )}
          <button
            className="page-btn"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={safePage === totalPages}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  )
}