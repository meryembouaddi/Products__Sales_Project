import Products from "./Product";
import "./Products.css";

export default function ProductList() {
  return (
    <div className="products-container">
      <h1>Notre Boutique</h1>

      <div className="products-grid">
        {Products.map((Product) => (
          <div className="product-card" key={Product.id}>
            <div className="product-image">
              <img src={Product.image} alt={Product.name} />
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

                <button className="add-button">
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