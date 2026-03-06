import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Scale, Menu, X } from "lucide-react";
import { navLinks } from "../constants";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full glass-dark">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                <div className="flex items-center gap-4">
                    <img
                        src="./Logo.png"
                        alt="Carlos Sanches Advocacia"
                        className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="flex flex-col leading-tight">
                        <h2 className="text-xl font-black tracking-tighter uppercase text-background-light">
                            CARLOS <span className="text-accent">SANCHES</span>
                        </h2>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent/80">Advogado</span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            className="text-xs font-bold uppercase tracking-widest transition-all hover:text-accent text-background-light/70"
                            href={link.href}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contato" id="header-cta-desktop" className="btn-accent !px-6 !py-2 !text-xs text-center flex items-center justify-center">
                        Agendar Consulta
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-background-light p-2 hover:bg-white/5 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden bg-primary border-t border-white/10 overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-black text-background-light hover:text-accent transition-colors py-2 border-b border-white/5"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contato"
                                id="header-cta-mobile"
                                className="btn-accent w-full text-center flex items-center justify-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Agendar Consulta
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
