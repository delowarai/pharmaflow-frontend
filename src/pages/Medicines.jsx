import { Link } from 'react-router-dom';
import { Plus, Search } from 'lucide-react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import PageHeader from '../components/common/PageHeader';
import Table from '../components/common/Table';
import Badge from '../components/common/Badge';
import { useMedicines } from '../hooks/useMedicines';
import { formatCurrency } from '../utils/formatters';

export default function Medicines() {
  const { data = [] } = useMedicines();

  const columns = [
    { key: 'name', label: 'Medicine' },
    { key: 'category', label: 'Category' },
    { key: 'stock', label: 'Stock' },
    { key: 'purchasePrice', label: 'Purchase' },
    { key: 'salePrice', label: 'Sale' },
    {
      key: 'status',
      label: 'Status',
      render: (value, row) => (
        <Badge tone={row.stock <= 20 ? 'warning' : 'success'}>{row.stock <= 20 ? 'Low stock' : 'In stock'}</Badge>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Medicines"
        subtitle="Manage the pharmacy stock catalog and pricing"
        action={
          <Link to="/medicines/new">
            <Button className="flex items-center gap-2">
              <Plus size={16} />
              Add medicine
            </Button>
          </Link>
        }
      />

      <div className="card mb-6 p-4">
        <div className="flex items-center gap-3">
          <Search size={18} className="text-slate-400" />
          <Input placeholder="Search by name or category" className="border-0 bg-transparent p-0 shadow-none focus:ring-0" />
        </div>
      </div>

      <Table
        columns={columns.map((column) => ({
          ...column,
          render: column.render || ((value) =>
            column.key === 'purchasePrice' || column.key === 'salePrice' ? formatCurrency(value) : value),
        }))}
        data={data}
      />
    </div>
  );
}
