// import React, { useState } from "react";
// import data from "../../data/userVersionData.json";

// export default function UserVersionList() {
//   const [selectedProject, setSelectedProject] = useState("");
//   const [selectedAccess, setSelectedAccess] = useState("");
//   const [searchName, setSearchName] = useState("");

//   const projects = [...new Set(data.map((item) => item.project))];
//   const accessRights = [...new Set(data.map((item) => item.accessRight))];

//   const filteredData = data.filter((item) => {
//     return (
//       (selectedProject ? item.project === selectedProject : true) &&
//       (selectedAccess ? item.accessRight === selectedAccess : true) &&
//       (searchName
//         ? item.name.toLowerCase().includes(searchName.toLowerCase()) ||
//           item.loginName.toLowerCase().includes(searchName.toLowerCase())
//         : true)
//     );
//   });

//   return (
//     <div className="p-4 sm:p-6 max-w-full mx-auto bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
//       <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6">
//         <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
//           User Version List
//         </h2>

//         {/* Filters */}
//         <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center items-center">
//           <select
//             value={selectedProject}
//             onChange={(e) => setSelectedProject(e.target.value)}
//             className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto shadow-sm"
//           >
//             <option value="">Select Project</option>
//             {projects.map((project) => (
//               <option key={project} value={project}>
//                 {project}
//               </option>
//             ))}
//           </select>

//           <select
//             value={selectedAccess}
//             onChange={(e) => setSelectedAccess(e.target.value)}
//             className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto shadow-sm"
//           >
//             <option value="">Select Access Right</option>
//             {accessRights.map((access) => (
//               <option key={access} value={access}>
//                 {access}
//               </option>
//             ))}
//           </select>

//           <input
//             type="text"
//             placeholder="Search by name or login..."
//             value={searchName}
//             onChange={(e) => setSearchName(e.target.value)}
//             className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto shadow-sm"
//           />
//         </div>

//         {/* Table */}
//         <div className="rounded-xl border border-gray-200 shadow-sm">
//           {filteredData.length > 0 ? (
//             <div className="overflow-x-auto">
//               <table className="w-full text-sm md:text-base">
//                 <thead className="bg-gradient-to-r from-blue-100 to-purple-100 shadow-md">
//                   <tr>
//                     <th className="border px-4 py-3 text-left font-semibold text-gray-700">
//                       Login Name
//                     </th>
//                     <th className="border px-4 py-3 text-left font-semibold text-gray-700">
//                       Name
//                     </th>
//                     <th className="border px-4 py-3 text-left font-semibold text-gray-700">
//                       Access Right
//                     </th>
//                     <th className="border px-4 py-3 text-left font-semibold text-gray-700">
//                       TabId
//                     </th>
//                     <th className="border px-4 py-3 text-left font-semibold text-gray-700">
//                       App Version
//                     </th>
//                     <th className="border px-4 py-3 text-left font-semibold text-gray-700">
//                       Last Connect On
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredData.map((user, idx) => (
//                     <tr
//                       key={user.id}
//                       className={`hover:bg-blue-50 ${
//                         idx % 2 === 0 ? "bg-white" : "bg-gray-50"
//                       }`}
//                     >
//                       <td className="border px-4 py-2">{user.loginName}</td>
//                       <td className="border px-4 py-2">{user.name}</td>
//                       <td className="border px-4 py-2">{user.accessRight}</td>
//                       <td className="border px-4 py-2">{user.tabId}</td>
//                       <td className="border px-4 py-2">{user.appVersion}</td>
//                       <td className="border px-4 py-2">{user.lastConnect}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <p className="text-gray-500 text-center py-6">
//               No results found. Try different filters.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// ======================

import React, { useState } from "react";
import data from "../../data/userVersionData.json";

export default function UserVersionList() {
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedAccess, setSelectedAccess] = useState("");
  const [searchName, setSearchName] = useState("");

  const projects = [...new Set(data.map((item) => item.project))];
  const accessRights = [...new Set(data.map((item) => item.accessRight))];

  const filteredData = data.filter((item) => {
    return (
      (selectedProject ? item.project === selectedProject : true) &&
      (selectedAccess ? item.accessRight === selectedAccess : true) &&
      (searchName
        ? item.name.toLowerCase().includes(searchName.toLowerCase()) ||
          item.loginName.toLowerCase().includes(searchName.toLowerCase())
        : true)
    );
  });

  // ✅ Only show data if any filter is applied
  const filtersApplied = selectedProject || selectedAccess || searchName;

  return (
    <div className=" sm:p-6 max-w-full mx-auto bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-2">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
          User Version List
        </h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center items-center">
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto shadow-md"
          >
            <option value="">Select Project</option>
            {projects.map((project) => (
              <option key={project} value={project}>
                {project}
              </option>
            ))}
          </select>

          <select
            value={selectedAccess}
            onChange={(e) => setSelectedAccess(e.target.value)}
            className="border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto shadow-md"
          >
            <option value="">Select Access Right</option>
            {accessRights.map((access) => (
              <option key={access} value={access}>
                {access}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search by name or login..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto shadow-md"
          />
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
          {!filtersApplied ? (
            <p className="text-gray-500 text-center py-10 text-lg">
              🔍 Please select a filter to view data.
            </p>
          ) : filteredData.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">
                      Login Name
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">Name</th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Access Right
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">TabId</th>
                    <th className="px-4 py-3 text-left font-semibold">
                      App Version
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Last Connect On
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((user, idx) => (
                    <tr
                      key={user.id}
                      className={`transition duration-300 ease-in-out ${
                        idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-blue-50`}
                    >
                      <td className="px-4 py-3">{user.loginName}</td>
                      <td className="px-4 py-3">{user.name}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                          {user.accessRight}
                        </span>
                      </td>
                      <td className="px-4 py-3">{user.tabId}</td>
                      <td className="px-4 py-3">{user.appVersion}</td>
                      <td className="px-4 py-3 text-gray-600">
                        {user.lastConnect}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-10 text-lg">
              ❌ No results found. Try different filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
