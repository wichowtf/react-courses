import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes({ isAuth, component, ...rest }) {
	return isAuth ? <Outlet /> : <Navigate to='/login' />;
}

export default PrivateRoutes;
