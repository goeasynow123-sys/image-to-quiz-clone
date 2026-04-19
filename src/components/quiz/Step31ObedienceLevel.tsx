import QuizCTAButton from "./QuizCTAButton";
import womanDogsImg from "@/assets/woman-dogs-surprised.png";

interface Step31Props {
  dogName: string;
  onNext: () => void;
  age?: string;
  breed?: string;
  goal?: string;
  behaviors?: string[];
  gender?: string;
}

const ageLabelMap: Record<string, string> = {
  puppy: "Filhote",
  adolescent: "Adolescente",
  adult: "Adulto",
  senior: "Idoso",
};

const behaviorLabelMap: Record<string, string> = {
  energy: "Energia excessiva",
  aggression: "Agressão",
  pulling: "Puxar a guia",
  anxiety: "Ansiedade de separação",
  barking: "Latidos excessivos",
  destructive: "Comportamento destrutivo",
  commands: "Aprender novos comandos",
};

const Step31ObedienceLevel = ({ dogName, onNext, age, breed, goal, behaviors, gender }: Step31Props) => {
  const isFemale = gender === "female";
  const art = isFemale ? "a" : "o";
  const artPrep = isFemale ? "da" : "do";

  const behaviorCount = behaviors?.length || 2;
  const score = Math.max(1.5, Math.min(4.5, 5 - behaviorCount * 0.6));
  const scoreStr = score.toFixed(1);
  const scorePercent = (score / 10) * 100;

  const isLow = score < 4;

  const behaviorTexts = (behaviors || [])
    .filter(b => !b.startsWith("other:"))
    .slice(0, 2)
    .map(b => behaviorLabelMap[b] || b);
  const problemsText = behaviorTexts.length > 0 ? behaviorTexts.join(", ") : "Agressão, ansiedade de separação";

  const responsiveness = age === "puppy" ? "Médio" : age === "senior" ? "Baixo" : "Baixo";
  const trainability = age === "puppy" ? "Alto" : age === "adult" ? "Médio" : "Médio";

  const breedLabel = breed || "Raça mista";
  const ageLabel = age ? ageLabelMap[age] || "" : "";
  const breedDisplay = ageLabel ? `${ageLabel} de ${breedLabel}` : breedLabel;

  const goalDisplay = goal === "bond" 
    ? `Fortalecer o vínculo com ${art} ${dogName}`
    : goal === "commands"
    ? "Aprender comandos úteis"
    : "Melhorar a obediência";

  return (
    <div className="flex flex-col h-[calc(100vh-60px)] overflow-hidden quiz-step-enter pb-32">
      <div className="flex-1 px-5 pt-2 sm:pt-4">
        <h1 className="mt-0 text-lg sm:text-xl sm:text-[1.4rem] font-bold text-foreground text-center mb-5 leading-snug">
          {dogName} está totalmente preparad{art} para o Desafio de Obediência Canina!
        </h1>

        <div className="border border-border rounded-2xl p-5 mb-3 sm:mb-4 shadow-sm">

          <div className="flex flex-col gap-3 sm:gap-4 sm:gap-4">
            {[
              { icon: "🐾", label: "Problemas de comportamento", value: problemsText },
              { icon: "💬", label: "Capacidade de resposta", value: responsiveness },
              { icon: "📋", label: "Treinabilidade", value: trainability },
              { icon: "🎯", label: "Prontidão para começar", value: "Perfeito" },
              { icon: "🐕", label: "Raça", value: breedDisplay },
              { icon: "🎯", label: "Objetivo:", value: goalDisplay },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 sm:gap-4">
                <span className="text-lg sm:text-xl">{item.icon}</span>
                <div>
                  <p className="text-muted-foreground text-xs">{item.label}</p>
                  <p className="text-foreground font-bold text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end -mt-16 mr-2">
          <img src={womanDogsImg} alt="Mulher com cães" className="w-36 h-36 object-contain" loading="lazy" width={144} height={144} />
        </div>
      </div>

      <QuizCTAButton onClick={onNext}>Continuar</QuizCTAButton>
    </div>
  );
};

export default Step31ObedienceLevel;
