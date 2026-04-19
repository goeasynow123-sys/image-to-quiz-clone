import React, { useState } from "react";

interface Step9EmailCaptureProps {
  dogName: string;
  onNext: (email: string) => void;
}

const Step9EmailCapture: React.FC<Step9EmailCaptureProps> = ({ dogName, onNext }) => {
  const [email, setEmail] = useState("");
  const isValid = email.includes("@") && email.includes(".");

  const handleSubmit = () => {
    if (isValid) onNext(email);
  };

  return (
    <div className="quiz-screen">
      <div className="mb-3">
        <h1 className="text-base font-black text-gray-900 leading-tight mb-1.5">
          Receba o plano completo de {dogName} no seu e-mail!
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          Digite seu melhor e-mail para ter acesso imediato ao plano personalizado e descobrir como o POI pode mudar sua vida com {dogName}.
        </p>
      </div>

      <div className="w-full aspect-video bg-gray-50 rounded-xl mb-4 flex items-center justify-center border-2 border-dashed border-gray-200 overflow-hidden">
        <span className="text-gray-400 text-xs italic">[Imagem: E-mail com Plano POI]</span>
      </div>

      <input
        type="email"
        placeholder="Digite seu e-mail aqui"
        className="quiz-input mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        autoComplete="email"
        inputMode="email"
      />

      <div className="cta-bar mt-auto">
        <button onClick={handleSubmit} disabled={!isValid} className="btn-primary">
          Receber Meu Plano Agora!
        </button>
        <p className="text-center text-gray-400 mt-2 text-[11px]">
          🔒 Seus dados estão seguros. Sem spam, prometemos!
        </p>
      </div>
    </div>
  );
};

export default Step9EmailCapture;
