import PropTypes from 'prop-types';
const SectionTitle = ({heading,subHeading}) => {
 return (
  <div className='text-center space-y-2 mt-20'>
   <h1 className='text-[#1bdbf0] font-bold text-5xl'>{heading}</h1>
   <p className='text-[#818080]'>--- {subHeading} ---</p>
  </div>
 );
};
SectionTitle.propTypes={
 heading:PropTypes.node,
 subHeading:PropTypes.node,
}
export default SectionTitle;