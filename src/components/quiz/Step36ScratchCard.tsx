import { useState, useRef, useEffect, useCallback } from "react";
import QuizCTAButton from "./QuizCTAButton";

interface Step36Props {
  dogName: string;
  onNext: () => void;
  gender?: string;
}

const ConfettiPiece = ({ delay, left, color, size }: { delay: number; left: number; color: string; size: number }) => (
  <div
    className="absolute animate-confetti-fall"
    style={{
      left: `${left}%`,
      top: "-10px",
      width: size,
      height: size * 1.4,
      backgroundColor: color,
      borderRadius: size > 6 ? "2px" : "50%",
      animationDelay: `${delay}ms`,
      animationDuration: `${2000 + Math.random() * 1500}ms`,
    }}
  />
);

const Step36ScratchCard = ({ dogName, onNext, gender }: Step36Props) => {
  const [revealed, setRevealed] = useState(false);
  const [showSheet, setShowSheet] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const cardWidth = 300;
  const cardHeight = 200;

  const isFemale = gender === "female";
  const art = isFemale ? "a" : "o";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, cardWidth, cardHeight);
    gradient.addColorStop(0, "#d4a856");
    gradient.addColorStop(0.3, "#f0d68a");
    gradient.addColorStop(0.5, "#d4a856");
    gradient.addColorStop(0.7, "#c49b3e");
    gradient.addColorStop(1, "#d4a856");
    ctx.fillStyle = gradient;

    const r = 16;
    ctx.beginPath();
    ctx.moveTo(r, 0);
    ctx.lineTo(cardWidth - r, 0);
    ctx.quadraticCurveTo(cardWidth, 0, cardWidth, r);
    ctx.lineTo(cardWidth, cardHeight - r);
    ctx.quadraticCurveTo(cardWidth, cardHeight, cardWidth - r, cardHeight);
    ctx.lineTo(r, cardHeight);
    ctx.quadraticCurveTo(0, cardHeight, 0, cardHeight - r);
    ctx.lineTo(0, r);
    ctx.quadraticCurveTo(0, 0, r, 0);
    ctx.fill();

    ctx.strokeStyle = "rgba(255,255,255,0.3)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(100, 140);
    ctx.bezierCurveTo(120, 60, 180, 120, 160, 50);
    ctx.bezierCurveTo(200, 90, 140, 110, 180, 40);
    ctx.stroke();

    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.font = "bold 14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("👆", cardWidth / 2, cardHeight / 2 + 10);
    ctx.fillText(`60% OFF no Desafio de ${dogName}!`, cardWidth / 2, cardHeight / 2 + 35);
  }, [dogName]);

  useEffect(() => {
    if (revealed) {
      setTimeout(() => {
        setShowConfetti(true);
        setShowSheet(true);
      }, 300);
    }
  }, [revealed]);

  const checkScratchPercent = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const imageData = ctx.getImageData(0, 0, cardWidth, cardHeight);
    let transparent = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }
    if ((transparent / (cardWidth * cardHeight)) * 100 > 35) {
      setRevealed(true);
    }
  }, []);

  const scratch = useCallback((x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
  }, []);

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = cardWidth / rect.width;
    const scaleY = cardHeight / rect.height;
    if ("touches" in e) {
      return { x: (e.touches[0].clientX - rect.left) * scaleX, y: (e.touches[0].clientY - rect.top) * scaleY };
    }
    return { x: (e.clientX - rect.left) * scaleX, y: (e.clientY - rect.top) * scaleY };
  };

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    isDrawing.current = true;
    const { x, y } = getPos(e);
    scratch(x, y);
  };
  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing.current) return;
    e.preventDefault();
    const { x, y } = getPos(e);
    scratch(x, y);
  };
  const handleEnd = () => {
    isDrawing.current = false;
    checkScratchPercent();
  };

  const confettiColors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#A78BFA", "#FB923C", "#34D399", "#F472B6", "#60A5FA"];
  const confettiPieces = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    delay: Math.random() * 800,
    left: Math.random() * 100,
    color: confettiColors[i % confettiColors.length],
    size: 4 + Math.random() * 6,
  }));

  return (
    <div className="flex flex-col h-[calc(100vh-60px)] overflow-hidden quiz-step-enter relative overflow-hidden">
      {/* Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {confettiPieces.map((p) => (
            <ConfettiPiece key={p.id} {...p} />
          ))}
        </div>
      )}

      <div className="flex-1 px-5 pt-6 sm:pt-6">
        <h1 className="mt-0 text-center text-lg sm:text-xl font-bold mb-2 px-2 leading-snug">
          <span className="text-foreground">Você completou o quiz! Raspe para ver seu prêmio especial.</span>
        </h1>

        <p className="text-muted-foreground text-center text-sm mb-3 sm:mb-4 sm:mb-6">
          Milhares de tutores já ganharam. Veja o que preparamos para você hoje!
        </p>

        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ width: cardWidth, height: cardHeight }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background border-2 border-dashed rounded-2xl"
              style={{ borderColor: "hsl(var(--quiz-success))" }}>
              <span className="text-5xl font-bold text-foreground">60%</span>
              <span className="text-foreground text-sm mt-2 text-center px-4">
                60% de desconto para {art} {dogName}.
              </span>
            </div>

            {!revealed && (
              <canvas
                ref={canvasRef}
                width={cardWidth}
                height={cardHeight}
                className="absolute inset-0 w-full h-full cursor-pointer rounded-2xl"
                style={{ touchAction: "none" }}
                onMouseDown={handleStart}
                onMouseMove={handleMove}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd}
              />
            )}
          </div>
        </div>
      </div>

      {/* Bottom Sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 ease-out ${
          showSheet ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-lg mx-auto bg-card border-t border-border rounded-t-3xl shadow-2xl px-6 pt-6 sm:pt-6 pb-32">
          <div className="w-12 h-1.5 bg-muted rounded-full mx-auto mb-3 sm:mb-4" />

          <div className="text-center">
            <div className="flex justify-center gap-1 text-2xl mb-3">
              🎊 🎉 🥳 🎉 🎊
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">60% de desconto para {art} {dogName}.</p>
            <p className="text-muted-foreground text-xs mb-5">*Este desconto será aplicado automaticamente</p>

            <QuizCTAButton onClick={() => { 
              if (typeof (window as any).fbq === 'function') (window as any).fbq('trackCustom', 'QuizCompleted'); 
              if (typeof (window as any).gtag === 'function') (window as any).gtag('event', 'quiz_complete');
              onNext(); 
            }}>Continuar</QuizCTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step36ScratchCard;
