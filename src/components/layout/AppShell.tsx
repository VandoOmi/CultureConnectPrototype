import { User } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { navItems, mobileNavItems } from './navConfig';
import { DesktopNavbar } from './DesktopNavbar';
import { MobileBottomNav } from './MobileBottomNav';

function usePageTitle() {
  const { pathname } = useLocation();
  const all = [...navItems, ...mobileNavItems, { label: 'Chat', to: '/chat' }, { label: 'Einstellungen', to: '/einstellungen' }];
  const match = all.find((item) => item.to === pathname);
  return match?.label ?? 'CultureConnect';
}

export function AppShell() {
  const title = usePageTitle();

  return (
    <div className="flex min-h-screen flex-col">
      <DesktopNavbar />

      {/* Mobile top bar */}
      <header className="sticky top-0 z-20 flex h-14 items-center gap-3 bg-cc-cyan px-4 text-white md:hidden">
        <h1 className="font-heading text-xl font-semibold">{title}</h1>
        <div className="ml-auto flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-white/40" />
          <Link
            to="/einstellungen"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-cc-ink"
            aria-label="Profil"
          >
            <User size={18} />
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-20 pt-4 md:px-6 md:pb-8">
        <Outlet />
      </main>

      <MobileBottomNav />
    </div>
  );
}
