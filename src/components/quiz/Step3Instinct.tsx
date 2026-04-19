import React from "react";

interface Step3InstinctProps {
  onSelect: (value: string) => void;
}

const options = [
  { id: "A", text: "Sim, parece que falamos línguas diferentes!" },
  { id: "B", text: "Às vezes, mas acho que é falta de consistência minha." },
  { id: "C", text: "Não, meu cão geralmente me obedece." },
];

const Step3Instinct: React.FC<Step3InstinctProps> = ({ onSelect }) => {
  return (
    <div className="quiz-screen">
      <div className="mb-3">
        <h1 className="text-base font-black text-gray-900 leading-tight mb-1.5">
          E se a culpa não fosse sua, nem do seu cão?
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          A maioria dos métodos falha porque ignora o que realmente move seu cão: o Instinto.
        </p>
      </div>

      <div className="w-full aspect-video bg-gray-50 rounded-xl mb-3 flex items-center justify-center border-2 border-dashed border-gray-200 overflow-hidden">
        <span className="text-gray-400 text-xs italic">[Imagem: Cão olhando para o dono]</span>
      </div>

      <h2 className="text-sm font-bold text-gray-800 mb-2.5">
        Você já sentiu que, por mais que tente, seu cão não entende o que você quer?
      </h2>

      <div className="space-y-2">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.text)}
            className="quiz-option"
          >
            <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400 flex-shrink-0">
              {opt.id}
            </div>
            <span className="flex-1 text-sm font-semibold text-gray-700">{opt.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step3Instinct;
