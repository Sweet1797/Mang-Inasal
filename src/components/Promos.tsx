import React from 'react';
import { motion } from 'motion/react';
import { promos } from '../data';
import { Tag, Clock } from 'lucide-react';

export default function Promos() {
  return (
    <section className="py-20 bg-brand-charcoal relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-orange text-black font-black uppercase tracking-[0.2em] text-xs mb-6">
            <Tag size={16} />
            Exclusive Deals
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase italic tracking-tighter mb-4">
            Sulit <span className="text-brand-orange">Promos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl font-medium">
            Grab these limited-time offers and enjoy more of your ihaw-sarap favorites for less.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {promos.map((promo, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              key={promo.id}
              className="group relative bg-brand-charcoal-light rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 hover:border-brand-yellow/50 flex flex-col sm:flex-row h-full min-h-[200px] transition-colors"
            >
               <div className="w-full sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                 <img src={promo.image} alt={promo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 mix-blend-luminosity group-hover:mix-blend-normal" />
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-charcoal-light sm:hidden"></div>
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-charcoal-light sm:hidden"></div>
               </div>
               
               <div className="w-full sm:w-3/5 p-6 md:p-8 flex flex-col justify-center bg-brand-charcoal-light text-white relative z-10 sm:-ml-4 sm:rounded-l-3xl shadow-[-10px_0_30px_rgba(26,26,26,1)]">
                 <div className="flex items-center gap-2 text-brand-charcoal text-xs font-black uppercase tracking-widest mb-4 bg-brand-yellow w-fit px-3 py-1.5 rounded-sm">
                    <Clock size={14} />
                    Ends in {promo.expiresInDays} days
                 </div>
                 <h3 className="font-display font-black text-2xl md:text-3xl mb-3 text-white uppercase italic leading-tight tracking-tighter">{promo.title}</h3>
                 <p className="text-gray-400 font-medium text-sm mb-6">{promo.description}</p>
                 
                 <div className="mt-auto">
                    <div className="text-[10px] text-gray-500 mb-2 font-black uppercase tracking-widest">Use Promo Code</div>
                    <div className="flex items-center justify-between bg-brand-charcoal p-2 pl-4 rounded-xl border border-white/5">
                      <span className="font-mono font-bold text-lg text-brand-yellow tracking-widest">{promo.code}</span>
                      <button className="bg-brand-green text-white px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider shadow-md hover:bg-green-700 transition-colors">
                        Apply
                      </button>
                    </div>
                 </div>
               </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
