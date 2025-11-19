"use client";

import Image from "next/image";

export function Features() {
    return (
        <section id="features" className="py-32 bg-[#F9FAFB] relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="mb-24 max-w-4xl mx-auto text-center">
                    <h2
                        className="text-5xl md:text-7xl font-serif font-medium text-[#1F2937] mb-8 leading-tight"
                    >
                        Intelligence
                        <span className="text-gray-400 italic"> Decoded.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {[
                        {
                            title: "Knowledge Graph",
                            desc: "Map hidden relationships between companies, sectors, and people.",
                            image: "/feature_knowledge_graph.png",
                            className: "opacity-20 mix-blend-multiply bottom-1/4"
                        },
                        {
                            title: "Natural Search",
                            desc: "Ask complex financial questions in plain English. Get precise answers.",
                            image: "/feature_natural_search.png",
                            className: "opacity-20 mix-blend-multiply bottom-1/3"
                        },
                        {
                            title: "Auto Workflows",
                            desc: "Automate earnings summaries, memos, and daily briefings.",
                            image: "/feature_auto_workflow.png",
                            className: "opacity-20 mix-blend-multiply"
                        },
                        {
                            title: "Compliance",
                            desc: "Instant checks against SEBI regulations and internal mandates.",
                            image: "/feature_compliance.png",
                            className: "opacity-20 mix-blend-multiply bottom-1/3"
                        },
                        {
                            title: "White-glove AI",
                            desc: "Our AI team integrates directly with yours, building custom workflows and pipelines.",
                            image: "/feature_wave.png",
                            className: "opacity-30 mix-blend-multiply bottom-1/3"
                        },
                        {
                            title: "Smart Triggers",
                            desc: "Instant alerts when a company files, reports, or shifts. Your edge starts now.",
                            image: "/feature_orb.jpg",
                            className: "opacity-30 mix-blend-multiply bottom-1/3"
                        }
                    ].map((feature, i) => (
                        <div
                            key={i}
                            className="aspect-square bg-white rounded-[2.5rem] p-10 border border-gray-200 relative overflow-hidden group flex flex-col justify-between hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500"
                        >
                            {/* Feature Background Image */}
                            <div className={`absolute inset-0 transition-opacity duration-700 ${feature.className}`}>
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover grayscale contrast-125"
                                />
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-end">
                                <h3 className="text-3xl font-serif font-medium text-[#1F2937] mb-4">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
