import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';

const SuggestionBanner = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-10">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-red-950/30 via-[#07080a] to-[#07080a] border border-red-500/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        
        {/* Background Decorative Glow */}
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-red-600/5 blur-[100px] pointer-events-none"></div>

        <div className="flex items-center gap-6 relative z-10 text-center md:text-left">
          <div className="hidden sm:flex w-16 h-16 shrink-0 items-center justify-center rounded-2xl bg-red-600/10 border border-red-600/20 text-red-500 shadow-inner">
            <MessageSquare size={32} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
              ไม่เจอเกมที่ถูกใจ? <span className="text-red-500 animate-pulse">✨</span>
            </h2>
            <p className="text-gray-400 font-light max-w-lg">
              เสนอชื่อเกมที่คุณอยากเล่น หรือร่วมโหวตเกมที่เพื่อนๆ เสนอมา เพื่อให้เรานำมาเพิ่มในระบบ
            </p>
          </div>
        </div>

        <button className="group relative z-10 flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-red-600/20 active:scale-95 whitespace-nowrap">
          <span>เสนอเกม / โหวต</span>
          <ArrowRight 
            size={20} 
            className="transition-transform duration-300 group-hover:translate-x-2" 
          />
        </button>
      </div>
    </section>
  );
};

export default SuggestionBanner;