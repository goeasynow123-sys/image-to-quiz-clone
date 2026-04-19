import QuizCTAButton from "./QuizCTAButton";

interface Step18Props {
  onNext: () => void;
  breed?: string;
}

const Step18Calendar = ({ onNext, breed = "Buldogue Francês" }: Step18Props) => {
  return (
    <div className="flex flex-col h-[calc(100vh-60px)] overflow-hidden quiz-step-enter pb-32">
      <div className="flex-1 px-5 pt-6 sm:pt-6 flex flex-col items-center">
        <h1 className="mt-0 text-lg sm:text-xl sm:text-2xl font-bold text-foreground text-center mb-3 sm:mb-4 sm:mb-6 leading-snug">
          Quase lá! Seu plano de obediência está tomando forma.
        </h1>

        <div className="w-full max-w-sm bg-muted rounded-3xl p-6 mb-3 sm:mb-4 sm:mb-6 flex flex-col items-center">
          <div className="grid grid-cols-7 gap-1 mb-3 sm:mb-4 w-full">
            {Array.from({ length: 30 }, (_, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-[8px] text-primary font-bold uppercase">DIA</span>
                <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center text-xs font-bold text-foreground border border-border">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-2xl">✅</span>
            <span className="text-2xl">✅</span>
            <span className="text-2xl">✅</span>
            <span className="text-2xl sm:text-3xl">🏅</span>
          </div>
        </div>

        <p className="text-muted-foreground text-center text-base leading-relaxed">
          Com base nas suas respostas, estamos criando um desafio de obediência canina perfeito para o seu {breed}!
        </p>
      </div>

      <QuizCTAButton onClick={onNext}>Continuar</QuizCTAButton>
    </div>
  );
};

export default Step18Calendar;
