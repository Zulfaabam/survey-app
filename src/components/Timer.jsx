import PropTypes from "prop-types";

function Timer({ minutes, seconds }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "20px" }}>
        <span>{minutes} minutes</span> <span>{seconds} seconds</span>
      </div>
    </div>
  );
}

Timer.propTypes = {
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

export default Timer;
