"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

export function Pricing() {
    return (
        <section id="pricing" className="py-32 bg-[#111] text-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left: Header & Context */}
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-tight"
                        >
                            Membership.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-400 leading-relaxed mb-12"
                        >
                            Access the operating system for modern capital.
                            Designed for those who move markets, not just watch them.
                        </motion.p>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                    <span className="font-serif text-xl">01</span>
                                </div>
                                <div className="text-gray-300">Full Indian Market Coverage (NSE/BSE)</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                    <span className="font-serif text-xl">02</span>
                                </div>
                                <div className="text-gray-300">Natural Language Financial Search</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                    <span className="font-serif text-xl">03</span>
                                </div>
                                <div className="text-gray-300">Automated Compliance & Workflows</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Pricing Options */}
                    <div className="space-y-6">
                        {/* Pro Tier */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group relative bg-white text-black p-10 rounded-[2rem] transition-transform duration-500 hover:-translate-y-2"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-3xl font-serif font-medium">Pro</h3>
                                    <p className="text-gray-500 mt-2">For independent analysts.</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-4xl font-bold">$500</div>
                                    <div className="text-gray-400 text-sm">/month</div>
                                </div>
                            </div>
                            <Button variant="primary" className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-6 text-lg">
                                Start Membership
                            </Button>
                        </motion.div>

                        {/* Enterprise Tier */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group relative bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-3xl font-serif font-medium text-white">Enterprise</h3>
                                    <p className="text-gray-400 mt-2">For funds & institutions.</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-4xl font-bold text-white">Custom</div>
                                </div>
                            </div>
                            <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-black rounded-full py-6 text-lg">
                                Contact Relations
                            </Button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
