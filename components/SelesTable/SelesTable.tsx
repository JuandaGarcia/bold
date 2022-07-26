import { Sale } from 'utils/types/Sale'
import { TbLink } from 'react-icons/tb'
import { BiCalculator } from 'react-icons/bi'
import s from './SelesTable.module.scss'
import { formatMoney } from 'utils/formatMoney'
import { PeriodFilter } from 'utils/types/App'
import { monthNames } from 'utils/constants'

type Props = {
	data: Sale[]
	today: string
	loading: boolean
	periodFilter: PeriodFilter
}
const SelesTable = ({ data, loading, periodFilter, today }: Props) => {
	return (
		<section className={s.sales_table} data-loading={loading}>
			<p className={s.sales_table__header}>
				Tus ventas{' '}
				{periodFilter === 'day'
					? 'hoy'
					: periodFilter === 'week'
					? 'esta semana'
					: `en ${monthNames[new Date(today).getMonth()]}`}
			</p>
			<div className={s.sales_table__container}>
				<table className={s.sales_table__container__table}>
					<thead>
						<tr className={s.sales_table__container__table__tr}>
							<th className={s.sales_table__container__table__tr__th}>
								Transacción
							</th>
							<th className={s.sales_table__container__table__tr__th}>
								Fecha y hora
							</th>
							<th className={s.sales_table__container__table__tr__th}>
								Método de pago
							</th>
							<th className={s.sales_table__container__table__tr__th}>
								ID transacción Bold
							</th>
							<th className={s.sales_table__container__table__tr__th}>Monto</th>
						</tr>
					</thead>
					<tbody>
						{data.map(sale => (
							<tr
								key={sale.id}
								data-transaction={sale.transaction}
								className={s.sales_table__container__table__tr}
							>
								<td className={s.sales_table__container__table__tr__td}>
									<div
										className={
											s.sales_table__container__table__tr__td__transaction
										}
									>
										{sale.type === 'terminal' ? <BiCalculator /> : <TbLink />}
										<span>
											{sale.transaction === 'charged'
												? 'Cobro exitoso'
												: 'Cobro no realizado'}
										</span>
									</div>
								</td>
								<td className={s.sales_table__container__table__tr__td}>
									{sale.date}
								</td>
								<td className={s.sales_table__container__table__tr__td}>
									<div
										className={s.sales_table__container__table__tr__td__method}
									>
										<img
											src={`/img/${sale.payment_method.id}.svg`}
											alt={`Logo ${sale.payment_method.id}`}
										/>
										<span>**** **** **** {sale.payment_method.last_four}</span>
									</div>
								</td>
								<td className={s.sales_table__container__table__tr__td}>
									{sale.id}
								</td>
								<td className={s.sales_table__container__table__tr__td}>
									<div
										className={s.sales_table__container__table__tr__td__amount}
									>
										<span
											className={
												s.sales_table__container__table__tr__td__amount__number
											}
										>
											{formatMoney(sale.amount)}
										</span>
										{sale.bold_commission && (
											<>
												<span
													className={
														s.sales_table__container__table__tr__td__amount__commission
													}
												>
													Deducción Bold
												</span>
												<span
													className={
														s.sales_table__container__table__tr__td__amount__commission_number
													}
												>
													-{formatMoney(sale.bold_commission)}
												</span>
											</>
										)}
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	)
}

export default SelesTable
