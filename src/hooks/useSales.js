import { useQuery } from '@tanstack/react-query';
import { getSales } from '../services/sale.service';

export const useSales = (params = {}) =>
  useQuery({
    queryKey: ['sales', params],
    queryFn: () => getSales(params).then((response) => response.data),
    initialData: [
      { id: 'INV-1001', customer: 'Ahsan', total: 245, status: 'Paid', date: '2026-09-10' },
      { id: 'INV-1002', customer: 'Nadia', total: 520, status: 'Pending', date: '2026-09-11' },
      { id: 'INV-1003', customer: 'Rafi', total: 980, status: 'Paid', date: '2026-09-13' },
    ],
  });
