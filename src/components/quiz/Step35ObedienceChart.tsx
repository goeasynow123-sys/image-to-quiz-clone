import QuizCTAButton from "./QuizCTAButton";

interface Step35Props {
  dogName: string;
  onNext: () => void;
}

const Step35ObedienceChart = ({ dogName, onNext }: Step35Props) => {
  return (
    <div className="flex flex-col h-[100dvh] overflow-hidden quiz-step-enter">
      {/* Fixed Header Area */}
      <div className="px-5 pt-6 pb-2 bg-background z-10">
        <h1 className="mt-0 text-lg sm:text-xl font-bold text-foreground text-center mb-1 leading-snug">
          Nível de obediência de {dogName}
        </h1>
      </div>

      {/* Scrollable Content Area (Optimized for no scroll) */}
      <div className="flex-1 overflow-y-auto px-5 pb-32 touch-pan-y flex flex-col items-center">
        {/* Chart Area - Scaled down for mobile */}
        <div className="relative w-full max-w-[320px] h-[180px] mb-4 mt-4">
          <svg viewBox="0 0 360 220" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="curveGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(0, 84%, 60%)" />
                <stop offset="25%" stopColor="hsl(25, 95%, 53%)" />
                <stop offset="50%" stopColor="hsl(48, 96%, 53%)" />
                <stop offset="75%" stopColor="hsl(142, 71%, 45%)" />
                <stop offset="100%" stopColor="hsl(207, 70%, 55%)" />
              </linearGradient>
              <linearGradient id="fillGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(0, 84%, 60%)" stopOpacity="0.25" />
                <stop offset="50%" stopColor="hsl(48, 96%, 53%)" stopOpacity="0.12" />
                <stop offset="100%" stopColor="hsl(207, 70%, 55%)" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path d="M30,170 C80,165 100,140 130,130 C160,120 200,100 230,70 C260,40 290,20 330,10 L330,190 L30,190 Z" fill="url(#fillGradient)" />
            <path d="M30,170 C80,165 100,140 130,130 C160,120 200,100 230,70 C260,40 290,20 330,10" fill="none" stroke="url(#curveGradient)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="30" r="6" cy="170" fill="white" stroke="hsl(0, 84%, 60%)" strokeWidth="3" />
            <circle cx="120" r="6" cy="135" fill="white" stroke="hsl(25, 95%, 53%)" strokeWidth="3" />
            <circle cx="210" r="6" cy="85" fill="white" stroke="hsl(48, 96%, 53%)" strokeWidth="3" />
            <circle cx="280" r="6" cy="35" fill="white" stroke="hsl(142, 71%, 45%)" strokeWidth="3" />
            <circle cx="330" r="6" cy="12" fill="white" stroke="hsl(207, 70%, 55%)" strokeWidth="3" />
            
            <rect x="5" y="148" width="55" height="22" rx="6" fill="hsl(220, 20%, 15%)" />
            <text x="32" y="163" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Hoje</text>
            
            <rect x="215" y="8" width="115" height="26" rx="8" fill="hsl(10, 80%, 55%)" />
            <text x="272" y="26" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Depois do desafio</text>
            
            <text x="30" y="210" textAnchor="middle" fill="hsl(0, 84%, 60%)" fontSize="11" fontWeight="bold">SEM 1</text>
            <text x="120" y="210" textAnchor="middle" fill="hsl(25, 95%, 53%)" fontSize="11" fontWeight="bold">SEM 2</text>
            <text x="210" y="210" textAnchor="middle" fill="hsl(48, 96%, 53%)" fontSize="11" fontWeight="bold">SEM 3</text>
            <text x="300" y="210" textAnchor="middle" fill="hsl(142, 71%, 45%)" fontSize="11" fontWeight="bold">SEM 4</text>
          </svg>
        </div>

        <p className="text-muted-foreground text-center text-[11px] sm:text-xs mb-4 px-6 leading-relaxed">
          Este gráfico mostra seu potencial de progresso se você seguir todas as etapas listadas em nosso plano.
        </p>

        <h2 className="text-center text-base sm:text-lg font-bold mb-1 px-6 leading-tight">
          <span className="text-primary">O desafio de obediência canina</span>{" "}
          <span className="text-foreground">de {dogName} está pronto.</span>
        </h2>
      </div>

      <QuizCTAButton onClick={onNext}>Continuar</QuizCTAButton>
    </div>
  );
};

export default Step35ObedienceChart;
