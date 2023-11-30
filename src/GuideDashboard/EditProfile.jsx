import Swal from "sweetalert2";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import UseAuth from "../Hooks/UseAuth";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

const EditProfile = () => {
  const { user } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const handelAddGuide = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user.displayName;
    const email = user.email;
    const photo = user?.photoURL;
    const phone = form.phone.value;
    const education = form.education.value;
    const skils = form.skils.value;
    const experience = form.experience.value;
    const guideData = {
      name,
      email,
      photo,
      phone,
      education,
      skils,
      experience,
    };
    axiosPublic
      .post("/guides", guideData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You Have Updated Your Profile",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch(()=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Already You Have Updated Your Profile",
        });
      });
  };
  return (
    <div>
      <div className="card shrink-0 w-full shadow-2xl bg-base-100">
        <form onSubmit={handelAddGuide} className="card-body">
          <SectionTitle
            heading="Add A Guide Profile"
            subHeading="Update Your Profile For A Guide"
            margin="mt-8"
          />
          <div className="flex md:flex-row gap-3 flex-col">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={user?.displayName}
                className="input input-accent input-bordered"
                disabled
              />
            </div>
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
          </div>
          <div className="flex md:flex-row gap-3 flex-col">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Phone</span>
              </label>
              <input
                type="number"
                name="phone"
                className="input input-accent input-bordered"
                placeholder="Type Your Phone Number"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-accent input-bordered"
                value={user?.email}
                disabled
              />
            </div>
          </div>
          <div className="flex md:flex-row gap-3 flex-col">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Education</span>
              </label>
              <input
                type="text"
                name="education"
                className="input input-accent input-bordered"
                placeholder="Type Your Education"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Skils</span>
              </label>
              <input
                type="text"
                name="skils"
                className="input input-accent input-bordered"
                placeholder="Type Your Skils ,,"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Experience</span>
            </label>
            <input
              type="text"
              name="experience"
              className="input input-accent input-bordered"
              placeholder="Type Your Experience"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="sumbit"
              className="btn font-semibold text-xl btn-accent btn-outline"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
