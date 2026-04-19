import QuizCTAButton from "./QuizCTAButton";

interface Step33Props {
  dogName: string;
  onNext: () => void;
}

const Step33Challenge = ({ dogName, onNext }: Step33Props) => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 25);
  const months = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
  ];
  const dateStr = `${targetDate.getDate()} de ${months[targetDate.getMonth()]} de ${targetDate.getFullYear()}`;

  const bars = [
    { height: 40, colors: ["hsl(0 84% 60%)", "hsl(25 95% 53%)"] },
    { height: 60, colors: ["hsl(25 95% 53%)", "hsl(48 96% 53%)"] },
    { height: 90, colors: ["hsl(48 96% 53%)", "hsl(84 81% 44%)"] },
    { height: 110, colors: ["hsl(84 81% 44%)", "hsl(142 71% 45%)"] },
    { height: 130, colors: ["hsl(142 71% 45%)", "hsl(190 80% 46%)"] },
    { height: 150, colors: ["hsl(190 80% 46%)", "hsl(207 70% 55%)"] },
  ];

  return (
    <div className="flex flex-col h-[100dvh] overflow-hidden quiz-step-enter">
      {/* Fixed Header Area */}
      <div className="px-5 pt-6 pb-2 bg-background z-10">
        <h1 className="mt-0 text-lg sm:text-xl font-bold text-foreground text-center mb-1 leading-snug">
          {dogName} está totalmente preparada para o Desafio de Obediência Canina!
        </h1>
      </div>

      {/* Scrollable Content Area (Optimized for no scroll) */}
      <div className="flex-1 overflow-y-auto px-5 pb-32 touch-pan-y flex flex-col items-center">
        <p className="text-muted-foreground text-center text-xs mb-1 px-4 mt-4">
          Com base nas suas respostas, esperamos que você aumente o nível de obediência de {dogName} até:
        </p>
        <p className="text-center font-bold text-primary text-base mb-6">
          {dateStr}
        </p>

        {/* Bars Chart - Scaled down for mobile */}
        <div className="flex items-end justify-center gap-1.5 mb-6 h-40">
          {bars.map((bar, i) => (
            <div key={i} className="relative flex flex-col items-center">
              {i === 4 && (
                <div className="absolute -top-7 bg-foreground text-background text-[10px] font-bold px-2 py-0.5 rounded-md">
                  Meta
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[3px] border-r-[3px] border-t-[3px] border-transparent border-t-foreground" />
                </div>
              )}
              <div
                className="w-9 rounded-t-md"
                style={{
                  height: bar.height,
                  background: `linear-gradient(to top, ${bar.colors[0]}, ${bar.colors[1]})`,
                  opacity: i <= 4 ? 1 : 0.7,
                }}
              />
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-center text-[10px] sm:text-xs px-6 leading-relaxed">
          Este gráfico mostra seu potencial de progresso se você seguir todas as etapas listadas em nosso plano.
        </p>
      </div>

      <QuizCTAButton onClick={onNext}>Continuar</QuizCTAButton>
    </div>
  );
};

export default Step33Challenge;
