import PageHeader from '../components/common/PageHeader';
import Table from '../components/common/Table';

const returns = [
  { id: 1, invoice: 'INV-1004', customer: 'Jamal', item: 'Vitamin C', reason: 'Damaged', amount: 31.5 },
  { id: 2, invoice: 'INV-1011', customer: 'Rukhsana', item: 'Amoxicillin', reason: 'Expired', amount: 82.0 },
];

export default function Returns() {
  return (
    <div>
      <PageHeader title="Returns" subtitle="Track medicine returns and issue resolution" />
      <Table
        columns={[
          { key: 'invoice', label: 'Invoice' },
          { key: 'customer', label: 'Customer' },
          { key: 'item', label: 'Item' },
          { key: 'reason', label: 'Reason' },
          { key: 'amount', label: 'Amount' },
        ]}
        data={returns}
      />
    </div>
  );
}
