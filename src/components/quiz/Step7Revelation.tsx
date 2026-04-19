import React, { useEffect, useState } from "react";

interface Step7RevelationProps {
  dogName: string;
  breed: string;
  challenges: string[];
  obedienceLevel: number;
  onNext: () => void;
}

const objectiveMap: Record<string, string> = {
  "Ele me ignora completamente quando o chamo.": "Resposta Imediata ao Chamado",
  "Puxa a guia sem parar durante os passeios.": "Domínio de Passeio e Guia Frouxa",
  "Destrói objetos em casa quando fica sozinho.": "Controle de Ansiedade e Destruição",
  "Late excessivamente para visitas ou outros cães.": "Modulação de Reatividade e Latidos",
  "Faz as necessidades no lugar errado, mesmo depois de treinado.": "Reeducação Sanitária Avançada",
  "Demonstra agressividade com pessoas ou outros animais.": "Socialização e Controle de Impulsos",
};

const Step7Revelation: React.FC<Step7RevelationProps> = ({ dogName, breed, challenges, obedienceLevel, onNext }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const objective = objectiveMap[challenges[0]] || "Obediência e Foco Total";

  return (
    <div className="quiz-screen quiz-scroll">
      <div className="text-center mb-3">
        <span className="inline-block bg-green-100 text-green-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-2">
          ✅ Diagnóstico Concluído
        </span>
        <h1 className="text-base font-black text-gray-900 leading-tight mb-1">
          Parabéns! O plano de {dogName} está pronto!
        </h1>
        <p className="text-gray-500 text-xs leading-relaxed">
          O Protocolo POI vai transformar {dogName} em apenas 21 dias!
        </p>
      </div>

      {/* Resumo */}
      <div className="quiz-card mb-3">
        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Resumo do Diagnóstico</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center border-b border-gray-50 pb-1.5">
            <span className="text-gray-500 text-xs">Objetivo:</span>
            <span className="text-gray-900 text-xs font-bold text-right ml-2">{objective}</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-50 pb-1.5">
            <span className="text-gray-500 text-xs">Raça:</span>
            <span className="text-gray-900 text-xs font-bold">{breed || "Não informada"}</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-50 pb-1.5">
            <span className="text-gray-500 text-xs">Nível Atual:</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-2 h-1 rounded-full ${i <= obedienceLevel ? "bg-primary" : "bg-gray-100"}`} />
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-xs">Personalidade:</span>
            <span className="text-primary text-xs font-bold italic">Perfil Único POI</span>
          </div>
        </div>
      </div>

      {/* Gráfico */}
      <div className="quiz-card mb-3">
        <div className="mb-2">
          <h4 className="text-gray-900 font-black text-sm leading-none">Evolução em 21 Dias</h4>
          <p className="text-gray-400 text-[9px] mt-0.5 uppercase tracking-widest font-bold">Projeção de Obediência POI</p>
        </div>

        <div className="relative h-28 w-full">
          <svg viewBox="0 0 400 250" className="w-full h-full overflow-visible">
            <line x1="0" y1="220" x2="400" y2="220" stroke="#f3f4f6" strokeWidth="1" />
            <line x1="0" y1="160" x2="400" y2="160" stroke="#f3f4f6" strokeWidth="1" />
            <line x1="0" y1="100" x2="400" y2="100" stroke="#f3f4f6" strokeWidth="1" />
            <line x1="0" y1="40" x2="400" y2="40" stroke="#f3f4f6" strokeWidth="1" />

            <path
              d="M30,220 C100,210 180,160 230,100 C280,40 350,20 380,10"
              fill="none"
              stroke="url(#triColorGradient)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray="800"
              strokeDashoffset={animate ? "0" : "800"}
              className="transition-all duration-[3000ms] ease-out"
            />

            <g className={`transition-all duration-500 ${animate ? "opacity-100" : "opacity-0"}`}>
              <circle cx="30" cy="220" r="6" fill="#2467a3" />
              <text x="30" y="200" textAnchor="middle" className="text-[14px] font-black fill-[#2467a3] uppercase">Dia 1-7</text>
            </g>
            <g className={`transition-all duration-500 delay-1000 ${animate ? "opacity-100" : "opacity-0"}`}>
              <circle cx="230" cy="100" r="6" fill="#60a5fa" />
              <text x="230" y="80" textAnchor="middle" className="text-[14px] font-black fill-blue-400 uppercase">Dia 8-14</text>
            </g>
            <g className={`transition-all duration-500 delay-2000 ${animate ? "opacity-100" : "opacity-0"}`}>
              <circle cx="380" cy="10" r="8" fill="#10b981" />
              <text x="380" y="35" textAnchor="middle" className="text-[14px] font-black fill-emerald-500 uppercase">Dia 15-21</text>
            </g>

            <defs>
              <linearGradient id="triColorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2467a3" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="mt-2 bg-gray-50 rounded-xl p-2 border border-gray-100">
          <p className="text-[10px] text-gray-500 leading-relaxed text-center italic font-medium">
            "{dogName} atingirá o pico de obediência instintiva na terceira semana do protocolo."
          </p>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-3 mb-3">
        <p className="text-gray-700 leading-relaxed text-xs text-center">
          Com o POI, você aprenderá a se comunicar com <strong>{dogName}</strong> na linguagem que ele realmente entende: a do instinto.
        </p>
      </div>

      <div className="cta-bar">
        <button onClick={onNext} className="btn-primary">
          Ver meu plano completo
        </button>
      </div>
    </div>
  );
};

export default Step7Revelation;
