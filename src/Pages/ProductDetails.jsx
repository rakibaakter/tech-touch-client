import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);

  const { name, brand, type, price, image, description } = product[0];

  const handleAddToCart = (item) => {
    fetch("http://localhost:5000/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added To Cart Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="px-4 md:px-10 lg:px-0 lg:w-3/4 mx-auto text-center my-16  ">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <figure className="lg:w-1/2">
          <img src={image} alt={name} className="lg:w-full" />
        </figure>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold text-center">{name}</h2>
          <div>
            <div className="text-left my-6 space-y-2">
              <h2 className="text-xl font-bold">Brand : {brand}</h2>
              <p className="text-xl">Type : {type}</p>
              <p className="text-xl text-accent font-bold">Price : ${price}</p>

              <h2 className="text-3xl font-semibold">Description:</h2>
              <p>{description}</p>
            </div>
            <div className="flex justify-start">
              <button
                onClick={() => handleAddToCart(product[0])}
                className="btn bg-sky-600 text-white border-none w-2/3"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
