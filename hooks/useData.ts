import { Sale } from 'utils/types/Sale'
import { PeriodFilter, TypeFilter } from 'utils/types/App'
import { useEffect, useState, useMemo } from 'react'

const useData = () => {
	const [today, setToday] = useState('')
	const [data, setData] = useState<Sale[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<unknown>(null)
	const [periodFilter, setPeriodFilter] = useState<PeriodFilter>('day')
	const [typeFilter, setTypeFilter] = useState<TypeFilter>('all')

	const filteredDataPeriod = useMemo(
		() =>
			data.filter(sale => {
				if (periodFilter === 'day') {
					return sale.filter === periodFilter
				}
				if (periodFilter === 'week') {
					return sale.filter === periodFilter || sale.filter === 'day'
				}
				if (periodFilter === 'month') {
					return (
						sale.filter === periodFilter ||
						sale.filter === 'day' ||
						sale.filter === 'week'
					)
				}
			}),
		[data, periodFilter]
	)
	const filteredData = useMemo(
		() =>
			filteredDataPeriod.filter(
				sale => sale.type === typeFilter || typeFilter === 'all'
			),
		[filteredDataPeriod, typeFilter]
	)
	const totalAmount = useMemo(
		() =>
			filteredDataPeriod.reduce(
				(acc, sale) => (sale.bold_commission ? acc + sale.amount : acc),
				0
			),
		[filteredDataPeriod]
	)

	const fetchData = async () => {
		setLoading(true)
		try {
			const response = await fetch('/api/simulate-data')
			const { data, today } = await response.json()
			setData(data)
			setToday(today)
			setLoading(false)
		} catch (error) {
			setError(error)
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return {
		today,
		error,
		loading,
		typeFilter,
		totalAmount,
		periodFilter,
		setTypeFilter,
		setPeriodFilter,
		data: filteredData,
	}
}

export default useData
