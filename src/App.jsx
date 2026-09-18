import { Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import POS from './pages/POS';
import Medicines from './pages/Medicines';
import MedicineForm from './pages/MedicineForm';
import Inventory from './pages/Inventory';
import Purchases from './pages/Purchases';
import PurchaseForm from './pages/PurchaseForm';
import Sales from './pages/Sales';
import SaleDetail from './pages/SaleDetail';
import Returns from './pages/Returns';
import Suppliers from './pages/Suppliers';
import Reports from './pages/Reports';
import Users from './pages/Users';
import Settings from './pages/Settings';
import AIAssistant from './pages/AIAssistant';

const isAuthenticated = () => Boolean(localStorage.getItem('pharmaflow_token'));

const ProtectedRoute = ({ children }) =>
  isAuthenticated() ? children : <Navigate to="/login" replace />;

export default function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to={isAuthenticated() ? '/dashboard' : '/login'} replace />} />
      </Route>

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pos" element={<POS />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/medicines/new" element={<MedicineForm />} />
        <Route path="/medicines/:id/edit" element={<MedicineForm />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/purchases/new" element={<PurchaseForm />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/sales/:id" element={<SaleDetail />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
      </Route>
    </Routes>
  );
}
