import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import PageHeader from '../components/common/PageHeader';

const initialState = {
  name: '',
  category: '',
  brand: '',
  purchasePrice: '',
  salePrice: '',
  stock: '',
};

export default function MedicineForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/medicines');
  };

  return (
    <div>
      <PageHeader title="Add medicine" subtitle="Create an entry for a new product" />

      <form onSubmit={handleSubmit} className="card space-y-6 p-6">
        <div className="grid gap-5 md:grid-cols-2">
          <Input label="Medicine name" id="name" name="name" value={form.name} onChange={handleChange} />
          <Input label="Category" id="category" name="category" value={form.category} onChange={handleChange} />
          <Input label="Brand" id="brand" name="brand" value={form.brand} onChange={handleChange} />
          <Input label="Available stock" id="stock" name="stock" type="number" value={form.stock} onChange={handleChange} />
          <Input label="Purchase price" id="purchasePrice" name="purchasePrice" type="number" value={form.purchasePrice} onChange={handleChange} />
          <Input label="Sale price" id="salePrice" name="salePrice" type="number" value={form.salePrice} onChange={handleChange} />
        </div>

        <div className="flex justify-end gap-3">
          <Button type="button" variant="secondary" onClick={() => navigate('/medicines')}>Cancel</Button>
          <Button type="submit">Save medicine</Button>
        </div>
      </form>
    </div>
  );
}
