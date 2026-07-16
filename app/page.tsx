import Image from "next/image";
import CtaButton from "./components/CtaButton";
import Accordion from "./components/Accordion";

const CHECKOUT_URL = "https://pay.kiwify.com.br/apX4xXO";

const faqItems = [
  {
    question: "Como recebo o e-book depois da compra?",
    answer:
      "Assim que o pagamento for aprovado, você recebe o acesso automaticamente por e-mail, com o link para download. Não é necessário aguardar nenhum atendimento.",
  },
  {
    question: "O e-book é físico ou digital?",
    answer:
      "100% digital, em PDF. Você pode ler no celular, tablet ou computador, e também imprimir se preferir.",
  },
  {
    question: "Serve para qualquer tipo de clínica de estética?",
    answer:
      "Sim. As estratégias são aplicáveis independentemente do porte da clínica ou dos procedimentos oferecidos (facial, corporal, capilar, etc.).",
  },
  {
    question: "Preciso de algum sistema ou ferramenta específica para aplicar?",
    answer:
      "Não. As estratégias podem ser aplicadas com WhatsApp comum, agenda atual e sua equipe existente. Ferramentas mais avançadas são sugeridas como opcionais, não obrigatórias.",
  },
  {
    question: "E se eu não gostar do conteúdo?",
    answer:
      "Você tem 7 dias de garantia incondicional. Basta solicitar o reembolso. Sem perguntas, sem burocracia.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "O pagamento é processado com segurança pela Kiwify, podendo ser parcelado em até 12x no cartão de crédito.",
  },
];

const benefits = [
  {
    emoji: "🔍",
    title: "Diagnóstico rápido",
    desc: "Descubra exatamente onde sua clínica está perdendo dinheiro hoje, com exercício prático de cálculo.",
  },
  {
    emoji: "💰",
    title: "7 estratégias de vendas",
    desc: "Aumente o ticket médio com pacotes, upsell, cross-sell, assinatura mensal e mais.",
  },
  {
    emoji: "📅",
    title: "6 estratégias de agendamento",
    desc: "Lote a agenda, reduza no-show e reative clientes inativos que sumiram.",
  },
  {
    emoji: "📣",
    title: "6 estratégias de marketing",
    desc: "Instagram, WhatsApp, indicação, tráfego pago e parcerias locais — tudo para clínicas.",
  },
  {
    emoji: "🗓️",
    title: "Plano de ação de 90 dias",
    desc: "Semana a semana, para você ou sua equipe simplesmente seguir e aplicar.",
  },
  {
    emoji: "📝",
    title: "Scripts prontos",
    desc: "Reativação, upsell, quebra de objeção e pedido de indicação. Só copiar e adaptar.",
  },
];

const testimonials = [
  {
    name: "Ana Cristina M.",
    role: "Proprietária · São Paulo, SP",
    text: "Espaço reservado para depoimento real. Assim que aplicar as estratégias, voltarei para deixar minha avaliação!",
    initials: "AC",
  },
  {
    name: "Juliana Ferreira",
    role: "Gestora · Belo Horizonte, MG",
    text: "Espaço reservado para depoimento real. As estratégias do e-book farão diferença no meu negócio.",
    initials: "JF",
  },
  {
    name: "Camila Santos",
    role: "Esteticista autônoma · Rio de Janeiro, RJ",
    text: "Espaço reservado para depoimento real. Mal posso esperar para implementar o plano de 90 dias.",
    initials: "CS",
  },
];

