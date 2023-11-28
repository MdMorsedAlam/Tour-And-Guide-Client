import PropTypes from "prop-types";
const SectionTitle = ({ heading, subHeading, margin }) => {
  return (
    <div className={`text-center space-y-2 ${margin ? margin : "mt-20"}`}>
      <h1 className="text-[#1bdbf0] font-bold text-5xl">{heading}</h1>
      <p className="text-[#818080]">--- {subHeading} ---</p>
    </div>
  );
};
SectionTitle.propTypes = {
  heading: PropTypes.node,
  subHeading: PropTypes.node,
  margin: PropTypes.node,
};
export default SectionTitle;
