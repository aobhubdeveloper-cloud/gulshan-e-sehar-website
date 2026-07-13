import React from 'react';

const Logo = ({ className = 'w-11 h-11' }) => (
    <img src="/favicon.ico" alt="Gulshan-e-Sehar Logo" className={`${className} object-contain`} />
);

export default Logo;
