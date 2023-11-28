import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import UseStory from "../../Hooks/UseStory";

const AllStories = () => {
  const [storis, loading] = UseStory();
console.log(storis);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {storis.map((story) => (
        <Link to={`/story/${story._id}`} key={story._id}>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={story.photo} alt={story.photo} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{story.title}</h2>
            <p>{story.location}</p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default AllStories;
