import "./App.scss";
import productData from "./assets/data/data.json";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

function App() {
  return (
    <main className="main">
      <h1 className="main__heading">Desserts</h1>

      {productData.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}

      <Cart />
    </main>
  );
}

export default App;
