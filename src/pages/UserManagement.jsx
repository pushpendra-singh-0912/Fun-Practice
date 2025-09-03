import Sidebar from "./Sidebar";
import PageHeader from "../components/UserMang/PageHeader";
import Breadcrumbs from "../components/UserMang/Breadcrumbs";
import StatsGrid from "../components/UserMang/StatsGrid";
import UsersTable from "../components/UserMang/UsersTable";
import DLFBCI from "../assets/DLF-BGI.png";

export default function UserManagement() {
  const breadcrumbs = ["Home", "Site Admin", "User Management"];

  return (
    <div className="flex h-screen">
      {/* <Sidebar /> */}

      <div className="flex-1 flex flex-col bg-[#F8FAFC]">
        {/* Header */}
        <PageHeader
          title="User Management"
          showSearch
          showFilter
          showAddUser
          backgroundImage={DLFBCI}
        />

        {/* Breadcrumbs */}
        <div className="px-6 py-3">
          <Breadcrumbs items={["Home", "Site Admin", "User Management"]} />
        </div>

        {/* ✅ Stats Cards Section */}
        <StatsGrid />

        {/* User Table */}
        <div className="px-6 py-3">
          <UsersTable />
        </div>
      </div>
    </div>
  );
}

// =======================

// import PageHeader from "../components/UserMang/PageHeader";
// import Breadcrumbs from "../components/UserMang/Breadcrumbs";
// import StatsGrid from "../components/UserMang/StatsGrid";
// import UsersTable from "../components/UserMang/UsersTable";
// import DLFBCI from "../assets/DLF-BGI.png";

// export default function UserManagement() {
//   return (
//     <div className="flex flex-col bg-[#F8FAFC]">
//       {/* Header */}
//       <PageHeader
//         title="User Management"
//         showSearch
//         showFilter
//         showAddUser
//         backgroundImage={DLFBCI}
//       />

//       {/* Breadcrumbs */}
//       <div className="px-6 py-3">
//         <Breadcrumbs items={["Home", "Site Admin", "User Management"]} />
//       </div>

//       {/* ✅ Stats Cards Section */}
//       <StatsGrid />

//       {/* User Table */}
//       <div className="px-6 py-3">
//         <UsersTable />
//       </div>
//     </div>
//   );
// }
