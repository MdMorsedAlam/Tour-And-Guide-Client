import { BsEnvelope } from "react-icons/bs";
import UseAuth from "../Hooks/UseAuth";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import { imageUpload } from "../utils/imageUpload";
import UseAxiosPublic from "./../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import axiosSecure from "../Hooks/UseAxiosSecure";
import EditProfile from "../GuideDashboard/EditProfile";

const MyProfile = () => {
  const { user } = UseAuth();
  const [userRole, setUserRole] = useState();

  useEffect(() => {
    axiosSecure
      .get(`/users/${user?.email}`)
      .then((res) => {
        setUserRole(res.data.role);
      })
      .catch();
  }, [user?.email]);

  const handelAddStory = async (e) => {
    const axiosPublic = UseAxiosPublic();
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const location = form.location.value;
    const date = form.date.value;
    const story = form.story.value;
    const image = form.image.files[0];
    const email = user.email;
    try {
      const imageData = await imageUpload(image);
      const addStory = {
        title,
        location,
        date,
        story,
        photo: imageData?.data?.display_url,
        email,
      };

      const res = await axiosPublic.post("/storis", addStory);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You Have Added A New Story",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err);
    }
    form.reset();
  };
  return (
    <div>
      <div className="flex flex-col justify-center p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
        <img
          src={user?.photoURL}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y dark:divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {user?.displayName}
            </h2>
            <p className="px-5 text-xs sm:text-base flex justify-center gap-2 items-center text-gray-400">
              <BsEnvelope className="text-2xl" />
              {user?.email}
            </p>
          </div>
          <button className="btn btn-accent btn-outline">Edit Profile</button>
        </div>
      </div>
      {userRole === "tourist" ? (
        <div className="card shrink-0 w-full mt-20 shadow-2xl bg-base-100">
          <form onSubmit={handelAddStory} className="card-body">
            <SectionTitle
              heading="Add A New Story"
              subHeading="share with us your best tour story"
              margin="mt-3"
            />
            <div className="flex md:flex-row gap-3 flex-col">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text font-bold">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Type Your Story Title"
                  className="input input-accent input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text font-bold">Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Type Your Toure Location"
                  className="input input-accent input-bordered"
                  required
                />
              </div>
            </div>
            <div className="flex md:flex-row gap-3 flex-col">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text font-bold">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-accent input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text font-bold">Photo URL</span>
                </label>
                <input
                  type="file"
                  name="image"
                  className="file-input file-input-bordered file-input-accent w-full"
                  accept="image/*"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Story</span>
              </label>
              <textarea
                className="textarea textarea-accent"
                name="story"
                placeholder="Write Your Story"
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button type="sumbit" className="btn btn-accent btn-outline">
                Add Story
              </button>
            </div>
          </form>
        </div>
      ) : userRole === "tourguide" ? (
        <EditProfile />
      ) : (
        ""
      )}
    </div>
  );
};

export default MyProfile;
