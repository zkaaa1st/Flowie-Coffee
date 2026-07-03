import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Menu, X, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Beranda', 'Tentang', 'Menu', 'Proses', 'Kontak'];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-flowie-cream/90 backdrop-blur-lg shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <Coffee className={`transition-colors ${scrolled ? 'text-flowie-espresso' : 'text-flowie-cream'}`} size={28} strokeWidth={1.5} />
            <span className={`text-2xl font-serif font-bold tracking-wider transition-colors ${scrolled ? 'text-flowie-espresso' : 'text-flowie-cream'}`}>Flowie Coffee</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className={`text-sm font-medium tracking-wide hover:text-flowie-caramel transition-colors ${scrolled ? 'text-flowie-espresso' : 'text-flowie-cream/90'}`}>
                {link}
              </a>
            ))}
            <button className="p-2 rounded-full bg-flowie-caramel text-flowie-espresso hover:bg-flowie-espresso hover:text-flowie-cream transition-all">
              <ShoppingBag size={18} />
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileOpen(true)}>
            <Menu className={scrolled ? 'text-flowie-espresso' : 'text-flowie-cream'} size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3 }} className="fixed inset-0 z-[60] bg-flowie-espresso flex flex-col items-center justify-center gap-8">
            <button className="absolute top-6 right-6 text-flowie-cream" onClick={() => setMobileOpen(false)}><X size={32} /></button>
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMobileOpen(false)} className="text-3xl font-serif text-flowie-cream hover:text-flowie-caramel transition-colors">
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}