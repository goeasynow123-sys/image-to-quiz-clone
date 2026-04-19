import { useState } from "react";
import QuizCTAButton from "./QuizCTAButton";

interface Step30Props {
  onNext: (name: string) => void;
}

const Step30DogName = ({ onNext }: Step30Props) => {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col h-[calc(100vh-60px)] overflow-hidden quiz-step-enter pb-32">
      <div className="flex-1 px-5 pt-6 sm:pt-6 sm:pt-10">
        <div className="text-center mb-3 sm:mb-4 sm:mb-6">
          <span className="text-2xl sm:text-3xl sm:text-4xl sm:text-5xl">🐶</span>
        </div>
        <h1 className="mt-0 text-lg sm:text-xl sm:text-2xl font-bold text-foreground text-center mb-3 sm:mb-4 sm:mb-6 leading-snug">
          O nome do seu cão é...
        </h1>
        <label className="text-xs sm:text-sm text-muted-foreground mb-2 block font-medium">
          Digite o nome do seu cão:
        </label>
        <input
          type="text"
          placeholder="Ex: Rex, Luna, Thor..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border-2 border-border rounded-xl sm:rounded-2xl px-4 sm:px-5 py-4 sm:py-5 text-foreground bg-background outline-none
                     focus:border-accent text-base sm:text-lg font-medium transition-colors"
          autoFocus
        />
      </div>

      <QuizCTAButton onClick={() => onNext(name)} disabled={!name.trim()}>
        Continuar
      </QuizCTAButton>
    </div>
  );
};

export default Step30DogName;
