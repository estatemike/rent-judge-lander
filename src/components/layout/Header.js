import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto px-8">
      <div className="flex items-center text-2xl">
        <div className="w-20 mr-3">
          <img src="/pictures/rent-judge-144.png" alt="logo" />
        </div>
        Rent Judge
      </div>
    </div>
  </header>
);

export default Header;
