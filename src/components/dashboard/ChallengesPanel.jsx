import React from 'react';
import { motion } from 'framer-motion';
import { Play, Timer } from 'lucide-react';

const ChallengesPanel = ({ challengeTitle }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="card-duo p-6 flex flex-col shrink-0"
    >
      <div className="mb-6">
         <h3 className="text-[14px] font-extrabold text-[#c48cf5] tracking-widest uppercase mb-4">Active Challenge</h3>
         <span className="text-[12px] text-[#39ff14] font-extrabold uppercase tracking-wider block mb-2 drop-shadow-[0_0_5px_rgba(57,255,20,0.4)]">Level 16 Challenge</span>
         <h4 className="text-[18px] font-extrabold text-white leading-tight">{challengeTitle}</h4>
      </div>
      
      {/* Progress Bar */}
      <div className="mb-8">
         <div className="h-4 w-full bg-[#0a0014] rounded-full overflow-hidden mb-3 border-2 border-[#3d0080]">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '35%' }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="h-full bg-[#39ff14] rounded-full relative"
            >
              <div className="w-full h-1 bg-white/40 mt-0.5 ml-2 rounded-full max-w-[80%]"></div>
            </motion.div>
         </div>
         <div className="flex justify-between items-center">
            <span className="text-[13px] text-[#e9d5ff] font-bold">35% complete</span>
            <span className="text-[13px] text-[#39ff14] font-extrabold flex items-center gap-1.5 drop-shadow-[0_0_5px_rgba(57,255,20,0.3)]">
              <Timer size={14} /> 3 days left
            </span>
         </div>
      </div>
      
      <button className="btn-duo-green w-full py-3.5 mt-auto text-[15px] flex justify-center items-center gap-2 shadow-[0_5px_0_#188000,0_0_15px_rgba(57,255,20,0.2)]">
        <Play size={16} fill="currentColor" /> Continue Challenge
      </button>
    </motion.div>
  );
};

export default ChallengesPanel;
