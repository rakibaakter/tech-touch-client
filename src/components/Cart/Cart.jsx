import React from "react";

const Cart = ({ cart, index }) => {
  console.log(cart);
  return (
    <div className="bg-slate-900 py-2 grid grid-cols-3 md:grid-cols-6 mt-4">
      <p className="hidden md:block">{index + 1}</p>
      <h2>{cart.name}</h2>
      <h2 className="hidden md:block">{cart.brand}</h2>
      <h2 className="hidden md:block">{cart.type}</h2>
      <h2>${cart.price}</h2>
      <button className="bg-red-400 py-3">Remove</button>
    </div>
  );
};

export default Cart;
