import { createBrowserRouter, Outlet } from 'react-router-dom';
import AuthProvider from '../context/AuthProvider';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/login';
import ProtectedRoute from './ProtectedRoute';

const AuthLayout = () => {
    return (
        <AuthProvider>
            <Outlet />
        </AuthProvider>
    );
};

export default createBrowserRouter([
    {
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <Login />,
                path: '/login',
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        element: <Home />,
                        path: '/',
                    },
                ],
            },

            // {
            //     element: <Home />,
            //     path: '/',
            // },
        ],
    },
]);
