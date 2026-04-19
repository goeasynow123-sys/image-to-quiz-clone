import React, { useState } from "react";

interface Step6ObedienceSliderProps {
  onSelect: (value: number) => void;
}

const Step6ObedienceSlider: React.FC<Step6ObedienceSliderProps> = ({ onSelect }) => {
  const [value, setValue] = useState<number | null>(null);

  const handleSelect = (num: number) => {
    setValue(num);
  };

  return (
    <div className="quiz-screen animate-in fade-in slide-in-from-right duration-500">
      <div className="mb-6 text-center">
        <h1 className="text-resp-lg font-black text-gray-900 leading-tight mb-2">
          Vamos ser honestos: qual o nível de obediência do seu cão hoje?
        </h1>
        <p className="text-gray-600 text-resp-sm font-medium leading-relaxed">
          Não se preocupe, estamos aqui para ajudar a transformá-lo em um cão exemplar!
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center">
        {/* Barra de Obediência com Preenchimento Proporcional */}
        <div className="w-full relative py-6">
          <div className="absolute top-1/2 left-0 w-full h-6 rounded-full -translate-y-1/2 overflow-hidden bg-gray-100 border border-gray-200 shadow-inner">
            <div
              className="h-full transition-all duration-700 ease-out"
              style={{
                width: value ? `${(value / 5) * 100}%` : "0%",
                background: "linear-gradient(to right, #ef4444, #fbbf24, #10b981)",
                opacity: value ? 1 : 0.2
              }}
            />
          </div>

          <div className="flex justify-between mt-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">
            <span className={value === 1 ? "text-red-500 transition-colors" : ""}>Totalmente Desobediente</span>
            <span className={value === 5 ? "text-green-500 transition-colors" : ""}>Um Anjo</span>
          </div>
        </div>

        {/* Seleção por Números 1 a 5 */}
        <div className="flex justify-between w-full max-w-sm mt-6 gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => handleSelect(num)}
              className={`w-12 h-12 rounded-2xl border-2 font-black text-base transition-all duration-300 flex items-center justify-center ${
                value === num
                  ? "border-primary bg-primary text-white scale-110 shadow-xl shadow-primary/30"
                  : "border-gray-100 bg-white text-gray-400 hover:border-gray-200 hover:bg-gray-50"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <div className="cta-bar mt-auto">
        <button
          onClick={() => value && onSelect(value)}
          disabled={!value}
          className={`btn-primary ${!value ? "opacity-50 grayscale cursor-not-allowed" : "cta-pulse"}`}
        >
          Confirmar Nível
        </button>
      </div>
    </div>
  );
};

export default Step6ObedienceSlider;
