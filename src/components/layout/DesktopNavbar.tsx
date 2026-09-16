import { MessageCircle, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { navItems } from './navConfig';

export function DesktopNavbar() {
  return (
    <header className="sticky top-0 z-20 hidden bg-white shadow-sm md:block">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cc-cyan font-heading text-sm font-bold text-white">
          CC
        </div>

        <nav className="flex items-center gap-2 text-sm">
          {navItems.map((item, index) => (
            <div key={item.to} className="flex items-center gap-2">
              {index > 0 && <span className="text-cc-muted">/</span>}
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded px-1.5 py-1 transition-colors ${
                    isActive ? 'font-semibold text-cc-cyan-dark' : 'text-cc-ink hover:text-cc-cyan-dark'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </div>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              `flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                isActive ? 'border-cc-cyan bg-cc-cyan text-white' : 'border-cc-ink text-cc-ink hover:bg-cc-light'
              }`
            }
            aria-label="Chat"
          >
            <MessageCircle size={20} />
          </NavLink>
          <NavLink
            to="/einstellungen"
            className={({ isActive }) =>
              `flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                isActive ? 'bg-cc-cyan text-white' : 'bg-gray-300 text-cc-ink hover:bg-gray-400'
              }`
            }
            aria-label="Profil"
          >
            <User size={20} />
          </NavLink>
        </div>
      </div>
    </header>
  );
}
