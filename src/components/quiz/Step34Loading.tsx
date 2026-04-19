import { useState, useEffect } from "react";

interface Step34Props {
  dogName: string;
  onNext: () => void;
}

const messages = [
  "Revendo objetivo...",
  "Ajustando para idade e raça...",
  "Implementando o protocolo POI...",
  "Calculando cronograma de 21 dias...",
  "Finalizando diagnóstico personalizado...",
  "Devido ao alto número de usuários ativos, isso pode demorar um pouco...",
];

const Step34Loading = ({ dogName, onNext }: Step34Props) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const duration = 6000;
    const intervalTime = 40;
    const totalSteps = duration / intervalTime;
    const stepIncrement = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onNext, 300);
          return 100;
        }
        return prev + stepIncrement;
      });
    }, intervalTime);

    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => (prev < messages.length - 1 ? prev + 1 : prev));
    }, duration / messages.length);

    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
    };
  }, [onNext]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-2.5 bg-background animate-in fade-in duration-500">
      <div className="w-full max-w-md text-center">
        <h2 className="text-sm font-black text-gray-900 mb-4 leading-tight">
          Fazendo ajustes finais no plano personalizado de {dogName}
        </h2>

        <div className="relative w-full h-3 bg-gray-100 rounded-full overflow-hidden mb-3 border border-gray-200 shadow-inner">
          <div
            className="h-full bg-primary transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-primary font-black text-2xl">{Math.round(progress)}%</span>
          <p className="text-gray-500 font-bold text-xs animate-pulse min-h-[1rem]">
            {messages[messageIndex]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step34Loading;
