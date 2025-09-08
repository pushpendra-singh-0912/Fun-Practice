// import { useState } from "react";

// // Dummy data
// const usersData = [
//   {
//     Name: "Amit Sharma",
//     DeviceID: "DEV-A1B2",
//     TabID: 1001,
//     Locked: false,
//     AccessRight: "Admin",
//   },
//   {
//     Name: "Neha Verma",
//     DeviceID: "DEV-C3D4",
//     TabID: 1002,
//     Locked: false,
//     AccessRight: "Manager",
//   },
//   {
//     Name: "Rajesh Kumar",
//     DeviceID: "DEV-E5F6",
//     TabID: 1003,
//     Locked: false,
//     AccessRight: "Subcontractor",
//   },
//   {
//     Name: "Sneha Gupta",
//     DeviceID: "DEV-G7H8",
//     TabID: 1004,
//     Locked: false,
//     AccessRight: "SiteAdmin",
//   },
//   {
//     Name: "Vikram Singh",
//     DeviceID: "DEV-I9J0",
//     TabID: 1005,
//     Locked: false,
//     AccessRight: "Admin",
//   },
//   {
//     Name: "Pooja Mehta",
//     DeviceID: "DEV-K1L2",
//     TabID: 1006,
//     Locked: false,
//     AccessRight: "Manager",
//   },
//   {
//     Name: "Arjun Das",
//     DeviceID: "DEV-M3N4",
//     TabID: 1007,
//     Locked: false,
//     AccessRight: "Subcontractor",
//   },
//   {
//     Name: "Riya Kapoor",
//     DeviceID: "DEV-O5P6",
//     TabID: 1008,
//     Locked: false,
//     AccessRight: "SiteAdmin",
//   },
//   {
//     Name: "Suresh Reddy",
//     DeviceID: "DEV-Q7R8",
//     TabID: 1009,
//     Locked: false,
//     AccessRight: "Admin",
//   },
//   {
//     Name: "Anjali Singh",
//     DeviceID: "DEV-S9T0",
//     TabID: 1010,
//     Locked: false,
//     AccessRight: "Manager",
//   },
//   {
//     Name: "Karan Mehra",
//     DeviceID: "DEV-U1V2",
//     TabID: 1011,
//     Locked: false,
//     AccessRight: "Subcontractor",
//   },
//   {
//     Name: "Priya Sharma",
//     DeviceID: "DEV-W3X4",
//     TabID: 1012,
//     Locked: false,
//     AccessRight: "SiteAdmin",
//   },
//   {
//     Name: "Manish Kumar",
//     DeviceID: "DEV-Y5Z6",
//     TabID: 1013,
//     Locked: false,
//     AccessRight: "Admin",
//   },
//   {
//     Name: "Deepa Rani",
//     DeviceID: "DEV-A7B8",
//     TabID: 1014,
//     Locked: false,
//     AccessRight: "Manager",
//   },
//   {
//     Name: "Vivek Gupta",
//     DeviceID: "DEV-C9D0",
//     TabID: 1015,
//     Locked: false,
//     AccessRight: "Subcontractor",
//   },
//   {
//     Name: "Sunita Joshi",
//     DeviceID: "DEV-E1F2",
//     TabID: 1016,
//     Locked: false,
//     AccessRight: "SiteAdmin",
//   },
//   {
//     Name: "Rahul Sharma",
//     DeviceID: "DEV-G3H4",
//     TabID: 1017,
//     Locked: false,
//     AccessRight: "Admin",
//   },
//   {
//     Name: "Ankit Verma",
//     DeviceID: "DEV-I5J6",
//     TabID: 1018,
//     Locked: false,
//     AccessRight: "Manager",
//   },
//   {
//     Name: "Neha Reddy",
//     DeviceID: "DEV-K7L8",
//     TabID: 1019,
//     Locked: false,
//     AccessRight: "Subcontractor",
//   },
//   {
//     Name: "Rohit Singh",
//     DeviceID: "DEV-M9N0",
//     TabID: 1020,
//     Locked: false,
//     AccessRight: "SiteAdmin",
//   },
// ];

