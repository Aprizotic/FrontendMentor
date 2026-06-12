function CartItem({ item, setItems, isThumbnail, productData }) {
  const removeItem = () => {
    setItems((prev) => {
      return prev.filter((i) => i.name !== item.name);
    });
  };

  const foundItem = productData.find((product) => {
    return product.name === item.name;
  });

  const thumbnail = foundItem.image.thumbnail;

  return isThumbnail === false ? (
    <div className="cart-item">
      <div className="cart-item__details">
        <span className="cart-item__heading">{item.name}</span>
        <div className="cart-item__stats">
          <span className="cart-item__quantity">{item.quantity}x</span>
          <div className="cart-item__pricing">
            <span className="cart-item__price">@ ${item.price.toFixed(2)}</span>
            <span className="cart-item__total-price">
              ${(item.price * parseInt(item.quantity)).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <button onClick={removeItem} className="cart-item__remove-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="currentColor"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </button>
    </div>
  ) : (
    <div className="cart-item">
      <div className="cart-item__thumbnail-wrapper">
        <img className="cart-item__thumbnail" src={thumbnail} />
        <div className="cart-item__details">
          <span className="cart-item__heading">{item.name}</span>
          <div className="cart-item__stats">
            <span className="cart-item__quantity">{item.quantity}x</span>
            <div className="cart-item__pricing">
              <span className="cart-item__price">
                @ ${item.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <span className="cart-item__total-price cart-item__total-price--thumbnail">
        ${(item.price * parseInt(item.quantity)).toFixed(2)}
      </span>
    </div>
  );
}

export default CartItem;
