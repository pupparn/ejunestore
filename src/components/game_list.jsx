import React, { useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';

const gamesData = [
  {
    id: 1,
    category: "สินค้าใหม่",
    title: "Avatar: Frontiers of Pandora - 19Dec DLC [OFFLINE]",
    price: 199,
    tags: ["แอ็คชั่น", "ผจญภัย"],
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
    description: "Avatar: Frontiers of Pandora™ เป็นเกมแอ็คชั่นผจญภัยมุมมองบุคคลที่หนึ่งที่มีฉากเป็นพรมแดนตะวันตก เชื่อมต่อกับมรดกที่สูญหายของคุณ และค้นพบความหมายของการเป็นชาวนาวีอย่างแท้จริง"
  },
  {
    id: 2,
    category: "ขายดี",
    title: "Cowboy-Mall Simulator [OFFLINE]",
    price: 59,
    tags: ["จำลองสถานการณ์"],
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2788060/header.jpg",
    description: "สร้างและจัดการห้างสรรพสินค้าในสไตล์คาวบอยสุดเก๋า จัดการทรัพยากรและดึงดูดลูกค้าในยุคตื่นทอง"
  },
  {
    id: 3,
    category: "สินค้าใหม่",
    title: "Enshrouded [OFFLINE]",
    price: 27,
    oldPrice: 49,
    discount: "-45%",
    tags: ["เอาชีวิตรอด", "RPG"],
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1203620/header.jpg",
    description: "อาณาจักร Embervale สูญสิ้นไปแล้ว ในความละโมบของบรรพบุรุษ พวกเขาได้ปลดปล่อยโรคระบาดที่กลืนกินโลกใบนี้"
  }
];

const GameStore = () => {
  const [activeTab, setActiveTab] = useState("สินค้าใหม่");
  
  // กรองเกมตาม Tab ที่เลือก
  const filteredGames = useMemo(() => {
    return gamesData.filter(game => game.category === activeTab);
  }, [activeTab]);

  // State สำหรับเกมที่กำลังแสดงใน Card ขวา (Default คือเกมแรกของ List ที่กรองแล้ว)
  const [activeGame, setActiveGame] = useState(filteredGames[0] || gamesData[0]);

  // ฟังก์ชันสลับ Tab และ Reset เกมพรีวิว
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const firstInTab = gamesData.find(g => g.category === tab);
    if (firstInTab) setActiveGame(firstInTab);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12">
      
      {/* --- DaisyUI Tabs Section --- */}
      <div role="tablist" className="tabs tabs-bordered mb-8 border-white/5">
        {["สินค้าใหม่", "ขายดี", "โปรโมชั่น", "เกมแพ็ค"].map((tab) => (
          <button
            key={tab}
            role="tab"
            onClick={() => handleTabChange(tab)}
            className={`tab h-12 text-base transition-all duration-300 ${
              activeTab === tab 
                ? "tab-active !text-red-500 !border-red-600 font-bold" 
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* --- Content Section --- */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* ฝั่งซ้าย: รายการเกม */}
        <div className="flex-grow space-y-2">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <div
                key={game.id}
                onMouseEnter={() => setActiveGame(game)}
                className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeGame.id === game.id 
                    ? "bg-white/5 ring-1 ring-white/10" 
                    : "hover:bg-white/5"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <img src={game.image} className="w-28 h-16 object-cover rounded-lg" alt="" />
                  <div>
                    <h3 className={`font-semibold text-sm md:text-base ${activeGame.id === game.id ? "text-red-500" : "text-white"}`}>
                      {game.title}
                    </h3>
                    <div className="flex gap-2 mt-1">
                      {game.tags.map(tag => (
                        <span key={tag} className="text-[10px] text-gray-500">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  {game.discount && (
                    <span className="bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded mr-2 uppercase">
                      {game.discount}
                    </span>
                  )}
                  <span className="text-sm font-bold text-white">฿{game.price}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 text-gray-500 italic">ไม่มีรายการในหมวดหมู่ {activeTab}</div>
          )}
        </div>

        {/* ฝั่งขวา: การ์ดพรีวิว (ความกว้างคงที่) */}
        <div className="w-full lg:w-[420px] shrink-0">
          <div className="bg-[#0f1115]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 sticky top-24 transition-all duration-500">
            {/* หัวข้อเกม (Fixed Height เพื่อไม่ให้ขยับ) */}
            <h2 className="text-xl font-bold mb-4 line-clamp-2 h-14 leading-tight">
              {activeGame.title}
            </h2>

            <div className="flex gap-2 mb-6 h-7 overflow-hidden">
              {activeGame.tags.map(tag => (
                <span key={tag} className="bg-red-500/10 text-red-500 text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden mb-6">
              <img src={activeGame.image} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt="" />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-10 h-24 line-clamp-4">
              {activeGame.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="text-3xl font-black">฿{activeGame.price}</div>
              
              {/* ปุ่มสินค้าพร้อมลูกศรขยับเฉพาะตัวปุ่ม */}
              <button className="group flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-red-600/20 active:scale-95">
                <span>ดูรายละเอียด</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GameStore;