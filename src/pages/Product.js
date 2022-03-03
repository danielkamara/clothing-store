import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  const { product } = params;
  return (
    <div>
      <h1>{product}</h1>
    </div>
  );
};

export default Product;
