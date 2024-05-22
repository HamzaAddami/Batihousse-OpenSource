import React, { useEffect } from 'react';
import { createBrowserRouter, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NosMetier from '../pages/Metier';
import Contact from '../pages/Contact';
import References from '../pages/References';
import Layout from "../layouts/layout.jsx";
import ProjectDetail from "../components/ProjectDetail.jsx";

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop /> {/* Add ScrollToTop component */}
        <Layout />
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/metiers", element: <NosMetier /> },
      { path: "/contact", element: <Contact /> },
      { path: "/references", element: <References /> },
      { path: '/projects/:projectid', element: <ProjectDetail /> },
      { path: "*", element: <h1>Not Found</h1> },
    ],
  }
]);
