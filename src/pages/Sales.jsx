import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import Table from '../components/common/Table';
import Badge from '../components/common/Badge';
import { useSales } from '../hooks/useSales';

export default function Sales() {
  const { data = [] } = useSales();

  const columns = [
    { key: 'id', label: 'Invoice' },
    { key: 'customer', label: 'Customer' },
    { key: 'date', label: 'Date' },
    { key: 'total', label: 'Total' },
    {
      key: 'status',
      label: 'Status',
      render: (value) => <Badge tone={value === 'Paid' ? 'success' : 'warning'}>{value}</Badge>,
    },
    {
      key: 'action',
      label: 'Action',
      render: (_, row) => (
        <Link to={`/sales/${row.id}`} className="text-blue-600 hover:text-blue-700">
          View details
        </Link>
      ),
    },
  ];

  return (
    <div>
      <PageHeader title="Sales" subtitle="Review all processed and pending sales" />
      <Table columns={columns} data={data} />
    </div>
  );
}
