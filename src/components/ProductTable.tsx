import { useState } from "react";
import { IProduct } from "../types";
import Table, { IColumn } from "./Table";
import Product from "./Product";
import Modal from "./Modal";
import AddProductForm from "./AddProductForm";

interface IProductTableProps extends React.HTMLAttributes<HTMLDivElement> {
  products: IProduct[];
  setProdcuts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const columns: IColumn<IProduct>[] = [
  { key: "name", header: "Name" },
  { key: "amount", header: "Amount" },
  { key: "expiresIn", header: "Expires In" },
];

const ProductTable: React.FC<IProductTableProps> = ({
  products,
  setProdcuts,
  ...attributes
}: IProductTableProps) => {
  const [toggleModal, setToggleModal] = useState(false);

  const handleDeleteProduct = (id: number) => {
    setProdcuts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div {...attributes}>
      {products.length === 0 ? (
        <p>Start by adding an item!</p>
      ) : (
        <Table
          columns={columns}
          items={products}
          renderItem={(product) => (
            <Product handleClickDelete={handleDeleteProduct} {...product} />
          )}
        />
      )}
      {toggleModal ? (
        <Modal title="Add Item" onClose={() => setToggleModal(false)}>
          <AddProductForm setProdcuts={setProdcuts} />
        </Modal>
      ) : (
        <button onClick={() => setToggleModal(true)}>Add Item</button>
      )}
    </div>
  );
};

export default ProductTable;
