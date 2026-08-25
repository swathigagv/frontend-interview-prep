import { useState, useEffect } from 'react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import useStore from '../../store/useStore'
import './Charts.css'

function getLast6Months() {
  const months = []
  const now = new Date()
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1)
    months.push({
      label: d.toLocaleString('default', { month: 'short' }),
      key: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`,
    })
  }
  return months
}

export default function BalanceTrendChart() {
  const transactions = useStore((s) => s.transactions)
  const [loading,setLoading] = useState(true)
  const [barWidth, setBarWidth] = useState(0)
  const months = getLast6Months()

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((s, t) => s + t.amount, 0)

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((s, t) => s + t.amount, 0)

  const total = totalIncome + totalExpense
  const incomeRatio  = total > 0 ? (totalIncome  / total) * 100 : 0
  const expenseRatio = total > 0 ? (totalExpense / total) * 100 : 0

  const data = months.map(({ label, key }) => {
    const monthTx = transactions.filter((t) => t.date.startsWith(key))
    const income  = monthTx.filter((t) => t.type === 'income').reduce((s, t) => s + t.amount, 0)
    const expense = monthTx.filter((t) => t.type === 'expense').reduce((s, t) => s + t.amount, 0)
    return { month: label, Income: income, Expenses: expense }
  })

  const COLORS = {
  income: "#34d399",
  expense: "#f87171",
}
  // Simulate chart loading
  useEffect(() => {
    setLoading(true)
    setBarWidth(0)
    const loadTimer = setTimeout(() => {setLoading(false),
    setTimeout(() => setBarWidth(incomeRatio), 100)}, 900)
    return () => clearTimeout(loadTimer)
  }, [transactions, incomeRatio])

  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <p className="chart-title">Balance Trend</p>
          <p className="chart-sub">Income vs Expenses — last 6 months</p>
        </div>
        <div className="chart-legend">
          <span className="legend-dot" style={{ background: COLORS.income }} />
          <span className="legend-label">Income</span>
          <span className="legend-dot" style={{ background: COLORS.expense }} />
          <span className="legend-label">Expenses</span>
        </div>
      </div>

{/* ── Progress Bar ── */}
      <div className="trend-progress-wrap">

        {/* Labels row */}
        <div className="trend-progress-labels">
          <div className="trend-progress-label-left">
            <span className="trend-progress-dot" style={{ background: COLORS.income }} />
            <span className="trend-progress-key">Income</span>
            <span className="trend-progress-pct" style={{ color: COLORS.income }}>
              {incomeRatio.toFixed(1)}%come
            </span>
          </div>
          <div className="trend-progress-label-right">
            <span className="trend-progress-pct" style={{ color: COLORS.expense }}>
              {expenseRatio.toFixed(1)}%
            </span>
            <span className="trend-progress-key">Expenses</span>
            <span className="trend-progress-dot" style={{ background: COLORS.expense }} />
          </div>
        </div>

        {/* Bar track */}
        <div className="trend-progress-track">
          <div
            className="trend-progress-income"
            style={{ width: `${barWidth}%` }}
          />
          <div
            className="trend-progress-expense"
            style={{ width: `${100 - barWidth}%` }}
          />
        </div>

        {/* Amount labels */}
        <div className="trend-progress-amounts">
          <span style={{ color: COLORS.income}}>
            ${totalIncome.toLocaleString()}
          </span>
          <span style={{ color: COLORS.expense }}>
            ${totalExpense.toLocaleString()}
          </span>
        </div>
      </div>

{/* ── Loading Spinner / Chart ── */}
      {loading ? (
        <div className="chart-loading">
          <div className="chart-spinner" />
          <p className="chart-loading-text">Loading chart...</p>
        </div>
      ) : (
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor= {COLORS.income} stopOpacity={0.2} />
              <stop offset="95%" stopColor= {COLORS.income} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor= {COLORS.expense} stopOpacity={0.2} />
              <stop offset="95%" stopColor= {COLORS.expense} stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />

          <XAxis
            dataKey="month"
            tick={{ fill: 'var(--muted)', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: 'var(--muted)', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${v >= 1000 ? (v / 1000).toFixed(0) + 'k' : v}`}
          />
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

          <Area
            type="monotone"
            dataKey="Income"
            stroke= {COLORS.income}
            strokeWidth={2}
            fill="url(#colorIncome)"
            dot={{ fill: '#34d399', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Area
            type="monotone"
            dataKey="Expenses"
            stroke={COLORS.expense}
            strokeWidth={2}
            fill="url(#colorExpense)"
            dot={{ fill: '#f87171', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
      )}
    </div>
  )
}