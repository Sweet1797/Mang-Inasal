import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { menuItems } from '../data';
import { Plus, Flame, Info } from 'lucide-react';

export default function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Favorites' },
    { id: 'chicken', label: 'Chicken Inasal' },
    { id: 'pork', label: 'Pork BBQ' },
    { id: 'dessert', label: 'Desserts' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 relative bg-brand-charcoal">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase italic tracking-tighter mb-4">
               Ihaw-Sarap <span className="text-brand-orange">Bestsellers</span>
            </h2>
            <p className="text-gray-400 text-lg font-medium">
              Our signature dishes marinated to perfection and grilled over hot charcoal. Taste the authentic Filipino flavors.
            </p>
          </div>
          
          <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:px-0 md:pb-0 gap-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full font-black uppercase tracking-widest text-xs transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-brand-yellow text-brand-charcoal shadow-[0_0_15px_rgba(255,215,0,0.3)]' 
                    : 'bg-white/5 border border-white/10 text-white hover:border-brand-yellow hover:text-brand-yellow'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-brand-charcoal-light rounded-3xl overflow-hidden border border-white/10 hover:border-brand-yellow transition-colors group flex flex-col h-full shadow-xl"
              >
                <div className="relative h-56 md:h-64 overflow-hidden bg-brand-charcoal">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {item.badges?.map((badge, idx) => (
                      <span key={idx} className="bg-brand-red text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm backdrop-blur-md">
                        {badge}
                      </span>
                    ))}
                  </div>
                  {item.spicy && (
                    <div className="absolute top-4 right-4 bg-brand-orange text-white p-2 rounded-full shadow-sm">
                      <Flame size={16} />
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-brand-charcoal-light to-transparent">
                     <span className="text-brand-yellow font-black text-2xl md:text-3xl drop-shadow-md">₱{item.price.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="flex flex-col flex-1 p-5 md:p-6 bg-brand-charcoal-light">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="font-display font-black text-xl md:text-2xl text-white leading-tight uppercase tracking-tight">
                      {item.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 font-medium text-sm mb-6 flex-1 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    {item.calories && (
                      <div className="flex items-center text-gray-500 text-xs font-bold gap-1 uppercase tracking-wider">
                        <Info size={14} />
                        {item.calories} Cal
                      </div>
                    )}
                    
                    <button className="flex items-center gap-2 bg-brand-green hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-black uppercase tracking-widest text-xs transition-all shadow-[0_5px_15px_rgba(46,125,50,0.3)] active:scale-95 ml-auto">
                      <Plus size={16} strokeWidth={3} />
                      Add to Order
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
           <button className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/20 text-white rounded-xl font-black text-xl uppercase tracking-wider hover:border-brand-yellow hover:text-brand-yellow transition-colors bg-white/5 backdrop-blur-sm">
              View Full Menu
           </button>
        </div>

      </div>
    </section>
  );
}
