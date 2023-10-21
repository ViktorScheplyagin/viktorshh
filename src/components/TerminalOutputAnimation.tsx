"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function TerminalOutputAnimation({
  children,
  duration = 1,
}: PropsWithChildren<{
  duration?: number;
}>) {
  return (
    <motion.div
      className="relative overflow-hidden"
      layout
      initial={{ height: 0 }}
      animate={{
        height: "auto",
        transition: { duration },
      }}
    >
      {children}
      <div>
        <div className="w-3 h-1 align-sub inline-block bg-green-500 animate-blink"></div>
      </div>
    </motion.div>
  );
}
