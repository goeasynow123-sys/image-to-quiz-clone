interface Step6Props {
  onSelect: (goal: string) => void;
  selected: string;
}

const goals = [
  { id: "obedience", emoji: "🤔", text: "Melhorar a obediência" },
  { id: "bond", emoji: "❤️", text: "Fortalecer o vínculo com meu cão" },
];

const Step6Goal = ({ onSelect, selected }: Step6Props) => {
  return (
    <div className="flex-1 flex flex-col items-center px-6 pt-6 sm:pt-6 sm:pt-8 quiz-step-enter">
      <h1 className="mt-0 text-lg sm:text-xl sm:text-2xl font-bold text-foreground text-center mb-2 leading-snug">
        Vamos definir seu objetivo principal para o Desafio de Obediência Canina!
      </h1>
      <p className="text-xs sm:text-sm text-muted-foreground text-center mb-5 sm:mb-6">
        Escolha sua prioridade:
      </p>

      <div className="w-full flex flex-col gap-3 sm:gap-4">
        {goals.map((g) => (
          <button
            key={g.id}
            onClick={() => onSelect(g.id)}
            className={`quiz-option py-4 sm:py-5 sm:py-5 ${selected === g.id ? "quiz-option-selected" : ""}`}
          >
            <span className="text-2xl sm:text-3xl">{g.emoji}</span>
            <span className="text-foreground font-bold text-base sm:text-lg">{g.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step6Goal;
