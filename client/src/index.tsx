import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import HomePage from './routes/HomePage';
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import RestaurantUpdatePage from './routes/RestaurantUpdatePage';
import ErrorPage from './routes/ErrorPage';

import './styles/index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/restaurants/:id/',
                element: <RestaurantDetailPage />,
            },
            {
                path: '/restaurants/:id/update',
                element: <RestaurantUpdatePage />,
            },
        ],
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
