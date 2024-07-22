interface IProductProps {
  id: number;
  name: string;
  amount: number;
  expiresIn: number;
  handleClickDelete: (id: number) => void;
}

const Product: React.FC<IProductProps> = (props: IProductProps) => {
  const { id, name, amount, expiresIn, handleClickDelete } = props;

  return (
    <>
      <td>{name}</td>
      <td>{amount}</td>
      <td>{expiresIn} days</td>
      <button onClick={() => handleClickDelete(id)}>Delete</button>
    </>
  );
};

export default Product;
