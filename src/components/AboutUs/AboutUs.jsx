import { AiOutlineArrowRight } from "react-icons/ai";
import bgImg from "../../assets/images/simple.png";
import { BiCheckDouble } from "react-icons/bi";

const AboutUs = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        // opacity: "0.8",
      }}
    >
      <div className="px-4 md:px-10 lg:px-0 lg:w-3/4 mx-auto text-center my-16 py-10">
        <h2 className="text-3xl font-semibold ">Why Tech Touch?</h2>

        <div className="py-6 md:py-12">
          <ul className="text-left text-xl">
            <li className="flex gap-2">
              <BiCheckDouble className="text-3xl text-sky-600" />
              <span>
                Highlight the materials used in the product
                construction,durability and longevity.
              </span>
            </li>
            <li className="flex gap-2">
              <BiCheckDouble className="text-3xl text-sky-600" />
              <span>
                Innovative Technology or cutting-edge features that set the
                product apart from the competition.
              </span>
            </li>
            <li className="flex gap-2">
              <BiCheckDouble className="text-3xl text-sky-600" />
              <span>
                Versatility, if your product has multiple use cases or
                configurations, detail how it can adapt to various scenarios.
              </span>
            </li>
            <li className="flex gap-2">
              <BiCheckDouble className="text-3xl text-sky-600" />
              <span>
                Energy Efficiency, the product consumes less energy than
                competitors, emphasize this as a cost-saving and eco-friendly
                benefit.
              </span>
            </li>
            <li className="flex gap-2">
              <BiCheckDouble className="text-3xl text-sky-600" />
              <span>Safety and Security, the product enhances safety. I</span>
            </li>
            <li className="flex gap-2">
              <BiCheckDouble className="text-3xl text-sky-600" />
              <span>
                Warranty and Support, the warranty terms, return policy, and the
                availability of customer support. Mention the duration of the
                warranty, the ease of returns.
              </span>
            </li>
            <li className="flex gap-2">
              <BiCheckDouble className="text-3xl text-sky-600" />
              <span>
                Fastest Delivery , deliver the product within 3 to 7 days. Also
                handle urgent issues.
              </span>
            </li>
            <li className="flex gap-2">
              <BiCheckDouble className="text-3xl text-sky-600" />
              <span>
                Easy Payment, using all type of payment method . Also have cash
                on delivery system to us.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
