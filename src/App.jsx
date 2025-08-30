import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import UpdatePassword from "./pages/UpdatePassword";
import DashboardLayout from "./pages/DashboardLayout";
import Users from "./pages/Users";
import Graph from "./pages/Graph";
import NotFound from "./pages/NotFound";
import Report from "./pages/Report";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/update-password" element={<UpdatePassword />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/users" element={<Users />} />
      <Route path="/graph" element={<Graph />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/Report" element={<Report />} />
    </Routes>
  );
}
