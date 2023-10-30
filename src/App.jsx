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
import PrivateRoutes from './components/PrivateRoute/PrivateRoute';
import EditCourse from './components/EditCourse/EditCourse';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { checkToken } from './store/user/actions';

function App() {
	const navigate = useNavigate();

	const currentUser = useSelector((state) => state.user);

	const dispatch = useDispatch();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token && !currentUser.user && !currentUser.token) {
			dispatch(checkToken(token));
		}
		if (!currentUser.user && !currentUser.token && !token) {
			navigate('/login', { replace: true });
		} else if (currentUser.user && currentUser.token) {
			navigate('/courses', { replace: true });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentUser /* , navigate, dispatch */]);

	return (
		<div className='layout'>
			<div className='center-layout'>
				<Routes>
					<Route path='courses' element={<Layout />}>
						{/* <Route index element={<Courses />}></Route>
						<Route path=':courseId' element={<CourseInfo />}></Route> */}
						<Route
							element={
								<PrivateRoutes isAuth={currentUser.user ? true : false} />
							}
						>
							<Route index element={<Courses />}></Route>
							<Route path=':courseId' element={<CourseInfo />}></Route>
						</Route>

						<Route
							element={
								<PrivateRoutes
									isAuth={
										currentUser.user &&
										currentUser.user.email === 'admin@email.com'
											? true
											: false
									}
								/>
							}
						>
							<Route path='update/:courseId' element={<EditCourse />} />
						</Route>
						{/* <PrivateRoutes isAuth={true} component={Courses} path='/' /> */}
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
