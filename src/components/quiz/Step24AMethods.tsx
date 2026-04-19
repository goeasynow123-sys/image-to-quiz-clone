import { useState } from "react";
import QuizCTAButton from "./QuizCTAButton";

interface Step24AMethodsProps {
  onNext: () => void;
}

const methods = [
  { id: "positive_reinforcement", text: "Reforço positivo" },
  { id: "negative_reinforcement", text: "Reforço negativo" },
  { id: "positive_punishment", text: "Punição positiva" },
  { id: "negative_punishment", text: "Punição negativa" },
  { id: "none", text: "Nenhum deles" },
];

const Step24AMethods = ({ onNext }: Step24AMethodsProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const hasSelection = selected.length > 0;

  return (
    <div className="flex flex-col h-[100dvh] overflow-hidden quiz-step-enter">
      <div className="px-5 pt-6 pb-2 bg-background z-10">
        <h1 className="mt-0 text-lg sm:text-xl sm:text-2xl font-bold text-foreground text-center mb-1 leading-snug">
          Quais métodos de treinamento você já utilizou?
        </h1>
        <p className="text-muted-foreground text-center text-sm">
          Selecione todas as opções aplicáveis:
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-32 touch-pan-y">
        <div className="flex flex-col gap-3 sm:gap-4 py-2">
          {methods.map((m) => (
            <button
              key={m.id}
              onClick={() => toggle(m.id)}
              className={`quiz-option justify-between py-4 sm:py-5 ${selected.includes(m.id) ? "quiz-option-selected" : "bg-muted"}`}
            >
              <span className="text-foreground font-bold text-base">{m.text}</span>
              <div className={`quiz-check ${selected.includes(m.id) ? "quiz-check-active" : ""}`}>
                {selected.includes(m.id) && <span className="text-white text-xs font-bold">✓</span>}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className={`transition-all duration-300 ${hasSelection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
        <QuizCTAButton onClick={onNext}>Continuar</QuizCTAButton>
      </div>
    </div>
  );
};

export default Step24AMethods;
