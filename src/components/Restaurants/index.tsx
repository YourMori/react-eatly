import React from 'react';
import styles from './Restaurants.module.scss';
import RestaurantsCard from '../RestaurantsCard';

const Restaurant = () => {
	return (
		<section className={styles.restaurants}>
			<div className={styles.restaurants__container}>
				<h2 className={styles.restaurants__title}>
					Our Top <span>Restaurants</span>
				</h2>
				<ul className={styles.restaurants__inner}>
					<RestaurantsCard />
					<RestaurantsCard />
					<RestaurantsCard />
				</ul>
				<div className={styles.restaurants__button}>
					<a className='restaurant__btn'>View all {'->'}</a>
				</div>
			</div>
		</section>
	);
};
export default Restaurant;
