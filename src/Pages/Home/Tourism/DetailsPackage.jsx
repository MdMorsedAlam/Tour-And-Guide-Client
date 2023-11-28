import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import { useState } from "react";
import Loading from "../../../Components/Loading/Loading";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const DetailsPackage = () => {
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
      .catch((err) => {
        console.log(err.message);
      });
  }, [axiosPublic]);
  const dayData = packageData?.days?.filter((day) => day.title !== "");
  if (loading) {
    return <Loading />;
  }
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
          <p>{packageData.about}</p>
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
                <th>
                  No
                </th>
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
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{guide.name}</p>
                   
                  </td>
                  <td><Link to='/guideprifile'>View Details</Link></td>
                  
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
          margin="my-8"
        />
        
      </div>
    </div>
  );
};

export default DetailsPackage;
