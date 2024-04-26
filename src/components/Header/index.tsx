import styles from './Header.module.scss';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className='header__wrapper'>
					<a className='header__logo'>
						<img src='./src/assets/Logo.svg'></img>
					</a>
				</div>
				<nav className='header__menu'>
					<ul className='menu__list'>
						<li className='menu__list--item'>
							<a href='#' className='menu__link'>
								Menu
							</a>
						</li>
						<li className='menu__list--item'>
							<a href='#' className='menu__link'>
								Blog
							</a>
						</li>
						<li className='menu__list--item'>
							<a href='#' className='menu__link'>
								Pricing
							</a>
						</li>
						<li className='menu__list--item'>
							<a href='#' className='menu__link'>
								Contacts
							</a>
						</li>
					</ul>
				</nav>
				<div className=''>
					<button className='header__button header__button--login'></button>
					<button className='header__button header__button--signup'></button>
				</div>
			</div>
		</header>
	);
};

export default Header;
