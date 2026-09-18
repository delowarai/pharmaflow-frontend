import PageHeader from '../components/common/PageHeader';
import Table from '../components/common/Table';

const suppliers = [
  { id: 1, name: 'Medico Labs', contact: 'Rahim', phone: '+8801700000001', category: 'Antibiotics' },
  { id: 2, name: 'Pharma Depot', contact: 'Nila', phone: '+8801700000002', category: 'General care' },
];

export default function Suppliers() {
  return (
    <div>
      <PageHeader title="Suppliers" subtitle="Manage supply partnerships and contact details" />
      <Table
        columns={[
          { key: 'name', label: 'Supplier' },
          { key: 'contact', label: 'Contact person' },
          { key: 'phone', label: 'Phone' },
          { key: 'category', label: 'Category' },
        ]}
        data={suppliers}
      />
    </div>
  );
}
