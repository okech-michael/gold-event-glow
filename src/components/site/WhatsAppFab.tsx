import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function WhatsAppFab() {
  return (
    <motion.a
      href="https://wa.me/254700000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-gold shadow-gold hover:scale-110 transition-transform duration-500"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-[oklch(0.13_0_0)]" />
      <span className="absolute inset-0 rounded-full animate-ping bg-primary/30" />
    </motion.a>
  );
}
