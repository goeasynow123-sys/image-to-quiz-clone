import { useState, useCallback, lazy, Suspense, useMemo } from "react";
import QuizHeader from "./quiz/QuizHeader";

const Step1Landing = lazy(() => import("./quiz/Step1Landing"));
const Step1Challenge = lazy(() => import("./quiz/Step1Challenge"));
const Step2Frequency = lazy(() => import("./quiz/Step2Frequency"));
const Step3Instinct = lazy(() => import("./quiz/Step3Instinct"));
const Step1Age = lazy(() => import("./quiz/Step1Age"));
const Step3Breed = lazy(() => import("./quiz/Step3Breed"));
const Step6ObedienceSlider = lazy(() => import("./quiz/Step6ObedienceSlider"));
const Step34Loading = lazy(() => import("./quiz/Step34Loading"));
const Step7Revelation = lazy(() => import("./quiz/Step7Revelation"));
const Step8SocialProof = lazy(() => import("./quiz/Step8SocialProof"));
const Step9EmailCapture = lazy(() => import("./quiz/Step9EmailCapture"));
const Step37Checkout = lazy(() => import("./quiz/Step37Checkout"));

const TOTAL_STEPS = 11;

interface QuizState {
  step: number;
  challenges: string[];
  frequency: string;
  instinct: string;
  age: string;
  breed: string;
  dogName: string;
  obedienceLevel: number;
  email: string;
}

const defaultState: QuizState = {
  step: 0,
  challenges: [],
  frequency: "",
  instinct: "",
  age: "",
  breed: "",
  dogName: "",
  obedienceLevel: 3,
  email: "",
};

const StepFallback = () => (
  <div className="flex-1 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

const QuizFlow = () => {
  const [state, setState] = useState<QuizState>(defaultState);
  const { step } = state;

  const update = useCallback(<K extends keyof QuizState>(key: K, value: QuizState[K]) => {
    setState(prev => ({ ...prev, [key]: value }));
  }, []);

  const next = useCallback(() => {
    setState(prev => ({ ...prev, step: prev.step + 1 }));
  }, []);

  const back = useCallback(() => {
    setState(prev => ({ ...prev, step: Math.max(0, prev.step - 1) }));
  }, []);

  const autoNext = useCallback((delay = 250) => {
    setTimeout(next, delay);
  }, [next]);

  const progress = step / TOTAL_STEPS;

  const stepContent = useMemo(() => {
    switch (step) {
      case 0:
        return <Step1Landing onNext={next} />;
      case 1:
        return <Step1Challenge onSelect={(v) => { update("challenges", v); next(); }} />;
      case 2:
        return <Step2Frequency onSelect={(v) => { update("frequency", v); autoNext(); }} />;
      case 3:
        return <Step3Instinct onSelect={(v) => { update("instinct", v); autoNext(); }} />;
      case 4:
        return <Step1Age selected={state.age} onSelect={(v) => { update("age", v); autoNext(); }} />;
      case 5:
        return <Step3Breed onNext={(b) => { update("breed", b); next(); }} onDogName={(n) => update("dogName", n)} />;
      case 6:
        return <Step6ObedienceSlider onSelect={(v) => { update("obedienceLevel", v); next(); }} />;
      case 7:
        return <Step34Loading dogName={state.dogName || "seu cão"} onNext={next} />;
      case 8:
        return (
          <Step7Revelation
            dogName={state.dogName || "seu cão"}
            breed={state.breed}
            challenges={state.challenges}
            obedienceLevel={state.obedienceLevel}
            onNext={next}
          />
        );
      case 9:
        return <Step8SocialProof onNext={next} />;
      case 10:
        return <Step9EmailCapture dogName={state.dogName || "seu cão"} onNext={(e) => { update("email", e); next(); }} />;
      case 11:
        return (
          <Step37Checkout
            dogName={state.dogName || "seu cão"}
            breed={state.breed}
            age={state.age}
            challenges={state.challenges}
            obedienceLevel={state.obedienceLevel}
          />
        );
      default:
        return null;
    }
  }, [step, state.age, state.dogName, state.breed, state.challenges, state.obedienceLevel, update, next, autoNext]);

  return (
    <div className="h-[100dvh] w-full bg-background max-w-[500px] mx-auto flex flex-col overflow-hidden fixed inset-0 shadow-2xl sm:border-x sm:border-border box-border">
      {step < 11 && step !== 7 && (
        <div className="px-4 pt-3 pb-1 flex-shrink-0">
          <QuizHeader
            showBack={step > 0}
            onBack={back}
            progress={progress}
          />
        </div>
      )}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Suspense fallback={<StepFallback />}>
          {stepContent}
        </Suspense>
      </div>
    </div>
  );
};

export default QuizFlow;
