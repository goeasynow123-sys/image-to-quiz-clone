import dogImg from "@/assets/dog-begging.png";

interface Step14Props {
  selected: string;
  onSelect: (value: string) => void;
}

const Step14Begging = ({ selected, onSelect }: Step14Props) => {
  return (
    <div className="flex-1 flex flex-col items-center px-6 pt-6 sm:pt-6 quiz-step-enter">
      <h1 className="mt-0 text-lg sm:text-xl sm:text-2xl font-bold text-foreground text-center mb-5 leading-snug">
        Seu cachorro implora por comida ou petiscos?
      </h1>

      <div className="w-44 h-44 rounded-3xl bg-muted flex items-center justify-center mb-3 sm:mb-4 sm:mb-6 overflow-hidden">
        <img src={dogImg} alt="Dog begging" className="w-40 h-40 object-contain" loading="lazy" />
      </div>

      <div className="w-full flex flex-col gap-3 sm:gap-4">
        <button
          onClick={() => onSelect("yes")}
          className={`quiz-option py-4 sm:py-5 sm:py-5 ${selected === "yes" ? "quiz-option-selected" : ""}`}
        >
          <span className="text-2xl sm:text-3xl">🤪</span>
          <span className="text-foreground font-bold text-lg">Sim</span>
        </button>

        <button
          onClick={() => onSelect("no")}
          className={`quiz-option py-4 sm:py-5 sm:py-5 ${selected === "no" ? "quiz-option-selected" : ""}`}
        >
          <span className="text-2xl sm:text-3xl">😐</span>
          <span className="text-foreground font-bold text-lg">Não</span>
        </button>
      </div>
    </div>
  );
};

export default Step14Begging;
