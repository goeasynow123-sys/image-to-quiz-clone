import { useState } from "react";
import QuizCTAButton from "./QuizCTAButton";

interface Step24BDifficultiesProps {
  onNext: () => void;
}

const difficulties = [
  { id: "no_results", text: "Ausência de resultados notáveis" },
  { id: "no_time", text: "Eu não tive tempo o suficiente" },
  { id: "difficult", text: "Os treinamentos eram difíceis" },
  { id: "no_plan", text: "Eu não tinha um plano claro" },
  { id: "bad_trainer", text: "Treinador incapaz" },
];

const Step24BDifficulties = ({ onNext }: Step24BDifficultiesProps) => {
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
      <div className="px-5 pt-6 pb-2 bg-background z-10">
        <h1 className="mt-0 text-lg sm:text-xl sm:text-2xl font-bold text-foreground text-center mb-1 leading-snug">
          O que dificultou o treinamento do seu cachorro no passado?
        </h1>
        <p className="text-muted-foreground text-center text-sm">
          Selecione todas as opções aplicáveis:
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-32 touch-pan-y">
        <div className="flex flex-col gap-3 sm:gap-4 py-2">
          {difficulties.map((d) => (
            <button
              key={d.id}
              onClick={() => toggle(d.id)}
              className={`quiz-option justify-between py-4 sm:py-5 ${selected.includes(d.id) ? "quiz-option-selected" : "bg-muted"}`}
            >
              <span className="text-foreground font-bold text-base">{d.text}</span>
              <div className={`quiz-check ${selected.includes(d.id) ? "quiz-check-active" : ""}`}>
                {selected.includes(d.id) && <span className="text-white text-xs font-bold">✓</span>}
              </div>
            </button>
          ))}

          <button
            onClick={() => setShowOther(!showOther)}
            className={`quiz-option justify-between py-4 sm:py-5 ${showOther ? "quiz-option-selected" : "bg-muted"}`}
          >
            <span className="text-foreground font-bold text-base">Outro</span>
            <div className={`quiz-check ${showOther ? "quiz-check-active" : ""}`}>
              {showOther && <span className="text-white text-xs font-bold">✓</span>}
            </div>
          </button>

          {showOther && (
            <input
              type="text"
              value={otherText}
              onChange={(e) => setOtherText(e.target.value)}
              placeholder="Digite sua resposta..."
              className="w-full p-3.5 rounded-2xl border-2 border-border bg-background text-foreground text-base mb-4"
            />
          )}
        </div>
      </div>

      <div className={`transition-all duration-300 ${hasSelection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
        <QuizCTAButton onClick={onNext}>Continuar</QuizCTAButton>
      </div>
    </div>
  );
};

export default Step24BDifficulties;
