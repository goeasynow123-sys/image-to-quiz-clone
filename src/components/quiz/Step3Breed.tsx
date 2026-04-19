import React, { useState } from "react";

interface Step3BreedProps {
  onNext: (breed: string) => void;
  onDogName: (name: string) => void;
}

const popularBreeds = [
  "Vira-Lata (SRD)", "Labrador", "Pit Bull",
  "Pastor Alemão", "Golden Retriever",
  "Buldogue Francês", "Chihuahua", "Poodle",
  "Border Collie", "Shih Tzu", "Spitz Alemão",
  "Yorkshire", "Beagle", "Pinscher", "Misto",
];

const Step3Breed: React.FC<Step3BreedProps> = ({ onNext, onDogName }) => {
  const [selectedBreed, setSelectedBreed] = useState("");
  const [customBreed, setCustomBreed] = useState("");
  const [name, setName] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleContinue = () => {
    if (name.trim()) {
      onDogName(name.trim());
      const finalBreed = showCustomInput ? customBreed.trim() : selectedBreed;
      onNext(finalBreed || "Não informado");
    }
  };

  const canContinue = name.trim() && (selectedBreed || (showCustomInput && customBreed.trim()));

  return (
    <div className="quiz-screen">
      <div className="mb-2.5">
        <h1 className="text-resp-lg font-black text-gray-900 leading-tight mb-1">
          Raça, nome e personalidade do seu cão.
        </h1>
        <p className="text-gray-500 text-resp-xs">
          Esses detalhes ajudam a traçar o perfil ideal para o Protocolo POI.
        </p>
      </div>

      <div className="quiz-scroll space-y-3 pb-3">
        <div>
          <h2 className="text-resp-sm font-bold text-gray-800 mb-2">Qual a raça do seu cão?</h2>
          <div className="flex flex-wrap gap-1.5 mb-2">
            {popularBreeds.map((breed) => (
              <button
                key={breed}
                onClick={() => {
                  setSelectedBreed(breed);
                  setShowCustomInput(false);
                  setCustomBreed("");
                }}
                className={`quiz-chip ${selectedBreed === breed && !showCustomInput ? "quiz-chip-selected" : ""}`}
              >
                {breed}
              </button>
            ))}
            <button
              onClick={() => { setShowCustomInput(true); setSelectedBreed(""); }}
              className={`quiz-chip ${showCustomInput ? "quiz-chip-selected" : ""}`}
            >
              Outra raça...
            </button>
          </div>
          {showCustomInput && (
            <input
              type="text"
              placeholder="Digite a raça do seu cão..."
              className="quiz-input animate-in slide-in-from-top-1 duration-200"
              value={customBreed}
              onChange={(e) => setCustomBreed(e.target.value)}
              autoFocus
            />
          )}
        </div>

        <div>
          <h2 className="text-resp-sm font-bold text-gray-800 mb-2">Qual o nome do seu companheiro?</h2>
          <input
            type="text"
            placeholder="Nome do cão"
            className="quiz-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      <div className="cta-bar">
        <button onClick={handleContinue} disabled={!canContinue} className="btn-primary">
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Step3Breed;
