import { useParams } from 'react-router-dom';
import Invoice from '../components/Invoice/Invoice';
import PageHeader from '../components/common/PageHeader';

export default function SaleDetail() {
  const { id } = useParams();

  return (
    <div>
      <PageHeader title={`Sale ${id}`} subtitle="Detailed invoice and transaction breakdown" />
      <Invoice sale={{ id, customer: 'Ahsan', date: '2026-09-10' }} />
    </div>
  );
}
