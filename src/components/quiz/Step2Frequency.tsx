import React from "react";

interface Step2FrequencyProps {
  onSelect: (value: string) => void;
}

const options = [
  { id: "A", text: "Diariamente, é uma luta constante." },
  { id: "B", text: "Algumas vezes por semana, me sinto exausto." },
  { id: "C", text: "Raramente, mas quando acontece, é bem chato." },
  { id: "D", text: "Quase nunca, mas quero prevenir problemas futuros." },
];

const Step2Frequency: React.FC<Step2FrequencyProps> = ({ onSelect }) => {
  return (
    <div className="quiz-screen">
      <div className="mb-3">
        <h1 className="text-resp-lg font-black text-gray-900 leading-tight mb-2">
          Entendemos sua frustração. Isso afeta mais do que você imagina!
        </h1>
        <p className="text-gray-500 text-resp-sm">
          Muitos tutores se sentem exatamente como você. Mas há uma solução.
        </p>
      </div>

      <div className="w-full aspect-video bg-gray-50 rounded-xl mb-3 flex items-center justify-center border-2 border-dashed border-gray-200 overflow-hidden">
        <span className="text-gray-400 text-xs italic">[Imagem: Tutor com expressão de cansaço]</span>
      </div>

      <h2 className="text-resp-sm font-bold text-gray-800 mb-3">
        Com que frequência o comportamento indesejado do seu cão causa estresse?
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
            <span className="flex-1 text-resp-sm font-semibold text-gray-700">{opt.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step2Frequency;
