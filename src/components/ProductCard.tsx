import { useState } from "react";

interface IProductCardProps {
  name: string;
  amount: number;
}

const ProductCard: React.FC<IProductCardProps> = (props: IProductCardProps) => {
  const { name, amount } = props;
  const [currentAmount, setCurrentAmount] = useState(amount);

  return (
    <div>
      <span>
        {name} {currentAmount}
        <button
          onClick={() => {
            setCurrentAmount(currentAmount + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCurrentAmount(currentAmount - 1);
          }}
        >
          -
        </button>
      </span>
    </div>
  );
};

export default ProductCard;
