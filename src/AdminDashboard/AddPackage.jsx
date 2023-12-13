import { useState } from "react";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import { imageUpload } from "../utils/imageUpload";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddPackage = () => {
  const [days, setDays] = useState([]);
  const axiosPublic = UseAxiosPublic();

  const handelChange = (e) => {
    const numberOfDays = [...Array(parseInt(e.target.value)).keys()];
    setDays(numberOfDays);
  };
  const handelAddPackage = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const images = form.image.files;
    const type = form.triptype.value;
    const price = form.price.value;
    const name = form.name.value;
    const des = form.des.value;
    const day1title = form.title1.value;
    const day2title = form?.title2?.value || "";
    const day3title = form?.title3?.value || "";
    const day4title = form?.title4?.value || "";
    const day5title = form?.title5?.value || "";
    const day1des = form.des1.value;
    const day2des = form?.des2?.value || "";
    const day3des = form?.des3?.value || "";
    const day4des = form?.des4?.value || "";
    const day5des = form?.des5?.value || "";
    if (images.length > 4) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You Can't Select Up to 4 Images",
      });
    }

    try {
      const upImages = [...images];
      let imageUrl = [];
      for (let i = 0; i < upImages.length; i++) {
        const upData = await imageUpload(upImages[i]);
        imageUrl.push(upData.data.display_url);
      }
      const addPackageData = {
        name,
        title,
        des,
        days: [
          { title: day1title, des: day1des },
          { title: day2title, des: day2des },
          { title: day3title, des: day3des },
          { title: day4title, des: day4des },
          { title: day5title, des: day5des },
        ],

        images: imageUrl,
        type,
        price,
      };

      const res = await axiosPublic.post("/packages", addPackageData);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You Have Added A New Package",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `Something Went Wrong ${err.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    form.reset();
  };
  return (
    <div>
      <Helmet>
        <title>Add Package | Tourist Guide</title>
      </Helmet>
      <div className="card shrink-0 w-full mt-20 shadow-2xl bg-base-100">
        <form onSubmit={handelAddPackage} className="card-body">
          <SectionTitle
            heading="Add A New Package"
            subHeading="check again and again"
            margin="mt-3"
          />
          <div className="flex md:flex-row gap-3 flex-col">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Package Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type Your Package Name"
                className="input input-accent input-bordered"
                required
              />
            </div>

            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Type Your Package Title"
                className="input input-accent input-bordered"
                required
              />
            </div>
          </div>

          <div className="flex md:flex-row gap-3 flex-col">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Type Your Package Price"
                className="input input-accent input-bordered"
                required
              />
            </div>

            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Plan Days</span>
              </label>
              <select
                className="select select-accent w-full"
                onChange={handelChange}
                required
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {days?.map((day, i) => (
              <>
                <div key={i} className="form-control col-span-1">
                  <label className="label">
                    <span className="label-text font-bold">
                      Day {i + 1} Plan Title
                    </span>
                  </label>
                  <input
                    type="text"
                    name={`title${i + 1}`}
                    placeholder="Type Your Pckage Title"
                    className="input input-accent input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      Description About Day {i + 1}
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-accent"
                    name={`des${i + 1}`}
                    placeholder="Write Your Description"
                    required
                  ></textarea>
                </div>
              </>
            ))}
          </div>
          <div className="flex md:flex-row gap-3 flex-col">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Package Type</span>
              </label>
              <select
                className="select select-accent w-full"
                required
                name="triptype"
              >
                <option>Educational Tours</option>
                <option>Historical Tours</option>
                <option>Religious Tours</option>
                <option>Cultural Tours</option>
                <option>Photography Tours</option>
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Select Four Photos</span>
              </label>
              <input
                type="file"
                name="image"
                multiple
                required
                className="file-input file-input-bordered file-input-accent w-full"
                accept="image/*"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Package Description</span>
            </label>
            <textarea
              className="textarea textarea-accent"
              name="des"
              placeholder="Write Package Description"
              required
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button
              type="sumbit"
              className="btn text-xl font-semibold btn-accent btn-outline"
            >
              Add Package
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;
