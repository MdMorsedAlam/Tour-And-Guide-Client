import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import { useState } from "react";
import Loading from "../../../Components/Loading/Loading";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseAuth from "./../../../Hooks/UseAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const DetailsPackage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [packageData, setpackageData] = useState();
  const [tourGuides, setTourGuides] = useState();
  useEffect(() => {
    setLoading(true);
    axiosPublic
      .get(`/packages/${id}`)
      .then((res) => {
        setpackageData(res.data);
        setLoading(false);
      })
      .catch();
  }, [id, axiosPublic]);
  useEffect(() => {
    axiosPublic
      .get("/tourguides")
      .then((res) => {
        setTourGuides(res.data);
      })
      .catch();
  }, [axiosPublic]);
  const dayData = packageData?.days?.filter((day) => day.title !== "");
  if (loading) {
    return <Loading />;
  }

  const handelBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user.displayName;
    const email = user.email;
    const photo = user.photoURL;
    const price = packageData.price;
    const pname = packageData.name;
    const date = form.date.value;
    const guide = form.guide.value;
    const status = "In Review";
    const gname = guide.split(",")[1];
    const gemail = guide.split(",")[0];
    Swal.fire({
      title: "Are you sure?",
      text: "You Want To Book This Package!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Book it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const addBookData = {
          name,
          email,
          photo,
          price,
          pname,
          date,
          gemail,
          gname,
          status,
        };
        axiosPublic
          .post("/bookings", addBookData)
          .then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Successfully You Have Booked ${packageData.name}`,
                showConfirmButton: false,
                timer: 1500,
              });
              form.reset();
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    });
  };
  return (
    <div className="my-10 mx-20">
      <SectionTitle
        heading="Beautiful Places on This Trip"
        subHeading="Nice And Beautifull"
        margin="mt-0"
      />
      <div className="grid gap-10 mt-10 grid-cols-4">
        <div className="col-span-1 h-60 p-3 bg-slate-200 shadow-md rounded-lg">
          <img
            className="w-full h-full object-cover"
            src={packageData.images[0]}
            alt=""
          />
        </div>
        <div className="col-span-2 h-60 p-3 bg-slate-200 shadow-md rounded-lg">
          <img
            className="w-full h-full object-cover"
            src={packageData.images[1]}
            alt=""
          />
        </div>

        <div className="col-span-1 row-span-2 h-60 p-3 bg-slate-200 shadow-md rounded-lg">
          <img
            className="w-full h-full object-cover"
            src={packageData.images[2]}
            alt=""
          />
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2 h-60 p-3 bg-slate-200 shadow-md rounded-lg">
          <img
            className="w-full h-full object-cover"
            src={packageData.images[2]}
            alt=""
          />
        </div>
      </div>
      <div>
        <SectionTitle
          heading="About The Trip"
          subHeading="Read To Know"
          margin="my-8"
        />
        <div>
          <p className="px-20 text-[#2d2c2c]">{packageData.des}</p>
        </div>
      </div>
      <div>
        <SectionTitle
          heading="Trip Plans"
          subHeading="Read To Know"
          margin="my-8"
        />
        {dayData?.map((day, id) => (
          <div className="collapse mb-5 collapse-plus bg-base-200" key={id}>
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl flex items-center gap-3 font-medium">
              <p className="bg-green-500 p-2 rounded-xl text-white font-semibold">
                Day {id + 1} Plan
              </p>
              <p>{day.title}</p>
            </div>
            <div className="collapse-content">
              <p>{day.des}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <SectionTitle
          heading="Available Tour Guides"
          subHeading="Know About Them"
          margin="my-8"
        />
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {tourGuides?.map((guide, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={guide.photo} alt={guide.photo} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{guide.name}</p>
                  </td>
                  <td>
                    <Link
                      className="btn btn-accent"
                      to={`/guideprofile/${guide._id}`}
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <SectionTitle
          heading="Book The Package"
          subHeading="Happy Trip"
          margin="mt-8"
        />
        <form onSubmit={handelBooking} className="card-body">
          <div className="flex md:flex-row gap-3 flex-col">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Package Name</span>
              </label>
              <input
                type="text"
                name="pname"
                value={packageData?.name}
                className="input input-accent input-bordered"
                disabled
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={user?.displayName}
                className="input input-accent input-bordered"
                disabled
              />
            </div>
          </div>
          <div className="flex md:flex-row gap-3 flex-col">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={user?.email}
                className="input input-accent input-bordered"
                disabled
              />
            </div>

            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Price</span>
              </label>
              <input
                type="number"
                name="price"
                value={packageData?.price}
                className="input input-accent input-bordered"
                disabled
              />
            </div>
          </div>
          <div className="flex md:flex-row gap-3 flex-col">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Photo URL</span>
              </label>
              <div className="flex gap-3">
                <input
                  type="file"
                  name="image"
                  className="file-input file-input-bordered file-input-accent w-full"
                  accept="image/*"
                  disabled
                />
                <img className="w-28 h-24" src={user?.photoURL} alt="" />
              </div>
            </div>

            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Date</span>
              </label>
              <DatePicker
                selected={startDate}
                className="input input-accent w-full input-bordered"
                onChange={(date) => setStartDate(date)}
                required
                name="date"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Choose Guide</span>
            </label>
            <select
              className="select select-accent w-full"
              name="guide"
              required
            >
              {tourGuides?.map((guide) => (
                <option key={guide._id} value={`${guide.email},${guide.name}`}>
                  {guide.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control mt-6">
            <button
              type="sumbit"
              className="btn text-xl font-semibold btn-accent btn-outline"
            >
              Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsPackage;
