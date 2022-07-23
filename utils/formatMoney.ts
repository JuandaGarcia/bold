export const formatMoney = (money = 0) => {
	return (
		'$' +
		money.toLocaleString('es-CO', {
			style: 'decimal',
			currency: 'USD',
			minimumFractionDigits: 0,
		})
	)
}
