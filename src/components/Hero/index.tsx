import React from 'react';

import styles from './Hero.module.scss';

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__container}>
				<div className={styles.hero__header}>
					<p className={styles.hero__subtitles}>OVER 1000 USERS</p>
					<h1 className={styles.hero__title}>
						Enjoy Foods All Over The
						<span> World</span>
					</h1>
					<p className={styles.hero__text}>
						EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days
						early.
						<span> Get a $20 bonus.</span>
					</p>
					<div className={styles.hero__buttons}>
						<button className={styles.hero__buttons__get_started}>Get started</button>
						<button className={styles.hero__buttons__go_pro}>Go Pro</button>
					</div>
					<div className={styles.hero__rating}>
						<div className={styles.hero__trustpilot}>
							<img src='../../src/assets/hero/trustpilot.svg' alt='Trustpilot logo'></img>
						</div>
						<div className={styles.hero__stars}>
							<img src='../../src/assets/star.svg' alt='Star icon'></img>
							<img src='../../src/assets/star.svg' alt='Star icon'></img>
							<img src='../../src/assets/star.svg' alt='Star icon'></img>
							<img src='../../src/assets/star.svg' alt='Star icon'></img>
							<img src='../../src/assets/star.svg' alt='Star icon'></img>
							<span className='hero__num'>4900+</span>
						</div>
					</div>
				</div>
				<div className={styles.hero__decor}>
					<div className={styles.hero__decor__wrapper}>
						<img src='../../src/assets/hero/Food_image.png' alt='Chicken hell' />
						<div className={styles.hero__decor__meal}>
							<div className={styles.hero__decor__meal_item}>
								<div className={styles.hero__decor__meal_item_img}>
									<img src='../../src/assets/hero/Image.png' alt='Chicken hell image'></img>
								</div>
								<div className={styles.hero__decor__meal_item_info}>
									<h2 className='meal__info__name'>Chicken hell</h2>
									<p className='meal__info__status'>On the way</p>
									<div className='meal__info__time'>3:09 PM</div>
								</div>
							</div>
						</div>
						<div className={styles.hero__decor__graph}>
							<div className={styles.hero__decor__graph_inner}>
								<img src='../../src/assets/hero/Graph.png'></img>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
