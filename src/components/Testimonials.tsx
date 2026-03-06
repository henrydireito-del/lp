import React from "react";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Ricardo Oliveira",
        role: "Empresário",
        content: "O Dr. Carlos Sanches demonstrou um domínio técnico excepcional em nossa disputa contratual. Sua estratégia foi decisiva para um resultado favorável.",
        rating: 5
    },
    {
        name: "Mariana Costa",
        role: "Diretora Comercial",
        content: "Excelente atendimento em uma causa de direito do consumidor. Fui mantida informada em cada etapa do processo, com total transparência.",
        rating: 5
    },
    {
        name: "João Pereira",
        role: "Investidor Imobiliário",
        content: "A assessoria em regularização de imóveis do escritório é minuciosa. Sinto-me seguro em realizar grandes transações imobiliárias.",
        rating: 5
    }
];

export const Testimonials = () => {
    return (
        <section className="bg-background-light section-padding" id="depoimentos">
            <div className="mx-auto max-w-7xl">
                <div className="mb-24 text-center">
                    <h3 className="text-[10px] font-black tracking-[0.3em] text-accent uppercase mb-4">Reconhecimento</h3>
                    <h2 className="text-4xl font-black text-primary lg:text-6xl">O que dizem nossos <span className="text-accent italic font-serif">Clientes</span></h2>
                </div>

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="glass-card p-12 !rounded-[3rem] relative group"
                        >
                            <Quote className="absolute top-12 right-12 w-16 h-16 text-accent/5 transition-transform group-hover:scale-110" />

                            <div className="flex gap-1 mb-10">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                                ))}
                            </div>

                            <p className="text-xl text-body-text/80 mb-12 italic leading-relaxed font-medium">"{testimonial.content}"</p>

                            <div className="flex items-center gap-5">
                                <div className="h-14 w-14 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-xl shadow-lg">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-black text-primary text-lg tracking-tight">{testimonial.name}</h4>
                                    <p className="text-[10px] text-accent uppercase tracking-[0.2em] font-black">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
