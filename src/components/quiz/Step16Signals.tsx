import { useState } from "react";
import QuizCTAButton from "./QuizCTAButton";

interface Step16Props {
  onNext: () => void;
}

const signals = [
  { id: "name", text: "Nome" },
  { id: "sit", text: "Sentar" },
  { id: "down", text: "Deitar" },
  { id: "touch", text: "Tocar" },
  { id: "paw", text: "Dar a pata" },
  { id: "leave", text: "Deixar" },
  { id: "come", text: "Vem" },
  { id: "none", text: "Nenhuma delas" },
];

const Step16Signals = ({ onNext }: Step16Props) => {
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
          Quais sinais o seu cão já conhece?
        </h1>
        <p className="text-muted-foreground text-center text-sm">
          Selecione todas as opções aplicáveis:
        </p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto px-5 pb-32 touch-pan-y">
        <div className="flex flex-col gap-3 sm:gap-4 py-2">
          {signals.map((s) => (
            <button
              key={s.id}
              onClick={() => toggle(s.id)}
              className={`quiz-option justify-between py-4 sm:py-5 ${selected.includes(s.id) ? "quiz-option-selected" : "bg-muted"}`}
            >
              <span className="text-foreground font-bold text-base">{s.text}</span>
              <div className={`quiz-check ${selected.includes(s.id) ? "quiz-check-active" : ""}`}>
                {selected.includes(s.id) && <span className="text-white text-xs font-bold">✓</span>}
              </div>
            </button>
          ))}

          <button
            onClick={() => setShowOther(!showOther)}
            className={`quiz-option justify-between py-4 sm:py-5 ${showOther ? "quiz-option-selected" : "bg-muted"}`}
          >
            <span className="text-foreground font-bold text-base">Outros</span>
            <div className={`quiz-check ${showOther ? "quiz-check-active" : ""}`}>
              {showOther && <span className="text-white text-xs font-bold">✓</span>}
            </div>
          </button>

          {showOther && (
            <input
              type="text"
              value={otherText}
              onChange={(e) => setOtherText(e.target.value)}
              placeholder="Digite o sinal..."
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

export default Step16Signals;
