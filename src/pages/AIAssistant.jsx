import { Sparkles } from 'lucide-react';
import Button from '../components/common/Button';
import PageHeader from '../components/common/PageHeader';

const suggestions = [
  'Identify medicines with low stock risk this week.',
  'Prepare a sales summary for the last 30 days.',
  'Suggest reorder quantities for top-selling products.',
];

export default function AIAssistant() {
  return (
    <div>
      <PageHeader title="AI Assistant" subtitle="Get quick recommendations and operational insights" />

      <div className="card space-y-6 p-6">
        <div className="flex items-center gap-3 text-blue-600">
          <Sparkles size={20} />
          <span className="font-medium">Smart suggestions</span>
        </div>

        <div className="space-y-3">
          {suggestions.map((suggestion) => (
            <div key={suggestion} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              {suggestion}
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-700">
          Inventory risk alert: 6 hot products are below the ideal reorder threshold.
        </div>

        <Button className="flex items-center gap-2">
          <Sparkles size={16} />
          Generate insights
        </Button>
      </div>
    </div>
  );
}
