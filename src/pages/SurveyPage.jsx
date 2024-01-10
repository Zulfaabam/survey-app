import { SurveyProvider } from "../context/SurveyContext";
import MainLayout from "../layout/MainLayout";
import Survey from "../layout/SurveyLayout";

function SurveyPage() {
  return (
    <SurveyProvider>
      <MainLayout className="flex flex-col gap-8 pt-4">
        <Survey />
      </MainLayout>
    </SurveyProvider>
  );
}

export default SurveyPage;
