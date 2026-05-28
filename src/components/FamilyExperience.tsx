import React from 'react';
import { motion } from 'motion/react';
import { Heart, Flame } from 'lucide-react';

export default function FamilyExperience() {
  return (
    <section className="py-24 bg-brand-charcoal relative overflow-hidden">
       {/* Decor elements */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
       <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange rounded-full blur-[100px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative"
             >
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5] shadow-2xl border-4 border-brand-charcoal-light">
                   <img 
                     src="https://images.unsplash.com/photo-1549488344-c715fb86299c?auto=format&fit=crop&q=80&w=1000" 
                     alt="Filipino Family Eating" 
                     className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent"></div>
                   <div className="absolute bottom-8 left-4 right-4 md:left-8 md:right-8">
                     <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-white shadow-xl">
                       <p className="font-medium text-lg leading-snug italic text-brand-yellow">
                         "The best part is sharing the unlimited rice and perfectly grilled chicken with the whole family!"
                       </p>
                       <div className="mt-4 flex items-center gap-3">
                         <Heart size={20} className="text-brand-orange fill-brand-orange" />
                         <span className="font-black uppercase tracking-wider text-xs">The Santos Family</span>
                       </div>
                     </div>
                   </div>
                </div>
                
                {/* Floating decor images */}
                <div className="hidden sm:block absolute -top-8 -right-8 w-40 h-40 rounded-2xl overflow-hidden border-4 border-brand-charcoal shadow-2xl rotate-6">
                  <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=400" alt="BBQ" className="w-full h-full object-cover"/>
                </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
             >
                <div className="inline-block bg-white/10 text-white text-[10px] font-black px-3 py-1 mb-6 rounded uppercase tracking-[0.2em] border border-white/10">
                  Our Tradition
                </div>
                
                <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-6 leading-[0.95] uppercase tracking-tighter italic">
                  Bonding Over <br/>
                  <span className="text-brand-orange">Authentic Flavors</span>
                </h2>
                
                <p className="text-gray-400 font-medium text-lg md:text-xl mb-8 leading-relaxed">
                  More than just food, we serve the warmth of Filipino hospitality. Our charcoal-grilled favorites are made to be shared with friends, family, and loved ones. Experience the joy of eating together (salu-salo) with our generous portions and unlimited rice.
                </p>
                
                <ul className="space-y-6 mb-10">
                  {[
                    { title: "Salu-Salo Tradition", desc: "Generous family meals designed for sharing." },
                    { title: "Authentic Charcoal Grill", desc: "Marinades slowly cooked over real charcoal for that distinct smoky flavor." },
                    { title: "Warm Hospitality", desc: "Experience the smiles and excellent service we are known for." }
                  ].map((feature, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl bg-brand-charcoal-light border border-white/10 flex items-center justify-center shrink-0">
                         <Flame className="text-brand-yellow" size={24} />
                      </div>
                      <div>
                        <h4 className="font-display font-black text-xl text-white mb-1 uppercase tracking-tight">{feature.title}</h4>
                        <p className="text-gray-400 font-medium text-sm">{feature.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <button className="bg-brand-yellow text-black px-10 py-5 rounded-xl font-black text-xl uppercase tracking-wider shadow-[0_10px_30px_rgba(255,215,0,0.3)] hover:scale-105 transition-transform">
                  Order a Family Feast
                </button>
             </motion.div>

          </div>
       </div>
    </section>
  );
}
