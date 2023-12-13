import Swal from "sweetalert2";
import Loading from "../Components/Loading/Loading";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import UseUsers from "../Hooks/UseUsers";
import { Helmet } from "react-helmet-async";

const ManageUser = () => {
  const [users, loading, refetch] = UseUsers();
  const axiosPublic = UseAxiosPublic();
  const makeTourGuide = async (user) => {
    const res = await axiosPublic.patch(`/user/${user._id}`, {
      role: "tourguide",
    });
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Congress Now This User Is A Tourist Guide",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    refetch();
  };
  const makeAdmin = async (user) => {
    const res = await axiosPublic.patch(`/user/${user._id}`, { role: "admin" });
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Congress Now This User Is A Admin",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    refetch();
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Helmet>
        <title>Manage User | Tourist Guide</title>
      </Helmet>
      <SectionTitle
        heading="Manage Users"
        subHeading="do carefully"
        margin="mt-0"
      />
      <div className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user.photo} alt={user.photo} />
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <th>
                  <button
                    onClick={() => makeTourGuide(user)}
                    disabled={user.role === "tourguide" ? true : false}
                    className="btn btn-accent btn-xs mr-2"
                  >
                    Guide
                  </button>
                  <button
                    onClick={() => makeAdmin(user)}
                    disabled={user.role === "admin" ? true : false}
                    className="btn btn-info btn-xs"
                  >
                    Admin
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
