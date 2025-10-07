// =======================

// import Breadcrumbs from "../components/UserMang/Breadcrumbs";
// import PageHeader from "../components/UserMang/PageHeader";
// // import StatsGrid from "../components/UserMang/StatsGrid";
// import UsersTable from "../components/UserMang/UsersTable";
// import DLFBGI from "../assets/DLF-BGI.png"; // example background image

// export default function UserManagement() {
//   // Breadcrumb items
//   const breadcrumbItems = ["Site Admin", "User Management"];

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Page Header */}
//       <PageHeader
//         title="User Management"
//         showSearch={true}
//         showFilter={true}
//         showAddUser={true}
//         backgroundImage={DLFBGI}
//       />

//       {/* Breadcrumbs */}
//       <Breadcrumbs items={breadcrumbItems} />

//       {/* Stats Grid */}
//       {/* <StatsGrid  /> */}

//       {/* User Table */}
//       <UsersTable />
//     </div>
//   );
// }

// =============upper code is god level

import { useState, useEffect } from "react";
import axios from "axios";
import Breadcrumbs from "../components/UserMang/Breadcrumbs";
import PageHeader from "../components/UserMang/PageHeader";
import UsersTable from "../components/UserMang/UsersTable";
import DLFBGI from "../assets/DLF-BGI.png";

export default function UserManagement() {
  const breadcrumbItems = ["Site Admin", "User Management"];

  // ✅ Users state lifted to parent
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all users once
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("/api/users");
        const mappedUsers = res.data.map((u) => ({
          id: u.id,
          name: `${u.first_name} ${u.last_name}`,
          email: u.email,
          role: u.access_right,
          status: u.status.charAt(0).toUpperCase() + u.status.slice(1),
        }));
        setUsers(mappedUsers.reverse()); // show latest on top
        setLoading(false);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to fetch users");
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // ✅ Handler for new user
  const handleUserCreated = (newUser) => {
    const mappedUser = {
      id: newUser.id,
      name: `${newUser.first_name} ${newUser.last_name}`,
      email: newUser.email,
      role: newUser.access_right,
      status: newUser.status.charAt(0).toUpperCase() + newUser.status.slice(1),
    };
    setUsers((prev) => [mappedUser, ...prev]); // prepend new user
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <PageHeader
        title="User Management"
        showSearch={true}
        showFilter={true}
        showAddUser={true}
        backgroundImage={DLFBGI}
        onUserCreated={handleUserCreated} // pass to AddUserForm
      />

      <Breadcrumbs items={breadcrumbItems} />

      {error && <p className="p-4 text-red-500">{error}</p>}

      <UsersTable users={users} loading={loading} />
    </div>
  );
}

// ======upper code is god level

