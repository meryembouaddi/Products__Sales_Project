import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="brand">
          <img src={logo} alt="Logo SalesProducts" className="brand-logo" />
          <div className="brand-text">
            <span className="brand-name">SalesProducts</span>
            <span className="brand-tagline">Accessoires</span>
          </div>
        </Link>

        <nav className="nav">
          <NavLink to="/" end className="nav-link">Accueil</NavLink>
          <NavLink to="/products" className="nav-link">Produits</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}