// export default function UserTabld() {
//   const [accessFilter, setAccessFilter] = useState("All");

//   // Filtered users based on AccessRight
//   const filteredUsers =
//     accessFilter === "All"
//       ? usersData
//       : usersData.filter((user) => user.AccessRight === accessFilter);

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <div className="max-w-7xl mx-auto bg-white shadow rounded-2xl p-6">
//         {/* Filter */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 ">
//           <h2 className="text-xl font-semibold">User Table</h2>
//           <select
//             value={accessFilter}
//             onChange={(e) => setAccessFilter(e.target.value)}
//             className="px-4 py-2  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="All">All Access Rights</option>
//             <option value="Admin">Admin</option>
//             <option value="Manager">Manager</option>
//             <option value="Subcontractor">Subcontractor</option>
//             <option value="SiteAdmin">SiteAdmin</option>
//           </select>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-gray-100 text-gray-700">
//                 <th className="py-3 px-4">Name</th>
//                 <th className="py-3 px-4">Device ID</th>
//                 <th className="py-3 px-4">TabID</th>
//                 <th className="py-3 px-4">Locked</th>
//                 {/* <th className="py-3 px-4">Access Right</th> */}
//               </tr>
//             </thead>
//             <tbody>
//               {filteredUsers.length > 0 ? (
//                 filteredUsers.map((user) => (
//                   <tr
//                     key={user.TabID}
//                     className="border-t hover:bg-gray-50 transition"
//                   >
//                     <td className="py-3 px-4">{user.Name}</td>
//                     <td className="py-3 px-4">{user.DeviceID}</td>
//                     <td className="py-3 px-4">{user.TabID}</td>
//                     <td className="py-3 px-4">
//                       <input
//                         type="checkbox"
//                         checked={user.Locked}
//                         className="w-5 h-5 text-blue-600 border-gray-300 rounded"
//                         readOnly
//                       />
//                     </td>
//                     {/* <td className="py-3 px-4">{user.AccessRight}</td>/ */}
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="text-center py-6 text-gray-500">
//                     No users found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// ==================================

// src/components/UserTableWithFilter.jsx
// import { useState } from "react";

