import React from 'react';
import styles from './Features.module.scss';

const Features = () => {
	return (
		<div className={styles.features}>
			<div className={styles.features__container}>
				<ul className={styles.features__list}>
					<li className='features__item'>
						<div className='features__num'>10K+</div>
						<p className='features__text'>Satisfied Costumers All Great Over The World</p>
					</li>
					<li className='features__item'>
						<div className='features__num'>4M</div>
						<p className='features__text'>Healthy Dishes Sold Including Milk Shakes Smooth</p>
					</li>
					<li className='features__item'>
						<div className='features__num'>99.99%</div>
						<p className='features__text'>Reliable Customer Support We Provide Great Experiences</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Features;
