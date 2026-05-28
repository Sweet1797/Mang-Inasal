import React, { useState } from 'react';
import { Menu, X, ShoppingBag, MapPin, User, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-brand-green text-white text-xs font-medium py-1.5 text-center px-4">
        Free delivery on orders ₱500+ using the app! <span className="underline cursor-pointer ml-1">Download Now</span>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-b from-brand-charcoal to-brand-charcoal/90 backdrop-blur-md border-b border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-24">
            {/* Logo area */}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-yellow rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                <div className="w-6 h-6 md:w-8 md:h-8 border-4 border-brand-green rounded-full"></div>
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-2">
                <span className="font-display font-black text-xl md:text-3xl leading-none uppercase tracking-tighter">
                  <span className="text-brand-yellow">MANG</span> <span className="text-brand-green">INASAL</span>
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-bold tracking-widest uppercase">
              <a href="#" className="text-brand-yellow border-b-2 border-brand-yellow pb-1 transition-colors duration-200">Home</a>
              <a href="#" className="text-white hover:text-brand-yellow transition-colors duration-200">Menu</a>
              <a href="#" className="text-white hover:text-brand-yellow transition-colors duration-200">Promos</a>
              <a href="#" className="flex items-center gap-1 text-white hover:text-brand-yellow transition-colors duration-200">
                <MapPin size={18} />
                <span>Locations</span>
              </a>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-white hover:text-brand-yellow transition-colors">
                <User size={24} />
              </button>
              <button className="flex items-center gap-2 bg-brand-green hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-black uppercase tracking-widest transition-all shadow-[0_5px_15px_rgba(46,125,50,0.3)] hover:scale-105 active:scale-95">
                <span>CART</span>
                <span className="bg-white text-brand-green px-2 py-0.5 rounded-full text-xs font-black">3</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button className="text-white relative">
                <ShoppingBag size={24} />
                <span className="absolute -top-1.5 -right-1.5 bg-brand-yellow text-brand-charcoal text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-black">3</span>
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none hover:text-brand-yellow">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: '100vh', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden fixed top-[calc(4rem+1.5rem)] left-0 w-full bg-brand-charcoal overflow-hidden flex flex-col z-50 border-t border-white/10"
            >
              <div className="p-4 space-y-4 flex-1">
                <a href="#" className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl font-black uppercase text-xl hover:bg-brand-yellow hover:text-brand-charcoal transition-colors">
                  Menu
                  <ChevronRight size={20} />
                </a>
                <a href="#" className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl font-black uppercase text-xl hover:bg-brand-yellow hover:text-brand-charcoal transition-colors">
                  Promos & Deals
                  <ChevronRight size={20} />
                </a>
                <a href="#" className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl font-black uppercase text-xl hover:bg-brand-yellow hover:text-brand-charcoal transition-colors">
                  Store Locator
                  <ChevronRight size={20} />
                </a>
                
                <div className="pt-8">
                  <button className="w-full bg-brand-yellow text-brand-charcoal py-4 rounded-xl font-black uppercase tracking-wider text-xl flex justify-center items-center gap-2 shadow-[0_10px_30px_rgba(255,215,0,0.3)]">
                    <ShoppingBag size={24} />
                    Start Order
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
