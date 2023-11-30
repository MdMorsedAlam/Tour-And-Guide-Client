import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const GuideProfile = () => {
  const axiosPublic = UseAxiosPublic();
  const { id } = useParams();
  const [guide, setGuide] = useState();
  console.log(guide);

  useEffect(() => {
    axiosPublic
      .get(`/guides/${id}`)
      .then((res) => {
        setGuide(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id, axiosPublic]);
  return (
    <div className="m-10">
      <div className="bg-gray-300 shadow-lg p-10 text-center">
        <SectionTitle
          heading={`Profile Of ${guide?.name}`}
          subHeading="Know About Them"
          margin="my-5"
        />
        <h1 className="text-2xl font-bold">
          {" "}
          Name : <span className="font-semibold text-xl">{guide?.name}</span>
        </h1>
        <h1 className="text-2xl font-bold">
          {" "}
          Email : <span className="font-semibold text-xl">{guide?.email}</span>
        </h1>
        <p className="text-2xl font-bold">
          Phone :{" "}
          <span className="font-semibold text-xl">+88 {guide?.phone}</span>
        </p>
        <p className="text-2xl font-bold">
          Education :{" "}
          <span className="font-semibold text-xl">{guide?.education}</span>
        </p>
        <p className="text-2xl font-bold">
          Experience :{" "}
          <span className="font-semibold text-xl">{guide?.experience}</span>
        </p>
        <p className="text-2xl font-bold">
          Skils : <span className="font-semibold text-xl">{guide?.skils}</span>
        </p>
      </div>
    </div>
  );
};

export default GuideProfile;
