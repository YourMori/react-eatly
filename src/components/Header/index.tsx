import styles from './Header.module.scss';

interface ModalProps {
	setLoginActive: React.Dispatch<React.SetStateAction<boolean>>;
	setSignupActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<ModalProps> = ({ setLoginActive, setSignupActive }) => {
	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
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
						<button className={styles.header__button_login} onClick={() => setLoginActive(true)}>
							Login
						</button>
						<button className={styles.header__button_signup} onClick={() => setSignupActive(true)}>
							Sign up
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
