"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Send, Sparkles, User } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    role: "user" | "ai";
    content: React.ReactNode;
}

export function AIDemo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "ai",
            content: "Hello. I'm your research assistant. How can I help you analyze the Indian market today?",
        },
    ]);

    // Scroll-triggered message reveal simulation
    const [visibleMessages, setVisibleMessages] = useState<number>(1);
    const chatRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: chatScrollProgress } = useScroll({
        target: chatRef,
        offset: ["start 80%", "end 20%"]
    });

    useEffect(() => {
        const unsubscribe = chatScrollProgress.on("change", (v) => {
            if (v > 0.2 && visibleMessages < 2) {
                addMessage(2);
            }
            if (v > 0.4 && visibleMessages < 3) {
                addMessage(3);
            }
            if (v > 0.6 && visibleMessages < 4) {
                addMessage(4);
            }
        });
        return () => unsubscribe();
    }, [chatScrollProgress, visibleMessages]);

    const addMessage = (step: number) => {
        setVisibleMessages(step);
        if (step === 2) {
            setMessages(prev => [
                ...prev,
                {
                    id: "2",
                    role: "user",
                    content: "Find EV component manufacturers in India with >20% YoY growth and PE < 50.",
                }
            ]);
        } else if (step === 3) {
            setMessages(prev => [
                ...prev,
                {
                    id: "3",
                    role: "ai",
                    content: (
                        <div className="space-y-4">
                            <p>I found 3 companies matching your criteria based on the latest NSE/BSE data:</p>
                            <div className="grid grid-cols-1 gap-3">
                                {[
                                    { name: "Olectra Greentech", symbol: "OLECTRA", growth: "+45%", pe: "42.1" },
                                    { name: "JBM Auto Ltd", symbol: "JBMMA", growth: "+28%", pe: "48.5" },
                                    { name: "Sona BLW Precision", symbol: "SONACOMS", growth: "+22%", pe: "49.2" }
                                ].map((stock, i) => (
                                    <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <div className="font-serif font-medium text-[#1F2937]">{stock.name}</div>
                                                <div className="text-xs text-gray-400 font-medium">{stock.symbol}</div>
                                            </div>
                                            <div className="px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-lg">
                                                Buy Rating
                                            </div>
                                        </div>
                                        <div className="flex gap-4 text-xs">
                                            <div>
                                                <span className="text-gray-400">Growth:</span> <span className="text-green-600 font-medium">{stock.growth}</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-400">PE Ratio:</span> <span className="text-[#1F2937] font-medium">{stock.pe}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ),
                }
            ]);
        } else if (step === 4) {
            setMessages(prev => [
                ...prev,
                {
                    id: "4",
                    role: "ai",
                    content: "I've also generated a preliminary investment memo and added these to your 'EV Watchlist'. Would you like to see the full report?",
                }
            ]);
        }
    };

    return (
        <section ref={containerRef} id="ai-demo" className="py-32 bg-[#F9FAFB] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Text Content */}
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2"
                        >
                            <div className="w-8 h-1 bg-[#1F2937]" />
                            <span className="text-sm font-medium text-[#1F2937] tracking-wide uppercase">Your Digital Analyst</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-serif font-medium text-[#1F2937] leading-[1.1]"
                        >
                            Ask complex questions. <br />
                            <span className="text-gray-400 italic">Get clear answers.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-500 max-w-md leading-relaxed"
                        >
                            Stop filtering through 50 columns of Excel data. Just ask BharatNiti to find what you need. It understands financial context, Indian market nuances, and your investment thesis.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Button variant="primary" size="lg" className="rounded-full px-8">
                                Try the Demo
                            </Button>
                        </motion.div>
                    </div>

                    {/* Chat Interface */}
                    <div className="flex-1 w-full max-w-xl" ref={chatRef}>
                        <motion.div
                            style={{ y: y1, opacity }}
                            className="bg-white rounded-[2rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden"
                        >
                            {/* Header */}
                            <div className="bg-white px-6 py-4 border-b border-gray-50 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-[#1F2937] rounded-full flex items-center justify-center text-white">
                                        <Sparkles className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-[#1F2937]">BharatNiti AI</div>
                                        <div className="text-xs text-green-500 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Online
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Messages Area */}
                            <div
                                className="h-[600px] overflow-y-auto p-6 space-y-6 bg-[#FAFAFA]"
                            >
                                {messages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className={cn(
                                            "flex gap-4 mb-6",
                                            msg.role === "ai" ? "items-start" : "items-start flex-row-reverse"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-8 h-8 flex items-center justify-center shrink-0 rounded-full shadow-sm",
                                            msg.role === "ai" ? "bg-white text-[#1F2937]" : "bg-[#1F2937] text-white"
                                        )}>
                                            {msg.role === "ai" ? <Sparkles className="w-4 h-4" /> : <User className="w-4 h-4" />}
                                        </div>
                                        <div className={cn(
                                            "max-w-[85%] p-5 rounded-2xl text-sm leading-relaxed shadow-sm",
                                            msg.role === "ai"
                                                ? "bg-white text-gray-600 rounded-tl-none"
                                                : "bg-[#1F2937] text-white rounded-tr-none"
                                        )}>
                                            {msg.content}
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Typing Indicator (only if waiting for next step) */}
                                {visibleMessages < 4 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex gap-2 ml-12 mt-4"
                                    >
                                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" />
                                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-75" />
                                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-150" />
                                    </motion.div>
                                )}
                            </div>

                            {/* Input Area */}
                            <div className="p-4 bg-white border-t border-gray-50">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Ask anything about Indian markets..."
                                        className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 pl-6 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white transition-all"
                                        disabled
                                    />
                                    <Button
                                        variant="primary"
                                        size="icon"
                                        className="absolute right-1 top-1 rounded-full w-9 h-9"
                                    >
                                        <Send className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
