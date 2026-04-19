import { ChevronLeft } from "lucide-react";
import logo from "@/assets/logo-pawchamp.png";

interface QuizHeaderProps {
  onBack?: () => void;
  showBack?: boolean;
  progress?: number;
}

const QuizHeader = ({ onBack, showBack = false, progress }: QuizHeaderProps) => {
  return (
    <div className="bg-background flex-shrink-0">
      {/* Logo row */}
      <div className="flex items-center justify-center relative px-4 py-2">
        {showBack && onBack && (
          <button
            onClick={onBack}
            className="absolute left-3 w-10 h-10 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
            aria-label="Voltar"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
        )}
        {/* Logo menor: h-6 = 24px */}
        <img src={logo} alt="PawChamp" className="h-6" />
      </div>

      {/* Barra de progresso */}
      {progress !== undefined && (
        <div className="h-1 bg-gray-100 mx-4 rounded-full overflow-hidden mb-1">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${Math.max(progress * 100, 3)}%`,
              background: "linear-gradient(to right, hsl(var(--quiz-cta-from)), hsl(var(--quiz-cta-to)))",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default QuizHeader;
