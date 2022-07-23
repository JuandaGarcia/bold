import Filters from 'components/Filters/Filters'
import Header from 'components/Header/Header'
import SelesTable from 'components/SelesTable/SelesTable'
import SEO from 'components/SEO/SEO'
import TotalSales from 'components/TotalSales/TotalSales'
import useData from 'hooks/useData'
import s from 'styles/Home.module.scss'

const Home = () => {
	const { data } = useData()

	return (
		<>
			<SEO />
			<Header />
			<main className={s.home__main}>
				<TotalSales />
				<Filters />
				<SelesTable data={data} />
			</main>
		</>
	)
}

export default Home
