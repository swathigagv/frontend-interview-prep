import SummaryCards from '../components/dashboard/Summarycard'
import BalanceTrendChart from '../components/dashboard/BalanceTrendChart'
import SpendingBreakdownChart from '../components/dashboard/SpendingBreakdownChart'
import useStore from '../store/useStore'
import { categoryColors } from '../data/mockData'
import './Overview.css'

export default function Overview() {
  const transactions = useStore((s) => s.transactions)

  // Last 5 transactions
  const recent = [...transactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)

  return (
    <div>
      <SummaryCards />

      <div className="charts-grid">
        <BalanceTrendChart />
        <SpendingBreakdownChart />
      </div>

      {/* Recent Transactions */}
      <div className="recent-section">
        <div className="recent-header">
          <div>
            <p className="recent-title">Recent Transactions</p>
            <p className="recent-sub">Last 5 entries</p>
          </div>
        </div>

        {recent.length === 0 ? (
          <div className="recent-empty">No transactions yet</div>
        ) : (
          <div className="recent-table-wrap">
            <table className="recent-table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((t) => (
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

