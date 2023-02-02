import React from 'react';

import "./style.css";

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
// const styles = {
//   card: {
//     margin: 20,
//     background: '#e8eaf6',
//   },
//   heading: {
//     background: '#9a74db',
//     minHeight: 50,
//     lineHeight: 3.5,
//     fontSize: '1.2rem',
//     color: 'white',
//     padding: '0 20px',
//   },
// };

// In Navbar, we can assign a style from an object by using curly braces
function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="navCard">
      {/* <div className="navHeader">Home</div> */}
      <ul className="nav nav-tabs">
      <li className="nav-item navHeader">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item navHeader">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item navHeader">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item navHeader">
        <a
          href="#Blog"

          onClick={() => handlePageChange('Blog')}
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item navHeader">
        <a
          href="#LoFi"

          onClick={() => handlePageChange('LoFi')}
          className={currentPage === 'LoFi' ? 'nav-link active' : 'nav-link'}
        >
          LoFi
        </a>
      </li>
      <li className="nav-item navHeader">
        <a
          href="#Contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
    </div>
  );
}

export default Navbar;
