import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import Loading from "../../Components/Loading/Loading";
import { FacebookIcon, FacebookShareButton } from "react-share";
import { Helmet } from "react-helmet-async";

const DetailsStory = () => {
  const axiosPublic = UseAxiosPublic();
  const { id } = useParams();
  const [story, setStory] = useState();
  const [loading, setLoading] = useState(true);
  console.log(story);

  useEffect(() => {
    setLoading(true);
    axiosPublic
      .get(`/storis/${id}`)
      .then((res) => {
        setStory(res.data);
        setLoading(false);
      })
      .catch();
  }, [axiosPublic, id]);
  if (loading) {
    return <Loading />;
  }
  const shareUrl = `https://toure-guide-123f2.web.app/story/${story._id}`;
  // const shareUrl = "https://my-eleven-assignment.web.app/";
  return (
    <div>
      <Helmet>
        <title>Story | Tourist Guide</title>
      </Helmet>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={story.photo}
            alt={story.photo}
            className="rounded-xl w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{story.title}</h2>
          <p>{story.location}</p>
          <p>{story.story}</p>
        </div>
        <div className="flex gap-5 justify-center mb-8">
          <h3 className="text-xl font-semibold text-cyan-400">
            Share To Facebook :{" "}
          </h3>
          <div className="Demo__some-network">
            <FacebookShareButton
              url={shareUrl}
              className="Demo__some-network__share-button"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsStory;
