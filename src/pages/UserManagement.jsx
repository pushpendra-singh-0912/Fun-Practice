// import PageHeader from "../components/UserMang/PageHeader";
// import Breadcrumbs from "../components/UserMang/Breadcrumbs";
// import StatsGrid from "../components/UserMang/StatsGrid";
// import UsersTable from "../components/UserMang/UsersTable";
// import DLFBCI from "../assets/DLF-BGI.png";

// export default function UserManagement() {
//   const breadcrumbs = ["Home", "Site Admin", "User Management"];

//   return (
//     <div className="flex h-screen">
//       {/* <Sidebar /> */}

//       <div className="flex-1 flex flex-col bg-[#F8FAFC]">
//         {/* Header */}
//         <PageHeader
//           title="User Management"
//           showSearch
//           showFilter
//           showAddUser
//           backgroundImage={DLFBCI}
//         />

//         {/* Breadcrumbs */}
//         <div className="px-6 py-3">
//           <Breadcrumbs items={["Home", "Site Admin", "User Management"]} />
//         </div>

//         {/* ✅ Stats Cards Section */}
//         <StatsGrid />

//         {/* User Table */}
//         <div className="px-6 py-3">
//           <UsersTable />
//         </div>
//       </div>
//     </div>
//   );
// }

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
