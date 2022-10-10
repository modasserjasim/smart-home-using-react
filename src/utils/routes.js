import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../components/About';
import Cart from '../components/Cart';
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home';
import Shop from '../components/Shop';
import Main from '../layouts/Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'about', element: <About></About>
            },
            {
                path: 'shop',
                loader: () => fetch('products.json'),
                element: <Shop></Shop>
            },
            {
                path: 'cart',
                element: <Cart></Cart>
            }
        ]

    }
])

export default router;