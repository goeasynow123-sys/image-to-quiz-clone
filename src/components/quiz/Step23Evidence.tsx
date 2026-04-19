import QuizCTAButton from "./QuizCTAButton";

interface Step23Props {
  onNext: () => void;
}

const Step23Evidence = ({ onNext }: Step23Props) => {
  return (
    <div className="flex flex-col h-[calc(100vh-60px)] overflow-hidden quiz-step-enter pb-32">
      <div className="flex-1 px-5 pt-6 sm:pt-6 flex flex-col items-center">
        <h1 className="mt-0 text-[1.35rem] font-bold text-foreground text-center mb-3 leading-snug">
          O Desafio POI foi desenvolvido utilizando técnicas de adestramento e comportamento canino baseadas em evidências.
        </h1>
        <p className="text-muted-foreground text-center mb-4 sm:mb-6 sm:mb-8 text-sm">
          Desenvolvido com as mais recentes descobertas em comportamento canino, nosso desafio é a união da pesquisa de ponta com a prática que gera resultados reais.
        </p>

        <div className="w-56 h-56 rounded-full bg-muted flex flex-col items-center justify-center gap-3 sm:gap-4">
          <div className="text-center">
            <span className="text-muted-foreground text-[10px] block uppercase tracking-wider">Universidade de</span>
            <span className="text-foreground font-bold text-lg sm:text-xl" style={{ fontFamily: "serif" }}>OXFORD</span>
          </div>
          <div className="text-center">
            <span className="text-muted-foreground text-[10px] block uppercase tracking-wider">Universidade de</span>
            <span className="text-foreground font-bold text-lg sm:text-xl" style={{ fontFamily: "serif" }}>HARVARD</span>
          </div>
          <div className="text-center">
            <span className="text-muted-foreground text-[10px] block uppercase tracking-wider">Universidade de</span>
            <span className="text-foreground font-bold text-lg sm:text-xl" style={{ fontFamily: "serif" }}>CAMBRIDGE</span>
          </div>
        </div>
      </div>

      <QuizCTAButton onClick={onNext}>Continuar</QuizCTAButton>
    </div>
  );
};

export default Step23Evidence;
