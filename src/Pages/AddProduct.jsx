import { useLoaderData } from "react-router-dom";
import bgImg from "../assets/images/cool-background.png";
import Swal from "sweetalert2";

const AddProduct = () => {
  const { brands } = useLoaderData();

  const handleAddProduct = (event) => {
    event.preventDefault();
    // console.log(event.target);
    const form = event.target;
    console.log(form);
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const description = form.description.value;

    const newProduct = { name, brand, type, price, rating, image, description };
    console.log(newProduct);

    // post product to database
    fetch("https://brand-shop-server-woad-tau.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        // backgroundRepeat: "repeat",
        // opacity: "0.7",
      }}
    >
      <div className="bg-black opacity-60 py-16">
        <div className="space-y-6 px-4 md:px-10 lg:px-0 lg:w-1/2 mx-auto text-center  text-accent ">
          <h2 className="text-4xl font-bold">Add New Product</h2>

          <form onSubmit={handleAddProduct} className="space-y-2 p-2">
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent text-xl font-bold">
                  Name
                </span>
              </label>
              <label className="input-group">
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Enter Product name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* row for brand and type */}
            <div className="md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-accent text-xl font-bold">
                    Brand Name
                  </span>
                </label>
                <label className="input-group">
                  <select
                    id="brand"
                    name="brand"
                    className="input input-bordered w-full text-xl font-medium"
                  >
                    {brands.map((singleBrand) => (
                      <option key={singleBrand.id} value={singleBrand.name}>
                        {singleBrand.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-accent text-xl font-bold">
                    Type
                  </span>
                </label>
                <label className="input-group">
                  <select
                    id="type"
                    name="type"
                    className="input input-bordered w-full text-xl font-medium"
                  >
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                    <option value="headphone">Headphone</option>
                    <option value="smart-watch">Smart Watch</option>
                  </select>
                </label>
              </div>
            </div>
            {/* row for price and rating */}
            <div className="md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-accent text-xl font-bold">
                    Price
                  </span>
                </label>
                <label className="input-group">
                  <input
                    required
                    type="text"
                    name="price"
                    placeholder="Enter price in $"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-accent text-xl font-bold">
                    Rating
                  </span>
                </label>
                <label className="input-group">
                  <input
                    required
                    type="text"
                    name="rating"
                    placeholder="Rate out of 5"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            {/* image url */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent text-xl font-bold">
                  Image URL
                </span>
              </label>
              <label className="input-group">
                <input
                  required
                  type="text"
                  name="image"
                  placeholder="Enter Image URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent text-xl font-bold">
                  Description
                </span>
              </label>
              <label className="input-group">
                <textarea
                  required
                  rows="10"
                  name="description"
                  placeholder="Please describe "
                  className="input input-bordered w-full p-4 h-36"
                ></textarea>
              </label>
            </div>

            {/* submit*/}
            <div className="mt-6 w-full">
              <input
                type="submit"
                value="Add Product"
                className="btn bg-sky-600 w-full text-white text-2xl mt-6"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
