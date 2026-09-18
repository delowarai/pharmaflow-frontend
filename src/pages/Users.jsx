import PageHeader from '../components/common/PageHeader';
import Table from '../components/common/Table';

const users = [
  { id: 1, name: 'Mira Hasan', role: 'Pharmacist', email: 'mira@pharmaflow.io', status: 'Active' },
  { id: 2, name: 'Tariq Rahman', role: 'Cashier', email: 'tariq@pharmaflow.io', status: 'Active' },
  { id: 3, name: 'Sadia Noor', role: 'Inventory Manager', email: 'sadia@pharmaflow.io', status: 'Pending' },
];

export default function Users() {
  return (
    <div>
      <PageHeader title="Users" subtitle="Manage team access and authorization" />
      <Table
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'role', label: 'Role' },
          { key: 'email', label: 'Email' },
          { key: 'status', label: 'Status' },
        ]}
        data={users}
      />
    </div>
  );
}
