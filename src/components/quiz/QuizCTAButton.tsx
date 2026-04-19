interface QuizCTAButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const QuizCTAButton = ({ children, onClick, disabled = false }: QuizCTAButtonProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-background via-background to-transparent pt-4 pb-safe">
      <div className="max-w-lg mx-auto px-4" style={{ paddingBottom: "max(env(safe-area-inset-bottom, 0px), 16px)" }}>
        <button
          onClick={onClick}
          disabled={disabled}
          className={`btn-primary ${!disabled ? "cta-pulse" : ""}`}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default QuizCTAButton;
