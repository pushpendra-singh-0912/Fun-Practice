// // src/components/UserMang/UsersTable.jsx
// import { Edit, Trash2 } from "lucide-react";

// export default function UsersTable() {
//   // Example dummy data (later you can fetch from API)
//   const users = [
//     {
//       id: 1,
//       name: "Amit Sharma",
//       email: "amit.sharma@example.com",
//       role: "Admin",
//       status: "Active",
//     },
//     {
//       id: 2,
//       name: "Neha Verma",
//       email: "neha.verma@example.com",
//       role: "Editor",
//       status: "Inactive",
//     },
//     {
//       id: 3,
//       name: "Rajesh Kumar",
//       email: "rajesh.kumar@example.com",
//       role: "Viewer",
//       status: "Active",
//     },
//   ];

//   return (
//     <div className="m-6 bg-white shadow rounded-2xl overflow-hidden">
//       <table className="w-full text-left border-collapse">
//         {/* Table Head */}
//         <thead>
//           <tr className="bg-gray-100 text-gray-700">
//             <th className="py-3 px-4">Name</th>
//             <th className="py-3 px-4">Email</th>
//             <th className="py-3 px-4">Role</th>
//             <th className="py-3 px-4">Status</th>
//             <th className="py-3 px-4 text-center">Actions</th>
//           </tr>
//         </thead>

//         {/* Table Body */}
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id} className="border-t hover:bg-gray-50 transition">
//               <td className="py-3 px-4">{user.name}</td>
//               <td className="py-3 px-4">{user.email}</td>
//               <td className="py-3 px-4">{user.role}</td>
//               <td className="py-3 px-4">
//                 <span
//                   className={`px-3 py-1 rounded-full text-xs font-medium ${
//                     user.status === "Active"
//                       ? "bg-green-100 text-green-700"
//                       : "bg-red-100 text-red-700"
//                   }`}
//                 >
//                   {user.status}
//                 </span>
//               </td>
//               <td className="py-3 px-4 text-center flex items-center justify-center gap-3">
//                 <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200">
//                   <Edit size={16} />
//                 </button>
//                 <button className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200">
//                   <Trash2 size={16} />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// =================================

// src/components/UsersTable.jsx
// import { useState, useMemo } from "react";
// import { Edit, Trash2 } from "lucide-react";

// export default function UsersTable() {
//   // Example dummy data (replace with API data later)
//   const allUsers = [
//     {
//       id: 1,
//       name: "Amit Sharma",
//       email: "amit.sharma@example.com",
//       role: "Admin",
//       status: "Active",
//     },
//     {
//       id: 2,
//       name: "Neha Verma",
//       email: "neha.verma@example.com",
//       role: "Editor",
//       status: "Inactive",
//     },
//     {
//       id: 3,
//       name: "Rajesh Kumar",
//       email: "rajesh.kumar@example.com",
//       role: "Viewer",
//       status: "Active",
//     },
//     {
//       id: 4,
//       name: "Priya Singh",
//       email: "priya.singh@example.com",
//       role: "Editor",
//       status: "Active",
//     },
//     {
//       id: 5,
//       name: "Manoj Yadav",
//       email: "manoj.yadav@example.com",
//       role: "Viewer",
//       status: "Inactive",
//     },
//     {
//       id: 6,
//       name: "Sunita Das",
//       email: "sunita.das@example.com",
//       role: "Admin",
//       status: "Active",
//     },
//     {
//       id: 7,
//       name: "Ravi Mehta",
//       email: "ravi.mehta@example.com",
//       role: "Editor",
//       status: "Active",
//     },
//     {
//       id: 8,
//       name: "Sneha Patel",
//       email: "sneha.patel@example.com",
//       role: "Viewer",
//       status: "Active",
//     },
//   ];

//   const [search, setSearch] = useState("");
//   const [filterRole, setFilterRole] = useState("All");
//   const [filterStatus, setFilterStatus] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 5;

//   // ✅ Filtering + Searching
//   const filteredUsers = useMemo(() => {
//     return allUsers.filter((user) => {
//       const matchesSearch =
//         user.name.toLowerCase().includes(search.toLowerCase()) ||
//         user.email.toLowerCase().includes(search.toLowerCase());

//       const matchesRole = filterRole === "All" || user.role === filterRole;
//       const matchesStatus =
//         filterStatus === "All" || user.status === filterStatus;

//       return matchesSearch && matchesRole && matchesStatus;
//     });
//   }, [search, filterRole, filterStatus, allUsers]);

//   // ✅ Pagination
//   const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
//   const startIndex = (currentPage - 1) * rowsPerPage;
//   const paginatedUsers = filteredUsers.slice(
//     startIndex,
//     startIndex + rowsPerPage
//   );

//   return (
//     <div className="m-6 bg-white shadow rounded-2xl p-4">
//       {/* 🔍 Search & Filters */}
//       <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
//         <input
//           type="text"
//           placeholder="Search by name or email..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="border rounded-lg px-4 py-2 w-full md:w-1/3"
//         />

