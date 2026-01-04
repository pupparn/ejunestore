import React, { useState } from 'react';

const gamesData = [
  {
    id: 1,
    title: "Avatar: Frontiers of Pandora - 19Dec DLC [OFFLINE]",
    price: 199,
    oldPrice: null,
    tags: ["แอ็คชั่น", "ผจญภัย"],
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
    description: "Avatar: Frontiers of Pandora™ เป็นเกมแอ็คชั่นผจญภัยมุมมองบุคคลที่หนึ่งที่มีฉากเป็นพรมแดนตะวันตก เชื่อมต่อกับมรดกที่สูญหายของคุณ และค้นพบความหมายของการเป็นชาวนาวีอย่างแท้จริง"
  },
  {
    id: 2,
    title: "Cowboy-Mall Simulator [OFFLINE]",
    price: 59,
    oldPrice: null,
    tags: ["จำลองสถานการณ์"],
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2788060/header.jpg",
    description: "สร้างและจัดการห้างสรรพสินค้าในสไตล์คาวบอยสุดเก๋า จัดการทรัพยากรและดึงดูดลูกค้าในยุคตื่นทอง"
  },
  {
    id: 3,
    title: "Enshrouded [OFFLINE]",
    price: 27,
    oldPrice: 49,
    discount: "-45%",
    tags: ["เอาชีวิตรอด", "RPG"],
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1203620/header.jpg",
    description: "อาณาจักร Embervale สูญสิ้นไปแล้ว ในความละโมบของบรรพบุรุษ พวกเขาได้ปลดปล่อยโรคระบาดที่กลืนกินโลกใบนี้"
  }
  // สามารถเพิ่มเกมอื่นๆ ตามภาพได้ที่นี่...
];

const GameStore = () => {
  // สร้าง State เพื่อเก็บข้อมูลเกมที่กำลัง Hover อยู่ (Default คือเกมแรก)
  const [activeGame, setActiveGame] = useState(gamesData[0]);

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12">
      
      {/* Tabs Menu */}
      <div className="flex space-x-8 border-b border-white/5 mb-6 text-sm font-medium">
        {["สินค้าใหม่", "ขายดี", "โปรโมชั่น", "เกมแพ็ค"].map((tab, index) => (
          <button 
            key={index}
            className={`pb-3 transition-all ${index === 0 ? "text-white border-b-2 border-red-600" : "text-gray-500 hover:text-gray-300"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Side: Game List */}
        <div className="flex-grow space-y-1">
          {gamesData.map((game) => (
            <div
              key={game.id}
              onMouseEnter={() => setActiveGame(game)} // เมื่อเมาส์เข้า ให้เปลี่ยน Active Game
              className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                activeGame.id === game.id ? "bg-white/5 ring-1 ring-white/10" : "hover:bg-white/5"
              }`}
            >
              <div className="flex items-center space-x-4">
                <img src={game.image} alt={game.title} className="w-24 h-14 object-cover rounded-lg shadow-md" />
                <div>
                  <h3 className={`text-sm font-semibold transition-colors ${activeGame.id === game.id ? "text-red-500" : "text-gray-200"}`}>
                    {game.title}
                  </h3>
                  <div className="flex gap-2 mt-1">
                    {game.tags.map(tag => (
                      <span key={tag} className="text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-right">
                {game.discount && (
                  <span className="bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded mr-2">
                    {game.discount}
                  </span>
                )}
                <span className="text-gray-400 text-xs line-through mr-2">
                  {game.oldPrice ? `฿${game.oldPrice}` : ""}
                </span>
                <span className="text-sm font-bold text-white">฿{game.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Game Preview Card */}
        <div className="w-full lg:w-[400px] shrink-0"> {/* กำหนดกว้างคงที่ด้วย w-[400px] และ shrink-0 */}
            <div className="bg-[#0f1115]/60 backdrop-blur-md border border-white/5 rounded-2xl p-6 sticky top-24 transition-all duration-500">
                
                {/* ส่วนที่แก้ไข: กำหนดความสูงคงที่ (h-16) และใช้ line-clamp-2 เพื่อให้ชื่อยาวแค่ไหนก็ไม่ดันส่วนอื่น */}
                <h2 className="text-xl font-bold mb-4 leading-tight h-14 line-clamp-2">
                {activeGame.title}
                </h2>
                
                <div className="flex gap-2 mb-4 h-7 overflow-hidden"> {/* คุมความสูงของ Tags ด้วย */}
                {activeGame.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-medium text-red-400 bg-red-500/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {tag}
                    </span>
                ))}
                </div>

                {/* รูปภาพที่มีสัดส่วนคงที่ (Aspect Ratio) */}
                <div className="aspect-video w-full overflow-hidden rounded-xl mb-6">
                <img 
                    src={activeGame.image} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                />
                </div>

                {/* คำอธิบายที่คุมความสูงคงที่ */}
                <p className="text-gray-400 text-sm leading-relaxed mb-8 h-20 line-clamp-3">
                {activeGame.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-bold">฿{activeGame.price}</span>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-sm font-bold shadow-lg shadow-red-600/20 active:scale-95 transition-all">
                    ดูรายละเอียด
                </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default GameStore;