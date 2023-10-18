import './App.css';
import {
	/* BrowserRouter, */ Navigate,
	useNavigate,
	Routes,
	Route,
} from 'react-router-dom';

/* import Header from './components/Header/Header'; */
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Register from './components/Registration/Registration';
import { useEffect } from 'react';

function App() {
	const navigate = useNavigate();
	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			navigate('/login', { replace: true });
		} else {
			navigate('/courses', { replace: true });
		}
	}, [navigate]);
	return (
		<div className='layout'>
			<div className='center-layout'>
				<Routes>
					<Route path='courses' element={<Layout />}>
						<Route index element={<Courses />}></Route>
						<Route path=':courseId' element={<CourseInfo />}></Route>
					</Route>
					<Route path='login' element={<Login />} />
					<Route path='registration' element={<Register />} />
					<Route path='*' element={<Navigate to='courses' />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
