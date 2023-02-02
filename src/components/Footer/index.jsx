import React from 'react';
import githubLogo from "./images/github-logo.jpg";
import linkedinLogo from "./images/linkedin-logo.jpg";

import './style.css';

function Footer() {
  return (
    <footer className="footer">
      {/* <section className="footer-section"> */}
        {/* I took out target="_blank" from the <a> links because I was getting terminal warnings...explore */}
        <a href="tel:5558675309">(555) 867-5309</a>
        <a href="mailto:erickirberger@gmail.com">erickirberger@gmail.com</a>
        <a href="https://github.com/ekirbs" target="_blank" rel="noreferrer"><img src={githubLogo} className="footerZoom rounded-image" alt="GitHub logo."/></a>
        <a href="https://www.linkedin.com/in/eric-kirberger-866a853b/" target="_blank" rel="noreferrer"><img src={linkedinLogo} className="footerZoom rounded-image" alt="Linkedin logo."/></a>
      {/* </section> */}
    </footer>
  );
}

export default Footer;
