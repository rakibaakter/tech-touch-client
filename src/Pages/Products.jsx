import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/Product/ProductCard";

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="px-4 md:px-10 lg:px-0 lg:w-3/4 mx-auto text-center my-16 ">
      <h2 className="text-3xl font-semibold mb-6 ">
        Available Products for
        <span className=" font-bold text-accent">{products[0]?.brand}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
