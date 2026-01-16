import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center border-b">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold"
      >
        Hi, I’m Tamilselvan 👋
      </motion.h1>
    </section>
  );
} 
