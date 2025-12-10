"use client";

import { motion } from "framer-motion";

const TICKER_DATA = [
    { symbol: "NIFTY 50", price: "22,145.65", change: "+0.45%", up: true },
    { symbol: "SENSEX", price: "73,128.80", change: "+0.32%", up: true },
    { symbol: "BANKNIFTY", price: "46,890.20", change: "-0.12%", up: false },
    { symbol: "RELIANCE", price: "2,985.40", change: "+1.25%", up: true },
    { symbol: "HDFCBANK", price: "1,450.10", change: "-0.55%", up: false },
    { symbol: "TCS", price: "4,120.30", change: "+0.80%", up: true },
    { symbol: "INFY", price: "1,650.75", change: "+1.10%", up: true },
];

export function MarketData() {
    return (
        <section id="market-data" className="py-10 bg-white border-b border-gray-100 overflow-hidden">
            <div className="flex flex-col gap-4">
                <div className="relative overflow-hidden flex">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="flex gap-12 whitespace-nowrap min-w-full"
                    >
                        {[...TICKER_DATA, ...TICKER_DATA, ...TICKER_DATA, ...TICKER_DATA].map((item, i) => (
                            <div
                                key={`${item.symbol}-${i}`}
                                className="flex items-center gap-3 group cursor-pointer"
                            >
                                <span className="font-serif font-medium text-[#1F2937]">
                                    {item.symbol}
                                </span>
                                <span className="text-sm text-gray-500">{item.price}</span>
                                <span
                                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${item.up ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                                        }`}
                                >
                                    {item.change}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
