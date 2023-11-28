import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Packages from "./Packages";

const Tourism = () => {
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
           <Packages/>
          </TabPanel>
          <TabPanel>
          <div className="overflow-x-auto mx-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Job</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>View Details</td>
      </tr>
      {/* row 2 */}
      <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Tourism;
