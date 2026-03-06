import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PhoneCall, Mail, MapPin, Send, Clock } from "lucide-react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "Direito Cível",
        message: ""
    });
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const validateField = (name: string, value: string) => {
        let error = "";
        if (name === "name" && value.trim().length < 3) {
            error = "O nome deve ter pelo menos 3 caracteres.";
        } else if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                error = "Por favor, insira um e-mail válido.";
            }
        } else if (name === "message" && value.trim().length < 10) {
            error = "A mensagem deve ter pelo menos 10 caracteres.";
        }
        return error;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        const error = validateField(name, value);
        setFormErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const errors: Record<string, string> = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key as keyof typeof formData]);
            if (error) errors[key] = error;
        });

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const message = `Olá Dr. Carlos Sanches, gostaria de solicitar um atendimento:
    
👤 *Nome:* ${formData.name}
📧 *E-mail:* ${formData.email}
📁 *Assunto:* ${formData.subject}
💬 *Mensagem:* ${formData.message}`;

            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/5521985316276?text=${encodedMessage}`;

            // Artificial delay for UX
            await new Promise(resolve => setTimeout(resolve, 800));

            window.open(whatsappUrl, '_blank');

            setSubmitStatus("success");
            setFormData({ name: "", email: "", subject: "Direito Cível", message: "" });
            setTimeout(() => setSubmitStatus("idle"), 5000);
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-background-light section-padding" id="contato">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-24 lg:grid-cols-2">
                    <div className="flex flex-col gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-[10px] font-black tracking-[0.3em] text-accent uppercase mb-4">Contato</h3>
                            <h2 className="text-4xl font-black text-primary lg:text-6xl leading-tight">Vamos resolver o seu <span className="text-accent italic font-serif">caso?</span></h2>
                            <p className="mt-8 text-body-text/60 font-medium text-lg leading-relaxed">
                                Preencha o formulário ou utilize nossos canais diretos para um atendimento técnico e personalizado.
                            </p>
                        </motion.div>

                        <div className="grid gap-8">
                            {[
                                { icon: PhoneCall, label: "Telefone e Whatsapp", value: "(21) 98531-6276" },
                                { icon: Mail, label: "E-mail Profissional", value: "contato@chsanches.adv.br" },
                                { icon: Clock, label: "Horário de Funcionamento", value: "Segunda a Sexta, das 09h às 18h" },
                                { icon: MapPin, label: "Unidade Rio de Janeiro", value: "Avenida Marechal Câmara, 160, Edifício Orly, Sala 1107, Centro - RJ" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-8 group"
                                >
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-accent shadow-premium border border-primary/5 transition-all group-hover:bg-primary group-hover:text-white group-hover:shadow-accent-glow">
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-2">{item.label}</p>
                                        <p className="text-xl font-black text-primary tracking-tight">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="aspect-video w-full overflow-hidden rounded-[3rem] shadow-premium hover:shadow-hover transition-all duration-500 border-[8px] border-white group"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.102380937129!2d-43.16908300000001!3d-22.9095943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9981ddf11847a5%3A0x3ee4d908154b1f3a!2sAv.%20Mal.%20C%C3%A2mara%2C%20160%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020021-380!5e0!3m2!1spt-BR!2sbr!4v1772204308767!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale-[30%] contrast-[110%] transition-all group-hover:grayscale-0"
                            ></iframe>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[4rem] bg-white p-12 lg:p-20 shadow-premium border border-primary/5"
                    >
                        <h3 className="text-3xl font-black text-primary mb-12">Envie uma mensagem</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                            <div className="grid gap-10 sm:grid-cols-2">
                                <div className="flex flex-col gap-3">
                                    <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Nome Completo</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Seu nome"
                                        className={`rounded-2xl border-2 bg-background-light px-6 py-5 text-base font-bold text-primary outline-none transition-all focus:border-accent focus:bg-white ${formErrors.name ? 'border-red-500' : 'border-transparent'}`}
                                    />
                                    {formErrors.name && <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">{formErrors.name}</span>}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">E-mail Profissional</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="seu@email.com"
                                        className={`rounded-2xl border-2 bg-background-light px-6 py-5 text-base font-bold text-primary outline-none transition-all focus:border-accent focus:bg-white ${formErrors.email ? 'border-red-500' : 'border-transparent'}`}
                                    />
                                    {formErrors.email && <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">{formErrors.email}</span>}
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <label htmlFor="subject" className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Assunto da Consulta</label>
                                <div className="relative">
                                    <select
                                        name="subject"
                                        id="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="w-full rounded-2xl border-2 bg-background-light px-6 py-5 text-base font-bold text-primary outline-none transition-all focus:border-accent focus:bg-white appearance-none border-transparent cursor-pointer"
                                    >
                                        <option>Direito Cível</option>
                                        <option>Direito do Consumidor</option>
                                        <option>Regularização de Imóveis</option>
                                        <option>Direito Extrajudicial</option>
                                        <option>Outros Assuntos</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-accent">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Como podemos ajudar?</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Descreva brevemente sua situação..."
                                    className={`rounded-2xl border-2 bg-background-light px-6 py-5 text-base font-bold text-primary outline-none transition-all focus:border-accent focus:bg-white resize-none ${formErrors.message ? 'border-red-500' : 'border-transparent'}`}
                                ></textarea>
                                {formErrors.message && <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">{formErrors.message}</span>}
                            </div>

                            <button
                                type="submit"
                                id="contact-form-submit"
                                disabled={isSubmitting}
                                className="btn-primary group relative overflow-hidden !py-6"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
                                    {!isSubmitting && <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-accent -z-0"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                />
                            </button>

                            <AnimatePresence>
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="rounded-2xl bg-emerald-500/10 p-6 text-center border border-emerald-500/20"
                                    >
                                        <p className="text-sm font-black text-emerald-600 uppercase tracking-widest">Sua mensagem foi entregue com sucesso!</p>
                                    </motion.div>
                                )}
                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="rounded-2xl bg-red-500/10 p-6 text-center border border-red-500/20"
                                    >
                                        <p className="text-sm font-black text-red-600 uppercase tracking-widest">Houve um erro no envio. Tente novamente.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
