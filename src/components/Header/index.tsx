import styles from './Header.module.scss';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.header__wrapper}>
					<a className='header__logo'>
						<img src='./src/assets/Logo.svg'></img>
					</a>
					<nav className={styles.header__menu}>
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
					<div className={styles.header__button}>
						<button className={styles.header__button_login}>Login</button>
						<button className={styles.header__button_signup}>Sign up</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
