import React from 'react';
import styles from './Mobile.module.scss';

const Mobile = () => {
	return (
		<div className={styles.mobile}>
			<div className={styles.mobile__container}>
				<div className='mobile__img'>
					<img src='../../src/assets/mobile/Mobile_screen.png' />
				</div>
				<div className={styles.mobile__content}>
					<h2 className={styles.mobile__title}>
						Premium <span>Quality</span> For Your Health
					</h2>
					<ul className={styles.mobile__list}>
						<li className='mobile__item'>
							Premium quality food is made with ingredients that are packed with essential vitamins, minerals.
						</li>
						<li className='mobile__item'>These foods promote overall wellness by support healthy digestion and boosting immunity</li>
					</ul>
					<button className={styles.mobile__button}>Download {'->'}</button>
				</div>
			</div>
		</div>
	);
};

export default Mobile;
