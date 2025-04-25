import React from 'react'

const Card = () => {
 return (
  <div className="flex justify-center space-x-6 mt-8">
   {/* Vaccine Management */}
   <div className="relative bg-pink-500 text-white p-6 rounded-lg shadow-md w-64 text-center group overflow-hidden">
    <h2 className="text-xl font-bold">วัคซีน</h2>
    <div className="flex justify-center space-x-3 my-3">
     <img src="Develop.png"alt="Vaccine Icon" className="h-16" />
     <img src="Vaccine.png" alt="Vaccine Icon 2" className="h-16" />
    </div>
    <div className="absolute inset-0 flex flex-col justify-center items-center bg-purple-600 bg-opacity-80 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out rounded-lg p-6">
     <h2 className="text-xl font-bold">การจัดการวัคซีน</h2>
     <button className="btn btn-xs py-1 px-2 text-xs">บันทึกการรับวัคซีน</button>
    </div>
   </div>

   {/* Develop Management */}
   <div className="relative bg-green-500 text-white p-6 rounded-lg shadow-md w-64 text-center group group overflow-hidden">
    <h2 className="text-xl font-bold">พัฒนาการ</h2>
    <div className="flex justify-center space-x-3 my-3">
     <img src="Parrent1.png" alt="Develop Icon" className="h-16" />
     <img src="Parrent2.png" alt="Develop Icon" className="h-16" />
    </div>
    <div className="absolute inset-0 flex flex-col justify-center items-center bg-pink-600 bg-opacity-80 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out rounded-lg p-6">
     <h2 className="text-xl font-bold">การจัดการพัฒนาการ</h2>
     <button className="btn btn-xs py-1 px-2 text-xs">บันทึกพัฒนาการ</button>
    </div>
   </div>
  </div>
 );
};
export default Card