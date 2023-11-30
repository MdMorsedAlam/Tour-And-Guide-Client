import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import { useEffect } from "react";
import { BsHeart } from "react-icons/bs";
import Swal from "sweetalert2";
import UseAuth from "../../../Hooks/UseAuth";
import Loading from "../../../Components/Loading/Loading";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const TypePackage = () => {
  const { user } = UseAuth();
  const { name } = useParams();
  const [typeData, setTypeData] = useState();
  const axiosPublic = UseAxiosPublic();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosPublic
      .get(`/package-type?name=${name}`)
      .then((res) => {
        setTypeData(res.data);
        setLoading(false);
      })
      .catch();
  }, [axiosPublic, name]);
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
    <div className="my-16">
      <SectionTitle
        heading={`Packages Of ${name} Types`}
        margin="mb-12"
        subHeading="Choosing Your Tour Type"
      />
      <div className="grid grid-cols-1 gap-10 px-2 md:grid-cols-2">
        {typeData?.map((item) => (
          <div
            key={item._id}
            className="card card-compact bg-base-100 shadow-xl relative"
          >
            <figure className="h-72">
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
              <h2 className="card-title">Trip Type : {item?.type}</h2>
              <p>Trip Title : {item?.title}</p>
              <p>Trip Price : {item?.price}</p>
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
    </div>
  );
};

export default TypePackage;
