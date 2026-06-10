import React from 'react';
import HeroSection from '../components/dashboard/HeroSection';
import StreaksPanel from '../components/dashboard/StreaksPanel';
import ChallengesPanel from '../components/dashboard/ChallengesPanel';
import DailyQuestPanel from '../components/dashboard/DailyQuestPanel';
import { mockUserData } from '../data/mockData';

const DashboardPage = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 h-full pb-2">
      {/* Left: Hero Section */}
      <div className="lg:col-span-7 xl:col-span-8 h-full min-h-0">
        <HeroSection 
          username={mockUserData.username}
          level={mockUserData.level}
          xp={mockUserData.xp.current}
          maxXp={mockUserData.xp.max}
          avatarConfig={mockUserData.avatarConfig}
        />
      </div>
      
      {/* Right: 3 Panels */}
      <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-4 h-full">
        <StreaksPanel currentStreak={mockUserData.streaks.current} />
        <DailyQuestPanel />
        <ChallengesPanel challengeTitle="Real Estate Tycoon" />
      </div>
    </div>
  );
};

export default DashboardPage;
