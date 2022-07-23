import { useState } from 'react'
import { monthNames } from 'utils/constants'
import { GoSettings } from 'react-icons/go'
import { IoIosClose } from 'react-icons/io'
import s from './Filters.module.scss'

const Filters = () => {
	const [openFilters, setOpenFilters] = useState(false)

	const toggleFilters = () => setOpenFilters(!openFilters)

	return (
		<section className={s.filters}>
			<div className={s.filters__period}>
				<label className={s.filters__period__label}>
					<input
						className={s.filters__period__label__input}
						type="radio"
						name="period"
						defaultChecked
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
				{!openFilters && (
					<button className={s.filters__type__button} onClick={toggleFilters}>
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
								<input type="radio" name="type" />
								<span className={s.filters__type__options__content__item__text}>
									Cobro con datáfono
								</span>
							</label>
							<label className={s.filters__type__options__content__item}>
								<input type="radio" name="type" />
								<span className={s.filters__type__options__content__item__text}>
									Cobros con link de pago
								</span>
							</label>
							<label className={s.filters__type__options__content__item}>
								<input defaultChecked type="radio" name="type" />
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
