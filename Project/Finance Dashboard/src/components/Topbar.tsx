import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Sun, Moon, Plus, Download } from 'lucide-react'
import useStore from '../store/useStore'
import TransactionModal from '../transactions/TransactionModel'
import './Topbar.css'

const pageTitles: Record<string, string> = {
  '/overview':     'Overview',
  '/transactions': 'Transactions',
  '/insights':     'Insights',
}

export default function Topbar() {
  const { theme, toggleTheme, role, transactions } = useStore()
  const location = useLocation()
  const [modalOpen, setModalOpen] = useState(false)

  const title = pageTitles[location.pathname] ?? 'Dashboard'

  function exportCSV() {
    const headers = ['ID', 'Description', 'Category', 'Type', 'Amount', 'Date']
    const rows = transactions.map((t) =>
      [t.id, `"${t.description}"`, t.category, t.type, t.amount, t.date].join(',')
    )
    const csv = [headers.join(','), ...rows].join('\n')
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }))
    a.download = 'finio_transactions.csv'
    a.click()
  }

  return (
    <>
      <header className="topbar">
        <h1 className="topbar-title">{title}</h1>

        <div className="topbar-actions">
          <button className="btn btn-ghost" onClick={exportCSV}>
            <Download size={14} />
            Export CSV
          </button>

          {role === 'admin' && (
            <button className="btn btn-accent" onClick={() => setModalOpen(true)}>
              <Plus size={14} strokeWidth={2.5} />
              Add Transaction
            </button>
          )}

          <button className="icon-btn" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </header>

      <TransactionModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}