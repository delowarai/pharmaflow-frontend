export default function Input({ label, id, error, className = '', ...props }) {
  return (
    <div className="space-y-2">
      {label ? (
        <label htmlFor={id} className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      ) : null}
      <input id={id} className={`input ${className} ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''}`.trim()} {...props} />
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  );
}
