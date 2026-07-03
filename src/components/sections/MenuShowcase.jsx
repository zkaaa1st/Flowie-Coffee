import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories, menuItems } from '../../data/menuData';

export default function MenuShowcase() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredItems = activeCategory === 'Semua' ? menuItems : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-6 bg-flowie-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-flowie-caramel font-medium tracking-widest uppercase mb-3">Racikan Terbaik</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-flowie-espresso">Menu Pilihan</h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-flowie-espresso text-flowie-cream shadow-lg' 
                  : 'bg-flowie-floral text-flowie-espresso hover:bg-flowie-caramel/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-flowie-espresso/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button className="w-full py-2 bg-flowie-cream text-flowie-espresso rounded-full text-sm font-semibold hover:bg-flowie-caramel transition-colors">
                      Tambah ke Keranjang
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-serif font-bold text-flowie-espresso leading-tight">{item.name}</h3>
                    <span className="text-flowie-caramel font-bold whitespace-nowrap ml-2">Rp{item.price.toLocaleString('id-ID')}</span>
                  </div>
                  <p className="text-sm text-flowie-espresso/60 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}