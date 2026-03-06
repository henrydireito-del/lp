import React, { useState } from "react";
import { motion } from "motion/react";
import { Gavel, Scale, Home, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
    {
        icon: Gavel,
        title: "Direito Cível",
        description: "Atuação em disputas contratuais, direito de propriedade e sucessões, garantindo a proteção de seus interesses privados com rigor técnico.",
    },
    {
        icon: Scale,
        title: "Defesa do Consumidor",
        description: "Ações de indenização, combate a práticas abusivas e assessoria especializada em conflitos no e-commerce e serviços de alto valor.",
    },
    {
        icon: Home,
        title: "Regularização de Imóveis",
        description: "Suporte jurídico completo para regularização fundiária, escrituras e registros, garantindo a segurança total do seu patrimônio imobiliário.",
    },
    {
        icon: Briefcase,
        title: "Outras Áreas",
        description: "Atendimento especializado em demandas de Direito do Trabalho, Família e Sucessões, com foco em soluções ágeis e seguras.",
    },
];

const specificActions = [
    {
        title: "Ações indenizatórias contra empresas",
        description: "Busca por reparação de danos materiais e morais em face de descumprimentos contratuais ou falhas na prestação de serviços."
    },
    {
        title: "Divórcio judicial e extrajudicial",
        description: "Assistência completa para dissolução matrimonial, focando na agilidade e na proteção dos direitos das partes."
    },
    {
        title: "Ações contra o Golpe do Pix",
        description: "Recuperação de valores e responsabilização de instituições financeiras em casos de fraudes e golpes digitais."
    },
    {
        title: "Regularização de imóveis urbanos",
        description: "Procedimentos para obtenção de escrituras, registros e regularização fundiária de propriedades na cidade."
    },
    {
        title: "Defesa estratégica do Trabalhador",
        description: "Atuação em reclamações trabalhistas para garantir o recebimento de verbas rescisórias, horas extras e outros direitos."
    },
    {
        title: "Ações Cíveis Judiciais e Extrajudiciais",
        description: "Atendimento amplo em demandas do cotidiano, desde cobranças até notificações e acordos preventivos."
    }
];

export const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="px-6 lg:px-10 pb-24 lg:pb-40 pt-[3.6rem] lg:pt-[6rem]" id="servicos">
            <div className="mx-auto max-w-7xl">
                <div className="mb-24 flex flex-col items-end justify-between gap-8 md:flex-row md:items-center">
                    <div className="max-w-2xl">
                        <h3 className="text-[10px] font-black tracking-[0.3em] text-accent uppercase mb-4">Especialidades</h3>
                        <h2 className="text-4xl font-black text-primary lg:text-6xl">Áreas de <span className="text-accent italic font-serif">atuação</span></h2>
                    </div>
                    <a className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-primary transition-all hover:text-accent" href="#contato">
                        Solicitar Consulta
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white transition-all group-hover:bg-accent group-hover:translate-x-1">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </a>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="glass-card p-10 group relative"
                        >
                            <div className="relative">
                                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-accent transition-all group-hover:bg-accent group-hover:text-white group-hover:shadow-accent-glow">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h4 className="mb-4 text-xl font-black text-primary group-hover:text-accent transition-colors">{service.title}</h4>
                                <p className="text-body-text/60 leading-relaxed text-sm">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Subsection: Actions we perform */}
                <div className="mt-24 rounded-[3rem] bg-primary p-12 lg:p-24 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 h-96 w-96 -translate-y-48 translate-x-48 rounded-full bg-accent/10 blur-[100px]" />
                    <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/5 blur-[80px]" />

                    <div className="relative z-10">
                        <div className="mb-16 text-center lg:text-left">
                            <h3 className="text-3xl font-black lg:text-5xl">Experiência em <span className="text-accent italic font-serif">Ações Específicas</span></h3>
                            <p className="mt-6 text-white/50 max-w-2xl text-lg font-medium">Nossa atuação no campo do Direito abrange diversos tipos de ações, distribuídas em diferentes ramos jurídicos, com ênfase predominante nas áreas Cível e do Consumidor.</p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {specificActions.map((action, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="flex flex-col gap-2 group p-6 rounded-2xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10 cursor-pointer"
                                >
                                    <div className="flex items-center gap-5">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent border border-accent/30 transition-shadow">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <span className="text-base font-bold tracking-tight text-white/90">{action.title}</span>
                                    </div>
                                    <motion.div
                                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                        animate={hoveredIndex === index ?
                                            { height: "auto", opacity: 1, marginTop: 12 } :
                                            { height: 0, opacity: 0, marginTop: 0 }
                                        }
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-sm font-medium text-white/50 leading-relaxed pl-[3.75rem]">
                                            {action.description}
                                        </p>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