// // Dummy data
// const usersData = [
//   {
//     Name: "Amit Sharma",
//     DeviceID: "DEV-A1B2",
//     TabID: 1001,
//     Locked: false,
//     AccessRight: "Admin",
//   },
//   {
//     Name: "Neha Verma",
//     DeviceID: "DEV-C3D4",
//     TabID: 1002,
//     Locked: false,
//     AccessRight: "Manager",
//   },
//   {
//     Name: "Rajesh Kumar",
//     DeviceID: "DEV-E5F6",
//     TabID: 1003,
//     Locked: false,
//     AccessRight: "Subcontractor",
//   },
//   {
//     Name: "Sneha Gupta",
//     DeviceID: "DEV-G7H8",
//     TabID: 1004,
//     Locked: false,
//     AccessRight: "SiteAdmin",
//   },
//   {
//     Name: "Vikram Singh",
//     DeviceID: "DEV-I9J0",
//     TabID: 1005,
//     Locked: false,
//     AccessRight: "Admin",
//   },
//   {
//     Name: "Pooja Mehta",
//     DeviceID: "DEV-K1L2",
//     TabID: 1006,
//     Locked: false,
//     AccessRight: "Manager",
//   },
//   {
//     Name: "Arjun Das",
//     DeviceID: "DEV-M3N4",
//     TabID: 1007,
//     Locked: false,
//     AccessRight: "Subcontractor",
//   },
//   {
//     Name: "Riya Kapoor",
//     DeviceID: "DEV-O5P6",
//     TabID: 1008,
//     Locked: false,
//     AccessRight: "SiteAdmin",
//   },
//   {
//     Name: "Suresh Reddy",
//     DeviceID: "DEV-Q7R8",
//     TabID: 1009,
//     Locked: false,
//     AccessRight: "Admin",
//   },
//   {
//     Name: "Anjali Singh",
//     DeviceID: "DEV-S9T0",
//     TabID: 1010,
//     Locked: false,
//     AccessRight: "Manager",
//   },
//   {
//     Name: "Karan Mehra",
//     DeviceID: "DEV-U1V2",
//     TabID: 1011,
//     Locked: false,
//     AccessRight: "Subcontractor",
//   },
//   {
//     Name: "Priya Sharma",
//     DeviceID: "DEV-W3X4",
//     TabID: 1012,
//     Locked: false,
//     AccessRight: "SiteAdmin",
//   },
//   {
//     Name: "Manish Kumar",
//     DeviceID: "DEV-Y5Z6",
//     TabID: 1013,
//     Locked: false,
//     AccessRight: "Admin",
//   },
//   {
//     Name: "Deepa Rani",
//     DeviceID: "DEV-A7B8",
//     TabID: 1014,
//     Locked: false,
//     AccessRight: "Manager",
//   },
//   {
//     Name: "Vivek Gupta",
//     DeviceID: "DEV-C9D0",
//     TabID: 1015,
//     Locked: false,
//     AccessRight: "Subcontractor",
//   },
//   {
//     Name: "Sunita Joshi",
//     DeviceID: "DEV-E1F2",
//     TabID: 1016,
//     Locked: false,
//     AccessRight: "SiteAdmin",
//   },
//   {
//     Name: "Rahul Sharma",
//     DeviceID: "DEV-G3H4",
//     TabID: 1017,
//     Locked: false,
//     AccessRight: "Admin",
//   },
//   {
//     Name: "Ankit Verma",
//     DeviceID: "DEV-I5J6",
//     TabID: 1018,
//     Locked: false,
//     AccessRight: "Manager",
//   },
//   {
//     Name: "Neha Reddy",
//     DeviceID: "DEV-K7L8",
//     TabID: 1019,
//     Locked: false,
//     AccessRight: "Subcontractor",
//   },
//   {
//     Name: "Rohit Singh",
//     DeviceID: "DEV-M9N0",
//     TabID: 1020,
//     Locked: false,
//     AccessRight: "SiteAdmin",
//   },
// ];

// export default function UserTableWithFilter() {
//   const [accessFilter, setAccessFilter] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");

//   // Filtered users based on AccessRight + Name search
//   const filteredUsers = usersData.filter((user) => {
//     const matchesAccess =
//       accessFilter === "All" || user.AccessRight === accessFilter;
//     const matchesName = user.Name.toLowerCase().includes(
//       searchQuery.toLowerCase()
//     );
//     return matchesAccess && matchesName;
//   });

//   return (
//     <div className="p-1 bg-gray-50 min-h-screen">
//       <div className="max-w-7xl mx-auto bg-white shadow rounded-2xl p-6">
//         {/* Filters */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
//           <h2 className="text-xl font-semibold">User Table</h2>

//           <div className="flex flex-col sm:flex-row gap-3">
//             {/* Search */}
//             <input
//               type="text"
//               placeholder="Search by Name..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             {/* Dropdown */}
//             <select
//               value={accessFilter}
//               onChange={(e) => setAccessFilter(e.target.value)}
//               className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="All">All Access Rights</option>
//               <option value="Admin">Admin</option>
//               <option value="Manager">Manager</option>
//               <option value="Subcontractor">Subcontractor</option>
//               <option value="SiteAdmin">SiteAdmin</option>
//             </select>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-gray-100 text-gray-700">
//                 <th className="py-3 px-4">Name</th>
//                 <th className="py-3 px-4">Device ID</th>
//                 <th className="py-3 px-4">TabID</th>
//                 <th className="py-3 px-4">Locked</th>
//                 <th className="py-3 px-4">Access Right</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredUsers.length > 0 ? (
//                 filteredUsers.map((user) => (
//                   <tr
//                     key={user.TabID}
//                     className="border-t hover:bg-gray-50 transition"
//                   >
//                     <td className="py-3 px-4">{user.Name}</td>
//                     <td className="py-3 px-4">{user.DeviceID}</td>
//                     <td className="py-3 px-4">{user.TabID}</td>
//                     <td className="py-3 px-4">
//                       <input
//                         type="checkbox"
//                         checked={user.Locked}
//                         className="w-5 h-5 text-blue-600 border-gray-300 rounded"
//                         readOnly
//                       />
//                     </td>
//                     <td className="py-3 px-4">{user.AccessRight}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="text-center py-6 text-gray-500">
//                     No users found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// ============= = =========== = =  ============================

