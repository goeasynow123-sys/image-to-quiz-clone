interface Step32Props {
  dogName: string;
  selected: string;
  onSelect: (v: string) => void;
}

const options = [
  { value: "10 min/dia", emoji: "⚡" },
  { value: "15 min/dia", emoji: "☕" },
  { value: "30 min/dia", emoji: "💪" },
  { value: "60 min/dia", emoji: "🏆" },
];

const Step32TimeCommitment = ({ dogName, selected, onSelect }: Step32Props) => {
  return (
    <div className="flex flex-col h-[calc(100vh-60px)] overflow-hidden quiz-step-enter">
      <div className="flex-1 px-5 pt-6 sm:pt-6 sm:pt-8">
        <h1 className="mt-0 text-lg sm:text-xl sm:text-2xl font-bold text-foreground text-center mb-4 sm:mb-6 sm:mb-8 leading-snug">
          Quanto tempo você está disposto a dedicar para melhorar a vida de {dogName}?
        </h1>

        <div className="flex flex-col gap-3 sm:gap-4">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onSelect(opt.value)}
              className={`quiz-option justify-center py-4 sm:py-5 sm:py-5 ${selected === opt.value ? "quiz-option-selected" : "bg-muted"}`}
            >
              <span className="text-2xl">{opt.emoji}</span>
              <span className="text-foreground font-bold text-lg">{opt.value}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step32TimeCommitment;
