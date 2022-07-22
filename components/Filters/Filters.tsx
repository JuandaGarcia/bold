import { monthNames } from 'utils/constants'
import s from './Filters.module.scss'

const Filters = () => {
	return (
		<section className={s.filters}>
			<div className={s.filters__period}>
				<label className={s.filters__period__label}>
					<input
						className={s.filters__period__label__input}
						type="radio"
						name="period"
					/>
					<span className={s.filters__period__label__span}>Hoy</span>
				</label>
				<label className={s.filters__period__label}>
					<input
						className={s.filters__period__label__input}
						type="radio"
						name="period"
					/>
					<span className={s.filters__period__label__span}>Esta semana</span>
				</label>
				<label className={s.filters__period__label}>
					<input
						className={s.filters__period__label__input}
						type="radio"
						name="period"
					/>
					<span className={s.filters__period__label__span}>
						{monthNames[new Date().getMonth()]}
					</span>
				</label>
			</div>
			<div className={s.filters__type}>
				<button>Filtrar</button>
			</div>
		</section>
	)
}

export default Filters
