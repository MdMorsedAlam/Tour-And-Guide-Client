import { useQuery } from "@tanstack/react-query";
import UseAuth from "../Hooks/UseAuth";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import Loading from "../Components/Loading/Loading";
import { Helmet } from "react-helmet-async";

const AssignedTours = () => {
  const { user } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const {
    data: mybookings,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["mybookings", user?.email],
    queryFn: async () => {
      const res = await axiosPublic(`/mybookings/${user?.email}`);
      return res.data;
    },
  });

  const handelAccept = (book) => {
    axiosPublic
      .patch(`/update-status-accept/${book._id}`, { status: "Accepted" })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `You Have Accepted ${book.pname} Package`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch();
  };
  const handelReject = (book) => {
    axiosPublic
      .patch(`/update-status-reject/${book._id}`, { status: "Rejected" })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `You Have Rejected ${book.pname} Package`,
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
          <title>Assigned Tours | Tourist Guide</title>
        </Helmet>
        <SectionTitle
          heading="My Booked Plan"
          subHeading="Check Out"
          margin="mt-0"
        />
        <div className="overflow-x-auto mt-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Package Name</th>
                <th>Tourist Name</th>
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
                  <td>{book.name}</td>
                  <td>{book.date}</td>
                  <td>{book.price}</td>
                  <td>{book.status}</td>
                  <td className="flex gap-3">
                    <button
                      className={`btn btn-accent btn-xs`}
                      onClick={() => handelAccept(book)}
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handelReject(book)}
                      className="btn btn-warning btn-xs"
                    >
                      Reject
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

export default AssignedTours;
