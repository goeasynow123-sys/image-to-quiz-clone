import dogTraining from "@/assets/dog-training.jpg";
import QuizCTAButton from "./QuizCTAButton";

interface Step7Props {
  onNext: () => void;
  goalId?: string;
}

const Step7Training = ({ onNext, goalId }: Step7Props) => {
  let displayHeadline = "Plano Exclusivo: Vamos transformar a obediência do seu cão.";
  
  if (goalId === "commands") {
    displayHeadline = "Plano Exclusivo: Vamos ensinar novos comandos ao seu cão.";
  } else if (goalId === "bond") {
    displayHeadline = "Plano Exclusivo: Vamos fortalecer o vínculo com seu cão.";
  }

  return (
    <div className="flex flex-col h-[calc(100vh-60px)] overflow-hidden quiz-step-enter pb-32">
      <div className="flex-1 px-5 pt-6 sm:pt-6">
        <h1 className="mt-0 text-lg sm:text-xl sm:text-2xl font-bold text-center mb-5 leading-snug text-foreground">
          {displayHeadline}
        </h1>

        <div className="rounded-2xl overflow-hidden mb-3 sm:mb-4 sm:mb-6 shadow-lg">
          <img
            src={dogTraining}
            alt="Cão treinando"
            className="w-full h-auto object-cover"
            width={1024}
            height={768}
          />
        </div>

        <p className="text-foreground text-center text-base leading-relaxed">
          Não precisa pagar R$ 200 por sessão com adestrador particular. Vamos adaptar o plano para o seu objetivo.
        </p>
      </div>

      <QuizCTAButton onClick={onNext}>Continuar</QuizCTAButton>
    </div>
  );
};

export default Step7Training;
