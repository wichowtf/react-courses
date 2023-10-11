import './App.css';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

function App() {
	return (
		<div className='layout'>
			<div className='center-layout'>
				<Header />
				<Courses />
			</div>
		</div>
	);
}

export default App;
