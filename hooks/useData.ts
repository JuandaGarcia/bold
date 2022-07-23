import { useEffect, useState } from 'react'
import { Sale } from 'utils/types/Sale'

const useData = () => {
	const [data, setData] = useState<Sale[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<unknown>(null)

	const fetchData = async () => {
		setLoading(true)
		try {
			const response = await fetch('/api/simulate-data')
			const { data } = await response.json()
			setData(data)
			setLoading(false)
		} catch (error) {
			setError(error)
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return { data, loading, error }
}

export default useData
