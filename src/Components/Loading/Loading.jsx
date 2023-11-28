import Lottie from "lottie-react";
import loading from "../../assets/loading.json";

const Loading = () => {
  return (
    <div className="flex justify-center h-full">
      <Lottie className="w-96 h-96" animationData={loading} />
    </div>
  );
};

export default Loading;
