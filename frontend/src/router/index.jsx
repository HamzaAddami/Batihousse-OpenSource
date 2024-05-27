import React, { useEffect } from 'react';
import { createBrowserRouter, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NosMetier from '../pages/Metier';
import Contact from '../pages/Contact';
import References from '../pages/References';
import Layout from "../layouts/layout.jsx";
import ProjectDetail from "../components/ProjectDetail.jsx";
import Page404 from '../components/404.jsx';
import PrivateRoute from '../components/PrivateRoute';
import LoginForm from '../components/LoginForm';
import AdminDashboard from '../pages/AdminDashboard';
import { AuthProvider } from '../context/AuthContext';

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
      < AuthProvider>
        <ScrollToTop /> {/* Add ScrollToTop component */}
        <Layout />
        </AuthProvider>
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/metiers", element: <NosMetier /> },
      { path: "/contact", element: <Contact /> },
      { path: "/references", element: <References /> },
      { path: '/projects/:projectid', element: <ProjectDetail /> },
      { path: "*", element: <Page404 /> },
      { path: "/login", element: <LoginForm /> },
      {path:"/admin", element:<AdminDashboard />} 
    ],
  }
]);
