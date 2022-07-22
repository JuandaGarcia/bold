import s from './TotalSales.module.scss'

const TotalSales = () => {
	return (
		<section className={s.total_sales}>
			<h1 className={s.total_sales__title}>Total de ventas de hoy</h1>
			<p className={s.total_sales__total}>$1.560.000</p>
			<p className={s.total_sales__text}>Hoy</p>
		</section>
	)
}

export default TotalSales
