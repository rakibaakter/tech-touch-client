import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { id, name, image } = brand;
  return (
    <Link to={`products/${name}`} className="border text-center bg-sky-600">
      <img src={image} className="h-24 md:h-48 lg:h-52 w-full" alt={name} />
      <h2 className="text-2xl font-medium my-2 md:my-4 lg:my-6"> {name}</h2>
    </Link>
  );
};

export default BrandCard;
