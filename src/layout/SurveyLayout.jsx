import SurveyCard from "../components/SurveyCard";

function SurveyLayout() {
  return (
    <>
      <div className="flex justify-center items-center w-full gap-1">
        {Array.from({ length: 10 }, (_, index) => (
          <div
            key={index}
            className={`w-12 h-1 rounded-full ${
              index === 0 ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
      <SurveyCard />
    </>
  );
}

export default SurveyLayout;
