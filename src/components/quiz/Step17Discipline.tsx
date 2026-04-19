import { useState } from "react";
import QuizCTAButton from "./QuizCTAButton";

interface Step17Props {
  onNext: () => void;
}

const disciplines = [
  { id: "focus", emoji: "👁️", text: "Focar em mim durante as caminhadas" },
  { id: "come", emoji: "🐕", text: "Vir quando for chamado" },
  { id: "norun", emoji: "🚦", text: "Não correr para a rua" },
  { id: "impulse", emoji: "🎯", text: "Controlar impulsos e instintos" },
  { id: "social", emoji: "🤗", text: "Ser mais sociável e tolerante" },
];

const Step17Discipline = ({ onNext }: Step17Props) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [showOther, setShowOther] = useState(false);
  const [otherText, setOtherText] = useState("");

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const hasSelection = selected.length > 0 || (showOther && otherText.trim().length > 0);

  return (
    <div className="flex flex-col h-[100dvh] overflow-hidden quiz-step-enter">
      {/* Fixed Header */}
      <div className="px-5 pt-6 pb-2 bg-background z-10">
        <h1 className="mt-0 text-lg sm:text-xl sm:text-2xl font-bold text-foreground text-center mb-1 leading-snug">
          Quais comportamentos você gostaria de disciplinar durante o desafio?
        </h1>
        <p className="text-muted-foreground text-center text-sm">
          Selecione todas as opções aplicáveis:
        </p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto px-5 pb-32 touch-pan-y">
        <div className="flex flex-col gap-3 sm:gap-4 py-2">
          {disciplines.map((d) => (
            <button
              key={d.id}
              onClick={() => toggle(d.id)}
              className={`quiz-option ${selected.includes(d.id) ? "quiz-option-selected" : ""}`}
            >
              <span className="text-2xl w-10 h-10 flex items-center justify-center bg-muted rounded-xl">{d.emoji}</span>
              <span className="text-foreground font-semibold text-[0.95rem] flex-1 text-left leading-snug">{d.text}</span>
              <div className={`quiz-check ${selected.includes(d.id) ? "quiz-check-active" : ""}`}>
                {selected.includes(d.id) && <span className="text-white text-xs font-bold">✓</span>}
              </div>
            </button>
          ))}

          <button
            onClick={() => setShowOther(!showOther)}
            className={`quiz-option ${showOther ? "quiz-option-selected" : ""}`}
          >
            <span className="text-2xl w-10 h-10 flex items-center justify-center bg-muted rounded-xl">✏️</span>
            <span className="text-foreground font-semibold text-[0.95rem] flex-1 text-left leading-snug">Outro</span>
            <div className={`quiz-check ${showOther ? "quiz-check-active" : ""}`}>
              {showOther && <span className="text-white text-xs font-bold">✓</span>}
            </div>
          </button>

          {showOther && (
            <input
              type="text"
              value={otherText}
              onChange={(e) => setOtherText(e.target.value)}
              placeholder="Descreva o comportamento..."
              className="w-full p-3.5 rounded-2xl border-2 border-border bg-background text-foreground text-base mb-4"
            />
          )}
        </div>
      </div>

      {/* Conditional "Ghost" Button */}
      <div className={`transition-all duration-300 ${hasSelection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
        <QuizCTAButton onClick={onNext}>Continuar</QuizCTAButton>
      </div>
    </div>
  );
};

export default Step17Discipline;
