import { useQuery } from '@tanstack/react-query';
import { getInventory } from '../services/inventory.service';

export const useInventory = (params = {}) =>
  useQuery({
    queryKey: ['inventory', params],
    queryFn: () => getInventory(params).then((response) => response.data),
    initialData: [
      { id: 1, medicine: 'Paracetamol', stock: 18, reorderLevel: 25, location: 'Aisle A1' },
      { id: 2, medicine: 'Vitamin C', stock: 54, reorderLevel: 40, location: 'Aisle B2' },
      { id: 3, medicine: 'Cough Syrup', stock: 12, reorderLevel: 20, location: 'Aisle C2' },
    ],
  });
