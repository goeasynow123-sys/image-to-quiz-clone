interface Step24Props {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { id: "nothing", emoji: "🫡", text: "Nada." },
  { id: "notmuch", emoji: "🧐", text: "Não muito" },
  { id: "alot", emoji: "🤓", text: "Bastante" },
];

const Step24Knowledge = ({ selected, onSelect }: Step24Props) => {
  return (
    <div className="flex-1 flex flex-col items-center px-6 pt-6 sm:pt-6 sm:pt-8 quiz-step-enter">
      <h1 className="mt-0 text-[1.35rem] font-bold text-foreground text-center mb-3 sm:mb-4 sm:mb-6 leading-snug">
        Quanto você sabe sobre como desenvolver obediência confiável em cães?
      </h1>

      <div className="w-full flex flex-col gap-3 sm:gap-4">
        {options.map((o) => (
          <button
            key={o.id}
            onClick={() => onSelect(o.id)}
            className={`quiz-option py-4 sm:py-5 sm:py-5 ${selected === o.id ? "quiz-option-selected" : ""}`}
          >
            <span className="text-2xl sm:text-3xl">{o.emoji}</span>
            <span className="text-foreground font-semibold text-base">{o.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step24Knowledge;
