import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
        <div className="grid min-h-[700px] lg:grid-cols-2">
          <div className="hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold">P</div>
                <div>
                  <p className="text-2xl font-semibold">PharmaFlow</p>
                  <p className="text-sm text-slate-400">Pharmacy management platform</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl font-bold leading-tight">Modern operations for every pharmacy.</h2>
                <p className="max-w-md text-slate-300">
                  Manage inventory, track sales, monitor medicine performance, and deliver smarter service using one connected dashboard.
                </p>
              </div>
            </div>

            <div className="grid gap-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-slate-800 bg-slate-800/80 p-4">Live inventory accuracy</div>
              <div className="rounded-2xl border border-slate-800 bg-slate-800/80 p-4">POS and billing workflow</div>
              <div className="rounded-2xl border border-slate-800 bg-slate-800/80 p-4">AI-powered sales assistance</div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white p-6 sm:p-10">
            <div className="w-full max-w-md">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
