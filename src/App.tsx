import Header from "./components/Header";
import { IProduct } from "./types";
import ProductTable from "./components/ProductTable";
import { useState } from "react";
import "./App.css";

function App() {
  /**
   * @todo Replace with Redux RTK Query solution for state management
   */
  const [products, setProducts] = useState<IProduct[]>([]);

  return (
    <>
      <Header title="Inventory" />
      <ProductTable products={products} setProdcuts={setProducts} />
    </>
  );
}

export default App;
