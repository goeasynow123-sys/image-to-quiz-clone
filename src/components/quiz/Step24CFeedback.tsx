import QuizCTAButton from "./QuizCTAButton";

interface Step24CFeedbackProps {
  onNext: () => void;
}

const Step24CFeedback = ({ onNext }: Step24CFeedbackProps) => {
  return (
    <div className="flex-1 flex flex-col items-center px-6 pt-6 sm:pt-10 quiz-step-enter">
      <h1 className="mt-0 text-xl sm:text-2xl font-bold text-foreground text-center mb-6 leading-snug">
        Obrigado por compartilhar!
      </h1>

      <div className="w-full max-w-[280px] aspect-video rounded-2xl overflow-hidden mb-8 shadow-md">
        <img 
          src="https://images.paw-champ.com/fb/assets/e64581fe-bdef-4d25-a61b-427492916374.webp" 
          alt="Feedback" 
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-base sm:text-lg text-foreground text-center leading-relaxed px-2 mb-12">
        Você não está sozinho — muitas pessoas se sentem da mesma forma. Nosso Desafio de Obediência Canina se encaixa na sua rotina diária, e não a sobrecarrega.
      </p>

      <QuizCTAButton onClick={onNext}>Continuar</QuizCTAButton>
    </div>
  );
};

export default Step24CFeedback;
