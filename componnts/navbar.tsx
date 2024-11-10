'use client';
import Link from 'next/link';
import { useState } from 'react';
import './navbar.css'; // Import the CSS file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <nav>
      <Link href="/" className="nav-link">
        Faraz Website
      </Link>

      <div className="menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${menuOpen ? 'flex flex-col' : 'hidden'}`}>
        <li>
          <Link
            href="/"
            onClick={() => {
              if (menuOpen) {
                toggleMenu();
              }
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            onClick={() => {
              if (menuOpen) {
                toggleMenu();
              }
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            onClick={() => {
              if (menuOpen) {
                toggleMenu();
              }
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
