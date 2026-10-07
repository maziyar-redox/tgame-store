"use client";

import { motion } from "motion/react";

export function AnimationWrapper({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
                once: true,
                amount: 0.5,
            }}
        >
            {children}
        </motion.div>
    );
}
