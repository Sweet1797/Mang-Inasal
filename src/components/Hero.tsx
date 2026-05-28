import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ChevronRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] bg-brand-charcoal overflow-hidden pt-4 md:pt-0 flex items-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 hidden lg:block">
         <div className="absolute w-[800px] h-[800px] bg-gradient-to-tr from-brand-orange/20 to-transparent rounded-full blur-[100px] top-1/2 right-[-200px] -translate-y-1/2"></div>
      </div>

      {/* Floating Elements / Particles placeholder */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-orange rounded-full blur-sm origin-center animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-brand-yellow rounded-full blur-md origin-center animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-orange-400 rounded-full blur-sm origin-center animate-ping" style={{ animationDuration: '2.5s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-10 pt-10 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <div className="inline-block bg-brand-orange text-black text-xs font-black px-3 py-1 mb-6 rounded uppercase tracking-[0.2em] w-fit">
            New: PM1 Spicy Paa
          </div>
          
          <h1 className="text-[60px] md:text-[90px] lg:text-[110px] leading-[0.85] font-black uppercase italic tracking-tighter mb-6">
            <span className="text-brand-yellow block">IHAW-</span>
            <span className="text-white block">SARAP!</span>
          </h1>
          
          <p className="text-lg text-gray-300 max-w-md mb-8 leading-relaxed font-medium">
            Experience the nation's favorite charcoal-grilled chicken. Authentic Filipino flavors with <span className="text-brand-yellow underline underline-offset-4">Unlimited Rice</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-brand-yellow text-black px-10 py-5 rounded-xl font-black text-xl uppercase tracking-wider shadow-[0_10px_30px_rgba(255,215,0,0.3)] hover:scale-105 transition-transform">
              Order Delivery
            </button>
            <button className="border-2 border-white/20 hover:border-brand-yellow px-10 py-5 rounded-xl font-black text-xl text-white uppercase tracking-wider backdrop-blur-sm transition-colors text-center">
              Pick Up
            </button>
          </div>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="w-full lg:w-1/2 relative h-full flex items-center justify-center min-h-[400px] lg:min-h-[500px]"
        >
            <div className="relative z-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[520px] lg:h-[520px] bg-brand-green rounded-[3rem] lg:rounded-[4rem] shadow-2xl flex items-center justify-center overflow-hidden border-8 border-brand-charcoal-light rotate-6 hover:rotate-3 transition-transform duration-500">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-50"></div>
              
              <div className="w-[240px] h-[240px] md:w-[320px] md:h-[320px] lg:w-[420px] lg:h-[420px] bg-orange-100/10 rounded-full shadow-inner flex flex-col items-center justify-center relative overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=800" alt="Ihaw Sarap" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60" />
                 <div className="relative z-10 text-brand-green font-black text-4xl lg:text-6xl rotate-[-6deg] drop-shadow-md">CHICKEN</div>
                 <div className="relative z-10 text-brand-orange font-black text-6xl lg:text-8xl rotate-[-6deg] mt-[-5px] lg:mt-[-10px] drop-shadow-md">INASAL</div>
                 
                 <div className="absolute bottom-4 right-4 lg:bottom-12 lg:right-4 bg-brand-red text-white p-3 lg:p-4 rounded-full font-black text-center shadow-xl rotate-12 flex flex-col leading-none">
                   <span className="text-[10px] lg:text-xs">STARTS AT</span>
                   <span className="text-xl lg:text-2xl">₱129</span>
                 </div>
              </div>
            </div>
            
            <div className="absolute top-0 md:top-10 right-0 md:right-10 bg-black/40 backdrop-blur-md border border-white/10 p-3 lg:p-4 rounded-2xl flex items-center gap-3 lg:gap-4 animate-pulse z-20">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="text-[10px] lg:text-xs uppercase font-bold tracking-widest text-white">Hot & Fresh from the Grill</div>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
