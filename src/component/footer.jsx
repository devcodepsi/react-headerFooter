import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer({ headerTitle }) {
  return (
    <footer className="footer">
      <nav className="gnb">
        <NavLink
          className={({ isActive }) => (isActive ? 'linkActive' : '')}
          to="/"
        >
          홈
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'linkActive' : '')}
          to="/page1"
        >
          page1
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'linkActive' : '')}
          to="/page2"
        >
          page2
        </NavLink>
      </nav>
    </footer>
  );
}

export default Footer;
