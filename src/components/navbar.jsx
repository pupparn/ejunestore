import React from 'react';
import { Search, Globe, Gamepad2 } from 'lucide-react';

const Navbar = () => {
  return (
    // แก้ไขตรงนี้: ใช้ bg-transparent หรือสีดำแบบโปร่งแสงมาก ๆ (เช่น /40) และเพิ่ม backdrop-blur
    <nav className="border-b border-red-900/20 bg-[#07080a]/40 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
        
        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-2">
            <div className="bg-red-600 p-1.5 rounded-lg shadow-lg shadow-red-600/40">
              <Gamepad2 size={24} className="text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tighter uppercase">
              E<span className="text-red-500">JUNE</span>STORE
            </h1>
          </div>

          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
            <li className="text-white cursor-pointer hover:text-red-500 transition">หน้าหลัก</li>
            <li className="cursor-pointer hover:text-red-500 transition">เกมออฟไลน์</li>
            <li className="cursor-pointer hover:text-red-500 transition">หมวดหมู่</li>
            <li className="cursor-pointer hover:text-red-500 transition">ช่วยเหลือ</li>
          </ul>
        </div>

        <div className="flex items-center space-x-5">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input 
              type="text" 
              placeholder="ค้นหาเกม..." 
              className="bg-white/5 border border-white/10 rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:border-red-500/50 w-60"
            />
          </div>
          <button className="text-gray-400 hover:text-red-500 transition"><Globe size={20} /></button>
          <div className="h-5 w-[1px] bg-white/10"></div>
          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium hover:text-red-500 transition">เข้าสู่ระบบ</button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition shadow-lg shadow-red-600/20 active:scale-95">
              สมัครสมาชิก
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;