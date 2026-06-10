import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import BottomNavBar from './BottomNavBar';

const AppShell = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/';

  return (
    <div className="h-full w-full flex flex-col max-w-[1200px] mx-auto px-4 lg:px-8 relative">
      
      {/* Top Bar Area - Compacted */}
      <div className="w-full flex justify-between items-center py-4 shrink-0">
        
        {/* Logo */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <div className="grid grid-cols-2 gap-1 opacity-100">
               <div className="w-2 h-2 rounded-full bg-[#5ce1e6]"></div>
               <div className="w-2 h-2 rounded-full bg-[#ffb6c1]"></div>
               <div className="w-2 h-2 rounded-full bg-[#8a72cf]"></div>
               <div className="w-2 h-2 rounded-full bg-[#ff9900]"></div>
            </div>
            <span className="text-lg font-bold tracking-tight text-white leading-none">PiggyPath</span>
          </div>
          <span className="text-[7px] text-[#6b677a] tracking-widest mt-1 uppercase font-bold ml-6">
            Skills Before Bills
          </span>
        </div>

        {/* Profile Button */}
        <Link to="/profile" className="flex items-center gap-2 bg-[#1e1a2e] border border-white/5 rounded-full p-1 pr-4 hover:bg-white/5 transition-colors">
          <div className="w-6 h-6 rounded-full bg-[#5ce1e6] flex items-center justify-center text-black font-bold text-[10px]">N</div>
          <span className="text-xs font-medium text-gray-300">Profile</span>
        </Link>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col">
        <Outlet />
      </main>

      {/* Navigation */}
      <BottomNavBar />
    </div>
  );
};

export default AppShell;