// src/components/UserTableWithToggle.jsx
// import { useState, useEffect } from "react";

// // Hook for responsive screen detection
// function useMediaQuery(query) {
//   const [matches, setMatches] = useState(false);

//   useEffect(() => {
//     const media = window.matchMedia(query);
//     if (media.matches !== matches) {
//       setMatches(media.matches);
//     }
//     const listener = () => setMatches(media.matches);
//     media.addEventListener("change", listener);
//     return () => media.removeEventListener("change", listener);
//   }, [matches, query]);

//   return matches;
// }

// // Initial user data
// const initialUsers = [
//   {
//     Name: "Amit Sharma",
//     DeviceID: "DEV-A1B2",
//     TabID: 1001,
//     Locked: false,
//     AccessRight: "Admin",
//   },
//   {
//     Name: "Neha Verma",
//     DeviceID: "DEV-C3D4",
//     TabID: 1002,
//     Locked: false,
//     AccessRight: "Manager",
//   },
//   {
//     Name: "Rajesh Kumar",
//     DeviceID: "DEV-E5F6",
//     TabID: 1003,
//     Locked: false,
//     AccessRight: "Subcontractor",
//   },
//   {
//     Name: "Sneha Gupta",
//     DeviceID: "DEV-G7H8",
//     TabID: 1004,
//     Locked: false,
//     AccessRight: "SiteAdmin",
//   },
//   {
//     Name: "Vikram Singh",
//     DeviceID: "DEV-I9J0",
//     TabID: 1005,
//     Locked: false,
//     AccessRight: "Admin",
//   },
//   {
//     Name: "Pooja Mehta",
//     DeviceID: "DEV-K1L2",
//     TabID: 1006,
//     Locked: false,
//     AccessRight: "Manager",
//   },
//   {
//     Name: "Arjun Das",
//     DeviceID: "DEV-M3N4",
//     TabID: 1007,
//     Locked: false,
//     AccessRight: "Subcontractor",
//   },
//   {
//     Name: "Riya Kapoor",
//     DeviceID: "DEV-O5P6",
//     TabID: 1008,
//     Locked: false,
//     AccessRight: "SiteAdmin",
//   },
//   {
//     Name: "Suresh Reddy",
//     DeviceID: "DEV-Q7R8",
//     TabID: 1009,
//     Locked: false,
//     AccessRight: "Admin",
//   },
//   {
//     Name: "Anjali Singh",
//     DeviceID: "DEV-S9T0",
//     TabID: 1010,
//     Locked: false,
//     AccessRight: "Manager",
//   },
//   {
//     Name: "Karan Mehra",
//     DeviceID: "DEV-U1V2",
//     TabID: 1011,
//     Locked: false,
//     AccessRight: "Subcontractor",
//   },
//   {
//     Name: "Priya Sharma",
//     DeviceID: "DEV-W3X4",
//     TabID: 1012,
//     Locked: false,
//     AccessRight: "SiteAdmin",
//   },
//   {
//     Name: "Manish Kumar",
//     DeviceID: "DEV-Y5Z6",
//     TabID: 1013,
//     Locked: false,
//     AccessRight: "Admin",
//   },
//   {
//     Name: "Deepa Rani",
//     DeviceID: "DEV-A7B8",
//     TabID: 1014,
//     Locked: false,
//     AccessRight: "Manager",
//   },
//   {
//     Name: "Vivek Gupta",
//     DeviceID: "DEV-C9D0",
//     TabID: 1015,
//     Locked: false,
//     AccessRight: "Subcontractor",
//   },
//   {
//     Name: "Sunita Joshi",
//     DeviceID: "DEV-E1F2",
//     TabID: 1016,
//     Locked: false,
//     AccessRight: "SiteAdmin",
//   },
//   {
//     Name: "Rahul Sharma",
//     DeviceID: "DEV-G3H4",
//     TabID: 1017,
//     Locked: false,
//     AccessRight: "Admin",
//   },
//   {
//     Name: "Ankit Verma",
//     DeviceID: "DEV-I5J6",
//     TabID: 1018,
//     Locked: false,
//     AccessRight: "Manager",
//   },
//   {
//     Name: "Neha Reddy",
//     DeviceID: "DEV-K7L8",
//     TabID: 1019,
//     Locked: false,
//     AccessRight: "Subcontractor",
//   },
//   {
//     Name: "Rohit Singh",
//     DeviceID: "DEV-M9N0",
//     TabID: 1020,
//     Locked: false,
//     AccessRight: "SiteAdmin",
//   },
// ];

