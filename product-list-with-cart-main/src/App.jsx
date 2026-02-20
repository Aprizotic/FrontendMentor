import "./App.scss";
import productData from "./assets/data/data.json";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [cartTotal, setCartTotal] = useState(0);

  return (
    <main className="main">
      <h1 className="main__heading">Desserts</h1>

      {productData.map((product) => (
        <ProductCard
          key={product.name}
          product={product}
          setCartTotal={setCartTotal}
        />
      ))}

      <Cart cartTotal={cartTotal} />
    </main>
  );
}

export default App;
