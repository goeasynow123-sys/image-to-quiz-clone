import dogImg from "@/assets/dog-online.png";

interface Step27Props {
  selected: string;
  onSelect: (value: string) => void;
}

const Step27OnlineTrainer = ({ selected, onSelect }: Step27Props) => {
  return (
    <div className="flex-1 flex flex-col items-center px-6 pt-6 sm:pt-6 quiz-step-enter">
      <h1 className="mt-0 text-[1.3rem] font-bold text-foreground text-center mb-5 leading-snug">
        Você gostaria de fazer perguntas sobre comportamento canino, adestramento, etc., a um adestrador qualificado online?
      </h1>

      <div className="w-44 h-44 rounded-3xl bg-muted flex items-center justify-center mb-3 sm:mb-4 sm:mb-6 overflow-hidden">
        <img src={dogImg} alt="Dog online" className="w-40 h-40 object-contain" loading="lazy" />
      </div>

      <div className="w-full flex flex-col gap-3 sm:gap-4">
        <button
          onClick={() => onSelect("yes")}
          className={`quiz-option py-4 sm:py-5 sm:py-5 ${selected === "yes" ? "quiz-option-selected" : ""}`}
        >
          <span className="text-2xl sm:text-3xl">😍</span>
          <span className="text-foreground font-bold text-base">Sim, seria ótimo.</span>
        </button>

        <button
          onClick={() => onSelect("no")}
          className={`quiz-option py-4 sm:py-5 sm:py-5 ${selected === "no" ? "quiz-option-selected" : ""}`}
        >
          <span className="text-2xl sm:text-3xl">😢</span>
          <span className="text-foreground font-bold text-base">Não, obrigado</span>
        </button>
      </div>
    </div>
  );
};

export default Step27OnlineTrainer;
