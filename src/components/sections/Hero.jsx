import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="beranda" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1920&q=80" alt="Coffee Beans" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-flowie-espresso/70 via-flowie-espresso/50 to-flowie-espresso/90"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-flowie-caramel font-medium tracking-[0.3em] uppercase mb-6 text-sm md:text-base">
          Premium Coffee Experience
        </motion.p>
        
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-flowie-cream leading-[1.1] mb-8">
          Seni dalam Setiap <br/>
          <span className="italic text-flowie-caramel">Tegukan Kopi</span>
        </motion.h1>
        
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-lg md:text-xl text-flowie-cream/80 max-w-2xl mx-auto mb-12 font-light">
          Diracik dengan presisi oleh barista bersertifikat. Nikmati perpaduan biji kopi nusantara terbaik dan teknik penyeduhan modern.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#menu" className="px-8 py-4 bg-flowie-caramel text-flowie-espresso rounded-full font-semibold hover:bg-flowie-cream transition-all duration-300 shadow-2xl hover:shadow-flowie-caramel/50 hover:scale-105">
            Lihat Menu
          </a>
          <a href="#tentang" className="px-8 py-4 border-2 border-flowie-cream/50 text-flowie-cream rounded-full font-semibold hover:bg-flowie-cream/10 transition-all duration-300">
            Cerita Kami
          </a>
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="text-flowie-cream/60" size={32} />
      </motion.div>
    </section>
  );
}