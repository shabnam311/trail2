import React from 'react';

const ShopPreview = ({ coins, onBrowse }) => {
  return (
    <div className="bg-[#1e1a2e]/60 rounded-2xl border border-white/10 p-5 flex flex-col justify-between backdrop-blur-md shadow-xl h-full min-h-[180px] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-piggy-teal/5 to-transparent pointer-events-none" />
      
      <div className="flex justify-end mb-2 relative z-10 w-full">
         <div className="flex items-center gap-1 text-yellow-500 font-bold text-xs">
           <span className="drop-shadow-[0_0_5px_rgba(234,179,8,0.8)]">0</span>
           <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center text-[8px] text-yellow-900 border border-yellow-300 shadow-[0_0_8px_rgba(234,179,8,0.6)]">C</div>
         </div>
      </div>
      
      {/* Shelf Graphic */}
      <div className="flex flex-col items-center justify-end flex-1 relative z-10 mb-4 px-4 w-full">
         <div className="flex justify-center gap-4 w-full items-end pb-1 z-10">
           <div className="w-8 h-4 bg-purple-500/40 rounded-full blur-[2px] shadow-[0_-5px_15px_rgba(168,85,247,0.4)]"></div>
           <div className="w-10 h-10 bg-blue-500/40 rounded-t-lg blur-[2px] shadow-[0_-10px_20px_rgba(59,130,246,0.4)]"></div>
           <div className="w-8 h-6 bg-teal-500/40 rounded-full blur-[2px] shadow-[0_-5px_15px_rgba(20,184,166,0.4)]"></div>
         </div>
         {/* Shelf bases */}
         <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
         <div className="w-full h-2 bg-gradient-to-b from-white/10 to-transparent mb-1"></div>
         <div className="w-[80%] h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
         <div className="w-[80%] h-2 bg-gradient-to-b from-white/5 to-transparent"></div>
      </div>
      
      <h3 className="text-sm font-bold tracking-widest uppercase text-center text-white mb-3 relative z-10 mt-2">Shop</h3>
      
      <button 
        onClick={onBrowse}
        className="px-6 py-2 border border-white/20 rounded-xl text-[11px] font-medium text-gray-300 hover:bg-white/10 transition-colors bg-white/5 w-full shadow-inner relative z-10"
      >
        Browse Shop
      </button>
    </div>
  );
};

export default ShopPreview;
