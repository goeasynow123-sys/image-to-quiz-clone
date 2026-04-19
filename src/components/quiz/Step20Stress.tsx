import { useState } from "react";
import QuizCTAButton from "./QuizCTAButton";
import dogImg from "@/assets/dog-frenchie.png";

interface Step20Props {
  onNext: () => void;
}

const stressors = [
  { id: "animals", emoji: "🐕", text: "Ao redor de outros animais" },
  { id: "strangers", emoji: "👥", text: "Conhecer estranhos" },
  { id: "alone", emoji: "🏠", text: "Sozinho em casa" },
  { id: "noise", emoji: "🌧️", text: "Ruídos altos" },
];

const Step20Stress = ({ onNext }: Step20Props) => {
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
          Algum desses fatores causa estresse no seu cachorro?
        </h1>
        <p className="text-muted-foreground text-center text-sm">
          Selecione todas as opções aplicáveis:
        </p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto px-5 pb-32 touch-pan-y">
        <div className="flex justify-center mb-3 sm:mb-4 sm:mb-6">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-muted flex items-center justify-center overflow-hidden">
            <img src={dogImg} alt="French Bulldog" className="w-24 h-24 sm:w-32 sm:h-32 object-contain" loading="lazy" />
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 py-2">
          {stressors.map((s) => (
            <button
              key={s.id}
              onClick={() => toggle(s.id)}
              className={`quiz-option ${selected.includes(s.id) ? "quiz-option-selected" : ""}`}
            >
              <span className="text-2xl">{s.emoji}</span>
              <span className="text-foreground font-semibold text-[0.95rem] flex-1 text-left">{s.text}</span>
              <div className={`quiz-check ${selected.includes(s.id) ? "quiz-check-active" : ""}`}>
                {selected.includes(s.id) && <span className="text-white text-xs font-bold">✓</span>}
              </div>
            </button>
          ))}

          <button
            onClick={() => setShowOther(!showOther)}
            className={`quiz-option ${showOther ? "quiz-option-selected" : ""}`}
          >
            <span className="text-2xl">✏️</span>
            <span className="text-foreground font-semibold text-[0.95rem] flex-1 text-left">Outro</span>
            <div className={`quiz-check ${showOther ? "quiz-check-active" : ""}`}>
              {showOther && <span className="text-white text-xs font-bold">✓</span>}
            </div>
          </button>

          {showOther && (
            <input
              type="text"
              value={otherText}
              onChange={(e) => setOtherText(e.target.value)}
              placeholder="Descreva o fator de estresse..."
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

export default Step20Stress;
