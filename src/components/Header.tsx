// import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/Header.css';

const Header = () => {
  return (
    <header className='header'>
      <nav className='navHeader'>
        <ul className='navHeader-list'>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre Mim</Link></li>
          <li><Link to="/projects">Projetos</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;