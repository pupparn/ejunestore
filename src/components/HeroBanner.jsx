import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroBanner = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-10">
      <div className="relative w-full min-h-[500px] rounded-[2.5rem] overflow-hidden flex items-center group shadow-2xl shadow-red-900/10">
        
        {/* Background Image & Red-Black Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070')` }}
        >
          {/* Overlay สีแดงเข้มไล่ไปหาดำ */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0505] via-[#07080a]/90 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 md:px-20 py-16 max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-xs font-bold mb-6 uppercase tracking-[0.2em]">
            Welcome
          </span>
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 ">
            EJUNE <br />
            <span className="text-red-600 drop-shadow-[0_0_15px_rgba(225,29,72,0.3)]">STORE</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-10 max-w-lg">
            บริการจำหน่ายและให้เช่าไอดีเกม ราคาถูก ปลอดภัย <br className="hidden md:block"/> ซื้อผ่านระบบอัตโนมัติ 24 ชม.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group relative flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-red-600/30 transition-all active:scale-95">
              <span>เลือกดูสินค้า</span>
              
              {/* ลูกศรจะขยับ "เฉพาะ" เมื่อเมาส์ชี้ที่ตัวปุ่มนี้เท่านั้น เพราะ group อยู่ที่นี่ */}
              <ArrowRight 
                size={20} 
                className="transition-transform duration-300 group-hover:translate-x-1.5" 
              />
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-12 py-4 rounded-full font-bold transition-all active:scale-95">
              ช่วยเหลือ
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroBanner;