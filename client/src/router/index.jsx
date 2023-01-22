import { createBrowserRouter, Outlet } from 'react-router-dom';
import AuthProvider from '../context/AuthProvider';
import Home from '../pages/Home';
import Login from '../pages/login';

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
        children: [
            {
                element: <Login />,
                path: '/login',
            },
            {
                element: <Home />,
                path: '/',
            },
        ],
    },
]);
