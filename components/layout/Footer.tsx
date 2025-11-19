"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="bg-[#111] text-white pt-24 pb-8 relative overflow-hidden">

            {/* Cloud Visual - Subtle background */}
            <div className="absolute bottom-0 left-0 right-0 h-[400px] w-full z-0 opacity-30 pointer-events-none mix-blend-screen">
                <Image
                    src="/footer_clouds.png"
                    alt="Clouds"
                    fill
                    className="object-cover object-bottom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-[#111]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    {/* Brand */}
                    <div className="md:col-span-5">
                        <Link href="/" className="text-2xl font-serif font-medium tracking-tight mb-6 block">
                            BharatNiti
                        </Link>
                        <p className="text-gray-400 max-w-sm leading-relaxed text-sm">
                            The operating system for modern capital. <br />
                            Built for the next generation of Indian asset managers.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-medium mb-4 text-gray-500 uppercase tracking-wider text-xs">Platform</h4>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li><Link href="#" className="hover:text-white transition-colors">Intelligence</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Workflows</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Compliance</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium mb-4 text-gray-500 uppercase tracking-wider text-xs">Company</h4>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium mb-4 text-gray-500 uppercase tracking-wider text-xs">Legal</h4>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-white/10 text-center">
                    <p className="text-sm text-gray-500">© 2025 BharatNiti AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
