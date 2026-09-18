import { useState } from 'react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import PageHeader from '../components/common/PageHeader';

export default function Settings() {
  const [form, setForm] = useState({ pharmacyName: 'GreenLife Pharmacy', email: 'support@pharmaflow.io' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  return (
    <div>
      <PageHeader title="Settings" subtitle="Update your pharmacy account preferences" />

      <form className="card space-y-6 p-6">
        <div className="grid gap-5 md:grid-cols-2">
          <Input label="Pharmacy name" id="pharmacyName" name="pharmacyName" value={form.pharmacyName} onChange={handleChange} />
          <Input label="Support email" id="email" name="email" value={form.email} onChange={handleChange} />
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="secondary" type="button">Reset</Button>
          <Button type="submit">Save changes</Button>
        </div>
      </form>
    </div>
  );
}
