import { useState } from "react";
import Questionnaire from "./components/Questionnaire";
import Rating from "./components/Rating";
import SubmissionFeedBack from "./components/SubmissionFeedback";
import FloatingMenu from "./components/FloatingMenu";
import { STEPS } from "./assets/constants";

export type StepType = "menu" | "feedback" | "rating" | "questionnaire";

export type UiProps = {
  isShowing: boolean;
  onChangeStep: (args: ChangeStepArgs) => void;
  currentStep: StepType;
};

type ChangeStepArgs = {
  stepTo: StepType;
  stepFrom: StepType;
  delay?: number;
};

function App() {
  const [step, setStep] = useState<StepType>("menu");
  const [isShowingMenu, setIsShowingMenu] = useState<boolean>(true);
  // UI step: showing menu (0) => rating (1) => feedback => questionnaire (2) => feedback =>  menu (0)

  const handleChangeStep = ({ stepTo, stepFrom, delay }: ChangeStepArgs) => {
    console.log({ stepFrom, stepTo, delay });

    if (!delay) delay = 500;
    setTimeout(() => {
      setStep(stepTo);
    }, delay);

    if (stepTo === "feedback") {
      setStep(stepTo);
      const stepIdx = STEPS.indexOf(stepFrom);
      const nextStep = STEPS[stepIdx + 1] ?? "menu";

      setTimeout(() => {
        setStep(nextStep);
      }, delay);
    }
    setIsShowingMenu(false);
  };

  return (
    <div className="">
      <FloatingMenu
        isShowing={step === "menu"}
        onChangeStep={handleChangeStep}
        currentStep={step}
      />
      <Rating
        max={6}
        isShowing={step === "rating"}
        onChangeStep={handleChangeStep}
        currentStep={step}
      />
      <Questionnaire
        isShowing={step === "questionnaire"}
        onChangeStep={handleChangeStep}
        currentStep={step}
      />
      <SubmissionFeedBack
        isShowing={step === "feedback"}
        onChangeStep={handleChangeStep}
        currentStep={step}
      />
    </div>
  );
}

export default App;
