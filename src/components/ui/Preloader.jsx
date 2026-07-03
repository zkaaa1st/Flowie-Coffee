import { motion, AnimatePresence } from 'framer-motion';
import { Coffee } from 'lucide-react';

export default function Preloader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-flowie-espresso"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Coffee className="text-flowie-caramel mx-auto mb-4" size={48} strokeWidth={1.5} />
            <p className="text-flowie-cream font-serif text-2xl tracking-widest">FLOWIE</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}