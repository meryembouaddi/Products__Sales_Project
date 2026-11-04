import { Link } from 'react-router-dom';
import './Accueil.css';

export default function Accueil() {
  return (
    <main className="accueil">
      <section className="hero">
        <h1>Bienvenue sur SalesProducts</h1>
<p>
  Découvrez notre collection d'accessoires : montres, lunettes, sacs,
  bijoux et bien plus, au meilleur prix.
</p>
        <Link to="/products" className="btn">
          Voir les produits
        </Link>
      </section>

      <section className="description">
        <h2>À propos de notre site</h2>
        <p>
          SalesProducts est une plateforme dédiée à la vente de produits en
          ligne. Notre objectif est de simplifier votre expérience d'achat :
          parcourez notre catalogue, consultez les détails de chaque produit
          et passez commande en quelques clics.
        </p>
      </section>

    </main>
  );
}