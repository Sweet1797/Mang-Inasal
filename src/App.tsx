/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickOrder from './components/QuickOrder';
import FeaturedMenu from './components/FeaturedMenu';
import Promos from './components/Promos';
import FamilyExperience from './components/FamilyExperience';
import AppRewards from './components/AppRewards';
import Footer from './components/Footer';
import { ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-charcoal text-white overflow-x-hidden font-sans relative">
      <div className="fixed inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #444 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <QuickOrder />
          <FeaturedMenu />
          <Promos />
          <FamilyExperience />
          <AppRewards />
        </main>

        <Footer />
      </div>

      {/* Sticky Mobile Fab for Fast Ordering */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-6 w-full px-4 md:hidden z-40 pointer-events-none"
      >
        <div className="max-w-sm mx-auto flex justify-center">
          <button className="flex items-center gap-3 bg-brand-green text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-lg shadow-[0_10px_30px_rgba(46,125,50,0.5)] pointer-events-auto w-full justify-center active:scale-95 transition-transform">
             <ShoppingBag size={24} />
             View Cart (2)
          </button>
        </div>
      </motion.div>
    </div>
  );
}
