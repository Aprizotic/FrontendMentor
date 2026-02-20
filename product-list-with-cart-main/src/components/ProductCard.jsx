import CartButton from "./CartButton";
import { useState } from "react";

function ProductCard({ product, setCartTotal }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <article className="product-card">
      <div className="product-card__wrapper">
        <img className="product-card__img" src={product.image.mobile} />
        <CartButton
          quantity={quantity}
          setQuantity={setQuantity}
          setCartTotal={setCartTotal}
        />
      </div>

      <div className="product-card__details">
        <span className="product-card__category">{product.category}</span>
        <span className="product-card__name">{product.name}</span>
        <span className="product-card__price">${product.price.toFixed(2)}</span>
      </div>
    </article>
  );
}

export default ProductCard;
