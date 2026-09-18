import { NavLink, Outlet } from 'react-router-dom';
import { LogOut, LayoutGrid, Pill, Package2, ShoppingCart, TrendingUp, RotateCcw, Truck, BarChart3, Users, Settings, Sparkles } from 'lucide-react';
import { navItems } from '../utils/constants';
import { useAuthStore } from '../stores/authStore';

const icons = {
  Dashboard: LayoutGrid,
  POS: ShoppingCart,
  Medicines: Pill,
  Inventory: Package2,
  Purchases: Truck,
  Sales: TrendingUp,
  Returns: RotateCcw,
  Suppliers: Truck,
  Reports: BarChart3,
  Users: Users,
  Settings: Settings,
  'AI Assistant': Sparkles,
};

export default function DashboardLayout() {
  const { user, logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 flex-col border-r border-slate-200 bg-slate-900 text-slate-100 lg:flex">
          <div className="border-b border-slate-800 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold">P</div>
              <div>
                <p className="text-lg font-semibold">PharmaFlow</p>
                <p className="text-xs text-slate-400">Operations Suite</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 space-y-1 p-4">
            {navItems.map(({ label, path }) => {
              const Icon = icons[label] || LayoutGrid;

              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                      isActive ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`
                  }
                >
                  <Icon size={16} />
                  {label}
                </NavLink>
              );
            })}
          </nav>

          <div className="border-t border-slate-800 p-4">
            <button
              type="button"
              onClick={logout}
              className="flex w-full items-center justify-between rounded-xl bg-slate-800 px-3 py-2 text-sm text-slate-200 hover:bg-slate-700"
            >
              <span>{user?.name || 'Admin User'}</span>
              <LogOut size={16} />
            </button>
          </div>
        </aside>

        <main className="flex-1">
          <header className="border-b border-slate-200 bg-white/80 px-4 py-4 backdrop-blur sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Pharmacy care</p>
                <h1 className="text-xl font-semibold text-slate-900">PharmaFlow Dashboard</h1>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700">
                  {user?.name || 'Admin User'}
                </div>
              </div>
            </div>
          </header>

          <div className="p-4 sm:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
