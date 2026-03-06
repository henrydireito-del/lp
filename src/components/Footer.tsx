import React from "react";
import { Scale, Instagram } from "lucide-react";
import { navLinks } from "../constants";

export const Footer = () => {
    return (
        <footer className="bg-primary px-6 py-20 text-white lg:px-10 lg:py-32">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-16 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-10">
                            <img
                                src="/Logofb.png"
                                alt="Carlos Sanches Advocacia"
                                className="h-14 w-auto object-contain"
                            />
                            <div className="flex flex-col leading-tight">
                                <h2 className="text-2xl font-black tracking-tighter uppercase">
                                    CARLOS <span className="text-accent">SANCHES</span>
                                </h2>
                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Advogado</span>
                            </div>
                        </div>
                        <p className="max-w-md text-xl leading-relaxed text-white/50 font-medium italic">
                            "Atuação técnica e estratégica pautada no atendimento personalizado, buscando sempre as melhores soluções judiciais e extrajudiciais para o seu caso."
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-10 text-[10px] font-black uppercase tracking-[0.3em] text-accent">Navegação</h4>
                        <ul className="flex flex-col gap-5">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a className="text-sm font-bold text-white/60 transition-all hover:text-accent hover:translate-x-2 inline-block" href={link.href}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-10 text-[10px] font-black uppercase tracking-[0.3em] text-accent">Legal & Registro</h4>
                        <ul className="flex flex-col gap-5">
                            <li><a className="text-sm font-bold text-white/60 transition-all hover:text-accent" href="#">Termos de Uso</a></li>
                            <li><a className="text-sm font-bold text-white/60 transition-all hover:text-accent" href="#">Política de Privacidade</a></li>
                            <li><span className="text-sm font-black text-accent block mt-4">OAB/RJ 224.992</span></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-4 mt-10 border-t border-white/5 pt-10">
                        <p className="text-[10px] leading-relaxed text-white/30 font-medium text-justify uppercase tracking-wider">
                            Aviso Legal: O conteúdo deste site tem caráter meramente informativo e não substitui a consulta profissional. A navegação no site não estabelece relação cliente-advogado. Todos os atendimentos seguem as diretrizes do Código de Ética e Disciplina da OAB.
                        </p>
                    </div>
                </div>

                <div className="mt-24 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                        © {new Date().getFullYear()} Carlos Sanches Advocacia. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-8">
                        <a
                            href="https://www.instagram.com/carlossanchesadv/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-accent hover:text-white transition-all shadow-lg hover:shadow-accent-glow"
                            title="Siga-nos no Instagram"
                        >
                            <Instagram className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
