import "./ProgressCircle.css";
interface ProgressCircleProps {
  progress: number;
}
const ProgressCircle: React.FC<ProgressCircleProps> = (
  props: ProgressCircleProps
) => {
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
      <span className="circular-progress__label"> {props.progress}%</span>
    </div>
  );
};
export default ProgressCircle;
