import React, { useState } from 'react';

import Header from "../components/Header/index"
import Navbar from '../components/Navbar/index';

import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact/Contact';
import Login from '../pages/Login/Login';
import Resume from '../pages/Resume/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
