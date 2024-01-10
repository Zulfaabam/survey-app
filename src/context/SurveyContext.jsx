/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const initialState = {
  answers: JSON.parse(localStorage.getItem("survey_answers")) ?? [],
  step: JSON.parse(localStorage.getItem("survey_step")) ?? 1,
  chosenAnswer: null,
};

export const SurveyContext = createContext(initialState);

const useSurveyContext = () => {
  const context = useContext(SurveyContext);

  return context;
};

const SurveyProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const handleChooseAnswer = (e) => {
    const answer = e.target.value;

    setState((prevState) => {
      return {
        ...prevState,
        chosenAnswer: answer,
      };
    });
  };

  const onNextStep = (answer) => {
    if (!answer) return;

    setState((prevState) => {
      const nextStep = prevState.step + 1;

      const answers = [...prevState.answers, answer];

      localStorage.setItem("survey_step", JSON.stringify(nextStep));

      localStorage.setItem("survey_answers", JSON.stringify(answers));

      return {
        ...prevState,
        answers,
        step: nextStep,
        chosenAnswer: null,
      };
    });
  };

  return (
    <SurveyContext.Provider
      value={{ state, setState, onNextStep, handleChooseAnswer }}
    >
      {children}
    </SurveyContext.Provider>
  );
};

export { SurveyProvider, useSurveyContext };
