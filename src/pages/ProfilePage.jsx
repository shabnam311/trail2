import React from 'react';
import ProfileHeader from '../components/profile/ProfileHeader';
import LearningStats from '../components/profile/LearningStats';
import PerformanceRadar from '../components/profile/PerformanceRadar';
import LoginCalendar from '../components/profile/LoginCalendar';
import ConnectedAccounts from '../components/profile/ConnectedAccounts';
import SettingsPanel from '../components/profile/SettingsPanel';
import { mockUserData } from '../data/mockData';

const ProfilePage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 mt-4 pb-8">
      {/* Left Column */}
      <div className="w-full lg:w-[380px] flex flex-col gap-4 shrink-0">
        <ProfileHeader 
          avatarConfig={mockUserData.avatarConfig}
          username={mockUserData.username}
          userId={mockUserData.userId}
          level={mockUserData.level}
          levelTitle={mockUserData.levelTitle}
          xp={mockUserData.xp.current}
          maxXp={mockUserData.xp.max}
        />
        <SettingsPanel />
      </div>
      
      {/* Right Column */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex-1">
          <LearningStats 
            stats={mockUserData.stats}
            streaks={mockUserData.streaks}
            coins={mockUserData.coins}
          />
        </div>
        
        <div className="flex flex-col xl:flex-row gap-4">
          <div className="flex-1">
             <PerformanceRadar skills={mockUserData.radarSkills} />
          </div>
          <div className="flex-[1.2]">
             <LoginCalendar />
          </div>
          <div className="flex-1">
             <ConnectedAccounts accounts={mockUserData.connectedAccounts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
