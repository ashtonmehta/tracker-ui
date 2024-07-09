import "./App.css";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import { IProduct } from "./types";

const products: IProduct[] = [
  {
    id: 1,
    name: "Milk",
    amount: 1,
  },
  {
    id: 2,
    name: "Apples",
    amount: 5,
  },
  {
    id: 3,
    name: "Bread",
    amount: 1,
  }
]

function App() {
  return (
    <>
      <Header title="Inventory" />
      {products.map((product) => <ProductCard key={product.id} name={product.name} amount={product.amount} />)}
      <Header title="Grocery List" />
      
    </>

  );
}

export default App;
