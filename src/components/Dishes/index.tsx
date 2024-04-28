import React from 'react';
import styles from './Dishes.module.scss';
import DishesCard from '../DishesCard';

const Dishes = () => {
	return (
		<section className={styles.dishes}>
			<div className={styles.dishes__container}>
				<h2 className={styles.dishes__title}>
					Our Top <span>Dishes</span>
				</h2>
				<ul className={styles.dishes__inner}>
					<DishesCard />
					<DishesCard />
					<DishesCard />
					<DishesCard />
					<DishesCard />
				</ul>

				<div className={styles.dishes__button}>
					<a className='dishes__btn'>View all {'->'}</a>
				</div>
			</div>
		</section>
	);
};

export default Dishes;
