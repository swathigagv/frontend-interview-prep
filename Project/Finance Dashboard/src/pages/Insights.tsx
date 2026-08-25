import InsightsSection from '../components/Insights/InsightsSection'
import '../components/Insights/InsightsSection.css'

export default function Insights() {
  return (
    <div>
      <div className="insights-page-header">
        <h2 className="insights-page-title">INSIGHTS</h2>
        <p className="insights-page-sub">Patterns & analysis from your transactions</p>
      </div>
      <InsightsSection />
    </div>
  )
}