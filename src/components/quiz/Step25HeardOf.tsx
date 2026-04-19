interface Step25Props {
  selected: string;
  onSelect: (value: string) => void;
}

const Step25HeardOf = ({ selected, onSelect }: Step25Props) => {
  return (
    <div className="flex-1 flex flex-col items-center px-6 pt-6 sm:pt-6 sm:pt-8 quiz-step-enter">
      <h1 className="mt-0 text-[1.35rem] font-bold text-foreground text-center mb-3 sm:mb-4 sm:mb-6 leading-snug">
        Você ouviu falar do Desafio de Obediência Canina PawChamp por meio de um adestrador de cães?
      </h1>

      <div className="w-full flex flex-col gap-3 sm:gap-4">
        <button
          onClick={() => onSelect("yes")}
          className={`quiz-option py-4 sm:py-5 sm:py-5 ${selected === "yes" ? "quiz-option-selected" : ""}`}
        >
          <span className="text-2xl sm:text-3xl">✅</span>
          <span className="text-foreground font-bold text-lg">Sim</span>
        </button>

        <button
          onClick={() => onSelect("no")}
          className={`quiz-option py-4 sm:py-5 sm:py-5 ${selected === "no" ? "quiz-option-selected" : ""}`}
        >
          <span className="text-2xl sm:text-3xl">❌</span>
          <span className="text-foreground font-bold text-lg">Não</span>
        </button>
      </div>
    </div>
  );
};

export default Step25HeardOf;
