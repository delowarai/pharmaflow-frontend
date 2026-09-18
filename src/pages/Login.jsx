import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: 'admin@pharmaflow.io', password: 'admin123' });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await login(form);
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">Welcome back</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Sign in to PharmaFlow</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input label="Email address" id="email" name="email" value={form.email} onChange={handleChange} />
        <Input label="Password" id="password" name="password" type="password" value={form.password} onChange={handleChange} />

        <div className="flex items-center justify-between text-sm text-slate-500">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-300" defaultChecked />
            Keep me signed in
          </label>
          <a href="#" className="text-blue-600 hover:text-blue-700">Forgot password?</a>
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>

      <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
        Demo credentials: admin@pharmaflow.io / admin123
      </div>
    </div>
  );
}
