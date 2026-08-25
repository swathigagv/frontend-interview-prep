import useStore from '../../store/useStore'
import './SummaryCards.css'

function fmt(n: number): string {
  return '$' + Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 0 })
}

export default function SummaryCards() {
  const getSummary = useStore((s) => s.getSummary)
  const { income, expense, balance } = getSummary()

  const cards = [
    {
      label: 'Total Balance',
      value: fmt(balance),
      valueColor: balance >= 0 ? 'var(--income)' : 'var(--expense)',
      sub: balance >= 0 ? '↑ Positive balance' : '↓ Negative balance',
      subColor: balance >= 0 ? 'var(--income)' : 'var(--expense)',
    },
    {
      label: 'Total Income',
      value: fmt(income),
      valueColor: 'var(--income)',
      sub: 'All time earnings',
      subColor: 'var(--muted)',
    },
    {
      label: 'Total Expenses',
      value: fmt(expense),
      valueColor: 'var(--expense)',
      sub: 'All time spending',
      subColor: 'var(--muted)',
    },
  ]

  return (
    <div className="summary-grid">
      {cards.map((card) => (
        <div className="summary-card" key={card.label}>
          <p className="summary-label">{card.label}</p>
          <p className="summary-value" style={{ color: card.valueColor }}>
            {card.value}
          </p>
          <p className="summary-sub" style={{ color: card.subColor }}>
            {card.sub}
          </p>
        </div>
      ))}
    </div>
  )
}