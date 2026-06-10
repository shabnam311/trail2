import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, BookOpen, Trophy, Flag, Sparkles, User, Shield } from 'lucide-react';
import AvatarDisplay from '../avatar/AvatarDisplay';

const ProfileHeader = ({ avatarConfig, username, userId, level, levelTitle, xp, maxXp }) => {
  const percent = Math.min(100, Math.max(0, (xp / maxXp) * 100));
  const [animatedXp, setAnimatedXp] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedXp(percent), 400);
    return () => clearTimeout(timer);
  }, [percent]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-5 items-center">
        {/* Clean Avatar */}
        <div className="w-28 h-28 rounded-full p-1 bg-[#351f54] shrink-0 border border-[#6a3ba3] shadow-sm relative">
          <div className="w-full h-full bg-[#281643] rounded-full overflow-hidden flex items-end justify-center">
             <AvatarDisplay config={avatarConfig} className="w-[120%] h-[120%] object-bottom" />
          </div>
        </div>
        
        <div className="flex flex-col gap-2.5 flex-1">
          <div className="inner-card-duo px-4 py-2 flex flex-col justify-center">
            <span className="text-[10px] text-[#94a3b8] font-bold mb-0.5 tracking-wider uppercase flex items-center gap-1.5"><User size={10} /> Username</span>
            <span className="text-[15px] font-bold text-white tracking-wide">{username}</span>
          </div>
          <div className="inner-card-duo px-4 py-2 flex flex-col justify-center">
            <span className="text-[10px] text-[#94a3b8] font-bold mb-0.5 tracking-wider uppercase flex items-center gap-1.5"><Shield size={10} /> User ID</span>
            <span className="text-[15px] font-bold text-white tracking-widest">{userId}</span>
          </div>
        </div>
      </div>
      
      {/* Level and XP */}
      <div className="card-duo p-5 w-full mt-2">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[14px] text-white font-bold tracking-wide flex items-center gap-2">
            Level {level} <span className="text-[#a78bfa] font-medium text-[12px]">({levelTitle})</span>
          </span>
          <span className="text-[12px] text-[#b8e92f] font-bold">XP: {xp} / {maxXp}</span>
        </div>
        <div className="h-3 w-full bg-[#281643] rounded-full overflow-hidden relative border border-[#552e85]">
          <div 
            className="absolute top-0 bottom-0 left-0 bg-[#b8e92f] transition-all duration-1000 ease-out"
            style={{ width: `${animatedXp > 0 ? animatedXp : 2}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
