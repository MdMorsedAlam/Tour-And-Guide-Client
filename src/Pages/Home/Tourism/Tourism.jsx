import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Packages from "./Packages";
import { useEffect, useState } from "react";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import { Link } from "react-router-dom";

const Tourism = () => {
  const axiosPublic = UseAxiosPublic();
  const [tourGuides, setTourGuides] = useState();
  useEffect(() => {
    axiosPublic
      .get("/tourguides")
      .then((res) => {
        setTourGuides(res.data);
      })
      .catch();
  }, [axiosPublic]);
  return (
    <div>
      <SectionTitle
        heading="Tourism and Travel Guide"
        subHeading="Read And Know Something"
      />
      <div>
        <Tabs>
          <div className="flex text-sm md:text-xl mt-5 justify-center mb-8">
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Packages</Tab>
              <Tab>Meet Our Tour Guides</Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="grid px-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
              <div className="w-full h-[300px] p-6 bg-[#ddd] rounded-lg shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/JLjvEYMBGzQ?si=O1V8HQsLvDOwas0f"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="w-full h-[300px] p-6 bg-[#ddd] rounded-lg shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/fN21oOdni_c?si=mVfJ_xr95rbRlEjB"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="w-full h-[300px] p-6 bg-[#ddd] rounded-lg shadow-lg">
                <iframe
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/puDBmnIXe_k?si=MkjOQ2f_UWF_CWTF"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="w-full h-[300px] p-6 bg-[#ddd] rounded-lg shadow-lg">
                <iframe
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/WoM3wuI4sJQ?si=2EOrXKKMnoLCIK5f"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="w-full h-[300px] p-6 bg-[#ddd] rounded-lg shadow-lg">
                <iframe
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/xcuwMwdrmo8?si=EigtKDPjhzJUbkR8"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="w-full h-[300px] p-6 bg-[#ddd] rounded-lg shadow-lg">
                <iframe
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/uhKBGLHShu8?si=TtAEsn5mc92uJ5zn"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <Packages />
          </TabPanel>
          <TabPanel>
            <div className="mx-10">
              <SectionTitle
                heading="Meet Our Tour Guides"
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
                          <Link className="btn btn-accent" to={`/guideprofile/${guide._id}`}>
                            View Details
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Tourism;
