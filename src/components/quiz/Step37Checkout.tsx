import { useState, useEffect } from "react";
import womanBefore from "@/assets/woman-dogs-before.png";
import womanAfter from "@/assets/woman-dogs-after.png";

interface Step37Props {
  dogName: string;
  breed: string;
  age: string;
  challenges: string[];
  obedienceLevel: number;
}

const objectiveMap: Record<string, string> = {
  "Ele me ignora completamente quando o chamo.": "Resposta Imediata ao Chamado",
  "Puxa a guia sem parar durante os passeios.": "Domínio de Passeio e Guia Frouxa",
  "Destrói objetos em casa quando fica sozinho.": "Controle de Ansiedade e Destruição",
  "Late excessivamente para visitas ou outros cães.": "Modulação de Reatividade e Latidos",
  "Faz as necessidades no lugar errado, mesmo depois de treinado.": "Reeducação Sanitária Avançada",
  "Demonstra agressividade com pessoas ou outros animais.": "Socialização e Controle de Impulsos",
};

const bonuses = [
  { name: "Guia DoggyGames", desc: "50+ jogos para cansar seu cão mentalmente em 10 min." },
  { name: "Adeus Ansiedade", desc: "Como deixar seu cão sozinho sem ele destruir a casa." },
  { name: "Controle de Latidos", desc: "O segredo para o silêncio e paz em casa." },
  { name: "Foco e Atenção", desc: "Faça ele te olhar e obedecer mesmo com distrações." },
];

const faqs = [
  { q: "Quanto tempo por dia preciso?", a: "Apenas 15 minutos diários são suficientes para ver resultados reais em 21 dias." },
  { q: "Funciona para cães adultos?", a: "Sim! O instinto canino não tem idade. O POI funciona para filhotes e cães idosos." },
  { q: "O acesso é vitalício?", a: "Sim, você paga uma única vez e tem acesso para sempre ao protocolo e aos bônus." },
];

