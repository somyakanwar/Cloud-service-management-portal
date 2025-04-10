import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from 'react-router-dom';
  import { useAuth } from './context/AuthContext';
  import DashboardLayout from './layouts/DashboardLayout';
  import Dashboard from './pages/Dashboard';
  import Services from './pages/Services';
  import Users from './pages/Users';
  import Settings from './pages/Settings';
  import Login from './pages/Login';
  
  function PrivateRoute({ children }) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
  }
  
  export default function App() {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={<PrivateRoute><DashboardLayout /></PrivateRoute>}
          >
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="services" element={<Services />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    );
  }// App component code