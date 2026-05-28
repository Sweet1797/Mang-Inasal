import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal pt-20 pb-10 text-gray-400 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                <div className="w-6 h-6 border-4 border-brand-green rounded-full"></div>
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-2">
                <span className="font-display font-black text-xl leading-none uppercase tracking-tighter">
                  <span className="text-brand-yellow">MANG</span> <span className="text-brand-green">INASAL</span>
                </span>
              </div>
            </div>
            <p className="font-medium text-sm leading-relaxed mb-6 max-w-sm">
              Bringing you authentic Filipino charcoal-grilled flavors right to your doorstep. Experience our signature marinades and unlimited rice tradition.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Facebook size={20} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Instagram size={20} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Twitter size={20} className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-display font-black uppercase tracking-widest text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wider text-gray-500">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Full Menu</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Promos & Deals</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Download App</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-display font-black uppercase tracking-widest text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wider text-gray-500">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors flex items-center gap-1">Franchise <ArrowUpRight size={14}/></a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">News & Events</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-display font-black uppercase tracking-widest text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-yellow shrink-0 mt-0.5" />
                <span>123 Culinary Hub, BGC, Taguig City</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-yellow shrink-0" />
                <span>+63 2 8123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-yellow shrink-0" />
                <span className="normal-case tracking-normal">hello@manginasal.ph</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-600">
          <p>© {new Date().getFullYear()} Mang Inasal. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-yellow transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-yellow transition-colors">Accessibility</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
