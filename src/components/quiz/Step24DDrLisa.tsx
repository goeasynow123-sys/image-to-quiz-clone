import QuizCTAButton from "./QuizCTAButton";

interface Step24DDrLisaProps {
  onNext: () => void;
}

const Step24DDrLisa = ({ onNext }: Step24DDrLisaProps) => {
  return (
    <div className="flex-1 flex flex-col items-center px-6 pt-6 sm:pt-10 quiz-step-enter">
      <div className="w-full max-w-md bg-card border-2 border-border rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
        
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 leading-tight">
          Por que as pessoas desistem de melhorar o adestramento de seus cães?
        </h2>
        
        <blockquote className="text-lg sm:text-xl text-foreground font-medium mb-8 italic">
          "O principal motivo: começar grande demais muito rapidamente."
        </blockquote>
        
        <div className="flex items-center gap-4 mt-auto">
          <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-2xl">👩‍⚕️</div>
          <div>
            <p className="font-bold text-foreground text-base">Dra. Lisa V.</p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
              Neurobióloga e especialista certificada em cães da equipe PawChamp.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 w-full">
        <QuizCTAButton onClick={onNext}>Continuar</QuizCTAButton>
      </div>
    </div>
  );
};

export default Step24DDrLisa;
