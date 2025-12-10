"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";

interface TextRevealProps {
    text: string;
}

export function TextReveal({ text }: TextRevealProps) {
    const container = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(false);
    const scrollProgress = useMotionValue(0);
    const touchStartY = useRef(0);
    const accumulatedScrollRef = useRef(0);

    const words = text.split(" ");
    const scrollThreshold = 2000; 
    
    const isTouchDevice = useCallback(() => {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }, []);

    useEffect(() => {
        const updateProgress = (delta: number) => {
            accumulatedScrollRef.current += delta;
            accumulatedScrollRef.current = Math.max(0, Math.min(scrollThreshold, accumulatedScrollRef.current));

            const progress = accumulatedScrollRef.current / scrollThreshold;
            scrollProgress.set(progress);

            // Release lock when complete
            if (progress >= 0.98) {
                setIsActive(false);
            }
        };

        const handleWheel = (e: WheelEvent) => {
            if (!isActive) return;

            e.preventDefault();
            updateProgress(e.deltaY);
        };

        const handleTouchStart = (e: TouchEvent) => {
            if (!isActive) return;
            touchStartY.current = e.touches[0].clientY;
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isActive) return;

            e.preventDefault();
            const currentY = e.touches[0].clientY;
            const delta = (touchStartY.current - currentY) * 3;
            touchStartY.current = currentY;
            
            updateProgress(delta);
        };

        const handleScroll = () => {
            if (!container.current) return;

            const rect = container.current.getBoundingClientRect();

            // Activate when container reaches top
            if (rect.top <= 100 && rect.bottom > window.innerHeight && !isActive && scrollProgress.get() < 0.98) {
                setIsActive(true);
                window.scrollTo({ top: window.scrollY, behavior: 'instant' });
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [isActive, scrollProgress, scrollThreshold]);

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
        } else {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        }
    }, [isActive]);

    return (
        <div ref={container} className="min-h-screen flex items-center justify-center relative z-10 bg-white py-32">
            <div className="w-[90%] max-w-6xl mx-auto">
                <p className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.15] text-[#1F2937] text-center tracking-tight">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + 1 / words.length;
                        return (
                            <Word key={`word-${i}`} progress={scrollProgress} range={[start, end]}>
                                {word}
                            </Word>
                        );
                    })}
                </p>
            </div>
        </div>
    );
}

interface WordProps {
    children: string;
    progress: any;
    range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
    const opacity = useTransform(progress, range, [0.2, 1]);
    const y = useTransform(progress, range, [20, 0]);

    return (
        <motion.span
            style={{ opacity, y }}
            className="inline-block mr-4 md:mr-6"
        >
            {children}
        </motion.span>
    );
};
