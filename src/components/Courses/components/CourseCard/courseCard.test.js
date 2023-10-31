import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseCard from './CourseCard';

import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import formatDuration from '../../../../helpers/getCourseDuration';
import creationDateFormat from '../../../../helpers/formatCreationDate';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom') /*  as any */,
	useNavigate: () => mockedUsedNavigate,
}));

const mockStore = configureStore([]);

describe('CourseCard component', () => {
	let store;

	beforeEach(() => {
		store = mockStore({});
	});

	test('should display title', async () => {
		const title = 'Sample Course';
		render(
			<BrowserRouter>
				<Provider store={store}>
					<CourseCard title={title} authors={[]} created={'17/12/1999'} />
				</Provider>
			</BrowserRouter>
		);
		const titleElement = screen.getByText(title);
		expect(titleElement).toBeInTheDocument();
	});

	test('should display description', () => {
		const description = 'A sample course description';
		render(
			<BrowserRouter>
				<Provider store={store}>
					<CourseCard
						description={description}
						authors={[]}
						created={'17/12/1999'}
					/>
				</Provider>
			</BrowserRouter>
		);
		const descriptionElement = screen.getByText(description);
		expect(descriptionElement).toBeInTheDocument();
	});

	test('should display duration in the correct format', () => {
		const duration = 10;
		render(
			<BrowserRouter>
				<Provider store={store}>
					<CourseCard duration={duration} authors={[]} created={'17/12/1999'} />
				</Provider>
			</BrowserRouter>
		);
		const durationElement = screen.getByText(`${formatDuration(duration)} hrs`);
		expect(durationElement).toBeInTheDocument();
	});

	test('should display authors list', () => {
		const authors = ['Author 1', 'Author 2'];
		render(
			<BrowserRouter>
				<Provider store={store}>
					<CourseCard authors={authors} created={'17/12/1999'} />
				</Provider>
			</BrowserRouter>
		);
		const authorsElement = screen.getByText(`${authors.join(', ')}`);
		expect(authorsElement).toBeInTheDocument();
	});

	test('should display created date in the correct format', () => {
		const created = '30/10/2023';
		render(
			<BrowserRouter>
				<Provider store={store}>
					<CourseCard created={created} authors={[]} />
				</Provider>
			</BrowserRouter>
		);
		const createdElement = screen.getByText(`${creationDateFormat(created)}`);
		expect(createdElement).toBeInTheDocument();
	});
});
