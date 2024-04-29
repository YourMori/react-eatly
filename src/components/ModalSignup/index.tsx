import React from 'react';
import styles from './ModalSignup.module.scss';

interface ModalSignupProps {
	active: boolean;
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSignup: React.FC<ModalSignupProps> = ({ active, setActive }) => {
	return (
		<div className={active ? styles.modal__active : styles.modal} onClick={() => setActive(false)}>
			<div className={styles.modal__container} onClick={(e) => e.stopPropagation()}>
				<div className={styles.modal__login}>
					<div className={styles.modal__content}>
						<a href='#' className={styles.modal__logo}>
							<img src='../../src/assets/Logo.svg' />
						</a>
						<form action='#' className={styles.modal__form}>
							<h2 className={styles.modal__form__title}>Sign up to Eatly</h2>
							<ul className='modal__form-list'>
								<li className='modal__form-list-item'>
									<a href='#'>
										<svg width='23' height='23' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M16.5331 7.09033C16.0351 6.17721 15.3502 5.482 14.4786 5.00469C13.607 4.52738 12.5901 4.28872 11.428 4.28872C10.1413 4.28872 8.99993 4.57926 8.00381 5.16033C7.00768 5.74141 6.22946 6.57151 5.66914 7.65065C5.10881 8.72978 4.82865 9.97494 4.82865 11.3861C4.82865 12.8388 5.10881 14.1047 5.66914 15.1839C6.25021 16.263 7.04919 17.0931 8.06606 17.6742C9.08294 18.2552 10.2658 18.5458 11.6148 18.5458C13.275 18.5458 14.6343 18.11 15.6927 17.2384C16.751 16.346 17.4463 15.1112 17.7783 13.534H10.3073V10.2032H22.0741V14.001C21.7836 15.5159 21.161 16.9167 20.2064 18.2034C19.2517 19.49 18.0169 20.5277 16.502 21.3163C15.0078 22.0841 13.3269 22.468 11.4591 22.468C9.3631 22.468 7.46424 22.0011 5.76252 21.0672C4.08156 20.1126 2.75339 18.7948 1.77802 17.1138C0.823397 15.4329 0.346087 13.5236 0.346087 11.3861C0.346087 9.2486 0.823397 7.33936 1.77802 5.65839C2.75339 3.95668 4.08156 2.63889 5.76252 1.70502C7.46424 0.750399 9.35273 0.273088 11.428 0.273088C13.8768 0.273088 16.0039 0.874914 17.8094 2.07857C19.6149 3.26147 20.8601 4.93205 21.5449 7.09033H16.5331Z'
												fill='#323142'
											/>
										</svg>
									</a>
								</li>
								<li className='modal__form-list-item'>
									<a href='#'>
										<svg width='27' height='31' viewBox='0 0 27 31' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M25.5299 24.2333C25.0708 25.282 24.5274 26.2474 23.8978 27.1349C23.0396 28.3448 22.3369 29.1823 21.7954 29.6474C20.9559 30.4107 20.0565 30.8017 19.0933 30.8239C18.4019 30.8239 17.568 30.6294 16.5974 30.2347C15.6236 29.8419 14.7286 29.6474 13.9103 29.6474C13.0521 29.6474 12.1317 29.8419 11.1472 30.2347C10.1612 30.6294 9.36685 30.835 8.75955 30.8554C7.83594 30.8943 6.91533 30.4923 5.9964 29.6474C5.4099 29.1415 4.6763 28.2744 3.79747 27.046C2.85456 25.7341 2.07936 24.2129 1.47206 22.4787C0.821651 20.6054 0.495605 18.7915 0.495605 17.0353C0.495605 15.0237 0.935205 13.2887 1.81571 11.8347C2.50772 10.6669 3.42833 9.74565 4.58054 9.06936C5.73276 8.39307 6.97773 8.04843 8.31845 8.02639C9.05205 8.02639 10.0141 8.25077 11.2096 8.69175C12.4017 9.13421 13.1672 9.35859 13.5028 9.35859C13.7537 9.35859 14.604 9.09622 16.0455 8.57316C17.4087 8.08809 18.5593 7.88724 19.5018 7.96635C22.0558 8.17017 23.9746 9.16571 25.2507 10.9593C22.9665 12.3278 21.8366 14.2446 21.8591 16.7035C21.8797 18.6188 22.5824 20.2126 23.9634 21.4781C24.5892 22.0655 25.2882 22.5194 26.0658 22.8418C25.8972 23.3254 25.7192 23.7886 25.5299 24.2333ZM19.6723 1.44133C19.6723 2.94254 19.1177 4.3442 18.0121 5.64157C16.678 7.18389 15.0642 8.07512 13.3143 7.93448C13.292 7.75439 13.279 7.56484 13.279 7.36566C13.279 5.9245 13.9135 4.38219 15.0402 3.12113C15.6028 2.48264 16.3182 1.95174 17.1858 1.52823C18.0515 1.11104 18.8703 0.880329 19.6405 0.84082C19.663 1.04151 19.6723 1.24221 19.6723 1.44132V1.44133Z'
												fill='#323142'
											/>
										</svg>
									</a>
								</li>
							</ul>
							<span className={styles.modal__form__choice}>or</span>
							<div className={styles.modal__form__login}>
								<input type='text' name='name' className='modal__form-input' placeholder='Full Name'></input>
								<input type='email' name='name' className='modal__form-input' placeholder='Email'></input>
								<div className={styles.modal__form__login_password}>
									<input type='password' name='password' className='login__password-input' placeholder='Password' />
									<div className='login__password-decor'>
										<img src='../../src/assets/modal/show_hide.svg' alt='show password'></img>
									</div>
								</div>
								<button className='modal__form__login-button'>Sign up</button>
								<p className='modal__form__text'>
									Already have an account?
									<a className='modal-link'> Login</a>
								</p>
							</div>
						</form>
						<div className={styles.modal__form__bottom}>
							<a href='#' className={styles.for__bottom_link}>
								Privacy Police
							</a>
							<a href='#' className={styles.for__bottom_link}>
								Copyright 2022
							</a>
						</div>
					</div>
				</div>
				<div className={styles.modal__decor}></div>
				<button className={styles.modal__close} onClick={() => setActive(false)}>
					×
				</button>
			</div>
		</div>
	);
};

export default ModalSignup;
