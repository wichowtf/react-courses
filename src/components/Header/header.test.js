import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Header from './Header';

import { BrowserRouter } from 'react-router-dom';

const mockStore = configureStore([]);
const initialState = {
	/* user: { */
	token: 'fake-token',
	user: {},
	/* }, */
};

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom') /*  as any */,
	useNavigate: () => mockedUsedNavigate,
}));

describe('Header component', () => {
	let store;

	beforeEach(() => {
		store = mockStore(initialState);
	});

	test("should render logo and user's name", async () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<Header />
				</Provider>
			</BrowserRouter>
		);

		const logoElement = screen.getByTestId('logo');
		const userNameButton = screen.getByText('Dave');

		expect(logoElement).toBeInTheDocument();
		expect(userNameButton).toBeInTheDocument();
	});

	test('should call handleLogout when the "Logout" button is clicked', async () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<Header />
				</Provider>
			</BrowserRouter>
		);

		const logoutButton = screen.getByText('Logout');
		fireEvent.click(logoutButton);

		// Aquí puedes realizar las expectativas según el comportamiento esperado
	});
});
