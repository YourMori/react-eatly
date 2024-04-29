import React from 'react';
import { useState } from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import ModalLogin from './components/ModalLogin';
import ModalSignup from './components/ModalSignup';

const App = () => {
	const [modalLoginActive, setModalLoginActive] = useState(false);
	const [modalSignupActive, setModalSignupActive] = useState(false);

	return (
		<>
			<Header setLoginActive={setModalLoginActive} setSignupActive={setModalSignupActive} />
			<Home />
			<Footer />
			<ModalLogin active={modalLoginActive} setActive={setModalLoginActive} />
			<ModalSignup active={modalSignupActive} setActive={setModalSignupActive} />
		</>
	);
};

export default App;
