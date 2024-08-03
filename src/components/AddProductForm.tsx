import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../types";

interface IAddProductFormProps {
  setProdcuts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

interface IAddProductFormFields {
  name: string;
  amount: number;
  price: number;
  expiresIn: number;
}

const AddProductForm: React.FC<IAddProductFormProps> = ({
  setProdcuts,
}: IAddProductFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IAddProductFormFields>();

  const onSubmit: SubmitHandler<IAddProductFormFields> = (
    data: IAddProductFormFields
  ) => {
    setProdcuts((prevProducts) => [
      ...prevProducts,
      {
        id: prevProducts.length + 1,
        ...data,
      },
    ]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name", {
          required: "Name is required",
          validate: (value) => {
            return value.length > 20 ? "Name is too long" : true;
          },
        })}
        type="text"
        placeholder="Name"
      />
      {errors.name && <div>{errors.name.message}</div>}
      <input
        {...register("amount", {
          required: "Amount is required",
          min: {
            value: 1,
            message: "Amount must be greater than 0",
          },
        })}
        type="number"
        placeholder="Amount"
      />
      {errors.amount && <div>{errors.amount.message}</div>}
      <input
        {...register("price", {
          required: "Price is required",
        })}
        type="number"
        placeholder="Price"
      />
      {errors.price && <div>{errors.price.message}</div>}
      <input
        {...register("expiresIn", {
          min: 1,
        })}
        type="number"
        placeholder="Expires In"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default AddProductForm;
