import Swal from "sweetalert2";

const Cart = ({ cart, index, carts, setCarts }) => {
  //   console.log(cart);

  const handleRemove = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-server-woad-tau.vercel.app/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remainig = carts.filter((cartItem) => cartItem._id !== id);
              setCarts(remainig);

              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="bg-slate-900 py-2 grid grid-cols-3 md:grid-cols-6 mt-4">
      <p className="hidden md:block">{index + 1}</p>
      <h2>{cart.name}</h2>
      <h2 className="hidden md:block">{cart.brand}</h2>
      <h2 className="hidden md:block">{cart.type}</h2>
      <h2>${cart.price}</h2>
      <button
        onClick={() => handleRemove(cart._id)}
        className="bg-red-400 py-3"
      >
        Remove
      </button>
    </div>
  );
};

export default Cart;
