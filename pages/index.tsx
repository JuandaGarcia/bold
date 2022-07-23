import SEO from 'components/SEO/SEO'
import Header from 'components/Header/Header'
import useData from 'hooks/useData'
import Filters from 'components/Filters/Filters'
import SelesTable from 'components/SelesTable/SelesTable'
import TotalSales from 'components/TotalSales/TotalSales'
import s from 'styles/Home.module.scss'

const Home = () => {
	const {
		data,
		error,
		today,
		loading,
		typeFilter,
		totalAmount,
		periodFilter,
		setTypeFilter,
		setPeriodFilter,
	} = useData()

	return (
		<>
			<SEO />
			<Header />
			<main className={s.home__main}>
				{error ? (
					<p className={s.home__main__error}>
						Ocurrió un error, por favor inténtalo mas tarde.
					</p>
				) : (
					<>
						<TotalSales
							today={today}
							loading={loading}
							totalAmount={totalAmount}
							periodFilter={periodFilter}
						/>
						<Filters
							today={today}
							loading={loading}
							typeFilter={typeFilter}
							setTypeFilter={setTypeFilter}
							setPeriodFilter={setPeriodFilter}
						/>
						<SelesTable
							data={data}
							today={today}
							loading={loading}
							periodFilter={periodFilter}
						/>
					</>
				)}
			</main>
		</>
	)
}

export default Home
