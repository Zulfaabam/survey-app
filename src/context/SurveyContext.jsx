/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const initialState = {
  survey: {
    questions: [],
    answers: [],
  },
  step: 1,
};

export const SurveyContext = createContext(initialState);

const useSurveyContext = () => {
  const context = useContext(SurveyContext);

  return context;
};

const SurveyProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const nextStep = () => {
    setState((prevState) => ({
      ...prevState,
      step: prevState.step + 1,
    }));
  };

  return (
    <SurveyContext.Provider value={{ state, setState, nextStep }}>
      {children}
    </SurveyContext.Provider>
  );
};

export { SurveyProvider, useSurveyContext };
