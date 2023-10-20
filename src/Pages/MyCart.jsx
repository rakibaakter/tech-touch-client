import { useLoaderData } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import { useState } from "react";

const MyCart = () => {
  const loadedCarts = useLoaderData();
  const [carts, setCarts] = useState(loadedCarts);

  return (
    <div className="px-4 md:px-10 lg:px-0 lg:w-3/4 mx-auto text-center my-16 ">
      <h2 className="text-3xl font-semibold mb-6 ">My Cart List</h2>
      <div>
        <div className="bg-slate-500 py-3 grid grid-cols-3 md:grid-cols-6 mt-4">
          <p className="hidden md:block">Item</p>
          <h2>Name</h2>
          <h2 className="hidden md:block">Brand</h2>
          <h2 className="hidden md:block">Type</h2>
          <h2>Price</h2>
        </div>
        {carts.map((cart, index) => (
          <Cart
            key={index}
            cart={cart}
            carts={carts}
            setCarts={setCarts}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCart;
