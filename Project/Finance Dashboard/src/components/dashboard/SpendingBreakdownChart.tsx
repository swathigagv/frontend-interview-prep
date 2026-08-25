import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts'
import useStore from '../../store/useStore'
import { categoryColors } from '../../data/mockData'
import './Charts.css'

export default function SpendingBreakdownChart() {
  const transactions = useStore((s) => s.transactions)

  const categoryTotals: Record<string, number> = {}
  transactions
    .filter((t) => t.type === 'expense')
    .forEach((t) => {
      categoryTotals[t.category] = (categoryTotals[t.category] ?? 0) + t.amount
    })

  const data = Object.entries(categoryTotals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, value]) => ({ name, value }))

  const total = data.reduce((s, d) => s + d.value, 0)

  if (!data.length) {
    return (
      <div className="chart-card empty-chart">
        <p className="chart-title">Spending Breakdown</p>
        <p className="empty-text">No expense data yet</p>
      </div>
    )
  }

  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <p className="chart-title">Spending Breakdown</p>
          <p className="chart-sub">By category</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={80}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry) => (
              <Cell
                key={entry.name}
                fill={categoryColors[entry.name] ?? '#888'}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              fontSize: '0.8rem',
              color: 'var(--text)',
            }}
        formatter={(value) => {
  if (typeof value !== 'number') return [String(value), undefined]
  return [`$${value.toLocaleString()}`, undefined]
}}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="donut-legend">
        {data.map((entry) => (
          <div className="donut-legend-item" key={entry.name}>
            <span
              className="donut-legend-dot"
              style={{ background: categoryColors[entry.name] ?? '#888' }}
            />
            <span className="donut-legend-name">{entry.name}</span>
            <span className="donut-legend-pct">
              {total > 0 ? ((entry.value / total) * 100).toFixed(0) : 0}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}