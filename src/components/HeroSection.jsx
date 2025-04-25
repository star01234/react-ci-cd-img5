import React from "react";

const HeroSection = () => {
 return (
  <div className="relative">
   <img src="Baby.png" alt="Baby" className="w-full h-[400px] object-cover" />
   <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
    <div className="bg-white bg-opacity-70 p-6 rounded-lg max-w-lg">
     <h1 className="text-2xl font-bold text-red-500">
      ระบบบันทึกการรับวัคซีน และพัฒนาการของเด็ก
     </h1>
     <p className="text-gray-700 mt-2">
      ระบบบันทึกการฉีดวัคซีนและพัฒนาการของเด็ก เป็นระบบที่ช่วยคุณพ่อคุณแม่
      บันทึกสถานะและติดตามการเจริญเติบโตของเด็กได้ง่ายขึ้น
     </p>
    </div>
   </div>
  </div>
 );
};

export default HeroSection;
