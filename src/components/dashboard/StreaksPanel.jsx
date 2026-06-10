import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Check } from 'lucide-react';

const StreaksPanel = ({ currentStreak }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="card-duo p-6 flex flex-col shrink-0"
    >
      <div className="w-full flex justify-between items-center mb-6">
        <h3 className="text-[14px] font-extrabold text-[#c48cf5] tracking-widest uppercase">Your Streak</h3>
        <div className="px-3 py-1.5 rounded-xl bg-[#0a0014] border-2 border-[#3d0080] shadow-[0_2px_0_#0f001a]">
          <span className="text-[12px] text-[#c48cf5] font-bold">Best: 7 days</span>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center w-full mb-8 relative">
        <div className="w-24 h-24 bg-[#0a0014] rounded-full flex items-center justify-center mb-5 border-4 border-[#3d0080] shadow-[0_6px_0_#0f001a,0_0_30px_rgba(107,33,168,0.4)]">
          <Flame size={48} className="text-[#39ff14] fill-[#39ff14] drop-shadow-[0_0_15px_rgba(57,255,20,0.8)]" />
        </div>
        <span className="text-6xl font-extrabold text-white leading-none mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{currentStreak}</span>
        <span className="text-[14px] text-[#39ff14] font-extrabold tracking-wide drop-shadow-[0_0_5px_rgba(57,255,20,0.4)]">Keep it burning!</span>
      </div>
      
      {/* 7 Day Tracker */}
      <div className="w-full mb-8">
        <div className="flex justify-between items-center w-full px-1">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => {
            const isDone = i < 2;
            const isCurrent = i === 2;
            
            return (
              <div key={i} className="flex flex-col items-center gap-3">
                <span className={`text-[12px] font-extrabold ${isDone || isCurrent ? 'text-white' : 'text-[#8b7eab]'}`}>{d}</span>
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all
                    ${isDone ? 'bg-[#39ff14] text-[#052600] border-2 border-[#188000] shadow-[0_3px_0_#188000,0_0_15px_rgba(57,255,20,0.4)]' : ''}
                    ${isCurrent ? 'border-2 border-[#39ff14] bg-[#0a0014] text-[#39ff14] shadow-[0_3px_0_#188000,0_0_10px_rgba(57,255,20,0.2)]' : ''}
                    ${!isDone && !isCurrent ? 'bg-[#0a0014] border-2 border-[#3d0080] shadow-[0_2px_0_#0f001a]' : ''}
                  `}
                >
                  {isDone && <Check size={18} strokeWidth={4} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <button className="btn-duo-green w-full py-4 mt-auto text-[15px] flex justify-center items-center gap-2 shadow-[0_5px_0_#188000,0_0_20px_rgba(57,255,20,0.3)]">
        Keep the flame alive <Flame size={18} className="fill-current" />
      </button>
    </motion.div>
  );
};

export default StreaksPanel;
