import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp } from "lucide-react";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background-light">
      <Header />

      <main>
        <Hero />

        {/* Welcome / Brand Promise Section */}
        <section className="bg-background-light px-6 lg:px-10 pt-0 pb-[3.6rem] lg:pb-[6rem]">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-10 text-4xl font-black tracking-tighter text-primary lg:text-5xl">Compromisso com o Cliente</h2>
              <div className="h-1.5 w-24 bg-accent mx-auto mb-12 rounded-full"></div>
              <p className="text-2xl leading-relaxed text-body-text/80 font-medium italic">
                "Nossa atuação vai além do contencioso tradicional: enxergamos cada caso como uma oportunidade de proteger pessoas, patrimônios e histórias. Trabalhamos com estratégia, técnica e responsabilidade."
              </p>
              <p className="mt-8 text-lg text-accent font-black uppercase tracking-[0.3em]">
                Excelência Jurídica em Cada Detalhe
              </p>
            </motion.div>
          </div>
        </section>

        <Services />
        <About />

        {/* Visual Break / CTA Section */}
        <section className="bg-primary section-padding text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 h-96 w-96 -translate-y-48 -translate-x-48 rounded-full bg-accent/10 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <h3 className="text-[10px] font-black tracking-[0.4em] text-accent uppercase mb-8">Análise de Caso</h3>
            <h2 className="mb-10 text-4xl font-black lg:text-7xl leading-tight">Precisa de uma defesa técnica e <span className="text-accent italic font-serif">personalizada?</span></h2>
            <p className="mb-16 text-xl text-white/50 max-w-2xl mx-auto font-medium">Agende hoje uma consulta para análise detalhada da sua situação jurídica.</p>
            <a href="#contato" className="btn-accent inline-block !px-16 !py-6 text-sm">
              Agendar Consultoria
            </a>
          </div>
        </section>

        <Testimonials />
        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-32 right-10 z-40 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-premium border border-primary/5 hover:bg-primary hover:text-white transition-all group"
            aria-label="Voltar ao topo"
          >
            <ChevronUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
