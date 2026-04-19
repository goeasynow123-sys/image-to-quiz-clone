import dogImg from "@/assets/dog-dachshund.png";

interface Step12Props {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { id: "yes", text: "Sim, ele me ignora" },
  { id: "sometimes", text: "Às vezes acontece" },
  { id: "no", text: "Não, ele me dá atenção" },
];

const Step12Attention = ({ selected, onSelect }: Step12Props) => {
  return (
    <div className="flex-1 flex flex-col items-center px-6 pt-6 sm:pt-10 quiz-step-enter">
      <h1 className="mt-0 text-xl sm:text-2xl font-extrabold text-foreground text-center mb-4 leading-tight tracking-tight">
        Seu cão se recusa a lhe dar atenção?
      </h1>

      <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-muted flex items-center justify-center mb-4 sm:mb-8 overflow-hidden">
        <img src={dogImg} alt="Cão" className="w-24 h-24 sm:w-32 sm:h-32 object-contain" loading="lazy" />
      </div>

      <div className="w-full flex flex-col gap-2 sm:gap-4">
        {options.map((o) => (
          <button
            key={o.id}
            onClick={() => onSelect(o.id)}
            className={`quiz-option justify-center py-4 sm:py-5 sm:py-5 ${selected === o.id ? "quiz-option-selected" : ""}`}
          >
            <span className="text-foreground font-bold text-base">{o.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step12Attention;