// export default function UserTableWithToggle() {
//   const [users, setUsers] = useState(initialUsers);
//   const [accessFilter, setAccessFilter] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const isDesktop = useMediaQuery("(min-width: 768px)");
//   const rowsPerPage = isDesktop ? 12 : 7;

//   // ✅ Toggle Locked checkbox
//   const toggleLocked = (tabID) => {
//     setUsers((prevUsers) =>
//       prevUsers.map((user) =>
//         user.TabID === tabID ? { ...user, Locked: !user.Locked } : user
//       )
//     );
//   };

//   // Filtering
//   const filteredUsers = users.filter((user) => {
//     const matchesAccess =
//       accessFilter === "All" || user.AccessRight === accessFilter;
//     const matchesName = user.Name.toLowerCase().includes(
//       searchQuery.toLowerCase()
//     );
//     return matchesAccess && matchesName;
//   });

//   // Pagination
//   const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
//   const startIndex = (currentPage - 1) * rowsPerPage;
//   const paginatedUsers = filteredUsers.slice(
//     startIndex,
//     startIndex + rowsPerPage
//   );

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <div className="max-w-7xl mx-auto bg-white shadow rounded-2xl p-6">
//         {/* Filters */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
//           <h2 className="text-xl font-semibold">User Table</h2>

