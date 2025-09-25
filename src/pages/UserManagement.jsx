

// =======================

// src/components/UserMang/UserManagement.jsx
import Breadcrumbs from "../components/UserMang/Breadcrumbs";
import PageHeader from "../components/UserMang/PageHeader";
// import StatsGrid from "../components/UserMang/StatsGrid";
import UsersTable from "../components/UserMang/UsersTable";
import DLFBGI from "../assets/DLF-BGI.png"; // example background image

export default function UserManagement() {
  // Breadcrumb items
  const breadcrumbItems = ["Site Admin", "User Management"];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Page Header */}
      <PageHeader
        title="User Management"
        showSearch={true}
        showFilter={true}
        showAddUser={true}
        backgroundImage={DLFBGI}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Stats Grid */}
      {/* <StatsGrid  /> */}

      {/* User Table */}
      <UsersTable />
    </div>
  );
}
