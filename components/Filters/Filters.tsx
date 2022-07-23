import { monthNames } from 'utils/constants'
import { GoSettings } from 'react-icons/go'
import { IoIosClose } from 'react-icons/io'
import { PeriodFilter, TypeFilter } from 'utils/types/App'
import { Dispatch, SetStateAction, useState } from 'react'
import s from './Filters.module.scss'

type Props = {
	loading: boolean
	typeFilter: TypeFilter
	setTypeFilter: Dispatch<SetStateAction<TypeFilter>>
	setPeriodFilter: Dispatch<SetStateAction<PeriodFilter>>
	today: string
}
const Filters = ({
	today,
	loading,
	typeFilter,
	setTypeFilter,
	setPeriodFilter,
}: Props) => {
	const [openFilters, setOpenFilters] = useState(false)

	const toggleFilters = () => setOpenFilters(!openFilters)

	return (
		<section className={s.filters}>
			<div className={s.filters__period} data-loading={loading}>
				<label className={s.filters__period__label}>
					<input
						className={s.filters__period__label__input}
						type="radio"
						name="period"
						defaultChecked
						onChange={() => setPeriodFilter('day')}
					/>
					<span className={s.filters__period__label__span}>Hoy</span>
				</label>
				<label className={s.filters__period__label}>
					<input
						className={s.filters__period__label__input}
						type="radio"
						name="period"
						onChange={() => setPeriodFilter('week')}
					/>
					<span className={s.filters__period__label__span}>Esta semana</span>
				</label>
				<label className={s.filters__period__label}>
					<input
						className={s.filters__period__label__input}
						type="radio"
						name="period"
						onChange={() => setPeriodFilter('month')}
					/>
					<span className={s.filters__period__label__span}>
						{monthNames[new Date(today).getMonth()]}
					</span>
				</label>
			</div>
			<div className={s.filters__type}>
				{!openFilters && (
					<button
						className={s.filters__type__button}
						onClick={toggleFilters}
						data-loading={loading}
						disabled={loading}
					>
						<span>FILTRAR</span>
						<GoSettings />
					</button>
				)}
				{openFilters && (
					<div className={s.filters__type__options}>
						<div className={s.filters__type__options__header}>
							<span className={s.filters__type__options__header__title}>
								FILTRAR
							</span>
							<button
								className={s.filters__type__options__header__close}
								aria-label="Cerrar"
								onClick={toggleFilters}
							>
								<IoIosClose size={24} />
							</button>
						</div>
						<div className={s.filters__type__options__content}>
							<label className={s.filters__type__options__content__item}>
								<input
									type="radio"
									name="type"
									onChange={() => setTypeFilter('terminal')}
									checked={typeFilter === 'terminal'}
								/>
								<span className={s.filters__type__options__content__item__text}>
									Cobro con datáfono
								</span>
							</label>
							<label className={s.filters__type__options__content__item}>
								<input
									type="radio"
									name="type"
									onChange={() => setTypeFilter('link')}
									checked={typeFilter === 'link'}
								/>
								<span className={s.filters__type__options__content__item__text}>
									Cobros con link de pago
								</span>
							</label>
							<label className={s.filters__type__options__content__item}>
								<input
									type="radio"
									name="type"
									onChange={() => setTypeFilter('all')}
									checked={typeFilter === 'all'}
								/>
								<span className={s.filters__type__options__content__item__text}>
									Ver todos
								</span>
							</label>
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default Filters
