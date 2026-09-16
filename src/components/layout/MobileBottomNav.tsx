import { NavLink } from 'react-router-dom';
import { mobileNavItems } from './navConfig';

export function MobileBottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 flex h-16 items-stretch border-t border-black/10 bg-cc-panel md:hidden">
      {mobileNavItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex flex-1 items-center justify-center transition-colors ${
                isActive ? 'bg-cc-cyan text-white' : 'text-white/80 hover:text-white'
              }`
            }
            aria-label={item.label}
          >
            <Icon size={22} />
          </NavLink>
        );
      })}
    </nav>
  );
}