const Step37Checkout = ({ dogName, breed, age, challenges, obedienceLevel }: Step37Props) => {
  const [timer, setTimer] = useState({ m: 10, s: 0 });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = "auto";
    document.body.style.position = "static";
    document.body.style.touchAction = "auto";
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.body.style.touchAction = "auto";
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev.m === 0 && prev.s === 0) return prev;
        if (prev.s === 0) return { m: prev.m - 1, s: 59 };
        return { ...prev, s: prev.s - 1 };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const timerStr = `${String(timer.m).padStart(2, "0")}:${String(timer.s).padStart(2, "0")}`;
  const objective = challenges.length > 0 ? objectiveMap[challenges[0]] || "Obediência e Foco Total" : "Obediência e Foco Total";

  const handleCheckout = () => {
    window.open("https://pay.kiwify.com.br/WMpSkZFKn1liw0ZW1jDD", "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pb-32 overflow-y-auto touch-pan-y quiz-step-enter">

      {/* Timer */}
      <div className="sticky top-0 z-20 bg-[#2467a3] text-white text-center py-3 px-4">
        <p className="font-black uppercase tracking-widest" style={{ fontSize: "10px" }}>⚡ Oferta por Tempo Limitado!</p>
        <p className="font-medium" style={{ fontSize: "var(--text-small)" }}>
          Seu desconto expira em:{" "}
          <span className="font-black text-xl tabular-nums">{timerStr}</span>
        </p>
      </div>

      <div className="px-4 pt-6 max-w-lg mx-auto w-full">

        {/* Headline */}
        <div className="text-center mb-8">
          <h1 className="font-black text-gray-900 leading-tight mb-3 uppercase" style={{ fontSize: "1.2rem" }}>
            O Diagnóstico de {dogName} está Pronto! Veja a Transformação em 21 Dias!
          </h1>
          <p className="text-gray-600 leading-relaxed" style={{ fontSize: "var(--text-body)" }}>
            O Protocolo POI é o caminho mais rápido para transformar {dogName} em um companheiro exemplar.
          </p>
        </div>

        {/* Antes e Depois */}
        <div className="quiz-card mb-6">
          <div className="flex items-start justify-center gap-3 mb-6">
            <div className="flex flex-col items-center flex-1">
              <span className="bg-blue-50 text-[#2467a3] font-black px-3 py-1 rounded-full mb-2 uppercase" style={{ fontSize: "10px" }}>Agora</span>
              <div className="rounded-2xl overflow-hidden border-2 border-blue-100">
                <img src={womanBefore} alt="Antes" className="w-full object-contain" style={{ filter: "sepia(0.4) saturate(1.3)" }} loading="lazy" />
              </div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <span className="bg-green-50 text-green-500 font-black px-3 py-1 rounded-full mb-2 uppercase" style={{ fontSize: "10px" }}>Com o POI</span>
              <div className="rounded-2xl overflow-hidden border-2 border-green-100">
                <img src={womanAfter} alt="Depois" className="w-full object-contain" loading="lazy" />
              </div>
            </div>
          </div>

          {[
            { label: "Nível Atual", level: obedienceLevel },
            { label: "Com o POI", level: 5 },
          ].map(({ label, level }) => (
            <div key={label} className="mb-3 last:mb-0">
              <div className="flex justify-between mb-1.5">
                <span className="font-black text-gray-500 uppercase tracking-widest" style={{ fontSize: "10px" }}>{label}</span>
                <span className="font-black text-primary uppercase" style={{ fontSize: "10px" }}>Nível {level}/5</span>
              </div>
              <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${(level / 5) * 100}%`,
                    background: level === 5 ? "#10b981" : "linear-gradient(to right, #2467a3, #60a5fa, #10b981)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Resumo do diagnóstico */}
        <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-100">
          <h3 className="font-black text-gray-400 uppercase tracking-widest mb-4" style={{ fontSize: "10px" }}>Resumo do Diagnóstico</h3>
          <div className="space-y-3">
            {[
              { label: "Objetivo", value: objective },
              { label: "Raça", value: breed || "Não informada" },
              { label: "Idade", value: age || "Não informada" },
              { label: "Personalidade", value: "Perfil Único POI", highlight: true },
            ].map((row) => (
              <div key={row.label} className="flex justify-between items-center border-b border-gray-200/50 pb-3 last:border-0 last:pb-0">
                <span className="text-gray-500" style={{ fontSize: "var(--text-small)" }}>{row.label}:</span>
                <span className={`font-bold text-right ml-4 ${row.highlight ? "text-primary italic" : "text-gray-900"}`} style={{ fontSize: "var(--text-small)" }}>
                  {row.value}
                </span>
              </div>
            ))}
            <div className="flex justify-between items-center">
              <span className="text-gray-500" style={{ fontSize: "var(--text-small)" }}>Nível atual:</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`w-5 h-2 rounded-full ${i <= obedienceLevel ? "bg-primary" : "bg-gray-200"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Culpa não é sua */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-6">
          <h2 className="font-black text-[#2467a3] mb-2 text-center" style={{ fontSize: "var(--text-title)" }}>
            A culpa não é sua (e nem do {dogName})
          </h2>
          <p className="text-gray-700 leading-relaxed text-center" style={{ fontSize: "var(--text-small)" }}>
            Os problemas que você enfrenta são reflexos de métodos tradicionais que tentam "humanizar" o cão.
            Gritos e punições não funcionam porque ignoram o que realmente move um cachorro: <strong>o instinto natural.</strong>
          </p>
        </div>

        {/* O que é o POI */}
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 mb-6">
          <h2 className="font-black text-primary mb-2 text-center" style={{ fontSize: "var(--text-title)" }}>
            O que é o Protocolo POI?
          </h2>
          <p className="text-gray-700 leading-relaxed text-center mb-4" style={{ fontSize: "var(--text-small)" }}>
            Método baseado na ciência do comportamento canino. Em 21 dias você terá:
          </p>
          <div className="space-y-2">
            {[
              "Passeios tranquilos com guia frouxa",
              "Comandos atendidos de primeira",
              "Uma casa em paz, sem destruição",
              "Uma conexão inquebrável com seu cão",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold" style={{ fontSize: "10px" }}>✓</span>
                </div>
                <span className="text-gray-900 font-semibold" style={{ fontSize: "var(--text-small)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Provas sociais */}
        <div className="mb-8">
          <h2 className="font-black text-gray-900 text-center mb-4" style={{ fontSize: "var(--text-title)" }}>
            Resultados Reais de Alunos
          </h2>
          <div className="aspect-video bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center mb-3">
            <span className="text-3xl mb-1">🎥</span>
            <p className="text-gray-400 italic" style={{ fontSize: "var(--text-small)" }}>[Vídeo de Depoimento]</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[0, 1].map((i) => (
              <div key={i} className="aspect-square bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center">
                <p className="text-gray-400 italic text-center" style={{ fontSize: "11px" }}>[Foto Antes/Depois]</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA principal */}
        <div className="text-center mb-8">
          <p className="text-gray-400 font-black uppercase tracking-widest mb-1" style={{ fontSize: "10px" }}>
            De <span className="line-through">R$ 118,00</span> por apenas:
          </p>
          <h2 className="font-black text-green-500 mb-1" style={{ fontSize: "3rem", lineHeight: 1 }}>
            R$ 37,00
          </h2>
          <p className="text-gray-500 font-bold uppercase mb-4" style={{ fontSize: "10px" }}>
            Pagamento único • Acesso vitalício
          </p>

          <button onClick={handleCheckout} className="btn-checkout mb-4">
            ✅ SIM! QUERO O POI PARA {dogName.toUpperCase()} POR R$ 37!
          </button>

          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-100">
            <span className="text-3xl flex-shrink-0">🛡️</span>
            <div className="text-left">
              <p className="text-blue-900 font-black" style={{ fontSize: "var(--text-small)" }}>
                Garantia Incondicional de 7 Dias
              </p>
              <p className="text-blue-700 leading-relaxed" style={{ fontSize: "11px" }}>
                Se não notar transformação real no {dogName}, devolvemos 100% do seu dinheiro. Sem perguntas.
              </p>
            </div>
          </div>
        </div>

        {/* Bônus */}
        <div className="mb-8">
          <h3 className="text-center font-black text-gray-900 uppercase tracking-widest mb-4" style={{ fontSize: "var(--text-small)" }}>
            Você também leva 4 Bônus Exclusivos:
          </h3>
          <div className="space-y-3">
            {bonuses.map((bonus) => (
              <div key={bonus.name} className="flex items-center gap-3 quiz-card">
                <span className="text-2xl flex-shrink-0">🎁</span>
                <div className="flex-1 min-w-0">
                  <p className="font-black text-gray-900" style={{ fontSize: "var(--text-small)" }}>{bonus.name}</p>
                  <p className="text-gray-500" style={{ fontSize: "11px" }}>{bonus.desc}</p>
                </div>
                <span className="text-green-500 font-black uppercase flex-shrink-0" style={{ fontSize: "10px" }}>Grátis</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <h2 className="font-black text-gray-900 text-center mb-4 uppercase tracking-widest" style={{ fontSize: "var(--text-body)" }}>
            Dúvidas Frequentes
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <button
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="quiz-card w-full text-left"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p className="font-bold text-gray-900" style={{ fontSize: "var(--text-small)" }}>{faq.q}</p>
                    {openFaq === i && (
                      <p className="text-gray-600 mt-2 leading-relaxed animate-in fade-in duration-200" style={{ fontSize: "11px" }}>
                        {faq.a}
                      </p>
                    )}
                  </div>
                  <span
                    className="text-gray-400 font-light flex-shrink-0 transition-transform duration-200"
                    style={{ fontSize: "1.25rem", transform: openFaq === i ? "rotate(45deg)" : "none" }}
                  >
                    +
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="pb-8">
          <button onClick={handleCheckout} className="btn-checkout">
            🐕 QUERO TRANSFORMAR {dogName.toUpperCase()} AGORA!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step37Checkout;
