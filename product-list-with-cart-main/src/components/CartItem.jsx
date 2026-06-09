function CartItem({ item, setItems }) {
  const removeItem = () => {
    setQuantity((prev) => prev - item.quantity);
    setCartTotal((prev) => prev - item.quantity);
    setPriceTotal(
      (prev) => prev - (item.price * parseInt(item.quantity)).toFixed(2),
    );

    setItems((prev) => {
      return prev.filter((i) => i.name !== item.name);
    });
  };

  return (
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
            fill="#CAAFA7"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </button>
    </div>
  );
}

export default CartItem;
