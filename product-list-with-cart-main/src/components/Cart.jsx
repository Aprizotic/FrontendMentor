function Cart({ cartTotal }) {
  return (
    <section className="cart">
      <h2 className="cart__heading">Your Cart ({cartTotal})</h2>

      <div className="cart__empty-wrapper">
        <img
          className="cart__img"
          src="./assets/images/illustration-empty-cart.svg"
        />
        <p className="cart__description">Your added items will appear here</p>
      </div>
    </section>
  );
}

export default Cart;
