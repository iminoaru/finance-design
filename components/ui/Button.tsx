"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg" | "icon";
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const variants = {
            primary: "bg-[#1F2937] text-white hover:bg-black shadow-lg hover:shadow-xl border-transparent",
            secondary: "bg-white text-[#1F2937] border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm",
            outline: "border border-gray-300 text-[#1F2937] hover:bg-gray-50 bg-transparent",
            ghost: "hover:bg-gray-100 text-gray-600 hover:text-gray-900",
        };

        const sizes = {
            sm: "h-9 px-4 text-xs font-medium",
            md: "h-12 px-6 text-sm font-medium",
            lg: "h-14 px-8 text-base font-medium",
            icon: "h-10 w-10 p-2",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={cn(
                    "relative inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-full font-sans",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                <span className="relative z-10 flex items-center gap-2">{children}</span>
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
