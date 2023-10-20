import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const ProductCard = ({ product }) => {
  const { name, brand, type, price, rating, image } = product;
  return (
    <div className="card bg-slate-900 shadow-xl">
      <figure>
        <img src={image} alt={name} className="h-56 w-full object-cover" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">{name}</h2>
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
        <div className="badge badge-outline p-3">Update</div>
        <div>
          <button className="btn bg-sky-600 text-white border-none w-full mt-4">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
