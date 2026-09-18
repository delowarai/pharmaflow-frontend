export const isValidEmail = (value = '') => /\S+@\S+\.\S+/.test(value.trim());

export const isValidPhone = (value = '') => /^\+?[0-9\s()-]{7,}$/.test(value.trim());

export const validateMedicine = (medicine = {}) => {
  const errors = {};

  if (!medicine.name?.trim()) errors.name = 'Medicine name is required';
  if (!medicine.category?.trim()) errors.category = 'Category is required';
  if (!medicine.purchasePrice || Number(medicine.purchasePrice) <= 0) {
    errors.purchasePrice = 'Purchase price must be greater than 0';
  }
  if (!medicine.salePrice || Number(medicine.salePrice) <= 0) {
    errors.salePrice = 'Sale price must be greater than 0';
  }

  return errors;
};
