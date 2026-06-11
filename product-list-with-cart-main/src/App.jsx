import "./App.scss";
import productData from "./assets/data/data.json";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import CartItem from "./components/CartItem";
import { useState, createContext } from "react";
export const ItemContext = createContext();

function App() {
  const [items, setItems] = useState([]);
  const contextValue = { items, setItems };

  return (
    <main className="main">
      <h1 className="main__heading">Desserts</h1>

      <ItemContext.Provider value={contextValue}>
        {productData.map((product) => (
          <ProductCard product={product} key={product.name} />
        ))}

        <Cart items={items} productData={productData} />
      </ItemContext.Provider>
    </main>
  );
}

export default App;
