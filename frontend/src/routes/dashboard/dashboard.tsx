import { Card } from "../../components/card/card"
import { namings } from "../../constants/namings"
import { convertToPositivityString, convertToUsdString } from "../../utils/finances"
import "./dashboard.css"

const { pageTitles: { dashboard }, totalExpenses, totalIncome, currentBalance, quickStats, recentActivity, monthlyExpenseTrends } = namings

type StatType = "income" | "expenses" | "balance"

export function Dashboard() {
    const financialMetrics: Record<StatType, number> = {
        income: 5000,
        expenses: 2500,
        balance: 2500
    }

    const recentActivities = [{
        name: "Bought groceries",
        value: -50
    },
    {
        name: "Salary",
        value: 3000
    },
    {
        name: "Paid rent",
        value: -1200
    }]
    
    return <>
      <h1>{dashboard}</h1>
      <Card title={quickStats}>
        {Object.keys(financialMetrics).map((metric) => {
            return <Stat key={metric} type={metric as StatType} value={financialMetrics[metric as StatType]} />
        })}
      </Card>
      <Card title={monthlyExpenseTrends}>
        <div style={{ height: "150px", background: "lightgray" }}>placeholder</div>
      </Card>
      <Card title={recentActivity}>
        {recentActivities.map(activity => {
            return <Activity type={activity.name} value={activity.value} />
        })}
      </Card>
    </>
}

const statMap: Record<StatType, string> = {
    income: totalIncome,
    expenses: totalExpenses,
    balance: currentBalance
}

function Stat({ type, value }: { type: StatType, value: number }) {
    return (<div className="stat">
        <div className={`${type} stat-value`}>
            {convertToUsdString(value)}
        </div>
        <span className="stat-type">{statMap[type]}</span>
    </div>)
}

function Activity({ type, value }: { type: string, value: number }){
    return <div className="activity">
        <div>{type}</div>
        <span className={`activity-value activity-${convertToPositivityString(value)}`}>{convertToUsdString(value)}</span>
    </div>
}