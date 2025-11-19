"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#F9FAFB]">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-[#F9FAFB] to-[#F9FAFB] opacity-70" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-medium text-gray-600 tracking-wide">Now Live: Knowledge Graph v2.0</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-[#1F2937] tracking-tight leading-[1.1] mb-6 max-w-5xl"
                >
                    The Digital Brain for <br />
                    <span className="text-gray-400 italic">Indian Asset Managers</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed"
                >
                    Automate your research workflow, uncover hidden connections with our Knowledge Graph, and find stocks using natural language.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 mb-20"
                >
                    <Button variant="primary" size="lg" className="rounded-full px-8 shadow-xl shadow-gray-200">
                        Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="secondary" size="lg" className="rounded-full px-8">
                        <PlayCircle className="mr-2 w-4 h-4" /> Watch Demo
                    </Button>
                </motion.div>

                {/* Hero Visual Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full max-w-6xl relative"
                >
                    <div className="aspect-[16/9] rounded-3xl bg-white shadow-2xl border border-gray-100 overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white opacity-50" />

                        {/* Abstract UI Representation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3/4 h-3/4 bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col gap-6 relative overflow-hidden">
                                {/* Header */}
                                <div className="flex items-center justify-between border-b border-gray-100 pb-4 relative z-10">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400/20" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400/20" />
                                        <div className="w-3 h-3 rounded-full bg-green-400/20" />
                                    </div>
                                    <div className="h-2 w-32 bg-gray-100 rounded-full" />
                                </div>

                                {/* Graph Background - Visible in center */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 pt-16">
                                    <Image
                                        src="/demo_graph.png"
                                        alt="Knowledge Graph"
                                        width={800}
                                        height={500}
                                        className="object-contain opacity-30"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-xs"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">N</div>
                                <div>
                                    <div className="text-xs font-bold text-gray-800">NIFTY 50</div>
                                    <div className="text-[10px] text-green-600">+1.2% Today</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-xs"
                        >
                            <div className="text-xs font-serif text-gray-500 mb-1">Insight Generated</div>
                            <div className="text-sm font-medium text-gray-800">"EV Sector showing strong momentum..."</div>
                        </motion.div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}
