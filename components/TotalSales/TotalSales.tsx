import { FiInfo } from 'react-icons/fi'
import { monthNames } from 'utils/constants'
import { formatMoney } from 'utils/formatMoney'
import { PeriodFilter } from 'utils/types/App'
import s from './TotalSales.module.scss'

type Props = {
	today: string
	loading: boolean
	totalAmount: number
	periodFilter: PeriodFilter
}
const TotalSales = ({ loading, totalAmount, today, periodFilter }: Props) => {
	const month = monthNames[new Date(today).getMonth()]

	return (
		<section className={s.total_sales} data-loading={loading}>
			<h1 className={s.total_sales__title}>
				<span>
					Total de ventas de{' '}
					{periodFilter === 'day'
						? 'hoy'
						: periodFilter === 'week'
						? 'la semana'
						: month}
				</span>
				<FiInfo />
			</h1>
			<p className={s.total_sales__total}>{formatMoney(totalAmount)}</p>
			<p className={s.total_sales__text}>
				{periodFilter === 'day'
					? `${month}, ${new Date(today).getDate()}`
					: `${month}, ${new Date(today).getFullYear()}`}
			</p>
		</section>
	)
}

export default TotalSales
