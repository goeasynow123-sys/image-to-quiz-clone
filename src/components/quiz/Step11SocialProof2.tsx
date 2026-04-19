import QuizCTAButton from "./QuizCTAButton";

interface Step11Props {
  onNext: () => void;
}

const Step11SocialProof2 = ({ onNext }: Step11Props) => {
  return (
    <div className="flex flex-col h-[calc(100vh-80px)] overflow-hidden quiz-step-enter pb-32">
      <div className="flex-1 px-6 pt-6 sm:pt-10 flex flex-col items-center justify-center">
        <h1 className="mt-0 text-xl sm:text-2xl font-extrabold text-accent text-center mb-3 leading-tight tracking-tight">
          Você não está sozinho! Milhares de tutores já transformaram seus cães.
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground text-center mb-5 px-2">
          Provamos que consistência e diversão podem substituir métodos de treinamento ultrapassados!
        </p>

        <div className="w-full bg-muted rounded-2xl p-5 mb-5">
          <div className="text-2xl sm:text-4xl mb-1 text-primary">❝</div>
          <p className="text-base sm:text-xl font-bold text-foreground mb-3 leading-snug">
            Com o método certo, qualquer cão pode aprender — independente da raça ou da idade.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-[10px]">🐾</span>
            </div>
            <span className="text-foreground font-semibold text-xs sm:text-sm">
              Equipe <strong>PawChamp</strong>
            </span>
          </div>
        </div>

        <div className="w-full rounded-2xl p-4 bg-amber-50 border border-amber-200">
          <p className="text-xs sm:text-sm text-foreground leading-relaxed">
            Responda às perguntas e receba o seu <strong>Desafio de Obediência Canina</strong> sob medida.
          </p>
        </div>
      </div>

      <QuizCTAButton onClick={onNext}>Continuar</QuizCTAButton>
    </div>
  );
};

export default Step11SocialProof2;
