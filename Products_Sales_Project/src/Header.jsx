import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/products">Produits</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}