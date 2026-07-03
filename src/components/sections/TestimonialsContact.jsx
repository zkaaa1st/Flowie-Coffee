import { motion } from 'framer-motion';
import { Star, MapPin, Clock, Phone, Mail, Camera, Globe, MessageCircle } from 'lucide-react';

const testimonials = [
  { name: 'Azka a.', role: 'Proggraming', text: 'Flowie Signature Latte adalah yang terbaik di kota ini. Suasananya juga sangat nyaman untuk bekerja.', rating: 5 },
  { name: 'Budi S.', role: 'Freelance Designer', text: 'Tempat favorit saya untuk meeting klien. Kopinya premium, pelayanannya sangat profesional.', rating: 5 },
  { name: 'Citra L.', role: 'Food Blogger', text: 'Manual brew mereka selalu konsisten. Sangat Enak sekali kamu harus membelinya.', rating: 5 },
];

export default function TestimonialsContact() {
  return (
    <>
      {/* Testimonials */}
      <section className="py-24 px-6 bg-flowie-floral">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-flowie-caramel font-medium tracking-widest uppercase mb-3">Testimoni</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-flowie-espresso">Kata Mereka</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, idx) => <Star key={idx} size={18} className="fill-flowie-caramel text-flowie-caramel" />)}
                </div>
                <p className="text-flowie-espresso/80 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold text-flowie-espresso">{t.name}</p>
                  <p className="text-sm text-flowie-espresso/60">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Visit Us */}
      <section id="kontak" className="py-24 px-6 bg-flowie-cream">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-flowie-caramel font-medium tracking-widest uppercase mb-3">Kunjungi Kami</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-flowie-espresso mb-8">Temui Kami di Sini</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-flowie-caramel/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-flowie-caramel" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-flowie-espresso mb-1">Lokasi</h4>
                  <p className="text-flowie-espresso/70">Jl. Caringin No. 123, Lantai 2<br/>Bandung, 99999</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-flowie-caramel/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-flowie-caramel" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-flowie-espresso mb-1">Jam Operasional</h4>
                  <p className="text-flowie-espresso/70">Senin - Jumat: 07.00 - 22.00<br/>Sabtu - Minggu: 08.00 - 23.00</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-flowie-caramel/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-flowie-caramel" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-flowie-espresso mb-1">Reservasi & Kontak</h4>
                  <p className="text-flowie-espresso/70">+62 00000000<br/>flowie@flowiecoffee.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-flowie-espresso p-8 md:p-12 rounded-3xl text-flowie-cream">
            <h3 className="text-2xl font-serif font-bold mb-2">Berlangganan Newsletter</h3>
            <p className="text-flowie-cream/70 mb-8">Dapatkan promo eksklusif, menu baru, dan tips menyeduh kopi langsung di inbox Anda.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Nama Lengkap" className="w-full px-5 py-3 bg-flowie-cream/10 border border-flowie-cream/20 rounded-xl text-flowie-cream placeholder-flowie-cream/50 focus:outline-none focus:border-flowie-caramel transition-colors" />
              <input type="email" placeholder="Alamat Email" className="w-full px-5 py-3 bg-flowie-cream/10 border border-flowie-cream/20 rounded-xl text-flowie-cream placeholder-flowie-cream/50 focus:outline-none focus:border-flowie-caramel transition-colors" />
              <button type="submit" className="w-full py-3 bg-flowie-caramel text-flowie-espresso font-bold rounded-xl hover:bg-flowie-cream transition-colors">
                Berlangganan Sekarang
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}