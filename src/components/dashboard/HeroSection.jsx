import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, BookOpen, Trophy, Flag, Sparkles, Sprout, Moon } from 'lucide-react';

const HeroSection = ({ username, level, xp, maxXp }) => {
  const percent = Math.min(100, Math.max(0, (xp / maxXp) * 100));
  const [animatedXp, setAnimatedXp] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedXp(percent), 400);
    return () => clearTimeout(timer);
  }, [percent]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="card-duo p-8 h-full flex flex-col relative"
    >
      {/* Top Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col">
          <h1 className="text-[28px] font-extrabold text-white tracking-tight leading-none mb-3">{username}</h1>
          <div className="inline-flex items-center gap-2 bg-[#0a0014] border-2 border-[#3d0080] px-3 py-1.5 rounded-xl w-max shadow-[0_2px_0_#0f001a]">
            <Sprout size={14} className="text-[#c48cf5]" />
            <span className="text-xs text-[#c48cf5] font-bold tracking-wide">Saving Rookie</span>
          </div>
        </div>
        <div className="bg-[#39ff14] text-[#052600] px-4 py-2 rounded-xl border-2 border-[#188000] shadow-[0_3px_0_#188000] flex items-center gap-2">
          <Sparkles size={16} fill="currentColor" />
          <span className="text-sm font-extrabold tracking-wide">Level {level}</span>
        </div>
      </div>

      {/* XP Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[13px] text-[#a78bfa] font-bold tracking-widest uppercase">XP Progress</span>
          <span className="text-[13px] font-extrabold text-[#39ff14]">{xp} <span className="text-[#a78bfa] font-bold">/ {maxXp} XP</span></span>
        </div>
        <div className="h-4 w-full bg-[#0a0014] rounded-full overflow-hidden flex items-center border-2 border-[#3d0080]">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${animatedXp > 0 ? animatedXp : 2}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-[#39ff14] rounded-full relative"
          >
            <div className="absolute top-1 left-2 right-2 h-1 bg-white/40 rounded-full"></div>
          </motion.div>
        </div>
      </div>

      {/* Mascot and Stats Container */}
      <div className="flex-1 grid grid-cols-2 gap-8 mt-2 items-center mb-8">
        {/* Left: Mascot (Celestial Moon) */}
        <div className="flex flex-col items-center justify-center relative">
          <motion.div 
            animate={{ y: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-[140px] h-[140px] mb-4"
          >
             <div className="w-[110px] h-[110px] bg-[#6b21a8] rounded-full flex items-center justify-center absolute inset-0 m-auto border-4 border-[#0a0014] shadow-[0_6px_0_#0a0014,0_0_30px_rgba(107,33,168,0.6)]">
               <Moon size={56} className="text-[#d8b4fe] fill-[#d8b4fe] drop-shadow-[0_0_15px_rgba(216,180,254,0.8)]" />
             </div>
             
             {/* +XP badge */}
             <div className="absolute -top-2 -right-2 bg-[#39ff14] text-[#052600] text-[12px] font-extrabold px-3 py-1.5 rounded-xl shadow-[0_3px_0_#188000] border-2 border-[#0a0014] rotate-12">
               +XP
             </div>
          </motion.div>
          
          {/* Tooltip */}
          <div className="bg-[#0a0014] border-2 border-[#3d0080] rounded-2xl px-4 py-2.5 text-center relative mt-2 shadow-[0_3px_0_#0f001a]">
             <span className="text-[13px] text-[#e9d5ff] font-bold tracking-wide">Harness the power</span>
          </div>
        </div>
        
        {/* Right: Stats Cards */}
        <div className="flex flex-col gap-4 justify-center h-full">
          <div className="flex gap-4">
            <div className="inner-card-duo flex-1 py-5 flex flex-col items-center justify-center">
              <Gamepad2 size={28} className="text-[#c48cf5] mb-2 drop-shadow-[0_0_10px_rgba(196,140,245,0.4)]" />
              <span className="text-2xl font-extrabold text-white leading-none mb-1">0</span>
              <span className="text-[12px] text-[#a78bfa] font-bold uppercase tracking-wider">Games</span>
            </div>
            <div className="inner-card-duo flex-1 py-5 flex flex-col items-center justify-center">
              <BookOpen size={28} className="text-[#39ff14] mb-2 drop-shadow-[0_0_10px_rgba(57,255,20,0.4)]" />
              <span className="text-2xl font-extrabold text-white leading-none mb-1">0</span>
              <span className="text-[12px] text-[#a78bfa] font-bold uppercase tracking-wider">Lessons</span>
            </div>
          </div>
          
          <div className="inner-card-duo w-full p-5 flex items-center gap-5 mt-auto">
             <div className="w-12 h-12 rounded-2xl bg-[#c48cf5]/20 border-2 border-[#c48cf5]/40 flex items-center justify-center shadow-[0_0_15px_rgba(196,140,245,0.2)]">
               <Trophy size={24} className="text-[#c48cf5]" />
             </div>
             <div className="flex flex-col">
               <span className="text-[11px] text-[#a78bfa] font-bold mb-1 tracking-widest uppercase">Current League</span>
               <span className="text-[16px] font-extrabold text-white leading-tight">Bronze League</span>
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="inner-card-duo p-5 flex justify-between items-center w-full mt-auto cursor-default">
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 rounded-2xl bg-[#39ff14]/20 flex items-center justify-center border-2 border-[#39ff14]/40 shadow-[0_0_15px_rgba(57,255,20,0.2)]">
             <Flag size={20} className="text-[#39ff14]" />
           </div>
           <span className="text-[14px] text-white font-bold">Join the race! Compete with friends</span>
        </div>
        <button className="btn-duo-green px-6 py-3 text-[14px]">
          Join Now
        </button>
      </div>
    </motion.div>
  );
};

export default HeroSection;
