import React from 'react';

import { twitterLogo, githubLogo, linkedinLogo } from './images';

import './style.css';

function Footer() {
  return (
    <footer className="footer">
      <a href="#" target="_blank" rel="noreferrer"><img src={twitterLogo} className="footerZoom rounded-image" alt="Twitter logo."/>Twitter</a>
        {/* <a href="mailto:erickirberger@gmail.com">erickirberger@gmail.com</a> */}
        <a href="https://github.com/ekirbs" target="_blank" rel="noreferrer"><img src={githubLogo} className="footerZoom rounded-image" alt="GitHub logo."/>GitHub</a>
        <a href="https://www.linkedin.com/in/eric-kirberger-866a853b/" target="_blank" rel="noreferrer"><img src={linkedinLogo} className="footerZoom rounded-image" alt="Linkedin logo."/>LinkedIn</a>
    </footer>
  );
}

export default Footer;
