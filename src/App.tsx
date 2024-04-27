import Header from './components/Header';
import Home from './pages/Home';

const App: React.FC = () => {
	return (
		<>
			<Header />
			<Home />

			<footer className='footer'></footer>
		</>
	);
};

export default App;
