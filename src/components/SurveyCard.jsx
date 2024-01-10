import PropTypes from "prop-types";

const SurveyCard = ({ state, survey, onChange, onNext }) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-bold mb-4 text-gray-400">Q{survey?.id}</h2>
        <h2 className="text-xl font-bold mb-4">{survey?.question}</h2>
        <div className="flex flex-col space-y-2">
          {survey?.options?.map((option) => (
            <label className="flex items-center cursor-pointer" key={option.id}>
              <input
                type="radio"
                name={`option-${option?.id}`}
                className="mr-2"
                value={option?.text}
                checked={state?.chosenAnswer === option?.text}
                onChange={onChange}
              />
              {option.text}
            </label>
          ))}
        </div>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto block disabled:opacity-50 w-full md:w-1/2"
        onClick={onNext}
        disabled={!state.chosenAnswer}
      >
        {state.step === 10 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

SurveyCard.propTypes = {
  state: PropTypes.object.isRequired,
  survey: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default SurveyCard;
