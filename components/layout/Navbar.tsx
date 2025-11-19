"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { label: "Features", id: "features" },
        { label: "Demo", id: "ai-demo" },
        { label: "Pricing", id: "pricing" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? "w-[85%] max-w-5xl" : "w-[80%] max-w-4xl"
                }`}
        >
            <div
                className={`backdrop-blur-xl bg-white/80 border border-gray-200 rounded-full px-6 py-3 shadow-lg transition-all duration-300 ${isScrolled ? "shadow-xl" : ""
                    }`}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-sans font-medium tracking-tight text-[#1F2937]">
                        BharatNiti
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-sm font-medium text-gray-600 hover:text-[#1F2937] transition-colors cursor-pointer"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button variant="primary" size="sm" className="rounded-full bg-[#1F2937] text-white hover:bg-black">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-gray-600 hover:text-[#1F2937] transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden mt-4 backdrop-blur-xl bg-white/90 border border-gray-200 rounded-3xl p-6 shadow-xl"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-left text-sm font-medium text-gray-600 hover:text-[#1F2937] transition-colors py-2 cursor-pointer"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <Button variant="primary" size="sm" className="rounded-full bg-[#1F2937] text-white hover:bg-black w-full">
                                Get Started
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
