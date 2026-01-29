import React from 'react';
import logoSvg from '../assets/wyre-ai-logo-n.svg';

const Logo = ({ className = '', forceColor }) => {
  const isWhite = forceColor === 'white' || forceColor === '#FFFFFF' || forceColor === '#fff';
  
  return (
    <img 
      src={logoSvg} 
      alt="Wyre AI" 
      className={`${className} ${isWhite ? 'brightness-0 invert' : ''}`}
      style={{
        display: 'block'
      }}
    />
  );
};

export default Logo;
