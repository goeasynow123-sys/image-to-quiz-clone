import { useState } from "react";
import QuizCTAButton from "./QuizCTAButton";

interface Step29Props {
  onNext: () => void;
}

const times = [
  { id: "morning", emoji: "🌤️", text: "De manhã cedo" },
  { id: "afternoon", emoji: "🌝", text: "Fim da tarde" },
  { id: "night", emoji: "🌙", text: "Noite" },
  { id: "anytime", emoji: "⏰", text: "Sempre que possível" },
];

const Step29TrainingTime = ({ onNext }: Step29Props) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col h-[calc(100vh-60px)] overflow-hidden quiz-step-enter pb-32">
      <div className="flex-1 px-5 pt-6 sm:pt-6">
        <h1 className="mt-0 text-lg sm:text-xl sm:text-2xl font-bold text-foreground text-center mb-1 leading-snug">
          Qual o momento mais fácil para você treinar seu cão?
        </h1>
        <p className="text-muted-foreground text-center mb-5 text-sm">
          Selecione todas as opções aplicáveis:
        </p>

        <div className="flex flex-col gap-3 sm:gap-4">
          {times.map((t) => (
            <button
              key={t.id}
              onClick={() => toggle(t.id)}
              className={`quiz-option ${selected.includes(t.id) ? "quiz-option-selected" : ""}`}
            >
              <span className="text-2xl">{t.emoji}</span>
              <span className="text-foreground font-semibold text-[0.95rem] flex-1 text-left">{t.text}</span>
              <div className={`quiz-check ${selected.includes(t.id) ? "quiz-check-active" : ""}`}>
                {selected.includes(t.id) && <span className="text-white text-xs font-bold">✓</span>}
              </div>
            </button>
          ))}
        </div>
      </div>

      <QuizCTAButton onClick={onNext}>Continuar</QuizCTAButton>
    </div>
  );
};

export default Step29TrainingTime;
