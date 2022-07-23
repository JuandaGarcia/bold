import { PeriodFilter } from './App'

export type Sale = {
	id: string
	transaction: 'not-charged' | 'charged'
	type: 'terminal' | 'link'
	amount: number
	bold_commission?: number
	date: string
	filter: PeriodFilter
	payment_method: {
		id: 'visa' | 'mastercard' | 'amex'
		last_four: number
	}
}
