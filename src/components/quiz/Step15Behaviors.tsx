import { useState } from "react";
import QuizCTAButton from "./QuizCTAButton";
import energyImg from "@/assets/behavior-energy.png";
import aggressionImg from "@/assets/behavior-aggression.png";
import pullingImg from "@/assets/behavior-pulling.png";
import anxietyImg from "@/assets/behavior-anxiety.png";
import barkingImg from "@/assets/behavior-barking.png";
import destructiveImg from "@/assets/behavior-destructive.png";

interface Step15Props {
  onNext: (selected: string[]) => void;
}

const behaviors = [
  { id: "house_soiling", img: "https://images.paw-champ.com/fb/assets/6a6eb806-47d1-4f6f-9074-73eb32790103.webp", text: "Sujeira em casa" },
  { id: "energy", img: energyImg, text: "Energia excessiva e falta de controle" },
  { id: "aggression", img: aggressionImg, text: "Agressão contra pessoas ou outros animais" },
  { id: "pulling", img: pullingImg, text: "Puxar a guia" },
  { id: "anxiety", img: anxietyImg, text: "Ansiedade de separação" },
  { id: "barking", img: barkingImg, text: "Latidos excessivos" },
  { id: "destructive", img: destructiveImg, text: "Comportamento destrutivo" },
];

const Step15Behaviors = ({ onNext }: Step15Props) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [showOther, setShowOther] = useState(false);
  const [otherText, setOtherText] = useState("");

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const allSelected = [...selected, ...(showOther && otherText ? ["other:" + otherText] : [])];
  const hasSelection = allSelected.length > 0;

  return (
    <div className="flex flex-col h-[100dvh] overflow-hidden quiz-step-enter">
      {/* Fixed Header */}
      <div className="px-5 pt-6 pb-2 bg-background z-10">
        <h1 className="mt-0 text-lg sm:text-xl sm:text-2xl font-bold text-foreground text-center mb-1 leading-snug">
          Quais comportamentos você gostaria de melhorar no desafio?
        </h1>
        <p className="text-muted-foreground text-center text-sm">
          Selecione todas as opções aplicáveis:
        </p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto px-5 pb-32 touch-pan-y">
        <div className="flex flex-col gap-3 sm:gap-4 py-2">
          {behaviors.map((b) => (
            <button
              key={b.id}
              onClick={() => toggle(b.id)}
              className={`quiz-option ${selected.includes(b.id) ? "quiz-option-selected" : ""}`}
            >
              <img src={b.img} alt={b.text} className="w-12 h-12 object-contain rounded-xl" loading="lazy" />
              <span className="text-foreground font-semibold text-[0.95rem] flex-1 text-left leading-snug">{b.text}</span>
              <div className={`quiz-check ${selected.includes(b.id) ? "quiz-check-active" : ""}`}>
                {selected.includes(b.id) && <span className="text-white text-xs font-bold">✓</span>}
              </div>
            </button>
          ))}

          {/* Outros */}
          <button
            onClick={() => setShowOther(!showOther)}
            className={`quiz-option ${showOther ? "quiz-option-selected" : ""}`}
          >
            <span className="text-2xl w-12 h-12 flex items-center justify-center bg-muted rounded-xl">✏️</span>
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
        <QuizCTAButton onClick={() => onNext(allSelected)}>Continuar</QuizCTAButton>
      </div>
    </div>
  );
};

export default Step15Behaviors;
