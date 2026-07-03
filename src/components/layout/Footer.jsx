import { Coffee, Camera, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-flowie-espresso text-flowie-cream/60 py-12 px-6 border-t border-flowie-cream/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Coffee className="text-flowie-caramel" size={24} strokeWidth={1.5} />
          <span className="text-xl font-serif font-bold text-flowie-cream tracking-wider">Flowie Coffee</span>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="hover:text-flowie-caramel transition-colors"><Camera size={20} /></a>
          <a href="#" className="hover:text-flowie-caramel transition-colors"><Globe size={20} /></a>
          <a href="#" className="hover:text-flowie-caramel transition-colors"><MessageCircle size={20} /></a>
        </div>

        <p className="text-sm">&copy; {new Date().getFullYear()} Flowie Coffee. All rights reserved.</p>
      </div>
    </footer>
  );
}