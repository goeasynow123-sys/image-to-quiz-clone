import React from "react";

interface Step1AgeProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { id: "puppy", text: "Filhote", sub: "até 6 meses" },
  { id: "adolescent", text: "Jovem", sub: "7 meses a 2 anos" },
  { id: "adult", text: "Adulto", sub: "3 a 7 anos" },
  { id: "senior", text: "Idoso", sub: "acima de 8 anos" },
];

const Step1Age: React.FC<Step1AgeProps> = ({ selected, onSelect }) => {
  return (
    <div className="quiz-screen">
      <div className="mb-3">
        <h1 className="text-base font-black text-gray-900 leading-tight mb-1.5">
          Para um plano eficaz, precisamos conhecer seu parceiro de 4 patas!
        </h1>
        <p className="text-gray-500 text-sm">
          Cada cão é único e seu plano de obediência também deve ser.
        </p>
      </div>

      <h2 className="text-sm font-bold text-gray-800 mb-2.5">
        Qual a idade do seu cão?
      </h2>

      <div className="space-y-2">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className={`quiz-option ${selected === opt.id ? "quiz-option-selected" : ""}`}
          >
            <div className="flex-1 text-left">
              <span className="text-sm font-bold text-gray-900 block">{opt.text}</span>
              <span className="text-xs text-gray-400">{opt.sub}</span>
            </div>
            {selected === opt.id && (
              <div className="quiz-check quiz-check-active">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step1Age;
