import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import PageHeader from '../components/common/PageHeader';

const initialState = {
  supplier: '',
  invoiceNo: '',
  item: '',
  quantity: '',
  totalCost: '',
};

export default function PurchaseForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/purchases');
  };

  return (
    <div>
      <PageHeader title="New purchase order" subtitle="Record incoming stock purchases" />

      <form onSubmit={handleSubmit} className="card space-y-6 p-6">
        <div className="grid gap-5 md:grid-cols-2">
          <Input label="Supplier" id="supplier" name="supplier" value={form.supplier} onChange={handleChange} />
          <Input label="Invoice no" id="invoiceNo" name="invoiceNo" value={form.invoiceNo} onChange={handleChange} />
          <Input label="Item" id="item" name="item" value={form.item} onChange={handleChange} />
          <Input label="Quantity" id="quantity" name="quantity" type="number" value={form.quantity} onChange={handleChange} />
          <Input label="Total cost" id="totalCost" name="totalCost" type="number" value={form.totalCost} onChange={handleChange} />
        </div>

        <div className="flex justify-end gap-3">
          <Button type="button" variant="secondary" onClick={() => navigate('/purchases')}>Cancel</Button>
          <Button type="submit">Create purchase</Button>
        </div>
      </form>
    </div>
  );
}
