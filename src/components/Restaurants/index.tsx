import React from 'react';
import styles from './Restaurants.module.scss';

const Restaurant = () => {
	return (
		<section className={styles.restaurants}>
			<div className={styles.restaurants__container}>
				<h2 className={styles.restaurants__title}>
					Our Top <span>Restaurants</span>
				</h2>
				<ul className={styles.restaurants__inner}>
					<li className={styles.restaurants__item}>
						<div className={styles.restaurants__inner__img}>
							<img src='../../src/assets/restaurants/image_1.png' alt='The Chicken king'></img>
						</div>
						<div className={styles.restaurants__inner__info}>
							<div className={styles.restaurants__inner__info_tag}>Healthy</div>
							<h3 className={styles.restaurants__inner__info_name}>The Chicken King</h3>
							<div className={styles.restaurants__inner__info_bottom}>
								<div className={styles.restaurants__inner__info_bottom_dur}>24 min - </div>
								<div className={styles.restaurants__inner__info_bottom_rating}>4.8</div>
								<button className='restaurant__icon'>
									<svg width='16' height='21' viewBox='0 0 16 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M12.6161 0.88436C9.71458 0.397922 6.73665 0.397922 3.83508 0.88436C2.77504 1.06207 1.93085 1.87587 1.71831 2.93105C0.744596 7.76505 0.691467 12.7393 1.56171 17.593L1.91601 19.5691C2.02526 20.1785 2.7681 20.422 3.21691 19.9957L7.49357 15.9328C7.9038 15.5431 8.54743 15.5431 8.95766 15.9328L13.2343 19.9957C13.6831 20.422 14.426 20.1785 14.5352 19.5691L14.8895 17.593C15.7598 12.7393 15.7066 7.76505 14.7329 2.93105C14.5204 1.87587 13.6762 1.06207 12.6161 0.88436Z'
											fill='#6C5FBC'
										/>
									</svg>
								</button>
							</div>
						</div>
					</li>
					<li className={styles.restaurants__item}>
						<div className={styles.restaurants__inner__img}>
							<img src='../../src/assets/restaurants/image_1.png' alt='The Chicken king'></img>
						</div>
						<div className={styles.restaurants__inner__info}>
							<div className={styles.restaurants__inner__info_tag}>Healthy</div>
							<h3 className={styles.restaurants__inner__info_name}>The Chicken King</h3>
							<div className={styles.restaurants__inner__info_bottom}>
								<div className={styles.restaurants__inner__info_bottom_dur}>24 min - </div>
								<div className={styles.restaurants__inner__info_bottom_rating}>4.8</div>
								<button className='restaurant__icon'>
									<svg width='16' height='21' viewBox='0 0 16 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M12.6161 0.88436C9.71458 0.397922 6.73665 0.397922 3.83508 0.88436C2.77504 1.06207 1.93085 1.87587 1.71831 2.93105C0.744596 7.76505 0.691467 12.7393 1.56171 17.593L1.91601 19.5691C2.02526 20.1785 2.7681 20.422 3.21691 19.9957L7.49357 15.9328C7.9038 15.5431 8.54743 15.5431 8.95766 15.9328L13.2343 19.9957C13.6831 20.422 14.426 20.1785 14.5352 19.5691L14.8895 17.593C15.7598 12.7393 15.7066 7.76505 14.7329 2.93105C14.5204 1.87587 13.6762 1.06207 12.6161 0.88436Z'
											fill='#6C5FBC'
										/>
									</svg>
								</button>
							</div>
						</div>
					</li>
					<li className={styles.restaurants__item}>
						<div className={styles.restaurants__inner__img}>
							<img src='../../src/assets/restaurants/image_1.png' alt='The Chicken king'></img>
						</div>
						<div className={styles.restaurants__inner__info}>
							<div className={styles.restaurants__inner__info_tag}>Healthy</div>
							<h3 className={styles.restaurants__inner__info_name}>The Chicken King</h3>
							<div className={styles.restaurants__inner__info_bottom}>
								<div className={styles.restaurants__inner__info_bottom_dur}>24 min - </div>
								<div className={styles.restaurants__inner__info_bottom_rating}>4.8</div>
								<button className='restaurant__icon'>
									<svg width='16' height='21' viewBox='0 0 16 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M12.6161 0.88436C9.71458 0.397922 6.73665 0.397922 3.83508 0.88436C2.77504 1.06207 1.93085 1.87587 1.71831 2.93105C0.744596 7.76505 0.691467 12.7393 1.56171 17.593L1.91601 19.5691C2.02526 20.1785 2.7681 20.422 3.21691 19.9957L7.49357 15.9328C7.9038 15.5431 8.54743 15.5431 8.95766 15.9328L13.2343 19.9957C13.6831 20.422 14.426 20.1785 14.5352 19.5691L14.8895 17.593C15.7598 12.7393 15.7066 7.76505 14.7329 2.93105C14.5204 1.87587 13.6762 1.06207 12.6161 0.88436Z'
											fill='#6C5FBC'
										/>
									</svg>
								</button>
							</div>
						</div>
					</li>
				</ul>
				<div className={styles.restaurants__button}>
					<a className='restaurant__btn'>View all {'->'}</a>
				</div>
			</div>
		</section>
	);
};
export default Restaurant;
