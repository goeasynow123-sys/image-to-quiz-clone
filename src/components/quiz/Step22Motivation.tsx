import { useState } from "react";
import QuizCTAButton from "./QuizCTAButton";

interface Step22Props {
  onNext: () => void;
}

const motivations = [
  { id: "treats", emoji: "🍭", text: "Petiscos" },
  { id: "toys", emoji: "🎾", text: "Brinquedos" },
  { id: "praise", emoji: "🥰", text: "Elogios e carinho" },
  { id: "other", emoji: "➕", text: "Outro" },
  { id: "unsure", emoji: "🤔", text: "Não tenho certeza" },
];

const Step22Motivation = ({ onNext }: Step22Props) => {
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
          O que mais motiva seu cachorro durante o treinamento?
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
              <span className="text-foreground font-semibold text-[0.95rem] flex-1 text-left">{m.text}</span>
              <div className={`quiz-check ${selected.includes(m.id) ? "quiz-check-active" : ""}`}>
                {selected.includes(m.id) && <span className="text-white text-xs font-bold">✓</span>}
              </div>
            </button>
          ))}
        </div>
      </div>

      <QuizCTAButton onClick={onNext}>Continuar</QuizCTAButton>
    </div>
  );
};

export default Step22Motivation;
