import Header from "./components/Header";
import { IProduct } from "./types";
import ProductTable from "./components/ProductTable";
import DashboardCard from "./components/DashboardCard";
import { useState } from "react";
import "./index.css";

const DashboardObjects = [
  {
    title: "Current Items",
    value: 23,
  },
  {
    title: "Monthly Expenses",
    value: 123,
  },
  {
    title: "Expired Items",
    value: 3,
  },
];

function App() {
  /**
   * @todo Replace with Redux RTK Query solution for state management
   */
  const [products, setProducts] = useState<IProduct[]>([]);

  return (
    <>
      <Header title="Inventory Manager" />
      {DashboardObjects.map((object, index) => (
        <DashboardCard key={index} title={object.title}>
          <p>{object.value}</p>
        </DashboardCard>
      ))}
      <ProductTable products={products} setProdcuts={setProducts} />
    </>
  );
}

export default App;
