import './Navbar.css';
import { FaSearch, FaHeart, FaShoppingBag, FaUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="navbar">
      {/* Top row */}
      <div className="navbar__top">
        <div className="navbar__logo-img">
          <img src="/file.svg" alt="Logo" />
        </div>
        <div className="navbar__logo-text">LOGO</div>
        <div className="navbar__icons">
          <FaSearch />
          <FaHeart />
          <FaShoppingBag />
          <FaUser />
          <span className="lang">ENG ▼</span>
        </div>
      </div>

      {/* Bottom row */}
      <nav className="navbar__bottom">
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </nav>

      {/* Orange line */}
      <div className="navbar__orange-line"></div>
    </header>
  );
}
