// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Sale } from 'utils/types/Sale'

/* Endpoint to simulate data */
export default function SinulateData(
	req: NextApiRequest,
	res: NextApiResponse<{ today: string; data: Sale[] }>
) {
	res.status(200).json({
		today: '7/23/2022, 5:48:10 AM',
		data: [
			{
				id: 'GZEN23784UBV1',
				transaction: 'charged',
				type: 'terminal',
				amount: 126500,
				bold_commission: 2365,
				date: '7/23/2022, 9:18:37 PM',
				filter: 'day',
				payment_method: {
					id: 'visa',
					last_four: 4091,
				},
			},
			{
				id: 'GZEN23784UBV2',
				transaction: 'not-charged',
				type: 'link',
				amount: 26200,
				date: '7/23/2022, 7:35:21 PM',
				filter: 'day',
				payment_method: {
					id: 'mastercard',
					last_four: 4174,
				},
			},
			{
				id: 'GZEN23784UBV3',
				transaction: 'charged',
				type: 'link',
				amount: 236800,
				bold_commission: 6271,
				date: '7/23/2022, 4:53:12 PM',
				filter: 'day',
				payment_method: {
					id: 'amex',
					last_four: 9537,
				},
			},
			{
				id: 'GZEN23784UBV4',
				transaction: 'charged',
				type: 'link',
				amount: 10000,
				bold_commission: 300,
				date: '7/23/2022, 10:42:37 AM',
				filter: 'day',
				payment_method: {
					id: 'amex',
					last_four: 9537,
				},
			},
			{
				id: 'GZEN23784UBV5',
				transaction: 'charged',
				type: 'terminal',
				amount: 55700,
				bold_commission: 951,
				date: '7/20/2022, 6:25:57 PM',
				filter: 'week',
				payment_method: {
					id: 'visa',
					last_four: 4091,
				},
			},
			{
				id: 'GZEN23784UBV6',
				transaction: 'not-charged',
				type: 'link',
				amount: 48600,
				date: '7/19/2022, 5:46:01 PM',
				filter: 'week',
				payment_method: {
					id: 'mastercard',
					last_four: 4174,
				},
			},
			{
				id: 'GZEN23784UBV7',
				transaction: 'charged',
				type: 'link',
				amount: 285000,
				bold_commission: 7512,
				date: '7/18/2022, 9:05:24 AM',
				filter: 'week',
				payment_method: {
					id: 'amex',
					last_four: 9537,
				},
			},
			{
				id: 'GZEN23784UBV8',
				transaction: 'charged',
				type: 'link',
				amount: 27450,
				bold_commission: 783,
				date: '7/08/2022, 11:01:12 PM',
				filter: 'month',
				payment_method: {
					id: 'visa',
					last_four: 4091,
				},
			},
			{
				id: 'GZEN23784UBV9',
				transaction: 'charged',
				type: 'link',
				amount: 14500,
				bold_commission: 480,
				date: '7/07/2022, 2:48:53 PM',
				filter: 'month',
				payment_method: {
					id: 'visa',
					last_four: 4091,
				},
			},
			{
				id: 'GZEN23784UBV10',
				transaction: 'charged',
				type: 'link',
				amount: 41200,
				bold_commission: 1536,
				date: '7/02/2022, 8:05:31 AM',
				filter: 'month',
				payment_method: {
					id: 'mastercard',
					last_four: 4174,
				},
			},
		],
	})
}
