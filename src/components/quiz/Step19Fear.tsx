interface Step19Props {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { id: "stressed", emoji: "😳", text: "Ele parece estar estressado com frequência." },
  { id: "insecure", emoji: "🙈", text: "Ele fica inseguro a princípio." },
  { id: "none", emoji: "🤗", text: "De jeito nenhum" },
];

const Step19Fear = ({ selected, onSelect }: Step19Props) => {
  return (
    <div className="flex-1 flex flex-col items-center px-6 pt-6 sm:pt-6 sm:pt-8 quiz-step-enter">
      <h1 className="mt-0 text-lg sm:text-xl sm:text-2xl font-bold text-foreground text-center mb-3 sm:mb-4 sm:mb-6 leading-snug">
        Seu cão demonstra sinais de medo ou ansiedade em ambientes novos?
      </h1>

      <div className="w-full flex flex-col gap-3 sm:gap-4">
        {options.map((o) => (
          <button
            key={o.id}
            onClick={() => onSelect(o.id)}
            className={`quiz-option py-4 sm:py-5 sm:py-5 ${selected === o.id ? "quiz-option-selected" : ""}`}
          >
            <span className="text-2xl sm:text-3xl">{o.emoji}</span>
            <span className="text-foreground font-semibold text-[0.95rem] leading-snug">{o.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step19Fear;
