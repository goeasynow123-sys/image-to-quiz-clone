import { useState } from "react";
import QuizCTAButton from "./QuizCTAButton";

interface Step28Props {
  onNext: () => void;
}

const motivations = [
  { id: "progress", emoji: "📈", text: "Ver progresso, mesmo que pequeno." },
  { id: "bond", emoji: "🔗", text: "Observando como o treinamento impacta nosso vínculo" },
  { id: "excitement", emoji: "🐕", text: "A empolgação do meu cachorro para treinar" },
];

const Step28MotivationChallenges = ({ onNext }: Step28Props) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col h-[calc(100vh-60px)] overflow-hidden quiz-step-enter pb-32">
      <div className="flex-1 px-5 pt-6 sm:pt-6">
        <h1 className="mt-0 text-[1.35rem] font-bold text-foreground text-center mb-1 leading-snug">
          O que te motiva a continuar treinando quando você enfrenta desafios?
        </h1>
        <p className="text-muted-foreground text-center mb-5 text-sm">
          Selecione todas as opções aplicáveis:
        </p>

        <div className="flex flex-col gap-3 sm:gap-4">
          {motivations.map((m) => (
            <button
              key={m.id}
              onClick={() => toggle(m.id)}
              className={`quiz-option ${selected.includes(m.id) ? "quiz-option-selected" : ""}`}
            >
              <span className="text-2xl">{m.emoji}</span>
              <span className="text-foreground font-semibold text-[0.95rem] flex-1 text-left leading-snug">{m.text}</span>
              <div className={`quiz-check ${selected.includes(m.id) ? "quiz-check-active" : ""}`}>
                {selected.includes(m.id) && <span className="text-white text-xs font-bold">✓</span>}
              </div>
            </button>
          ))}
        </div>
      </div>

      <QuizCTAButton onClick={onNext}>Próximo passo</QuizCTAButton>
    </div>
  );
};

export default Step28MotivationChallenges;
