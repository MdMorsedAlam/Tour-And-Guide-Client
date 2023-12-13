import UseAuth from "../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import Loading from "../Components/Loading/Loading";
import { Helmet } from "react-helmet-async";

const Bookings = () => {
  const { user } = UseAuth();
  const axiosPublic = UseAxiosPublic();

  const {
    data: mybookings,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["mybookings", user?.email],
    queryFn: async () => {
      const res = await axiosPublic(`/bookings/${user?.email}`);
      return res.data;
    },
  });

  if (mybookings?.length > 3) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Congress You Will Get Discount`,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  const handelDelete = (book) => {
    axiosPublic
      .delete(`/bookings/${book._id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `You Have Deleted ${book.pname} Package`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch();
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div>
        <Helmet>
          <title>Bookings | Tourist Guide</title>
        </Helmet>
        <SectionTitle
          heading="My Bookings"
          subHeading="Know About Them"
          margin="mt-0"
        />
        <div className="overflow-x-auto mt-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Package Name</th>
                <th>Guide Name</th>
                <th>Tour Date</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {mybookings?.map((book) => (
                <tr key={book._id}>
                  <th>{book.pname}</th>
                  <td>{book.gname}</td>
                  <td>{book.date}</td>
                  <td>{book.price}</td>
                  <td>{book.status}</td>
                  <td className="flex gap-3">
                    <button
                      disabled={book.status !== "In Review" && true}
                      className={`btn btn-accent btn-xs`}
                      onClick={() => handelDelete(book)}
                    >
                      Cancel
                    </button>
                    <button
                      disabled={book.status !== "Accepted" && true}
                      className="btn btn-accent btn-xs"
                    >
                      Pay
                    </button>
                    <button
                      disabled={mybookings?.length > 3 ? false : true}
                      className="btn btn-accent btn-xs"
                    >
                      Apply
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