//           <div className="flex flex-col sm:flex-row gap-3">
//             <input
//               type="text"
//               placeholder="Search by Name..."
//               value={searchQuery}
//               onChange={(e) => {
//                 setSearchQuery(e.target.value);
//                 setCurrentPage(1);
//               }}
//               className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             <select
//               value={accessFilter}
//               onChange={(e) => {
//                 setAccessFilter(e.target.value);
//                 setCurrentPage(1);
//               }}
//               className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="All">All Access Rights</option>
//               <option value="Admin">Admin</option>
//               <option value="Manager">Manager</option>
//               <option value="Subcontractor">Subcontractor</option>
//               <option value="SiteAdmin">SiteAdmin</option>
//             </select>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-gray-100 text-gray-700">
//                 <th className="py-3 px-4">Name</th>
//                 <th className="py-3 px-4">Device ID</th>
//                 <th className="py-3 px-4">TabID</th>
//                 <th className="py-3 px-4">Locked</th>
//                 <th className="py-3 px-4">Access Right</th>
//               </tr>
//             </thead>
//             <tbody>
//               {paginatedUsers.length > 0 ? (
//                 paginatedUsers.map((user) => (
//                   <tr
//                     key={user.TabID}
//                     className="border-t hover:bg-gray-50 transition"
//                   >
//                     <td className="py-3 px-4">{user.Name}</td>
//                     <td className="py-3 px-4">{user.DeviceID}</td>
//                     <td className="py-3 px-4">{user.TabID}</td>
//                     <td className="py-3 px-4">
//                       <input
//                         type="checkbox"
//                         checked={user.Locked}
//                         onChange={() => toggleLocked(user.TabID)}
//                         className="w-5 h-5 text-blue-600 border-gray-300 rounded cursor-pointer"
//                       />
//                     </td>
//                     <td className="py-3 px-4">{user.AccessRight}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="text-center py-6 text-gray-500">
//                     No users found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//         <div className="flex justify-center mt-6">
//           <button
//             onClick={() => console.log("Saved Users:", users)}
//             className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
//           >
//             Save
//           </button>
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-between mt-4">
//           <p className="text-gray-600 text-sm">
//             Page {currentPage} of {totalPages || 1}
//           </p>
//           <div className="flex gap-2">
//             <button
//               onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//               disabled={currentPage === 1}
//               className="px-3 py-1 bg-gray-200 rounded-lg disabled:opacity-50"
//             >
//               Previous
//             </button>
//             <button
//               onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//               disabled={currentPage === totalPages || totalPages === 0}
//               className="px-3 py-1 bg-gray-200 rounded-lg disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//         {/* ✅ Save Button */}
//         {/* <div className="flex justify-center mt-6">
//           <button
//             onClick={() => console.log("Saved Users:", users)}
//             className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
//           >
//             Save
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// }

// ==============

import React, { useState, useMemo } from "react";
import dummyData from "../../data/dummyData.json";
// your JSON array

const UserTabId = () => {
  const [users, setUsers] = useState(dummyData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // 🔹 Rows per page: 12 on desktop, 7 on mobile
  const rowsPerPage = window.innerWidth >= 1024 ? 12 : 7;

  // 🔹 Highest TabID
  const highestTabID = Math.max(...users.map((u) => u.TabID));

  // 🔹 Filtering + Searching
  const filteredUsers = useMemo(() => {
    return users.filter(
      (u) =>
        (filter ? u.AccessRight === filter : true) &&
        (search ? u.Name.toLowerCase().includes(search.toLowerCase()) : true)
    );
  }, [users, filter, search]);

  // 🔹 Pagination
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentUsers = filteredUsers.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  // 🔹 Toggle checkbox
  const handleCheckboxChange = (id) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, Locked: !u.Locked } : u))
    );
  };

  return (
    <div className="p-2 max-w-6xl mx-auto">
      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by Name..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3"
        />

        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3"
        >
          <option value="">All Access Rights</option>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="Subcontractor">Subcontractor</option>
          <option value="Management">Management</option>
          <option value="SiteAdmin">SiteAdmin</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full border-collapse bg-white">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Device ID</th>
              <th className="border px-4 py-2 text-left">TabID</th>
              <th className="border px-4 py-2 text-center">Locked</th>
              <th className="border px-4 py-2 text-left">Access Right</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{user.Name}</td>
                <td className="border px-4 py-2">{user.DeviceID}</td>
                <td className="border px-4 py-2">{user.TabID}</td>
                <td className="border px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={user.Locked}
                    onChange={() => handleCheckboxChange(user.id)}
                    className="w-5 h-5 accent-blue-600"
                  />
                </td>
                <td className="border px-4 py-2">{user.AccessRight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-gray-600 text-sm">
          Page {currentPage} of {totalPages || 1}
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages || totalPages === 0}
            className="px-3 py-1 bg-gray-200 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Highest TabID + Save Button */}
      <div className="flex flex-col items-center mt-6">
        <p className="text-gray-700 font-medium mb-2">
          Highest TabID: <span className="text-blue-600">{highestTabID}</span>
        </p>
        <button
          onClick={() => console.log("Saved Users:", users)}
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UserTabId;
