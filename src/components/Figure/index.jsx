import React from 'react';

import { background } from './images';

import './style.css';

function Figure() {
  return (
    <figure>
      <img src={background} className="background-image" alt="stock background."/>
    </figure>
  );
}

export default Figure;