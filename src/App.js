import "./App.css";
import ProductList from "./components/product-list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductList type="catalogue" />
        <ProductList type="cart" />
      </header>
    </div>
  );
}

export default App;
