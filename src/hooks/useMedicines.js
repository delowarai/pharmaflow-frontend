import { useQuery } from '@tanstack/react-query';
import { getMedicines } from '../services/medicine.service';

export const useMedicines = (params = {}) =>
  useQuery({
    queryKey: ['medicines', params],
    queryFn: () => getMedicines(params).then((response) => response.data),
    initialData: [
      { id: 1, name: 'Amoxicillin', category: 'Antibiotic', stock: 120, purchasePrice: 4.5, salePrice: 8.5 },
      { id: 2, name: 'Paracetamol', category: 'Pain Relief', stock: 75, purchasePrice: 2.2, salePrice: 5.5 },
      { id: 3, name: 'Cough Syrup', category: 'Respiratory', stock: 30, purchasePrice: 3.8, salePrice: 9.0 },
    ],
  });
