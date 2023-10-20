import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, brand, type, price, rating, image } = product;
  return (
    <div className="card bg-slate-900 shadow-xl flex flex-grow ">
      <figure>
        <img src={image} alt={name} className="h-56 w-full object-cover" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title justify-center">{name}</h2>
        <h2 className="card-title">Brand : {brand}</h2>
        <p>Type : {type}</p>
        <p>Price : ${price}</p>
        <div className="rating text-accent font-bold text-2xl">
          <Rating
            initialRating={rating}
            readonly
            emptySymbol={<AiOutlineStar />}
            fullSymbol={<AiFillStar />}
          />
        </div>
        <Link to={`/update-product/${_id}`} className="badge badge-outline p-3">
          Update
        </Link>
        <Link to={`/product/${_id}`}>
          <button className="btn bg-sky-600 text-white border-none w-full mt-4">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