export default function LandingPage() {
  return (
    <main className="text-[#2F2F2F] bg-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ================================================
          HERO
      ================================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #4a0e4e 0%, #6A1B6D 30%, #8E2C8A 60%, #D63384 100%)" }}>

        {/* Decorative orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #F04F9B, transparent 70%)" }} />
        <div className="absolute bottom-[-15%] left-[-8%] w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #F7A8C8, transparent 70%)" }} />
        <div className="absolute top-[20%] left-[40%] w-[300px] h-[300px] rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #fff, transparent 70%)" }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-16 pt-16 pb-24 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 md:gap-12 xl:gap-20 items-center">

            {/* ── Left: copy ── */}
            <div className="flex flex-col gap-6 md:gap-8 max-w-2xl">

              {/* Badge */}
              <div className="inline-flex w-fit items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-white/25 text-white/80 text-xs md:text-sm font-medium" style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}>
                <span className="w-2 h-2 rounded-full bg-[#F04F9B] animate-pulse flex-shrink-0" />
                GUIA PRÁTICO COM MAIS DE 50 ESTRATÉGIAS APLICÁVEIS
              </div>

              {/* Headline */}
              <h1 className="text-[2.25rem] md:text-5xl xl:text-6xl font-black text-white leading-[1.1] md:leading-[1.05] tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Sua clínica está
                <span className="relative inline-block ml-2 md:ml-3">
                  <span className="relative z-10" style={{ color: "#F7A8C8", wordBreak: "break-word" }}>deixando dinheiro</span>
                </span>{" "}
                <br className="hidden md:block" />
                na mesa todos os meses.
              </h1>

              {/* Sub */}
              <p className="text-white/75 text-base md:text-xl leading-relaxed max-w-lg">
                Descubra como colocar mais R$30.000 por mês dentro da sua clínica usando estratégias que você pode aplicar ainda esta semana.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-cta"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-100"
                  style={{ background: "linear-gradient(135deg, #F04F9B, #D63384)", color: "#fff", boxShadow: "0 8px 32px rgba(240,79,155,0.45)" }}
                >
                  QUERO ACESSAR O MÉTODO
                  <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
                <span className="flex items-center gap-2 text-white/55 text-sm">
                  🔒 Pagamento 100% seguro
                </span>
              </div>
            </div>

            {/* ── Right: book mockup ── */}
            <div className="flex justify-center items-center relative lg:block hidden">
              <div className="absolute inset-0 rounded-3xl opacity-30 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #F04F9B, transparent 65%)", transform: "scale(1.2)" }} />
              <div className="relative" style={{ filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.4))" }}>
                <Image
                  src="/capa-ebook.png"
                  alt="Capa do e-book Dobre o Faturamento da Sua Clínica de Estética"
                  width={380}
                  height={500}
                  className="w-72 xl:w-[380px] h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-14 md:h-20" preserveAspectRatio="none">
            <path d="M0,40 C480,80 960,0 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>


      {/* ================================================
          DOR
      ================================================ */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">

          <div className="text-center mb-16">
            <p className="text-[#D63384] font-semibold text-xs uppercase tracking-[0.2em] mb-4">Isso te parece familiar?</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#2F2F2F] leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Se você tem uma clínica de estética,<br />
              <span className="text-[#8E2C8A]">provavelmente já viveu isso:</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "📆", text: "Agenda cheia em um dia e vazia no outro, sem nenhum controle sobre isso." },
              { icon: "👋", text: "Clientes que fazem 1 procedimento, adoram o resultado... e nunca mais voltam." },
              { icon: "💬", text: "Recepção que só informa preço, mas não fecha venda de verdade." },
              { icon: "📉", text: "Investimento em anúncio que traz curioso, mas não traz cliente pagante." },
              { icon: "😓", text: "A sensação de que a clínica poderia faturar muito mais — mas falta um caminho claro." },
              { icon: "🤯", text: "Estafa na gestão sem saber por onde começar a mudar as coisas." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-[#F04F9B]/30 hover:shadow-md transition-all duration-200" style={{ background: "#FAFAFA" }}>
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <p className="text-[#2F2F2F]/80 leading-relaxed text-[15px]">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Insight bar */}
          <div className="mt-10 rounded-3xl p-8 text-center" style={{ background: "linear-gradient(135deg, #6A1B6D, #D63384)" }}>
            <p className="text-white text-xl lg:text-2xl font-bold leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>
              A verdade é que o problema quase nunca é falta de demanda.
            </p>
            <p className="text-[#F7A8C8] text-xl lg:text-2xl font-black mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
              É falta de processo.
            </p>
          </div>
        </div>
      </section>


      {/* ================================================
          VIRADA — 3 PILARES
      ================================================ */}
      <section className="py-28" style={{ background: "#F4F4F6" }}>
        <div className="max-w-5xl mx-auto px-8 lg:px-16">

          <div className="text-center mb-16">
            <p className="text-[#D63384] font-semibold text-xs uppercase tracking-[0.2em] mb-4">A solução existe</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#2F2F2F] leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Existe um caminho estruturado<br />
              <span className="text-[#8E2C8A]">— e comprovado —</span> para mudar isso
            </h2>
            <p className="mt-5 text-[#2F2F2F]/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Não é sobre reinventar sua clínica ou gastar mais com marketing. É sobre 3 pilares simples:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "💰", label: "VENDAS", color: "linear-gradient(135deg, #4a0e4e, #6A1B6D)", sub: "Como aumentar o ticket médio de cada cliente que já confia em você" },
              { icon: "📅", label: "AGENDAMENTO", color: "linear-gradient(135deg, #6A1B6D, #D63384)", sub: "Como lotar a agenda, reduzir faltas e reativar clientes inativos" },
              { icon: "📣", label: "MARKETING", color: "linear-gradient(135deg, #D63384, #F04F9B)", sub: "Como atrair clientes novos e reativar quem sumiu — sem depender de ads" },
            ].map((p) => (
              <div key={p.label} className="rounded-3xl p-8 text-white flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-300" style={{ background: p.color, boxShadow: "0 8px 40px rgba(106,27,109,0.25)" }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl" style={{ background: "rgba(255,255,255,0.15)" }}>
                  {p.icon}
                </div>
                <div>
                  <p className="font-black text-2xl mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{p.label}</p>
                  <p className="text-white/75 text-sm leading-relaxed">{p.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#2F2F2F]/50 text-base mb-7 italic">
              Esse é exatamente o conteúdo do e-book <strong className="text-[#D63384] not-italic">&ldquo;Dobre o Faturamento da Sua Clínica de Estética Ainda Este Ano.&rdquo;</strong>
            </p>
            <CtaButton id="pilares-cta">Quero Acessar Agora →</CtaButton>
          </div>
        </div>
      </section>


      {/* ================================================
          O QUE VOCÊ VAI ENCONTRAR
      ================================================ */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">

          <div className="text-center mb-16">
            <p className="text-[#D63384] font-semibold text-xs uppercase tracking-[0.2em] mb-4">Dentro do e-book</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#2F2F2F] leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              O que você vai encontrar
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="group flex flex-col gap-5 p-7 rounded-3xl border-2 border-gray-100 hover:border-[#F04F9B]/40 hover:-translate-y-1 transition-all duration-250" style={{ background: "#fff" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-200" style={{ background: "linear-gradient(135deg, rgba(240,79,155,0.1), rgba(214,51,132,0.15))" }}>
                  {b.emoji}
                </div>
                <div>
                  <h3 className="font-bold text-[#2F2F2F] text-lg mb-2 leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>{b.title}</h3>
                  <p className="text-[#2F2F2F]/60 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================
          PARA QUEM É / NÃO É
      ================================================ */}
      <section className="py-28" style={{ background: "linear-gradient(135deg, #4a0e4e 0%, #6A1B6D 40%, #D63384 100%)" }}>
        <div className="max-w-5xl mx-auto px-8 lg:px-16">

          <div className="text-center mb-14">
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Este e-book é para você?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Para quem É */}
            <div className="rounded-3xl p-8 lg:p-10 border border-white/20" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(16px)" }}>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ background: "#22c55e" }}>✓</div>
                <h3 className="text-white font-black text-xl" style={{ fontFamily: "'Outfit', sans-serif" }}>Para quem É</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {[
                  "Donos e gestores de clínicas de estética que querem crescer com mais previsibilidade",
                  "Clínicas que já têm clientes mas sentem que poderiam faturar muito mais",
                  "Quem quer aplicar estratégias práticas sem depender de consultoria cara",
                  "Quem já usa (ou quer começar a usar) WhatsApp e redes sociais para vender",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/85 text-sm leading-relaxed">
                    <span className="text-[#86efac] text-base flex-shrink-0 mt-0.5">✅</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Para quem NÃO É */}
            <div className="rounded-3xl p-8 lg:p-10 border border-white/10" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(16px)" }}>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ background: "rgba(239,68,68,0.7)" }}>✗</div>
                <h3 className="text-white font-black text-xl" style={{ fontFamily: "'Outfit', sans-serif" }}>Para quem NÃO É</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {[
                  "Quem busca fórmula mágica sem nenhuma ação da equipe",
                  "Clínicas que não têm nenhum atendimento ativo (o material pressupõe que você tem uma operação rodando)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/65 text-sm leading-relaxed">
                    <span className="text-red-300 text-base flex-shrink-0 mt-0.5">❌</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* ================================================
          DEPOIMENTOS
      ================================================ */}
      <section className="py-28 bg-[#F4F4F6]">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">

          <div className="text-center mb-16">
            <p className="text-[#D63384] font-semibold text-xs uppercase tracking-[0.2em] mb-4">Prova social</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#2F2F2F] leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Resultados que falam por si só
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col justify-between gap-6 p-8 rounded-3xl bg-white border border-[#F7A8C8]/30 relative overflow-hidden" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                <span className="absolute top-4 right-6 text-[#F04F9B]/10 font-serif text-8xl font-black leading-none select-none">&ldquo;</span>
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, s) => (
                      <span key={s} className="text-[#F04F9B] text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-[#2F2F2F]/70 text-sm leading-relaxed italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="relative z-10 flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: "linear-gradient(135deg, #D63384, #F04F9B)" }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#2F2F2F]">{t.name}</p>
                    <p className="text-xs text-[#2F2F2F]/40">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================================================
          PREÇO
      ================================================ */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* ── Left: texto âncora ── */}
            <div className="flex flex-col gap-6">
              <p className="text-[#D63384] font-semibold text-xs uppercase tracking-[0.2em]">Investimento</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#2F2F2F] leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Quanto vale estruturar o crescimento da sua clínica?
              </h2>
              <p className="text-[#2F2F2F]/65 text-lg leading-relaxed">
                Uma consultoria de gestão para clínicas de estética facilmente custa entre{" "}
                <strong className="text-[#2F2F2F]">R$ 800 e R$ 3.000</strong>. Uma única campanha de anúncios malfeita pode consumir isso sem nenhum retorno.
              </p>
              <p className="text-[#2F2F2F]/65 text-lg leading-relaxed">
                Este e-book reúne estratégias equivalentes — por uma fração desse valor, para você aplicar no seu próprio ritmo.
              </p>
            </div>

            {/* ── Right: price card ── */}
            <div className="rounded-3xl p-10 flex flex-col items-center text-center gap-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #6A1B6D, #8E2C8A, #D63384)", boxShadow: "0 24px 64px rgba(106,27,109,0.35)" }}>
              <div className="absolute top-0 right-0 w-60 h-60 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #fff, transparent 70%)", transform: "translate(30%, -30%)" }} />

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-white/70 text-xs font-medium" style={{ background: "rgba(255,255,255,0.1)" }}>
                ⚡ Oferta de lançamento
              </div>

              <div className="flex flex-col items-center gap-1">
                <span className="text-white/40 text-base line-through">De R$ 297</span>
                <div className="text-white font-black leading-none" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "4.5rem" }}>R$ 99,90</div>
                <span className="text-white/60 text-sm">à vista ou em até 12x no cartão</span>
              </div>

              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="preco-cta"
                className="w-full flex items-center justify-center gap-2 py-4 px-8 rounded-2xl font-bold text-base uppercase tracking-wide transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-100"
                style={{ background: "#fff", color: "#D63384", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
              >
                Quero Garantir Meu Acesso →
              </a>

              <div className="flex items-center justify-center gap-5 text-white/50 text-xs">
                <span className="flex items-center gap-1.5">🔒 Pagamento seguro</span>
                <span className="flex items-center gap-1.5">📩 Acesso imediato</span>
                <span className="flex items-center gap-1.5">✅ 7 dias de garantia</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================================================
          GARANTIA (inline, between sections)
      ================================================ */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-8 lg:px-16">
          <div className="flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl border-2 border-[#F04F9B]/25" style={{ background: "#fff", boxShadow: "0 4px 24px rgba(240,79,155,0.1)" }}>
            <div className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-4xl" style={{ background: "linear-gradient(135deg, #D63384, #F04F9B)", boxShadow: "0 8px 24px rgba(240,79,155,0.35)" }}>
              🛡️
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-black text-2xl text-[#2F2F2F] mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Garantia incondicional de 7 dias</h3>
              <p className="text-[#2F2F2F]/65 text-base leading-relaxed">
                Se por qualquer motivo você achar que o material não é para você, é só pedir o reembolso dentro de 7 dias —{" "}
                <strong className="text-[#D63384]">sem perguntas, sem burocracia.</strong> O risco é todo nosso.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ================================================
          FAQ
      ================================================ */}
      <section className="py-28 bg-[#F4F4F6]">
        <div className="max-w-3xl mx-auto px-8 lg:px-16">

          <div className="text-center mb-14">
            <p className="text-[#D63384] font-semibold text-xs uppercase tracking-[0.2em] mb-4">Dúvidas frequentes</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#2F2F2F] leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Ainda tem dúvidas?
            </h2>
          </div>

          <Accordion items={faqItems} />
        </div>
      </section>


      {/* ================================================
          CTA FINAL
      ================================================ */}
      <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #4a0e4e 0%, #6A1B6D 30%, #8E2C8A 65%, #F04F9B 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #fff, transparent 65%)" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-8 lg:px-16 flex flex-col items-center text-center gap-8">
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Sua clínica não precisa de mais uma cliente nova para faturar mais este ano.
          </h2>
          <p className="text-white/60 text-xl font-semibold tracking-wide">
            Precisa de um processo.
          </p>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-100"
            style={{ background: "linear-gradient(135deg, #F04F9B, #D63384)", color: "#fff", boxShadow: "0 12px 40px rgba(240,79,155,0.5)" }}
          >
            QUERO ACESSAR O MÉTODO AGORA
            <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <p className="text-white/40 text-sm tracking-wide">
            Acesso imediato &nbsp;·&nbsp; Pagamento seguro &nbsp;·&nbsp; Garantia de 7 dias
          </p>
        </div>
      </section>


      {/* ================================================
          FOOTER
      ================================================ */}
      <footer className="py-8" style={{ background: "#1a1a1a" }}>
        <div className="max-w-6xl mx-auto px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          <p>© {new Date().getFullYear()} E-book Clínica de Estética. Todos os direitos reservados.</p>
          <p>Pagamento processado com segurança pela Kiwify.</p>
        </div>
      </footer>

    </main>
  );
}
