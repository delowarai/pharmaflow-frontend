import { ArrowUpRight, Boxes, DollarSign, PackageCheck, TrendingUp } from 'lucide-react';
import SalesChart from '../components/Charts/SalesChart';
import { dashboardMetrics, defaultChartData } from '../utils/constants';

const metricIcons = [DollarSign, TrendingUp, Boxes, PackageCheck];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric, index) => {
          const Icon = metricIcons[index];

          return (
            <div key={metric.label} className="card p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-500">{metric.label}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900">{metric.value}</h3>
                </div>
                <div className="rounded-xl bg-blue-50 p-2 text-blue-600">
                  <Icon size={18} />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-emerald-600">
                <ArrowUpRight size={16} />
                {metric.change}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <SalesChart data={defaultChartData} />

        <div className="space-y-4">
          <div className="card p-5">
            <h3 className="text-lg font-semibold text-slate-900">Quick summary</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Orders today</span>
                <strong className="text-slate-900">248</strong>
              </div>
              <div className="flex justify-between">
                <span>Returns</span>
                <strong className="text-slate-900">7</strong>
              </div>
              <div className="flex justify-between">
                <span>Avg. basket</span>
                <strong className="text-slate-900">$68</strong>
              </div>
            </div>
          </div>

          <div className="card p-5">
            <h3 className="text-lg font-semibold text-slate-900">Top vendors</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex justify-between"><span>Medico Labs</span><span>$18.2k</span></div>
              <div className="flex justify-between"><span>CarePlus</span><span>$12.8k</span></div>
              <div className="flex justify-between"><span>Pharma Depot</span><span>$9.4k</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
