import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import UpdatePassword from "./pages/UpdatePassword";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Graph from "./pages/Graph";
import NotFound from "./pages/NotFound";
import Report from "./components/Table/ReportTable";
import UserManagement from "./pages/UserManagement";
import Layout from "./Layouts/Layout";
import UserTabld from "./components/UserMang/UserTabId";
import UserMapping from "./components/UserMang/UserMapping";
import UserVersionList from "./components/UserMang/UserVersionList";
import ProjectDetail from "./components/UserMang/ProjectDetail";
import ProjectLevelDetails from "./components/UserMang/ProjectLevelDetails";
import ManageContractors from "./components/UserMang/ManageContractors";
import ReportPage from "./pages/ReportPage";
import ApiTest from "./pages/ApiTest";
// import { User } from "lucide-react";
export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/update-password" element={<UpdatePassword />} />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/siteadmin/usermanagement"
        element={
          <Layout>
            <UserManagement />
          </Layout>
        }
      />

      <Route
        path="/siteadmin/tabidmapping"
        element={
          <Layout>
            <UserTabld />
          </Layout>
        }
      />

      <Route
        path="/siteadmin/usermapping"
        element={
          <Layout>
            <UserMapping />
          </Layout>
        }
      />

      <Route
        path="/siteadmin/userversionlist"
        element={
          <Layout>
            <UserVersionList />
          </Layout>
        }
      />

      <Route
        path="/siteadmin/projectdetail"
        element={
          <Layout>
            <ProjectDetail />
          </Layout>
        }
      />

      <Route
        path="/siteadmin/projectleveldetails"
        element={
          <Layout>
            <ProjectLevelDetails />
          </Layout>
        }
      />

      <Route
        path="/siteadmin/managecontractors"
        element={
          <Layout>
            <ManageContractors />
          </Layout>
        }
      />

      <Route
        path="/graph"
        element={
          <Layout>
            <ApiTest />
          </Layout>
        }
      />

      <Route path="/users" element={<Users />} />
      <Route path="/graph" element={<Graph />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/Report"
        element={
          <Layout>
            <ReportPage />
          </Layout>
        }
      />
    </Routes>
  );
}

// =================================================
