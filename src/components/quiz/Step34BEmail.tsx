import { useState } from "react";
import QuizCTAButton from "./QuizCTAButton";

interface Step34BEmailProps {
  dogName: string;
  onNext: () => void;
}

const Step34BEmail = ({ dogName, onNext }: Step34BEmailProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleContinue = () => {
    if (!email) {
      setError("Por favor, insira seu e-mail.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }
    onNext();
  };

  return (
    <div className="flex-1 flex flex-col items-center px-6 pt-6 sm:pt-10 quiz-step-enter">
      <h1 className="mt-0 text-xl sm:text-2xl font-bold text-foreground text-center mb-6 leading-snug">
        Insira seu e-mail para receber o Desafio de Obediência Canina personalizado para {dogName}
      </h1>

      <div className="w-full max-w-md flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-bold text-foreground ml-1">
            Digite seu e-mail:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            placeholder="seu@email.com"
            className={`w-full p-4 rounded-2xl border-2 bg-background text-foreground text-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 ${
              error ? "border-destructive" : "border-border focus:border-primary"
            }`}
          />
          {error && <p className="text-destructive text-xs font-bold ml-1">{error}</p>}
        </div>

        <p className="text-xs text-muted-foreground text-center leading-relaxed px-4 mt-2">
          Insira seu e-mail para obter seu plano. Protegemos a sua privacidade e estamos empenhados em proteger os seus dados pessoais. Nunca enviamos emails de spam, apenas informações relevantes.
        </p>
      </div>

      <div className="mt-12 w-full">
        <QuizCTAButton onClick={handleContinue}>Continuar</QuizCTAButton>
      </div>
    </div>
  );
};

export default Step34BEmail;
