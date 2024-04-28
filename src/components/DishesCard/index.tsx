import React from 'react';
import styles from './DishesCard.module.scss';

const DishesCard = () => {
	return (
		<li className={styles.dishes__item}>
			<div className={styles.dishes__item__img}>
				<img src='../../src/assets/dishes/food.png' alt='Chicken image'></img>
			</div>
			<div className={styles.dishes__item__tag}>Trending</div>
			<h3 className={styles.dishes__item__name}>Chicken Hell</h3>
			<div className={styles.dishes__item__info}>
				<div className={styles.dishes__item__info_dur}>24 min -</div>
				<div className={styles.dishes__item__info_rating}>4.9</div>
			</div>
			<div className={styles.dishes__item__bottom}>
				<div className={styles.dishes__item__bottom_cost}>
					12.<span>99</span>
				</div>
				<button className='dishes__plus'>
					<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<mask id='path-1-inside-1_1_16678' fill='white'>
							<path d='M15.2818 9.36025H8.94222V15.7891H6.41234V9.36025H0.102539V7.06848H6.41234V0.609863H8.94222V7.06848H15.2818V9.36025Z' />
						</mask>
						<path
							d='M15.2818 9.36025H8.94222V15.7891H6.41234V9.36025H0.102539V7.06848H6.41234V0.609863H8.94222V7.06848H15.2818V9.36025Z'
							fill='black'
						/>
						<path
							d='M15.2818 9.36025V13.4693H19.3908V9.36025H15.2818ZM8.94222 9.36025V5.2512H4.83317V9.36025H8.94222ZM8.94222 15.7891V19.8982H13.0513V15.7891H8.94222ZM6.41234 15.7891H2.30329V19.8982H6.41234V15.7891ZM6.41234 9.36025H10.5214V5.2512H6.41234V9.36025ZM0.102539 9.36025H-4.00651V13.4693H0.102539V9.36025ZM0.102539 7.06848V2.95943H-4.00651V7.06848H0.102539ZM6.41234 7.06848V11.1775H10.5214V7.06848H6.41234ZM6.41234 0.609863V-3.49919H2.30329V0.609863H6.41234ZM8.94222 0.609863H13.0513V-3.49919H8.94222V0.609863ZM8.94222 7.06848H4.83317V11.1775H8.94222V7.06848ZM15.2818 7.06848H19.3908V2.95943H15.2818V7.06848ZM15.2818 5.2512H8.94222V13.4693H15.2818V5.2512ZM4.83317 9.36025V15.7891H13.0513V9.36025H4.83317ZM8.94222 11.6801H6.41234V19.8982H8.94222V11.6801ZM10.5214 15.7891V9.36025H2.30329V15.7891H10.5214ZM6.41234 5.2512H0.102539V13.4693H6.41234V5.2512ZM4.21159 9.36025V7.06848H-4.00651V9.36025H4.21159ZM0.102539 11.1775H6.41234V2.95943H0.102539V11.1775ZM10.5214 7.06848V0.609863H2.30329V7.06848H10.5214ZM6.41234 4.71891H8.94222V-3.49919H6.41234V4.71891ZM4.83317 0.609863V7.06848H13.0513V0.609863H4.83317ZM8.94222 11.1775H15.2818V2.95943H8.94222V11.1775ZM11.1727 7.06848V9.36025H19.3908V7.06848H11.1727Z'
							fill='white'
							mask='url(#path-1-inside-1_1_16678)'
						/>
					</svg>
				</button>
			</div>
			<div className={styles.dishes__item__fav}>
				<svg width='22' height='19' viewBox='0 0 22 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M0.0214844 6.66277C0.0214844 3.27527 2.99334 0.666992 6.48165 0.666992C8.2798 0.666992 9.86206 1.51012 10.9975 2.60107C12.1329 1.51012 13.7152 0.666992 15.5133 0.666992C19.0016 0.666992 21.9735 3.27527 21.9735 6.66277C21.9735 8.98325 20.9839 11.0239 19.6129 12.7488C18.2443 14.4707 16.4541 15.9322 14.74 17.1197C14.0852 17.5732 13.4229 17.9917 12.8167 18.3004C12.2475 18.5903 11.593 18.8558 10.9975 18.8558C10.402 18.8558 9.74747 18.5903 9.17827 18.3004C8.57208 17.9917 7.90974 17.5732 7.25503 17.1197C5.54091 15.9322 3.75066 14.4707 2.38204 12.7488C1.01106 11.0239 0.0214844 8.98325 0.0214844 6.66277ZM6.48165 2.54859C3.87344 2.54859 1.90309 4.4667 1.90309 6.66277C1.90309 8.42332 2.65044 10.0625 3.85505 11.578C5.06202 13.0966 6.68602 14.4365 8.32655 15.573C8.94732 16.003 9.53203 16.369 10.0322 16.6237C10.5693 16.8972 10.8804 16.9742 10.9975 16.9742C11.1146 16.9742 11.4257 16.8972 11.9628 16.6237C12.463 16.369 13.0477 16.003 13.6684 15.573C15.309 14.4365 16.933 13.0966 18.1399 11.578C19.3445 10.0625 20.0919 8.42332 20.0919 6.66277C20.0919 4.4667 18.1215 2.54859 15.5133 2.54859C14.0154 2.54859 12.6167 3.44351 11.7433 4.57937C11.5652 4.81098 11.2896 4.94671 10.9975 4.94671C10.7053 4.94671 10.4298 4.81098 10.2517 4.57937C9.37831 3.44351 7.97959 2.54859 6.48165 2.54859Z'
						fill='#323142'
					/>
				</svg>
			</div>
		</li>
	);
};

export default DishesCard;
