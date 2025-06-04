import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import ROUTES from "./pages";

const App = () => <RouterProvider router={createBrowserRouter(ROUTES)} />;

export default App;
