import QuizCTAButton from "./QuizCTAButton";

interface AgreementScaleProps {
  title: string;
  subtitle: string;
  onSelect: (value: number) => void;
  selected: number;
  image?: string;
  onNext?: () => void;
}

const emojis = ["👎", "👎", "😐", "👍", "👍"];
const sizes = [44, 36, 32, 36, 44];

const AgreementScale = ({ title, subtitle, onSelect, selected, image, onNext }: AgreementScaleProps) => {
  return (
    <div className="flex flex-col h-[calc(100vh-80px)] overflow-hidden pb-32 quiz-step-enter">
      <div className="flex-1 px-6 pt-6 sm:pt-10 flex flex-col items-center">
        {image && (
          <div className="w-full max-w-[180px] sm:max-w-[280px] aspect-video rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8 shadow-sm opacity-90">
            <img src={image} alt="Ilustração" className="w-full h-full object-cover" />
          </div>
        )}
        
        <h1 className="mt-0 text-xl sm:text-2xl font-extrabold text-foreground text-center mb-4 sm:mb-6 leading-[1.3] tracking-tight px-2">
          {title}
        </h1>
        
        <p className="text-sm sm:text-base text-muted-foreground text-center leading-relaxed px-4 mb-8 sm:mb-12">
          {subtitle}
        </p>

        <div className="w-full max-w-sm mx-auto">
          <div className="flex justify-center gap-3 sm:gap-4 mb-4">
            {emojis.map((emoji, i) => (
              <button
                key={i}
                onClick={() => onSelect(i)}
                className={`flex items-center justify-center rounded-2xl border-2 transition-all duration-300 active:scale-90
                  ${selected === i 
                    ? "border-primary bg-primary/5 scale-110 shadow-lg shadow-primary/10" 
                    : "border-border bg-background hover:border-primary/30"}`}
                style={{ width: 60, height: 60, fontSize: sizes[i] * 0.9 }}
              >
                <span className={selected === i ? "filter-none" : "grayscale-[0.3]"}>{emoji}</span>
              </button>
            ))}
          </div>
          
          <div className="flex justify-between px-2">
            <span className="text-[10px] sm:text-xs text-muted-foreground font-bold uppercase tracking-widest opacity-70">Discordo</span>
            <span className="text-[10px] sm:text-xs text-muted-foreground font-bold uppercase tracking-widest opacity-70">Concordo</span>
          </div>
        </div>
      </div>

      {onNext && (
        <QuizCTAButton onClick={onNext} disabled={selected === -1}>
          Continuar
        </QuizCTAButton>
      )}
    </div>
  );
};

export default AgreementScale;
