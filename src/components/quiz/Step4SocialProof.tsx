import QuizCTAButton from "./QuizCTAButton";

interface Step4Props {
  onNext: () => void;
}

const Step4SocialProof = ({ onNext }: Step4Props) => {
  return (
    <div className="flex flex-col h-[calc(100vh-80px)] overflow-hidden quiz-step-enter pb-32">
      <div className="flex-1 px-6 pt-6 sm:pt-10 flex flex-col items-center justify-center">
        <h1 className="mt-0 text-xl sm:text-2xl font-extrabold text-accent text-center mb-3 leading-tight tracking-tight">
          Junte-se a +50 mil tutores que transformaram a obediência de seus cães.
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground text-center mb-5 px-2">
          Esqueça métodos antigos e punitivos. O <strong>Desafio POI</strong> utiliza a ciência moderna para criar uma conexão real entre você e seu cão.
        </p>

        <div className="w-full border-l-4 border-primary pl-5 py-3 sm:py-5 mb-5 bg-primary/5 rounded-r-2xl">
          <span className="text-primary text-2xl sm:text-3xl leading-none">"</span>
          <p className="text-base sm:text-xl font-bold text-foreground mt-1 leading-snug">
            Não existem cães maus —<br />apenas mau treino.
          </p>
          <p className="text-muted-foreground mt-2 text-xs sm:text-sm font-medium">
            🐾 Equipe <strong>Desafio POI</strong>
          </p>
        </div>

        <div className="w-full flex items-center gap-3 sm:gap-4 bg-muted rounded-2xl p-4 sm:p-5">
          <div className="w-10 h-10 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center">
            <span className="text-xl sm:text-3xl">🏅</span>
          </div>
          <p className="text-xs sm:text-sm text-foreground leading-relaxed">
            As últimas descobertas sobre adestramento de cães foram apresentadas nas Universidades{" "}
            <strong>de Oxford, Harvard</strong> e <strong>Cambridge</strong>.
          </p>
        </div>
      </div>

      <QuizCTAButton onClick={onNext}>Continuar</QuizCTAButton>
    </div>
  );
};

export default Step4SocialProof;
