import React from 'react';

import Hero from '../components/Hero';
import Features from '../components/Features';
import Mobile from '../components/Mobile';
import Restaurants from '../components/Restaurants';
import Dishes from '../components/Dishes';

const Home = () => {
	return (
		<main className='main'>
			<Hero />
			<Features />
			<Mobile />
			<Restaurants />
			<Dishes />
			<h1>В разработке 2 секции {'=>'}</h1>
		</main>
	);
};

export default Home;
