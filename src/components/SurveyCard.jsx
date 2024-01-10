const SurveyCard = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Survey Question</h2>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center">
            <input type="radio" name="option" className="mr-2" />
            Option 1
          </label>
          <label className="flex items-center">
            <input type="radio" name="option" className="mr-2" />
            Option 2
          </label>
          <label className="flex items-center">
            <input type="radio" name="option" className="mr-2" />
            Option 3
          </label>
        </div>
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Next
      </button>
    </div>
  );
};

export default SurveyCard;
