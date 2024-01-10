import SurveyCard from "../components/SurveyCard";
import { useSurveyContext } from "../context/SurveyContext";
import FinishLayout from "./FinishLayout";
import { SURVEY_DATA } from "../utils/data";
import Timer from "../components/Timer";
import { useTimer } from "react-timer-hook";

function SurveyLayout() {
  const { state, setState, onNextStep, handleChooseAnswer } =
    useSurveyContext();

  const time = new Date();

  //10 minutes timer
  time.setSeconds(time.getSeconds() + 600);

  const { seconds, minutes, restart, pause } = useTimer({
    expiryTimestamp: time,
    onExpire: () =>
      setState((prevState) => ({
        ...prevState,
        step: 11,
      })),
  });

  const currentSurvey = SURVEY_DATA[state.step - 1];

  return (
    <>
      <div className="flex justify-center items-center w-full gap-1">
        {Array.from({ length: 10 }, (_, index) => (
          <div
            key={index}
            className={`w-12 h-1 rounded-full ${
              index + 1 < state.step
                ? "bg-blue-500"
                : index + 1 === state.step
                ? "bg-blue-300"
                : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
      <div>
        <Timer seconds={seconds} minutes={minutes} />
      </div>
      {state.step <= 10 ? (
        <SurveyCard
          state={state}
          survey={currentSurvey}
          onChange={(e) => handleChooseAnswer(e)}
          onNext={() => {
            onNextStep(state.chosenAnswer);
            if (state.step === 10) {
              pause();
            }
          }}
        />
      ) : (
        <FinishLayout restart={() => restart(time)} />
      )}
    </>
  );
}

export default SurveyLayout;
