import { CreditCard, QrCode, Search, Trash2 } from 'lucide-react';
import BarcodeScanner from '../components/Scanner/BarcodeScanner';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { useCartStore } from '../stores/cartStore';

const sampleProducts = [
  { id: 1, name: 'Amoxicillin', price: 8.5 },
  { id: 2, name: 'Paracetamol', price: 5.5 },
  { id: 3, name: 'Vitamin C', price: 7.2 },
];

export default function POS() {
  const { items, addItem, removeItem, clear } = useCartStore();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="card p-4">
            <div className="mb-4 flex items-center gap-3">
              <Search className="text-slate-400" size={18} />
              <Input placeholder="Search medicine or scan barcode" className="border-0 bg-transparent p-0 shadow-none focus:ring-0" />
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {sampleProducts.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => addItem(product)}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-blue-200 hover:bg-blue-50"
                >
                  <p className="font-medium text-slate-900">{product.name}</p>
                  <p className="mt-2 text-sm text-slate-500">${product.price}</p>
                </button>
              ))}
            </div>
          </div>

          <BarcodeScanner />
        </div>

        <div className="card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Current sale</h3>
            <button type="button" onClick={clear} className="text-sm text-slate-500 hover:text-slate-700">
              Clear
            </button>
          </div>

          <div className="space-y-3">
            {items.length ? (
              items.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
                  <div>
                    <p className="font-medium text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.quantity} x ${item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">${(item.quantity * item.price).toFixed(2)}</span>
                    <button type="button" onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-xl border border-dashed border-slate-200 p-6 text-center text-sm text-slate-500">
                No items selected yet.
              </div>
            )}
          </div>

          <div className="mt-6 space-y-3 border-t border-slate-200 pt-4 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${(subtotal * 0.07).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-base font-semibold text-slate-900">
              <span>Total</span>
              <span>${(subtotal * 1.07).toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <Button className="w-full flex items-center justify-center gap-2">
              <CreditCard size={16} />
              Checkout
            </Button>
            <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
              <QrCode size={16} />
              Scan label
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
