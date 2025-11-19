"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    spotlight?: boolean;
    hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, spotlight = false, hoverEffect = true, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                className={cn(
                    "relative overflow-hidden border border-white/10 bg-[#0a0a0a] p-6 transition-all duration-300 rounded-none",
                    hoverEffect && "hover:border-[#FF3300]/50 hover:bg-[#0f0f0f]",
                    className
                )}
                {...props}
            >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20" />
                <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/20" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/20" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20" />

                <div className="relative z-10">{children}</div>
            </motion.div>
        );
    }
);
Card.displayName = "Card";

export { Card };
