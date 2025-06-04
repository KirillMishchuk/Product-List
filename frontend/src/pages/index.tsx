import { Navigate, type RouteObject } from "react-router-dom";

import Layout from "./layout";
import HomePage from "./home/HomePage";
import ProductDetailsPage from "./product-details";

export const ROUTES: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "product/:productId",
                element: <ProductDetailsPage />,
            },
            {
                path: "*",
                element: <Navigate to={"/"} replace />,
            },
        ],
    },
];

export default ROUTES;
