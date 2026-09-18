import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import Button from '../components/common/Button';
import PageHeader from '../components/common/PageHeader';
import Table from '../components/common/Table';

const purchases = [
  { id: 1, supplier: 'Medico Labs', invoice: 'PO-3271', amount: 8420, date: '2026-09-12', status: 'Received' },
  { id: 2, supplier: 'Pharma Depot', invoice: 'PO-3278', amount: 5900, date: '2026-09-14', status: 'Pending' },
];

export default function Purchases() {
  const columns = [
    { key: 'supplier', label: 'Supplier' },
    { key: 'invoice', label: 'Invoice' },
    { key: 'date', label: 'Date' },
    { key: 'amount', label: 'Amount' },
    { key: 'status', label: 'Status' },
  ];

  return (
    <div>
      <PageHeader
        title="Purchases"
        subtitle="Track supplier orders and procurement activity"
        action={
          <Link to="/purchases/new">
            <Button className="flex items-center gap-2">
              <Plus size={16} />
              New purchase
            </Button>
          </Link>
        }
      />

      <Table columns={columns} data={purchases} />
    </div>
  );
}
