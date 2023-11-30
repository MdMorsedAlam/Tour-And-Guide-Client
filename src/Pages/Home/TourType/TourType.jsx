import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";
// import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import { Helmet } from "react-helmet-async";

const TourType = () => {
  const [typeData, setTypeData] = useState();
  const axiosPublic = UseAxiosPublic();
  // console.log(typeData);
  // Educational,Historical,Religious,Cultural,Photography
  useEffect(() => {
    axiosPublic
      .get("/packagetypes")
      .then((res) => {
        setTypeData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [axiosPublic]);
  return (
    <div>
      <Helmet>
        <title>Home | Tourist Guide</title>
      </Helmet>
      <SectionTitle
        heading="Tour Types"
        margin="mt-10"
        subHeading="Choosing Your Tour Type"
      />
      <div className="bg-slate-200 shadow-lg py-20">
        <Marquee>
          <div className="flex justify-center gap-20 items-center">
            {typeData?.map((item, id) => (
              <Link
                key={id}
                to={`/package-type/${item.name}`}
                className="flex cursor-pointer justify-center items-center w-40 h-40 bg-cyan-300 rounded-full p-10"
              >
                <p className="text-xl font-bold text-red">{item.name}</p>
              </Link>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TourType;
