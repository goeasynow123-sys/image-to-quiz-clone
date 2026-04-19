import React from "react";

interface Step8SocialProofProps {
  onNext: () => void;
}

const Step8SocialProof: React.FC<Step8SocialProofProps> = ({ onNext }) => {
  return (
    <div className="quiz-screen quiz-scroll">
      <div className="mb-3">
        <h1 className="text-base font-black text-gray-900 leading-tight mb-1.5">
          +10.000 tutores brasileiros já transformaram seus cães com o POI!
        </h1>
        <p className="text-gray-500 text-sm">
          Veja o que estão dizendo sobre o Protocolo de Obediência por Instinto.
        </p>
      </div>

      <div className="w-full aspect-square bg-gray-50 rounded-xl mb-3 flex items-center justify-center border-2 border-dashed border-gray-200 overflow-hidden">
        <span className="text-gray-400 text-xs italic">[Mosaico de fotos de tutores felizes]</span>
      </div>

      <div className="space-y-3 mb-3">
        <div className="quiz-card italic text-gray-600 text-sm">
          "O POI é a abordagem mais inovadora que vi no adestramento canino. Respeita a natureza do cão e empodera o tutor."
          <span className="block mt-1.5 font-bold not-italic text-gray-900 text-sm">— Dr. Ricardo Silva (Etologista)</span>
        </div>

        <div className="bg-primary/10 border border-primary/10 rounded-2xl p-3 text-center">
          <p className="text-primary font-black text-2xl">70% mais rápido</p>
          <p className="text-gray-600 text-xs">Taxa de aprendizado superior a métodos tradicionais</p>
        </div>
      </div>

      <div className="cta-bar">
        <button onClick={onNext} className="btn-primary">
          Receber Meu Plano Personalizado
        </button>
      </div>
    </div>
  );
};

export default Step8SocialProof;
