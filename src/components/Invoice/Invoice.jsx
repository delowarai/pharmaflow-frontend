import { formatCurrency, formatDate } from '../../utils/formatters';

export default function Invoice({ sale = {} }) {
  const items = sale.items || [
    { name: 'Amoxicillin', qty: 2, price: 8.5 },
    { name: 'Paracetamol', qty: 1, price: 5.5 },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Invoice</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900">{sale.id || 'INV-1001'}</h3>
        </div>
        <div className="text-right text-sm text-slate-500">
          <p>{sale.customer || 'Walk-in customer'}</p>
          <p>{formatDate(sale.date || new Date())}</p>
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={`${item.name}-${item.price}`} className="flex items-center justify-between text-sm text-slate-700">
            <span>
              {item.name} x {item.qty}
            </span>
            <span>{formatCurrency(item.qty * item.price)}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-2 border-t border-slate-200 pt-4 text-sm">
        <div className="flex justify-between text-slate-600">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Tax</span>
          <span>{formatCurrency(tax)}</span>
        </div>
        <div className="flex justify-between text-base font-semibold text-slate-900">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>
    </div>
  );
}
