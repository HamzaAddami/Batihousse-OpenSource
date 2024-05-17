import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import NosMetier from '../pages/Metier';
import Contact from '../pages/Contact';
import References from '../pages/References';
import Layout from "../layouts/layout.jsx";


export const router = createBrowserRouter([
    {
        
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/metiers", element: <NosMetier /> },
            { path: "/contact", element: <Contact /> },
            { path: "/references", element: <References /> },
            { path: "*", element: <h1>Not Found </h1> },
        ],
    }
    
]);
