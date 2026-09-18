import PageHeader from '../components/common/PageHeader';
import SalesChart from '../components/Charts/SalesChart';
import { defaultChartData } from '../utils/constants';

export default function Reports() {
  return (
    <div className="space-y-6">
      <PageHeader title="Reports" subtitle="View pharmacy performance and trends" />
      <SalesChart data={defaultChartData} />

      <div className="grid gap-6 md:grid-cols-3">
        <div className="card p-5">
          <p className="text-sm text-slate-500">Net revenue</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900">$128.4k</h3>
        </div>
        <div className="card p-5">
          <p className="text-sm text-slate-500">Profit margin</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900">26.8%</h3>
        </div>
        <div className="card p-5">
          <p className="text-sm text-slate-500">Active suppliers</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900">18</h3>
        </div>
      </div>
    </div>
  );
}
