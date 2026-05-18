import "./App.scss";
import productData from "./assets/data/data.json";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { useState, createContext } from "react";
export const ItemContext = createContext();

function App() {
  const [cartTotal, setCartTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [priceTotal, setPriceTotal] = useState(0);
  const contextValue = { items, setItems };

  return (
    <main className="main">
      <h1 className="main__heading">Desserts</h1>

      <ItemContext.Provider value={contextValue}>
        {productData.map((product) => (
          <ProductCard
            product={product}
            setCartTotal={setCartTotal}
            setPriceTotal={setPriceTotal}
            key={product.name}
          />
        ))}

        <Cart cartTotal={cartTotal} items={items} priceTotal={priceTotal} />
      </ItemContext.Provider>
    </main>
  );
}

export default App;
