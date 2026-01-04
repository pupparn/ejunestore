import React from 'react';
import { Gamepad2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#07080a]/80 backdrop-blur-md pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Section 1: Brand & Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-red-600 p-1 rounded-lg">
                <Gamepad2 size={24} className="text-white" />
              </div>
              <h2 className="text-xl font-bold tracking-tighter uppercase">
                THIS<span className="text-red-500">GAME</span>
              </h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              ขาย เช่า เกมแท้ราคาถูกทั้งระบบออฟไลน์ และออนไลน์ เชื่อถือได้ ผ่านระบบอัตโนมัติตลอด 24 ชั่วโมง และทีมงานซัพพอร์ต 12:00 - 23:00น.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">ช่วยเหลือ</h3>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="hover:text-red-500 cursor-pointer transition-colors">ศูนย์ช่วยเหลือ</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">ติดต่อเรา</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">ข้อตกลงและเงื่อนไข</li>
            </ul>
          </div>

          {/* Section 3: Payments */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">Payment Methods</h3>
            <div className="flex flex-wrap gap-3">
              {/* ตราธนาคาร/ช่องทางชำระเงินจำลองตามแบบ */}
              <div className="bg-[#0f1115] border border-white/10 px-4 py-2 rounded-lg text-xs font-medium text-gray-400">
                PromptPay
              </div>
              <div className="bg-[#0f1115] border border-white/10 px-4 py-2 rounded-lg text-xs font-medium text-gray-400">
                TrueMoney Wallet
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © 2024 <span className="text-red-600 font-bold">THISGAME</span>. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-600">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;