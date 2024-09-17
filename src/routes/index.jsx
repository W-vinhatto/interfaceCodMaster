import { createBrowserRouter } from "react-router-dom";

import { Login } from "../containers/login";
import { Register } from "../containers/register";
import { Home } from "../containers/home";
import { Products } from "../containers/Products";


export const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },

    {
        path: '/cadastro',
        element: <Register />
    },

    {
        path: '/',
        element: <Home />
    },

    {
        path: '/cardapio',
        element: <Products />
    },
])