import { Link } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseStory from "../../../Hooks/UseStory";
import { motion } from "framer-motion";

const TouristStory = () => {
  const [storis, loading] = UseStory();

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <SectionTitle
        heading="Tourist Stories"
        subHeading="Read Some Interesting Sotrys"
        margin="mt-10"
      />
      <div className="my-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {storis.slice(0, 4).map((story) => (
            <Link to={`/story/${story._id}`} key={story._id}>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="card bg-base-100 shadow-xl"
              >
                <figure className="px-10 pt-10">
                  <img
                    src={story.photo}
                    alt={story.photo}
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{story.title}</h2>
                  <p>{story.location}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <Link
            to="/allstories"
            className="btn btn-accent btn-outline font-bold"
          >
            All Stories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TouristStory;
