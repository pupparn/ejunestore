import React from 'react';
import { Zap, ShieldCheck, CreditCard } from 'lucide-react';

const Features = () => {
  const featureList = [
    {
      icon: <Zap size={28} />,
      title: "ส่งไอดีอัตโนมัติ",
      desc: "ไม่ต้องรอพ่อค้าตอบแชท! ระบบส่ง ID/Password เข้ากระเป๋าของคุณทันทีที่ชำระเงินเสร็จสิ้น 24 ชม."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "รับประกันความปลอดภัย",
      desc: "มีระบบประกันหลังการขาย หากไอดีมีปัญหา มีทีมงานช่วยเหลือเต็มที่ สบายใจหายห่วง"
    },
    {
      icon: <CreditCard size={28} />,
      title: "รองรับทุกการชำระเงิน",
      desc: "จ่ายสะดวกผ่าน TrueMoney Wallet และ PromptPay รองรับทุกธนาคารชั้นนำของไทย"
    }
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
          ทำไมต้องซื้อกับ <span className="text-red-600">EJUNE STORE</span>?
        </h2>
        <div className="w-20 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-500 max-w-2xl mx-auto font-light">
          เราใส่ใจทุกขั้นตอนเพื่อให้คุณได้รับไอดีที่มีคุณภาพและปลอดภัยที่สุดในราคาที่คุ้มค่า
        </p>
      </div>

      {/* Grid Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featureList.map((item, index) => (
          <div 
            key={index} 
            className="group p-10 rounded-[2.5rem] bg-[#0f1115]/30 border border-white/5 hover:border-red-600/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/10"
          >
            <div className="w-16 h-16 rounded-2xl bg-red-600/5 border border-red-600/10 flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 text-red-500">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-500 leading-relaxed font-light text-sm md:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;