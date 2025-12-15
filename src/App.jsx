
 import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "./DashboardLayout";
import DashboardHome from "./DashboardHome";
import Profile from "./Profile";
import Settings from "./Settings";
import Login from "./Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element=  {<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>        
        }
      >
        <Route index element={<DashboardHome/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
