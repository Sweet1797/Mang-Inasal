import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Gift, Star, ArrowRight } from 'lucide-react';

export default function AppRewards() {
  return (
    <section className="bg-brand-green py-20 relative overflow-hidden border-y border-white/10">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-black/40 via-transparent to-transparent"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white pt-8 lg:pt-0"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-black/30 border border-black/20 text-white font-black uppercase text-xs tracking-widest mb-6">
              <Star size={16} className="fill-brand-yellow text-brand-yellow" />
              Ihaw-Rewards Club
            </div>
            
            <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl mb-6 leading-[0.9] uppercase italic tracking-tighter text-white">
              Earn Rewards. <br/>
              Order Faster.
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-medium">
              Download the Ihaw-Sarap app and get a <span className="text-brand-yellow underline">FREE Paa Large meal</span> on your first delivery order. Earn points for every peso spent.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="flex items-center gap-3 bg-brand-charcoal text-white px-6 py-4 rounded-xl hover:bg-black transition-colors shadow-2xl border border-white/10">
                 <Smartphone size={32} />
                 <div className="text-left flex flex-col">
                   <span className="text-[10px] font-black uppercase tracking-widest text-brand-yellow">Download on the</span>
                   <span className="text-xl font-display font-black leading-none mt-1">App Store</span>
                 </div>
              </button>
              <button className="flex items-center gap-3 bg-brand-charcoal text-white px-6 py-4 rounded-xl hover:bg-black transition-colors shadow-2xl border border-white/10">
                 <Smartphone size={32} />
                 <div className="text-left flex flex-col">
                   <span className="text-[10px] font-black uppercase tracking-widest text-brand-yellow">GET IT ON</span>
                   <span className="text-xl font-display font-black leading-none mt-1">Google Play</span>
                 </div>
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6 max-w-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-black/20 border border-white/10 flex items-center justify-center">
                  <Gift size={20} className="text-brand-yellow" />
                </div>
                <span className="font-black text-sm uppercase tracking-wider">Birthday Promos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-black/20 border border-white/10 flex items-center justify-center">
                  <ArrowRight size={20} className="text-brand-yellow" />
                </div>
                <span className="font-black text-sm uppercase tracking-wider">Fast 1-Click Reorder</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0"
          >
             <div className="relative w-[280px] md:w-[320px] aspect-[1/2] bg-brand-charcoal rounded-[2.5rem] border-[12px] border-brand-charcoal-light p-2 shadow-2xl z-20">
               {/* Phone Screen Mockup */}
               <div className="w-full h-full bg-brand-charcoal rounded-[1.8rem] overflow-hidden relative border border-white/10">
                  <div className="bg-brand-charcoal-light h-32 pt-8 px-4 relative border-b border-white/10">
                    <h4 className="text-brand-yellow font-display font-black uppercase text-2xl tracking-tighter italic">Juan Dela Cruz</h4>
                    <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mt-1">1,250 points</p>
                  </div>
                  
                  <div className="px-4 -mt-8 relative z-10 space-y-4">
                     <div className="bg-brand-charcoal p-4 rounded-xl shadow-lg border border-white/10 flex items-center gap-4">
                       <img src="https://images.unsplash.com/photo-1598511757337-fe2cafc31ba0?auto=format&fit=crop&q=80&w=200" className="w-16 h-16 rounded-lg object-cover mix-blend-luminosity brightness-75" />
                       <div>
                         <h5 className="font-black text-xs text-white uppercase tracking-wider">Quick Reorder</h5>
                         <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Paa Large - PM1</p>
                         <div className="mt-2 text-brand-yellow text-sm font-black">₱155.00</div>
                       </div>
                     </div>
                     
                     <div className="bg-brand-charcoal p-4 rounded-xl shadow-lg border border-white/10">
                       <h5 className="font-black text-xs text-white uppercase tracking-wider mb-3">Exclusive Reward</h5>
                       <div className="bg-gradient-to-r from-brand-orange to-red-600 p-4 rounded-lg text-white">
                         <div className="font-black text-lg uppercase tracking-tighter italic">FREE Halo-Halo</div>
                         <div className="text-[10px] font-bold uppercase tracking-widest mt-2 opacity-80">Valid until Friday. Tap to redeem.</div>
                       </div>
                     </div>
                  </div>
               </div>
             </div>
             
             {/* Abstract app UI elements floating */}
             <div className="absolute top-10 right-10 lg:right-0 bg-brand-charcoal p-4 rounded-xl shadow-2xl border border-white/10 z-30 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-500">
                    <Star size={24} className="fill-green-500" />
                  </div>
                  <div className="pr-2">
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Points Earned</div>
                    <div className="font-display font-black text-2xl text-green-500 italic">+125 pts</div>
                  </div>
                </div>
             </div>
             
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}
