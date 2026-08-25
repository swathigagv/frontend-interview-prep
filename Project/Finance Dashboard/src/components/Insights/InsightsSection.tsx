import { useState, useEffect } from 'react'
import useStore from '../../store/useStore'
import { categoryColors } from '../../data/mockData'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import './InsightsSection.css'

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

export default function InsightsSection() {
  const transactions = useStore((s) => s.transactions)
  const [loading, setLoading] = useState(true)
  const [barWidth, setBarWidth] = useState(0)

  const months = getLast6Months()

  // Monthly income vs expense data for bar chart
  const monthlyData = months.map(({ label, key }) => {
  const monthTx = transactions.filter((t) => t.date.startsWith(key))
  const income  = monthTx.filter((t) => t.type === 'income').reduce((s, t) => s + t.amount, 0)
  const expense = monthTx.filter((t) => t.type === 'expense').reduce((s, t) => s + t.amount, 0)
    return { 
      month: label, 
      Income: income,
      Expenses: expense
     }
  })

  const COLORS = {
  income: "#34d399",
  expense: "#f87171",
}

   // Totals across all months for progress bar
  const totalIncome  = monthlyData.reduce((s, d) => s + d.Income,   0)
  const totalExpense = monthlyData.reduce((s, d) => s + d.Expenses, 0)
  const total        = totalIncome + totalExpense
  const incomeRatio  = total > 0 ? (totalIncome  / total) * 100 : 0
  const expenseRatio = total > 0 ? (totalExpense / total) * 100 : 0


  // Category totals for breakdown
  const categoryTotals: Record<string, number> = {}
  transactions
    .filter((t) => t.type === 'expense')
    .forEach((t) => {
      categoryTotals[t.category] = (categoryTotals[t.category] ?? 0) + t.amount
    })

  const sortedCategories = Object.entries(categoryTotals)
    .sort((a, b) => b[1] - a[1])

  const totalExpenseAll = sortedCategories.reduce((s, [, v]) => s + v, 0)

  // Summary numbers
  const totalIncomeAll  = transactions.filter((t) => t.type === 'income').reduce((s, t) => s + t.amount, 0)
  const savingsRate  = totalIncomeAll > 0
    ? (((totalIncomeAll - totalExpenseAll) / totalIncomeAll) * 100).toFixed(1)
    : '0.0'

  const topCategory  = sortedCategories[0]

  // Month over month expense change
  const thisKey  = months[5].key
  const prevKey  = months[4].key
  const thisExp  = transactions.filter((t) => t.type === 'expense' && t.date.startsWith(thisKey)).reduce((s, t) => s + t.amount, 0)
  const prevExp  = transactions.filter((t) => t.type === 'expense' && t.date.startsWith(prevKey)).reduce((s, t) => s + t.amount, 0)
  const momChange = prevExp > 0 ? (((thisExp - prevExp) / prevExp) * 100).toFixed(1) : null

  // Average monthly expense
  const avgMonthly = (totalExpense / 6).toFixed(0)

  const kpis = [
    {
      icon: '🏆',
      label: 'Top Spending Category',
      value: topCategory ? topCategory[0] : '—',
      desc: topCategory ? `$${topCategory[1].toLocaleString()} total spent` : 'No expense data',
      color: topCategory ? (categoryColors[topCategory[0]] ?? '#888') : '#888',
    },
    {
      icon: '💰',
      label: 'Savings Rate',
      value: `${savingsRate}%`,
      desc: 'Of total income saved',
      color: '#34d399',
    },
    {
      icon: '📅',
      label: 'Avg Monthly Expense',
      value: `$${Number(avgMonthly).toLocaleString()}`,
      desc: 'Over last 6 months',
      color: '#60a5fa',
    },
    {
      icon: momChange !== null && +momChange >= 0 ? '📈' : '📉',
      label: 'Expense Change',
      value: momChange !== null ? `${+momChange >= 0 ? '↑' : '↓'} ${Math.abs(+momChange)}%` : '—',
      desc: 'vs previous month',
      color: momChange !== null && +momChange >= 0 ? COLORS.expense : COLORS.income,
    },
  ]

  // Spinner — simulate chart loading
  useEffect(() => {
    setLoading(true)
    setBarWidth(0)
    const loadTimer = setTimeout(() => {
    setLoading(false)
    setTimeout(() => setBarWidth(incomeRatio),100)}, 900)
    return () => clearTimeout(loadTimer)
  }, [transactions, incomeRatio])

  return (
    <div>
      {/* KPI Cards */}
      <div className="kpi-grid">
        {kpis.map((kpi) => (
          <div className="kpi-card" key={kpi.label}>
            <div
              className="kpi-icon"
              style={{ background: kpi.color + '22' }}
            >
              {kpi.icon}
            </div>
            <p className="kpi-label">{kpi.label}</p>
            <p className="kpi-value" style={{ color: kpi.color }}>
              {kpi.value}
            </p>
            <p className="kpi-desc">{kpi.desc}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="insights-charts-grid">

        {/* Bar Chart */}
        <div className="insight-chart-card">
          <div className="insight-chart-header">
            <p className="insight-chart-title">Monthly Comparison</p>
            <p className="insight-chart-sub">Income vs Expenses per month</p>
          </div>

          {/* Progress Bar */}
          <div className="trend-progress-wrap">

            <div className="trend-progress-labels">
              <div className="trend-progress-label-left">
                <span className="trend-progress-dot" style={{ background: COLORS.income }} />
                <span className="trend-progress-key">Income</span>
                <span className="trend-progress-pct" style={{ color: COLORS.income }}>
                  {incomeRatio.toFixed(1)}%
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

            <div className="trend-progress-amounts">
              <span style={{ color: COLORS.income }}>${totalIncome.toLocaleString()}</span>
              <span style={{ color: COLORS.expense }}>${totalExpense.toLocaleString()}</span>
            </div>

          </div>

          {/* Spinner or Bar Chart */}
          {loading ? (
            <div className="chart-loading">
              <div className="chart-spinner" />
              <p className="chart-loading-text">Loading chart...</p>
            </div>
          ) : (
          <ResponsiveContainer width="100%" height={240}>
            <BarChart
              data={monthlyData}
              margin={{ top: 4, right: 4, left: 0, bottom: 0 }}
              barCategoryGap="30%"
            >
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
                tickFormatter={(v) =>
                  `$${v >= 1000 ? (v / 1000).toFixed(0) + 'k' : v}`
                }
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
              <Legend
                wrapperStyle={{ fontSize: '0.75rem', color: 'var(--muted2)' }}
              />
              <Bar dataKey="Income"   fill={COLORS.income} radius={[4, 4, 0, 0]} />
              <Bar dataKey="Expenses" fill= {COLORS.expense} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          )}
        </div>

        {/* Category Breakdown */}
        <div className="insight-chart-card">
          <div className="insight-chart-header">
            <p className="insight-chart-title">Category Breakdown</p>
            <p className="insight-chart-sub">Expense distribution</p>
          </div>

          {sortedCategories.length === 0 ? (
            <p className="insight-empty">No expense data yet</p>
          ) : (
            <div className="category-bars">
              {sortedCategories.slice(0, 7).map(([cat, val]) => {
                const pct = totalExpense > 0
                  ? ((val / totalExpense) * 100).toFixed(1)
                  : '0'
                const color = categoryColors[cat] ?? '#888'
                return (
                  <div className="cat-bar-row" key={cat}>
                    <div className="cat-bar-top">
                      <div className="cat-bar-name">
                        <span
                          className="cat-bar-dot"
                          style={{ background: color }}
                        />
                        {cat}
                      </div>
                      <div className="cat-bar-right">
                        <span className="cat-bar-amount">
                          ${val.toLocaleString()}
                        </span>
                        <span className="cat-bar-pct">{pct}%</span>
                      </div>
                    </div>
                    <div className="cat-bar-track">
                      <div
                        className="cat-bar-fill"
                        style={{ width: `${pct}%`, background: color }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}