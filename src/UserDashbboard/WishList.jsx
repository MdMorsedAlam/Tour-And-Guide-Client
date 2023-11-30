import SectionTitle from "../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import useWishlist from "../Hooks/useWishlist";
import Loading from "../Components/Loading/Loading";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";

const WishList = () => {
  const [wishlist, loading, refetch] = useWishlist();
  const axiosPublic = UseAxiosPublic();

  const handelDelete = (wish) => {
    axiosPublic
      .delete(`/wishlist/${wish._id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Successfully You Have Deleted ${wish.item.name}`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch();
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <SectionTitle
        heading="My Wishlist"
        subHeading="you can book"
        margin="mt-0"
      />
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Photo</th>
              <th>Name</th>
              <th>View</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {wishlist?.map((wish, i) => (
              <tr key={wish._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={wish.item.images[0]}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <p>{wish.item.name}</p>
                </td>
                <td>
                  <Link
                    className="btn btn-accent btn-xs"
                    to={`/packagedetails/${wish.item._id}`}
                  >
                    View Package
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handelDelete(wish)}
                    className="btn btn-xs btn-warning"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishList;