//         <div className="flex gap-3">
//           {/* Role Filter */}
//           <select
//             value={filterRole}
//             onChange={(e) => setFilterRole(e.target.value)}
//             className="border rounded-lg px-3 py-2"
//           >
//             <option value="All">All Roles</option>
//             <option value="Admin">Admin</option>
//             <option value="Editor">Editor</option>
//             <option value="Viewer">Viewer</option>
//           </select>

//           {/* Status Filter */}
//           <select
//             value={filterStatus}
//             onChange={(e) => setFilterStatus(e.target.value)}
//             className="border rounded-lg px-3 py-2"
//           >
//             <option value="All">All Status</option>
//             <option value="Active">Active</option>
//             <option value="Inactive">Inactive</option>
//           </select>
//         </div>
//       </div>

//       {/* 📊 Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="bg-gray-100 text-gray-700">
//               <th className="py-3 px-4">Name</th>
//               <th className="py-3 px-4">Email</th>
//               <th className="py-3 px-4">Role</th>
//               <th className="py-3 px-4">Status</th>
//               <th className="py-3 px-4 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedUsers.map((user) => (
//               <tr
//                 key={user.id}
//                 className="border-t hover:bg-gray-50 transition"
//               >
//                 <td className="py-3 px-4">{user.name}</td>
//                 <td className="py-3 px-4">{user.email}</td>
//                 <td className="py-3 px-4">{user.role}</td>
//                 <td className="py-3 px-4">
//                   <span
//                     className={`px-3 py-1 rounded-full text-xs font-medium ${
//                       user.status === "Active"
//                         ? "bg-green-100 text-green-700"
//                         : "bg-red-100 text-red-700"
//                     }`}
//                   >
//                     {user.status}
//                   </span>
//                 </td>
//                 <td className="py-3 px-4 text-center flex items-center justify-center gap-3">
//                   <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200">
//                     <Edit size={16} />
//                   </button>
//                   <button className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200">
//                     <Trash2 size={16} />
//                   </button>
//                 </td>
//               </tr>
//             ))}

//             {/* Empty state */}
//             {paginatedUsers.length === 0 && (
//               <tr>
//                 <td colSpan="5" className="py-6 text-center text-gray-500">
//                   No users found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* 📌 Pagination Controls */}
//       <div className="flex justify-between items-center mt-4">
//         <span className="text-sm text-gray-600">
//           Page {currentPage} of {totalPages}
//         </span>

//         <div className="flex gap-2">
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//             disabled={currentPage === 1}
//             className="px-3 py-1 border rounded-lg disabled:opacity-50"
//           >
//             Prev
//           </button>
//           <button
//             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//             disabled={currentPage === totalPages}
//             className="px-3 py-1 border rounded-lg disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// Features Now

// 🔍 Search users by name/email.

// 🎯 Filter by role (Admin/Editor/Viewer) and status (Active/Inactive).

// 📑 Pagination (5 rows per page with Prev/Next).

// 🎨 Clean Tailwind styling with hover effects.

// ======================

import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";

export default function UsersTable() {
  // Dummy users
  const allUsers = [
    {
      id: 1,
      name: "Amit Sharma",
      email: "amit.sharma@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Neha Verma",
      email: "neha.verma@example.com",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      email: "rajesh.kumar@example.com",
      role: "Viewer",
      status: "Active",
    },
    {
      id: 4,
      name: "Sneha Gupta",
      email: "sneha.gupta@example.com",
      role: "Editor",
      status: "Active",
    },
    {
      id: 5,
      name: "Vikram Singh",
      email: "vikram.singh@example.com",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Pooja Mehta",
      email: "pooja.mehta@example.com",
      role: "Viewer",
      status: "Active",
    },
    {
      id: 7,
      name: "Arjun Das",
      email: "arjun.das@example.com",
      role: "Editor",
      status: "Active",
    },
  ];

  // States
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  // Filter logic
  const filteredUsers = allUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchesRole = filterRole === "All" || user.role === filterRole;

    return matchesSearch && matchesRole;
  });

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div className="m-6 bg-white shadow rounded-2xl overflow-hidden">
      {/* Search & Filter */}
      <div className="flex justify-between items-center p-4">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // reset page
          }}
          className="px-4 py-2 border rounded-lg w-1/3"
        />

        <select
          value={filterRole}
          onChange={(e) => {
            setFilterRole(e.target.value);
            setCurrentPage(1); // reset page
          }}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="All">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Email</th>
            <th className="py-3 px-4">Role</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.length > 0 ? (
            currentUsers.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.role}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-center flex items-center justify-center gap-3">
                  <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200">
                    <Edit size={16} />
                  </button>
                  {/* <button className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200">
                    <Trash2 size={16} />
                  </button> */}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-6 text-gray-500">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center p-4 border-t">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
