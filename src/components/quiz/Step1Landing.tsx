import React from "react";

interface Step1LandingProps {
  onNext: () => void;
}

const Step1Landing: React.FC<Step1LandingProps> = ({ onNext }) => {
  return (
    <div className="quiz-screen">
      <div className="mb-3 text-center">
        <h1 className="text-resp-xl font-black text-gray-900 leading-tight mb-2">
          Seu cão te ignora? Descubra o porquê e como mudar isso!
        </h1>
        <p className="text-gray-500 text-resp-sm leading-relaxed">
          Responda algumas perguntas rápidas e receba um diagnóstico personalizado para o comportamento do seu melhor amigo.
        </p>
      </div>

      <div className="w-full aspect-video bg-gray-50 rounded-2xl mb-3 flex items-center justify-center border-2 border-dashed border-gray-200 overflow-hidden">
        <span className="text-gray-400 text-xs italic">[Imagem: Cão com expressão de desobediência]</span>
      </div>

      <div className="cta-bar mt-auto">
        <button onClick={onNext} className="btn-primary cta-pulse">
          Começar Agora
        </button>
      </div>
    </div>
  );
};

export default Step1Landing;
