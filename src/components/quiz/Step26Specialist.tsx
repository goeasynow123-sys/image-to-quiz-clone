import QuizCTAButton from "./QuizCTAButton";
import dogImg from "@/assets/dog-anatomy.png";

interface Step26Props {
  onNext: () => void;
}

const Step26Specialist = ({ onNext }: Step26Props) => {
  return (
    <div className="flex flex-col h-[100dvh] overflow-hidden quiz-step-enter">
      {/* Fixed Header Area */}
      <div className="px-5 pt-6 pb-2 bg-background z-10">
        <h1 className="mt-0 text-lg sm:text-xl font-bold text-foreground text-center mb-1 leading-snug">
          O seu Desafio de Obediência Canina será analisado por{" "}
          <span className="text-accent">um especialista em comportamento canino.</span>
        </h1>
      </div>

      {/* Scrollable Content Area (though we aim for no scroll) */}
      <div className="flex-1 overflow-y-auto px-5 pb-32 touch-pan-y flex flex-col items-center">
        {/* Anatomy Image with Badges - Scaled down for mobile */}
        <div className="relative w-48 h-40 mb-2 sm:mb-4 mt-2">
          <div className="w-36 h-36 rounded-full bg-muted mx-auto flex items-center justify-center overflow-hidden">
            <img src={dogImg} alt="Anatomia do cão" className="w-32 h-32 object-contain" loading="lazy" />
          </div>
          <div className="absolute top-2 -left-2 bg-background border border-border rounded-lg px-2 py-1 text-[10px] sm:text-xs font-bold text-foreground shadow-sm">
            Comportamento
          </div>
          <div className="absolute top-2 -right-2 bg-background border border-border rounded-lg px-2 py-1 text-[10px] sm:text-xs font-bold text-foreground shadow-sm">
            Motivação
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-background border border-border rounded-lg px-2 py-1 text-[10px] sm:text-xs font-bold text-foreground shadow-sm">
            Treinamento
          </div>
        </div>

        <p className="text-muted-foreground text-center text-xs sm:text-sm italic mb-4 leading-relaxed px-2">
          "O Desafio POI incorpora o treinamento por reforço positivo para fornecer conteúdo e recursos adaptados a cada tutor de cão, visando um treinamento canino aprimorado."
        </p>

        {/* Specialist Card - Compacted */}
        <div className="w-full max-w-sm rounded-2xl overflow-hidden mb-2 shadow-sm border border-border">
          <div className="py-2 px-4 text-center text-primary-foreground text-[11px] sm:text-xs font-bold"
            style={{ background: "linear-gradient(to right, hsl(var(--quiz-cta-from)), hsl(var(--quiz-cta-to)))" }}>
            CONTEÚDO REVISADO POR UM ESPECIALISTA
          </div>
          <div className="bg-muted/50 p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0 shadow-sm">
              <span className="text-white text-lg">✓</span>
            </div>
            <div className="flex-1">
              <p className="text-foreground font-bold text-sm leading-tight">Dra. Lisa V.</p>
              <p className="text-muted-foreground text-[10px] sm:text-xs leading-tight mt-0.5">
                Neurobióloga e especialista certificada em cães, equipe Desafio POI
              </p>
            </div>
          </div>
        </div>
      </div>

      <QuizCTAButton onClick={onNext}>Continuar</QuizCTAButton>
    </div>
  );
};

export default Step26Specialist;
