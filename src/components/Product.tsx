interface IProductProps {
  name: string;
  amount: number;
  expiresIn: number;
}

const Product: React.FC<IProductProps> = (props: IProductProps) => {
  const { name, amount, expiresIn } = props;

  return (
    <>
      <td>{name}</td>
      <td>{amount}</td>
      <td>{expiresIn} days</td>
    </>
  );
};

export default Product;
