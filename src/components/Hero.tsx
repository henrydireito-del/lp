import React from "react";
import { motion } from "motion/react";

export const Hero = () => {
    return (
        <section className="relative overflow-hidden section-padding !pt-16" id="inicio">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px]" />
            <div className="absolute -bottom-24 -left-24 -z-10 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />

            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-10 order-2 lg:order-1"
                    >
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 border border-accent/20">
                                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                                <span className="text-[10px] font-black tracking-[0.25em] text-accent uppercase">Experiência Jurídica Comprovada</span>
                            </div>
                            <h1 className="text-[2.1rem] font-black leading-[1.1] text-primary lg:text-[3.15rem] xl:text-[4.2rem]">
                                Atuação <span className="text-accent italic font-serif">Estratégica</span> na Defesa dos Seus Direitos.
                            </h1>
                            <p className="max-w-xl text-lg leading-relaxed text-body-text/70 font-medium whitespace-pre-line">
                                Nossa atuação vai além da técnica jurídica: construímos estratégias personalizadas para proteger sua história e seu patrimônio. Atuamos nas áreas Cível, Consumidor e Extrajudicial com foco em resultados concretos.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <a href="#contato" id="hero-cta-button" className="btn-primary text-center flex items-center justify-center">
                                Solicitar Atendimento
                            </a>
                            <a href="#servicos" className="btn-outline border-primary/20 text-center flex items-center justify-center">
                                Nossas Áreas
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative order-1 lg:order-2 perspective-1000"
                    >
                        <div className="aspect-[4/5] w-full max-w-[450px] mx-auto overflow-hidden rounded-[2.5rem] bg-primary/5 shadow-hero border border-white/40 group hover:shadow-hero-hover transition-all duration-500">
                            <img
                                alt="Dr. Carlos Sanches"
                                className="h-full w-full object-cover grayscale-[15%] contrast-[110%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                                src="/eu.jpg"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute -bottom-8 -left-8 hidden h-44 w-44 items-center justify-center rounded-full bg-accent text-white shadow-accent-glow lg:flex border-[10px] border-background-light hover:scale-105 transition-transform"
                        >
                            <div className="text-center">
                                <span className="block text-4xl font-black">07+</span>
                                <span className="text-[10px] font-black uppercase tracking-widest opacity-90 leading-tight block">Anos de<br />Experiência</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
