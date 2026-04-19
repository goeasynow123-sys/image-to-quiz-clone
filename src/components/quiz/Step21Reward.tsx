interface Step21Props {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { id: "no", emoji: "😬", text: "Não, ainda não" },
  { id: "sometimes", emoji: "🤔", text: "Às vezes, de forma inconsistente" },
  { id: "yes", emoji: "😎", text: "Sim, eu faço" },
];

const Step21Reward = ({ selected, onSelect }: Step21Props) => {
  return (
    <div className="flex-1 flex flex-col items-center px-6 pt-6 sm:pt-6 sm:pt-8 quiz-step-enter">
      <h1 className="mt-0 text-lg sm:text-xl sm:text-2xl font-bold text-foreground text-center mb-3 sm:mb-4 sm:mb-6 leading-snug">
        Você recompensa seu cachorro por bom comportamento?
      </h1>

      <div className="w-full flex flex-col gap-3 sm:gap-4">
        {options.map((o) => (
          <button
            key={o.id}
            onClick={() => onSelect(o.id)}
            className={`quiz-option py-4 sm:py-5 sm:py-5 ${selected === o.id ? "quiz-option-selected" : ""}`}
          >
            <span className="text-2xl sm:text-3xl">{o.emoji}</span>
            <span className="text-foreground font-semibold text-[0.95rem]">{o.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step21Reward;
