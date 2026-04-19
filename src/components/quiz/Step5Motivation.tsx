import { useState } from "react";
import QuizCTAButton from "./QuizCTAButton";

interface Step5Props {
  onNext: (motivations: string[]) => void;
}

const options = [
  { id: "love", emoji: "💌", text: "Meu amor pelo meu cachorro" },
  { id: "long-life", emoji: "🥰", text: "Desejo de tornar a vida do meu cachorro mais longa e feliz" },
  { id: "easier", emoji: "😌", text: "Desejo de ter uma vida mais fácil com meu cachorro" },
];

const Step5Motivation = ({ onNext }: Step5Props) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [custom, setCustom] = useState("");

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col h-[calc(100vh-60px)] overflow-hidden quiz-step-enter pb-32">
      <div className="flex-1 px-5 pt-6 sm:pt-6">
        <h1 className="mt-0 text-lg sm:text-xl sm:text-2xl font-bold text-foreground text-center mb-1 leading-snug">
          Qual é a sua motivação para começar o Desafio de Obediência?
        </h1>
        <p className="text-muted-foreground text-center mb-3 sm:mb-4 sm:mb-6 text-sm">
          Selecione todas as opções aplicáveis:
        </p>

        <div className="flex flex-col gap-3 sm:gap-4">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => toggle(opt.id)}
              className={`quiz-option ${selected.includes(opt.id) ? "quiz-option-selected" : ""}`}
            >
              <span className="text-2xl">{opt.emoji}</span>
              <span className="text-foreground font-medium flex-1 text-[0.95rem]">{opt.text}</span>
              <div className={`quiz-check ${selected.includes(opt.id) ? "quiz-check-active" : ""}`}>
                {selected.includes(opt.id) && <span className="text-white text-xs font-bold">✓</span>}
              </div>
            </button>
          ))}

          <div className="w-full flex items-center gap-3 sm:gap-4 sm:gap-4 p-4 rounded-2xl border-2 border-dashed border-border">
            <input
              type="text"
              placeholder="Digite sua resposta aqui..."
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-base"
            />
          </div>
        </div>
      </div>

      <QuizCTAButton onClick={() => onNext(selected)} disabled={selected.length === 0 && !custom}>
        Continuar
      </QuizCTAButton>
    </div>
  );
};

export default Step5Motivation;
