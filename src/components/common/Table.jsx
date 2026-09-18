export default function Table({ columns = [], data = [] }) {
  if (!data.length) return <div className="card p-4 text-sm text-slate-500">No records available.</div>;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-4 py-3 font-medium text-slate-600">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {data.map((row, rowIndex) => (
              <tr key={row.id || rowIndex} className="hover:bg-slate-50">
                {columns.map((column) => (
                  <td key={`${row.id || rowIndex}-${column.key}`} className="px-4 py-3 text-slate-700">
                    {typeof column.render === 'function' ? column.render(row[column.key], row) : row[column.key] ?? '—'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
