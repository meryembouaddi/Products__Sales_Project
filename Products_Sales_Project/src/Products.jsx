
import { useState } from "react";
import Products from "./Product";
import "./Products.css";

export default function ProductList() {

  const [Panier, SetPanier] = useState([]);
  const [AfficherPanier, SetAfficherPanier] = useState(false);

  // Ajouter un produit au panier
  function AjouterAuPanier(Product) {

    const ProduitExiste = Panier.find(
      (p) => p.id === Product.id
    );

    if (ProduitExiste) {
      SetPanier(
        Panier.map((p) =>
          p.id === Product.id
            ? { ...p, quantite: p.quantite + 1 }
            : p
        )
      );
    } else {
      SetPanier([
        ...Panier,
        { ...Product, quantite: 1 }
      ]);
    }
  }

  // Supprimer un produit du panier
  function SupprimerDuPanier(id) {
    SetPanier(Panier.filter((p) => p.id !== id));
  }

  // Calculer le total
  const Total = Panier.reduce(
    (somme, p) => somme + p.price * p.quantite,
    0
  );

  // Calculer le nombre total d'articles
  const NombreArticles = Panier.reduce(
    (somme, p) => somme + p.quantite,
    0
  );

  return (
    <div className="products-container">

      <h1>Notre Boutique</h1>

      {/* Bouton Panier */}
      <button
        className="cart-button"
        onClick={() => SetAfficherPanier(!AfficherPanier)}
      >
        🛒 Panier ({NombreArticles})
      </button>

      {/* Tableau du panier */}
      {AfficherPanier && (
        <div className="cart-container">

          <h2>Mon Panier</h2>

          {Panier.length === 0 ? (
            <p>Votre panier est vide.</p>
          ) : (
            <>
              <table border="1" cellPadding="10">
                <thead>
                  <tr>
                    <th>Produit</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {Panier.map((p) => (
                    <tr key={p.id}>
                      <td>{p.name}</td>
                      <td>{p.price} DH</td>
                      <td>{p.quantite}</td>
                      <td>{p.price * p.quantite} DH</td>
                      <td>
                        <button
                          onClick={() => SupprimerDuPanier(p.id)}
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h3>Total à payer : {Total} DH</h3>
            </>
          )}

        </div>
      )}

      {/* Liste des produits */}
      <div className="products-grid">

        {Products.map((Product) => (
          <div className="product-card" key={Product.id}>

            <div className="product-image">
              <img
                src={Product.image}
                alt={Product.name}
              />
            </div>

            <div className="product-info">

              <span className="product-category">
                {Product.category}
              </span>

              <h3>{Product.name}</h3>

              <p className="product-description">
                {Product.description}
              </p>

              <div className="product-footer">

                <span className="product-price">
                  {Product.price} DH
                </span>

                <button
                  className="add-button"
                  onClick={() => AjouterAuPanier(Product)}
                >
                  Ajouter au panier
                </button>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
