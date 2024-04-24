import "./ProgressCircle.css";
const ProgressCircle: React.FC = () => {
  return (
    <div className="circular-div">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 250 250"
        className="circular-progress"
      >
        <circle className="bg"></circle>
        <circle className="fg"></circle>
      </svg>
      <span className="circular-progress__label">100%</span>
    </div>
  );
};
export default ProgressCircle;
