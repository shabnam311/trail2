import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Gamepad2, Map, TrendingUp } from 'lucide-react';

const navItems = [
  { path: '/', label: 'DASHBOARD', icon: LayoutDashboard },
  { path: '/games', label: 'GAMES', icon: Gamepad2 },
  { path: '/path', label: 'PATH', icon: Map },
  { path: '/stocks', label: 'STOCKS', icon: TrendingUp },
];

const BottomNavBar = () => {
  return (
    <div className="w-[450px] mx-auto z-50 shrink-0 mb-6 mt-4">
      <div className="bg-[#1a1829] border border-white/5 rounded-full flex justify-between items-center px-6 py-2 shadow-lg">
        {navItems.map((item) => {
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1.5 px-4 py-2 rounded-full transition-all ${
                  isActive ? 'bg-[#2a2640] text-[#a3ff57]' : 'bg-transparent text-[#6b677a] hover:text-gray-400'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon size={20} className={isActive ? 'text-[#a3ff57]' : ''} strokeWidth={2} />
                  <span className="text-[10px] font-bold uppercase tracking-wide">
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavBar;
