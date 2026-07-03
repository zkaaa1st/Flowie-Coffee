import { motion } from 'framer-motion';
   import { Leaf, Droplet, Flame, Trophy } from 'lucide-react';

const steps = [
  { icon: Leaf, title: 'Seleksi Biji', desc: 'Hanya 1% biji kopi terbaik nusantara yang lolos seleksi ketat kami.' },
  { icon: Flame, title: 'Roasting Presisi', desc: 'Diroasting dalam batch kecil oleh master roaster bersertifikat.' },
  { icon: Droplet, title: 'Ekstraksi Sempurna', desc: 'Disyeduh dengan suhu dan rasio air yang dihitung secara presisi.' },
  { icon: Trophy, title: 'Penyajian Elegan', desc: 'Disajikan dalam cangkir keramik artisan untuk pengalaman maksimal.' },
];

export default function AboutProcess() {
  return (
    <section id="tentang" className="py-24 px-6 bg-flowie-espresso text-flowie-cream relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-flowie-caramel/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-flowie-caramel font-medium tracking-widest uppercase mb-3">Warisan Kami</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">Lebih dari Sekadar <span className="italic text-flowie-caramel">Kedai Kopi</span></h2>
            <p className="text-flowie-cream/70 text-lg leading-relaxed mb-6">
              Flowie Coffee lahir dari kecintaan terhadap seni meracik kopi. Kami percaya bahwa secangkir kopi yang sempurna adalah hasil dari dedikasi, kesabaran, dan penghormatan terhadap alam.
            </p>
            <p className="text-flowie-cream/70 text-lg leading-relaxed">
              Dari pegunungan Gayo hingga ke cangkir di tangan Anda, setiap langkah kami awasi dengan standar tertinggi. Ini bukan sekadar minuman, ini adalah pengalaman.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80" alt="Barista" className="rounded-2xl shadow-2xl w-full object-cover h-[500px]" />
            <div className="absolute -bottom-6 -left-6 bg-flowie-caramel p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-4xl font-serif font-bold text-flowie-espresso">10+</p>
              <p className="text-flowie-espresso font-medium">Tahun Pengalaman</p>
            </div>
          </motion.div>
        </div>

        {/* Process Steps */}
        <div id="proses" className="text-center mb-16">
          <p className="text-flowie-caramel font-medium tracking-widest uppercase mb-3">The Flowie Method</p>
          <h3 className="text-3xl md:text-4xl font-serif font-bold">Proses Penyeduhan Kami</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-flowie-cream/5 border border-flowie-caramel/30 rounded-2xl flex items-center justify-center group-hover:bg-flowie-caramel/20 group-hover:border-flowie-caramel transition-all duration-300">
                <step.icon className="text-flowie-caramel" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-serif font-bold mb-3">{step.title}</h4>
              <p className="text-flowie-cream/60 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}