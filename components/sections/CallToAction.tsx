"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Threads from "@/components/ui/Threads";

export function CallToAction() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Threads Background */}
            <div className="absolute inset-0 z-0">
                <Threads
                    amplitude={1}
                    distance={0}
                    enableMouseInteraction={true}
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-serif font-medium text-[#1F2937] mb-8 leading-tight"
                    >
                        Ready to upgrade your <br />
                        <span className="italic text-gray-400">investment thesis?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto"
                    >
                        Join the top 1% of Indian asset managers using BharatNiti to generate alpha.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button variant="primary" className="bg-[#1F2937] text-white hover:bg-black rounded-full px-8 py-6 text-lg h-auto">
                            Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button variant="outline" className="border-gray-200 text-[#1F2937] hover:bg-gray-50 rounded-full px-8 py-6 text-lg h-auto">
                            Schedule Demo
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
