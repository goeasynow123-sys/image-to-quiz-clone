interface Step2Props {
  onSelect: (gender: string) => void;
  selected: string;
  ageLabel: string;
}

const Step2Gender = ({ onSelect, selected, ageLabel }: Step2Props) => {
  return (
    <div className="flex-1 flex flex-col items-center px-6 pt-6 sm:pt-6 sm:pt-10 quiz-step-enter">
      <h1 className="mt-0 text-xl sm:text-2xl font-bold text-foreground text-center mb-3 sm:mb-4 sm:mb-6 sm:mb-8 leading-snug">
        Seu cão é...
      </h1>

      <div className="w-full flex flex-col gap-3 sm:gap-4 sm:gap-4">
        <button
          onClick={() => onSelect("male")}
          className={`quiz-option justify-center py-4 sm:py-5 sm:py-6 ${selected === "male" ? "quiz-option-selected" : "bg-muted"}`}
        >
          <span className="text-2xl sm:text-3xl sm:text-4xl">♂️</span>
          <span className="font-bold text-foreground text-lg sm:text-xl">Macho</span>
        </button>

        <button
          onClick={() => onSelect("female")}
          className={`quiz-option justify-center py-4 sm:py-5 sm:py-6 ${selected === "female" ? "quiz-option-selected" : "bg-muted"}`}
        >
          <span className="text-2xl sm:text-3xl sm:text-4xl">♀️</span>
          <span className="font-bold text-foreground text-lg sm:text-xl">Fêmea</span>
        </button>
      </div>
    </div>
  );
};

export default Step2Gender;
