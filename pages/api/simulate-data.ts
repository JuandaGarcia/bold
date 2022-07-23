// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Sale } from 'utils/types/Sale'

/* Endpoint to simulate data */
export default function SinulateData(
	req: NextApiRequest,
	res: NextApiResponse<{ today: string; data: Sale[] }>
) {
	res.status(200).json({
		today: '',
		data: [
			{
				id: 'GZEN23784UBV1',
				transaction: 'not-charged',
				type: 'terminal',
				amount: 10000,
				bold_commission: 3000,
				date: '7/22/2022, 9:18:37 PM',
				payment_method: {
					id: 'visa',
					last_four: 4091,
				},
			},
			{
				id: 'GZEN23784UBV2',
				transaction: 'charged',
				type: 'link',
				amount: 10000,
				bold_commission: 3000,
				date: '7/22/2022, 9:18:37 PM',
				payment_method: {
					id: 'mastercard',
					last_four: 4091,
				},
			},
			{
				id: 'GZEN23784UBV2',
				transaction: 'charged',
				type: 'link',
				amount: 10000,
				bold_commission: 3000,
				date: '7/22/2022, 9:18:37 PM',
				payment_method: {
					id: 'amex',
					last_four: 4091,
				},
			},
		],
	})
}
