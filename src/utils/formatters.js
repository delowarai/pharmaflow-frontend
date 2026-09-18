export const formatCurrency = (value = 0) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(Number(value || 0));

export const formatDate = (value, opts = {}) => {
  if (!value) return '—';

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    ...opts,
  }).format(date);
};

export const formatNumber = (value = 0) =>
  new Intl.NumberFormat('en-US').format(Number(value || 0));

export const getStatusClasses = (status) => {
  const classes = {
    active: 'bg-emerald-100 text-emerald-700',
    pending: 'bg-amber-100 text-amber-700',
    low: 'bg-red-100 text-red-700',
    paid: 'bg-blue-100 text-blue-700',
    draft: 'bg-slate-100 text-slate-700',
  };

  return classes[status] || 'bg-slate-100 text-slate-700';
};
