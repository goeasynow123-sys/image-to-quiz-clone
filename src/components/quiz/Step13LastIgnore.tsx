import dogImg from "@/assets/dog-command.png";

interface Step13Props {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { id: "today", text: "Hoje" },
  { id: "yesterday", text: "Ontem" },
  { id: "week", text: "Essa semana" },
  { id: "month", text: "Este mês" },
];

const Step13LastIgnore = ({ selected, onSelect }: Step13Props) => {
  return (
    <div className="flex-1 flex flex-col items-center px-6 pt-6 sm:pt-6 quiz-step-enter">
      <h1 className="mt-0 text-lg sm:text-xl sm:text-2xl font-bold text-foreground text-center mb-5 leading-snug">
        Quando foi a última vez que seu cachorro ignorou um comando seu?
      </h1>

      <div className="w-36 h-36 rounded-full bg-muted flex items-center justify-center mb-3 sm:mb-4 sm:mb-6 overflow-hidden">
        <img src={dogImg} alt="Dog training" className="w-32 h-32 object-contain" loading="lazy" />
      </div>

      <div className="w-full flex flex-col gap-3 sm:gap-4">
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

export default Step13LastIgnore;
