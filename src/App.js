import React, { useState } from 'react';

import "./assets/css/style.css";

import { Header, Navbar, Footer } from "./components";
import { About, Portfolio, Resume, Blog, LoFi, Contact } from './pages'

export default function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    if (currentPage === 'LoFi') {
      return <LoFi />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className ="base">
      <Header />
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
