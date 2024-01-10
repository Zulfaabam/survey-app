import { useNavigate } from "react-router-dom";
import { useSurveyContext } from "../context/SurveyContext";
import PropTypes from "prop-types";

function FinishLayout({ restart }) {
  const { setState } = useSurveyContext();

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <p className="capitalize text-4xl text-center text-white font-semibold">
        Thank you for completing the survey
      </p>
      <div className="flex gap-4">
        <button
          className="bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-medium text-sm sm:text-base"
          onClick={() => {
            localStorage.clear();
            navigate("/", { replace: true });
          }}
        >
          🔙 Home
        </button>
        <button
          className="bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-medium text-sm sm:text-base"
          onClick={() => {
            localStorage.clear();

            restart();

            setState((prevState) => ({
              ...prevState,
              step: 1,
              chosenAnswer: null,
              answers: [],
            }));
          }}
        >
          🔃 Restart
        </button>
      </div>
    </div>
  );
}

FinishLayout.propTypes = {
  restart: PropTypes.func.isRequired,
};

export default FinishLayout;
