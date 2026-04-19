import { useState, useRef, useCallback } from "react";
import QuizCTAButton from "./QuizCTAButton";

interface Step36Props {
  dogName: string;
  onNext: () => void;
}

const SEGMENTS = [
  { label: "10%", color: "#EF4444" },
  { label: "20%", color: "#F59E0B" },
  { label: "30%", color: "#10B981" },
  { label: "40%", color: "#3B82F6" },
  { label: "50%", color: "#8B5CF6" },
  { label: "60%", color: "#EC4899" },
];

const WINNING_INDEX = 5; // 60% OFF

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

const Step36SpinWheel = ({ dogName, onNext }: Step36Props) => {
  const [spinning, setSpinning] = useState(false);
  const [finished, setFinished] = useState(false);
  const [showSheet, setShowSheet] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [timer, setTimer] = useState({ minutes: 9, seconds: 59 });
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const segAngle = 360 / SEGMENTS.length;

  const spin = useCallback(() => {
    if (spinning || finished) return;
    setSpinning(true);

    // Calculate rotation to land on 60% (index 5)
    // The pointer is at the top (0°). Segment 0 starts at 0°.
    // To land on segment i, we need the middle of that segment at top.
    // Middle of segment i = i * segAngle + segAngle/2
    // We rotate clockwise, so we need 360 - that angle + extra full rotations
    const targetAngle = WINNING_INDEX * segAngle + segAngle / 2;
    const extraSpins = 5 + Math.random() * 2; // 5-7 full rotations
    const jitter = (Math.random() - 0.5) * (segAngle * 0.4); // slight randomness within segment
    const totalRotation = extraSpins * 360 + (360 - targetAngle) + jitter;

    setRotation(totalRotation);

    // Duration varies 3-4s
    const duration = 3000 + Math.random() * 1000;
    setTimeout(() => {
      setSpinning(false);
      setFinished(true);
      setTimeout(() => {
        setShowConfetti(true);
        setShowSheet(true);
        // Start timer
        timerRef.current = setInterval(() => {
          setTimer(prev => {
            if (prev.minutes === 0 && prev.seconds === 0) return prev;
            if (prev.seconds === 0) return { minutes: prev.minutes - 1, seconds: 59 };
            return { ...prev, seconds: prev.seconds - 1 };
          });
        }, 1000);
      }, 400);
    }, duration);
  }, [spinning, finished, segAngle]);

  const confettiColors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#A78BFA", "#FB923C", "#34D399", "#F472B6", "#60A5FA"];
  const confettiPieces = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    delay: Math.random() * 800,
    left: Math.random() * 100,
    color: confettiColors[i % confettiColors.length],
    size: 4 + Math.random() * 6,
  }));

  const wheelSize = 280;
  const center = wheelSize / 2;
  const radius = center - 4;

  const timerStr = `${String(timer.minutes).padStart(2, "0")}:${String(timer.seconds).padStart(2, "0")}`;

  return (
    <div className="flex flex-col h-[calc(100vh-60px)] overflow-hidden quiz-step-enter relative overflow-hidden">
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {confettiPieces.map((p) => (
            <ConfettiPiece key={p.id} {...p} />
          ))}
        </div>
      )}

      <div className="flex-1 px-5 pt-6 sm:pt-6">
        <h1 className="mt-0 text-center text-lg sm:text-xl font-bold mb-2 px-2 leading-snug">
          <span className="text-primary">Gire a roleta</span>{" "}
          <span className="text-foreground">e descubra seu desconto especial!</span>
        </h1>

        <p className="text-muted-foreground text-center text-sm mb-3 sm:mb-4 sm:mb-6">
          Torne-se o melhor dono de cachorro no parque para cães! Receba seu presente da nossa parte. 🎁
        </p>

        {/* Wheel */}
        <div className="flex justify-center mb-3 sm:mb-4 sm:mb-6 relative">
          {/* Pointer */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10" style={{ marginTop: -2 }}>
            <div style={{
              width: 0,
              height: 0,
              borderLeft: "14px solid transparent",
              borderRight: "14px solid transparent",
              borderTop: "24px solid hsl(var(--primary))",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
            }} />
          </div>

          <svg
            width={wheelSize}
            height={wheelSize}
            viewBox={`0 0 ${wheelSize} ${wheelSize}`}
            className="drop-shadow-xl"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: spinning ? `transform ${3 + Math.random()}s cubic-bezier(0.17, 0.67, 0.12, 0.99)` : "none",
            }}
          >
            {SEGMENTS.map((seg, i) => {
              const startAngle = (i * segAngle - 90) * (Math.PI / 180);
              const endAngle = ((i + 1) * segAngle - 90) * (Math.PI / 180);
              const x1 = center + radius * Math.cos(startAngle);
              const y1 = center + radius * Math.sin(startAngle);
              const x2 = center + radius * Math.cos(endAngle);
              const y2 = center + radius * Math.sin(endAngle);
              const largeArc = segAngle > 180 ? 1 : 0;

              const midAngle = ((i * segAngle + segAngle / 2) - 90) * (Math.PI / 180);
              const textR = radius * 0.65;
              const tx = center + textR * Math.cos(midAngle);
              const ty = center + textR * Math.sin(midAngle);
              const textRotation = i * segAngle + segAngle / 2;

              return (
                <g key={i}>
                  <path
                    d={`M${center},${center} L${x1},${y1} A${radius},${radius} 0 ${largeArc},1 ${x2},${y2} Z`}
                    fill={seg.color}
                    stroke="white"
                    strokeWidth="2"
                  />
                  <text
                    x={tx}
                    y={ty}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontWeight="bold"
                    fontSize="16"
                    transform={`rotate(${textRotation}, ${tx}, ${ty})`}
                  >
                    {seg.label}
                  </text>
                </g>
              );
            })}
            {/* Center circle */}
            <circle cx={center} cy={center} r="24" fill="white" stroke="hsl(var(--border))" strokeWidth="2" />
            <text x={center} y={center} textAnchor="middle" dominantBaseline="middle" fontSize="11" fontWeight="bold" fill="hsl(var(--foreground))">
              OFF
            </text>
          </svg>
        </div>

        {!spinning && !finished && (
          <QuizCTAButton onClick={spin}>🎰 GIRAR A ROLETA</QuizCTAButton>
        )}
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
            <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">Parabéns!</p>
            <p className="text-foreground text-sm mb-1">Você ganhou um desconto de</p>
            <p className="text-2xl sm:text-3xl font-bold text-primary mb-2">60% de desconto</p>
            <p className="text-muted-foreground text-xs mb-1">Desconto válido por tempo limitado</p>
            <p className="text-primary font-bold text-lg mb-3 sm:mb-4">⏳ Expira em {timerStr}</p>

            <QuizCTAButton onClick={onNext}>Quero aproveitar meu desconto</QuizCTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step36SpinWheel;
