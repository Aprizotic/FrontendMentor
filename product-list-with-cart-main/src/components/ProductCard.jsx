import CartButton from "./CartButton";
import { useState } from "react";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__wrapper">
        <picture>
          <source media="(min-width: 50rem)" srcSet={product.image.desktop} />
          <source media="(min-width: 30rem)" srcSet={product.image.tablet} />
          <img className="product-card__img" src={product.image.mobile} />
        </picture>
        <CartButton product={product} />
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
