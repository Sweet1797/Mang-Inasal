import React from 'react';
import { motion } from 'motion/react';
import { Bike, Store, Users, Coffee, Droplet, Flame } from 'lucide-react';

const categories = [
  { id: 'c1', title: 'Solo Meals', subtitle: 'Starting ₱99', icon: "🍗", delay: 0.1, active: false },
  { id: 'c2', title: 'Unli Rice Deals', subtitle: 'Best Seller', icon: "🍚", delay: 0.2, active: true },
  { id: 'c3', title: 'Family Fiesta', subtitle: 'Shareable', icon: "👨‍👩‍👧", delay: 0.3, active: false },
  { id: 'c4', title: 'Halo-Halo', subtitle: 'Cool Down', icon: "🍧", delay: 0.4, active: false },
];

export default function QuickOrder() {
  return (
    <div className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: cat.delay, duration: 0.5 }}
            className={`bg-white/5 backdrop-blur-md border ${cat.active ? 'border-b-4 border-b-brand-yellow border-white/10' : 'border-white/10'} p-4 md:p-6 rounded-3xl flex items-center gap-4 hover:bg-brand-yellow hover:text-brand-charcoal transition-colors group cursor-pointer`}
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-green rounded-2xl flex items-center justify-center text-xl md:text-2xl group-hover:bg-brand-charcoal group-hover:text-white shrink-0">
              {cat.icon}
            </div>
            <div className="flex flex-col text-left">
              <h3 className="font-black uppercase text-sm md:text-base text-white group-hover:text-brand-charcoal leading-tight">{cat.title}</h3>
              <p className="text-[10px] md:text-xs opacity-60 uppercase tracking-widest font-bold text-white group-hover:text-brand-charcoal mt-1 line-clamp-1">{cat.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Footer Info Ribbon */}
      <div className="mt-8 flex justify-center">
        <div className="inline-flex items-center gap-4 py-2 px-6 bg-brand-charcoal-light rounded-full border border-white/10 shadow-2xl flex-wrap justify-center">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-yellow">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> 148 Branches Open
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20"></div>
          <div className="text-[10px] font-black uppercase tracking-widest text-white">Average Delivery: 24 mins</div>
        </div>
      </div>
    </div>
  );
}
