import React from 'react';
import { motion } from 'framer-motion';
import { Play, Target } from 'lucide-react';

const DailyQuestPanel = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="card-duo p-6 flex flex-col shrink-0"
    >
      <div className="flex justify-between items-center mb-6">
         <h3 className="text-[14px] font-extrabold text-[#c48cf5] tracking-widest uppercase flex items-center gap-2">
           <Target size={16} /> Daily Quest
         </h3>
         <div className="px-3 py-1.5 rounded-xl bg-[#0a0014] border-2 border-[#3d0080] shadow-[0_2px_0_#0f001a]">
           <span className="text-[12px] text-white font-extrabold">1 <span className="text-[#c48cf5]">/ 3</span></span>
         </div>
      </div>
      
      <div className="mb-6">
         <h4 className="text-[18px] font-extrabold text-white mb-2 leading-tight">Budget Basics</h4>
         <p className="text-[14px] text-[#e9d5ff] font-bold leading-relaxed">
           Answer 3 budget questions to earn <span className="text-[#39ff14] drop-shadow-[0_0_5px_rgba(57,255,20,0.5)]">50 XP</span>
         </p>
      </div>
      
      {/* Progress Bars */}
      <div className="flex gap-3 mb-8">
         <div className="h-3 flex-1 bg-[#39ff14] rounded-full border-2 border-[#188000] shadow-[0_0_10px_rgba(57,255,20,0.4)] relative">
            <div className="absolute top-0.5 left-1 right-1 h-0.5 bg-white/40 rounded-full"></div>
         </div>
         <div className="h-3 flex-1 bg-[#0a0014] rounded-full border-2 border-[#3d0080]"></div>
         <div className="h-3 flex-1 bg-[#0a0014] rounded-full border-2 border-[#3d0080]"></div>
      </div>
      
      <button className="btn-duo-green w-full py-3.5 mt-auto text-[15px] flex justify-center items-center gap-2 shadow-[0_5px_0_#188000,0_0_15px_rgba(57,255,20,0.2)]">
        <Play size={16} fill="currentColor" /> Start Quest
      </button>
    </motion.div>
  );
};

export default DailyQuestPanel;
