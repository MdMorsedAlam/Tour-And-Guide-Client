import { Link } from "react-router-dom";
import UsePackage from "../../../Hooks/UsePackage";
import Loading from "../../../Components/Loading/Loading";
import { BsHeart } from "react-icons/bs";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";

const Packages = () => {
  const axiosPublic = UseAxiosPublic();
  const [packages, loading] = UsePackage();

  const { user } = UseAuth();
  const handelAddWishlist = async (item) => {
    const wishitem = { item, email: user.email };
    const uploaded = await axiosPublic.post("/wishlist", wishitem);
    if (uploaded.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `You Have added ${item.name} To Your Wishlist`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 gap-10 px-2 md:grid-cols-3">
        {packages?.slice(0, 3).map((item) => (
          <div
            key={item._id}
            className="card card-compact bg-base-100 shadow-xl relative"
          >
            <figure className="h-60">
              <img
                src={item.images[0]}
                alt={item.images[0]}
                className="w-full h-full"
              />
            </figure>
            <div
              className="absolute top-5 right-5 tooltip-left tooltip"
              data-tip="Add To Wishlist"
            >
              <button onClick={() => handelAddWishlist(item)}>
                <BsHeart className="text-2xl text-[#1bdbf0]" />
              </button>
            </div>
            <div className="card-body">
              <h2 className="card-title">Trip Type : {item.type}</h2>
              <p>Trip Title : {item.title}</p>
              <p>Trip Price : {item.price}</p>
              <div className="card-actions justify-end">
                <Link
                  to={`/packagedetails/${item._id}`}
                  className="btn btn-accent"
                >
                  View Package
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <Link to="/allpackages" className="btn btn-accent btn-outline">
          All Packages
        </Link>
      </div>
    </div>
  );
};

export default Packages;
