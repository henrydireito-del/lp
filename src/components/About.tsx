import { motion } from "motion/react";

export const About = () => {
    return (
        <section className="bg-white section-padding" id="sobre">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-24 lg:grid-cols-2">
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="aspect-square overflow-hidden rounded-[3rem] shadow-premium ring-1 ring-primary/5 group"
                        >
                            <img
                                alt="Dr. Carlos Sanches em atuação"
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                src="./eu.jpg"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-12 -right-6 hidden aspect-square w-56 overflow-hidden rounded-[2.5rem] bg-primary p-8 shadow-2xl lg:flex flex-col justify-center items-center border-[8px] border-white text-center"
                        >
                            <div className="flex flex-col gap-1">
                                <span className="text-sm font-black text-white leading-tight uppercase tracking-widest block">
                                    Advogado
                                </span>
                                <span className="text-sm font-black text-white leading-tight uppercase tracking-widest block">
                                    Fundador
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col gap-10">
                        <div>
                            <h3 className="text-[10px] font-black tracking-[0.3em] text-accent uppercase mb-4">Advogado e Fundador</h3>
                            <h2 className="text-5xl font-black text-primary lg:text-7xl leading-[1.1]">Dr. Carlos <span className="text-accent italic font-serif">Sanches</span></h2>
                        </div>

                        <div className="space-y-6 text-lg leading-relaxed text-body-text/70 font-medium">
                            <p>
                                Com sólida formação e vasta experiência nos tribunais do Rio de Janeiro, o Dr. Carlos Sanches fundou o seu escritório com a missão de oferecer uma advocacia técnica e de excelência.
                            </p>
                            <p>
                                Tendo mais de 7 anos de experiência em causas cíveis e do consumidor, atua de forma decisiva para garantir que cada cliente receba uma assessoria jurídica pautada na segurança e resultados efetivos.
                            </p>
                        </div>

                        <div className="pt-8 flex gap-16 border-t border-primary/5">
                            <div>
                                <span className="block text-5xl font-black text-primary tracking-tighter">7</span>
                                <span className="text-xs font-black uppercase tracking-widest text-accent">Anos de Atuação</span>
                            </div>
                            <div className="h-16 w-px bg-primary/10 hidden sm:block" />
                            <div>
                                <span className="block text-4xl font-black text-primary tracking-tighter">Centenas</span>
                                <span className="text-xs font-black uppercase tracking-widest text-accent">de casos analisados</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
