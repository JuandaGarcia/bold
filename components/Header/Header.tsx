import BoldLogo from 'components/BoldLogo/BoldLogo'
import Link from 'next/link'
import { FiHelpCircle } from 'react-icons/fi'
import s from './Header.module.scss'

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.header__content}>
				<Link href="/">
					<a aria-label="Logo Bold">
						<BoldLogo className={s.header__content__logo} />
					</a>
				</Link>
				<nav>
					<ul className={s.header__content__list}>
						<li>
							<a
								href="https://bold.co/"
								target="_blank"
								rel="noopener noreferrer"
								className={s.header__content__list__link}
							>
								Mi negocio
							</a>
						</li>
						<li>
							<a
								href="https://ayuda.bold.co/"
								target="_blank"
								rel="noopener noreferrer"
								className={s.header__content__list__link}
							>
								Ayuda <FiHelpCircle />
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
