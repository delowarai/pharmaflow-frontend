import PageHeader from '../components/common/PageHeader';
import Table from '../components/common/Table';
import Badge from '../components/common/Badge';
import { useInventory } from '../hooks/useInventory';

export default function Inventory() {
  const { data = [] } = useInventory();

  const columns = [
    { key: 'medicine', label: 'Medicine' },
    { key: 'location', label: 'Location' },
    { key: 'stock', label: 'Stock' },
    { key: 'reorderLevel', label: 'Reorder level' },
    {
      key: 'status',
      label: 'Status',
      render: (_, row) => (
        <Badge tone={row.stock <= row.reorderLevel ? 'warning' : 'success'}>
          {row.stock <= row.reorderLevel ? 'Reorder needed' : 'Healthy'}
        </Badge>
      ),
    },
  ];

  return (
    <div>
      <PageHeader title="Inventory" subtitle="Monitor stock levels and shelf allocation" />
      <Table columns={columns} data={data} />
    </div>
  );
}
