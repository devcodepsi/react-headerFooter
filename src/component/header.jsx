import React from 'react';

function Header({ headerTitle }) {
  return (
    <header className="header">
      <h1 className="header__title">{headerTitle}</h1>
    </header>
  );
}

export default Header;
