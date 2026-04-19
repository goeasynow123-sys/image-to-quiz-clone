import React, { useState } from "react";

interface Step1ChallengeProps {
  onSelect: (values: string[]) => void;
}

const options = [
  { id: "A", text: "Ele me ignora completamente quando o chamo." },
  { id: "B", text: "Puxa a guia sem parar durante os passeios." },
  { id: "C", text: "Destrói objetos em casa quando fica sozinho." },
  { id: "D", text: "Late excessivamente para visitas ou outros cães." },
  { id: "E", text: "Faz as necessidades no lugar errado, mesmo depois de treinado." },
  { id: "F", text: "Demonstra agressividade com pessoas ou outros animais." },
  { id: "G", text: "Outro", isOther: true },
];

const Step1Challenge: React.FC<Step1ChallengeProps> = ({ onSelect }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [otherValue, setOtherValue] = useState("");

  const toggleOption = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    const selectedTexts = options
      .filter(opt => selectedIds.includes(opt.id) && !opt.isOther)
      .map(opt => opt.text);
    if (selectedIds.includes("G") && otherValue.trim()) {
      selectedTexts.push(otherValue.trim());
    }
    if (selectedTexts.length > 0) onSelect(selectedTexts);
  };

  const isDisabled =
    selectedIds.length === 0 ||
    (selectedIds.includes("G") && selectedIds.length === 1 && !otherValue.trim());

  return (
    <div className="quiz-screen">
      <div className="mb-2.5">
        <h2 className="text-base font-black text-gray-900 leading-tight">
          Qual o maior desafio com o comportamento do seu cão?
        </h2>
        <p className="text-gray-400 text-xs mt-1">Selecione todas as opções que se aplicam.</p>
      </div>

      <div className="quiz-scroll space-y-2 pb-3">
        {options.map((opt) => (
          <div key={opt.id}>
            <button
              onClick={() => toggleOption(opt.id)}
              className={`quiz-option ${selectedIds.includes(opt.id) ? "quiz-option-selected" : ""}`}
            >
              <div className={`quiz-check ${selectedIds.includes(opt.id) ? "quiz-check-active" : ""}`}>
                {selectedIds.includes(opt.id) && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className={`flex-1 text-sm font-semibold leading-snug ${selectedIds.includes(opt.id) ? "text-gray-900" : "text-gray-600"}`}>
                {opt.text}
              </span>
            </button>
            {opt.isOther && selectedIds.includes("G") && (
              <div className="mt-2 animate-in slide-in-from-top-1 duration-200">
                <input
                  type="text"
                  placeholder="Descreva aqui..."
                  className="quiz-input"
                  value={otherValue}
                  onChange={(e) => setOtherValue(e.target.value)}
                  autoFocus
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="cta-bar">
        <button onClick={handleContinue} disabled={isDisabled} className="btn-primary">
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Step1Challenge;
