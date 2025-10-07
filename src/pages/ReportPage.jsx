// // src/pages/ReportPage.jsx
// import React, { useState } from "react";
// import Filters from "../components/Table/Filters";
// import ReportTable from "../components/Table/ReportTable";

// const ReportPage = () => {
//   const [filters, setFilters] = useState({ project: "" });

//   return (
//     <div className="flex">
//       {/* Sidebar (your existing layout) */}
//       <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
//         <h2 className="text-lg font-bold mb-4">Sidebar</h2>
//         {/* your sidebar links */}
//       </aside>

//       <main className="flex-1 p-6 bg-gray-100">
//         <h1 className="text-xl font-bold mb-6">Report</h1>
//         <Filters onApply={setFilters} />
//         {filters.project && <ReportTable filters={filters} />}
//       </main>
//     </div>
//   );
// };

// export default ReportPage;

// src/pages/ReportPage.jsx
// import React, { useState } from "react";
// import Filters from "../components/Table/Filters";
// import ReportTable from "../components/Table/ReportTable";

// export default function ReportPage() {
//   const [filters, setFilters] = useState({ project: "" });

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-6">RFI Report</h1>
//       <Filters onApply={setFilters} />
//       {filters.project && <ReportTable filters={filters} />}
//     </div>
//   );
// }

// ===========

// import React from "react";
// import SimpleTable from "../components/Table/SimpleTable";

// export default function ReportPage() {
//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Simple Report Table</h1>
//       <SimpleTable />
//     </div>
//   );
// }

// =======================

// import React, { useState } from "react";

// export default function ReportTable() {
//   const [selectedProject, setSelectedProject] = useState("");

//   const projects = ["Project A", "Project B", "Project C"];

//   const columns = Array.from({ length: 20 }, (_, i) => `Column ${i + 1}`);

//   const dummyData = Array.from({ length: 10 }, (_, rowIdx) => ({
//     id: rowIdx + 1,
//     project: projects[rowIdx % projects.length],
//     values: Array.from(
//       { length: 20 },
//       (_, colIdx) => `Data ${rowIdx + 1}-${colIdx + 1}`
//     ),
//   }));

//   const filteredData = selectedProject
//     ? dummyData.filter((d) => d.project === selectedProject)
//     : [];

//   return (
//     <div className="p-6">
//       {/* Project Selection */}
//       <div className="mb-4">
//         <label className="mr-2 font-medium text-gray-700">
//           Select Project:
//         </label>
//         <select
//           value={selectedProject}
//           onChange={(e) => setSelectedProject(e.target.value)}
//           className="border px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//         >
//           <option value="">-- Choose --</option>
//           {projects.map((p) => (
//             <option key={p} value={p}>
//               {p}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm max-h-[70vh] pr-10">
//         {selectedProject && filteredData.length > 0 ? (
//           <table className="w-full min-w-[2000px] text-sm sm:text-base">
//             <thead className="bg-gradient-to-r from-blue-100 to-purple-100 sticky top-0 z-20 shadow-md">
//               <tr>
//                 <th className="border px-4 py-3 text-left font-semibold text-gray-700">
//                   Project Name
//                 </th>
//                 {columns.map((col) => (
//                   <th
//                     key={col}
//                     className="border px-4 py-3 text-center font-semibold text-gray-700 whitespace-nowrap"
//                   >
//                     {col}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {filteredData.map((row, idx) => (
//                 <tr
//                   key={row.id}
//                   className={`hover:bg-blue-50 ${
//                     idx % 2 === 0 ? "bg-white" : "bg-gray-50"
//                   }`}
//                 >
//                   <td className="border px-4 py-2 font-medium text-gray-800">
//                     {row.project}
//                   </td>
//                   {row.values.map((val, colIdx) => (
//                     <td key={colIdx} className="border px-4 py-2 text-center">
//                       {val}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p className="text-gray-500 text-center py-6">
//             {selectedProject
//               ? "No results found for this project."
//               : "Please select a project to see data."}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// ======================================================

// import React from "react";

// export default function FixedWidthTable() {
//   // change this number to test (10, 15, 20 etc.)
//   const columnCount = 25;

//   const columns = Array.from(
//     { length: columnCount },
//     (_, i) => `Column ${i + 1}`
//   );
//   const data = Array.from({ length: 5 }, (_, rowIdx) =>
//     columns.map((col, colIdx) => `R${rowIdx + 1}C${colIdx + 1}`)
//   );

//   return (
//     <div className="w-1/2 border border-gray-300 rounded-lg overflow-x-auto">
//       <table className="table-fixed border-collapse">
//         <thead>
//           <tr>
//             {columns.map((col) => (
//               <th
//                 key={col}
//                 className="border border-gray-400 px-4 py-2 text-sm font-semibold text-gray-700 min-w-[150px]" // 👈 fixed column width
//               >
//                 {col}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, rowIdx) => (
//             <tr
//               key={rowIdx}
//               className={rowIdx % 2 === 0 ? "bg-white" : "bg-gray-100"}
//             >
//               {row.map((cell, colIdx) => (
//                 <td
//                   key={colIdx}
//                   className="border border-gray-300 px-4 py-2 text-center min-w-[150px]" // 👈 fixed column width
//                 >
//                   {cell}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// ==============================================

// import React, { useState } from "react";

// export default function ReportTable() {
//   const [selectedProject, setSelectedProject] = useState("");

//   const projects = ["Project A", "Project B", "Project C"];

//   const columns = Array.from({ length: 20 }, (_, i) => `Column ${i + 1}`);

//   const dummyData = Array.from({ length: 10 }, (_, rowIdx) => ({
//     id: rowIdx + 1,
//     project: projects[rowIdx % projects.length],
//     values: Array.from(
//       { length: 20 },
//       (_, colIdx) => `Data ${rowIdx + 1}-${colIdx + 1}`
//     ),
//   }));

//   const filteredData = selectedProject
//     ? dummyData.filter((d) => d.project === selectedProject)
//     : [];

//   return (
//     <div className="p-6">
//       {/* Project Selection */}
//       <div className="mb-4 w-[81%]">
//         <label className="mr-2 font-medium text-gray-700">
//           Select Project:
//         </label>
//         <select
//           value={selectedProject}
//           onChange={(e) => setSelectedProject(e.target.value)}
//           className="border px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//         >
//           <option value="">-- Choose --</option>
//           {projects.map((p) => (
//             <option key={p} value={p}>
//               {p}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Table Wrapper */}
//       <div className=" mx-[1%] md:w-[81%] sm:w-full overflow-x-auto rounded-xl border border-gray-200 shadow-sm max-h-[70vh]">
//         {selectedProject ? (
//           filteredData.length > 0 ? (
//             <table className="w-full text-sm sm:text-base">
//               <thead className="bg-gradient-to-r from-blue-100 to-purple-100 sticky top-0 z-20 shadow-md">
//                 <tr>
//                   <th className="border px-4 py-3 text-left font-semibold text-gray-700">
//                     Project Name
//                   </th>
//                   {columns.map((col) => (
//                     <th
//                       key={col}
//                       className="border px-4 py-3 text-center font-semibold text-gray-700 whitespace-nowrap"
//                     >
//                       {col}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredData.map((row, idx) => (
//                   <tr
//                     key={row.id}
//                     className={`hover:bg-blue-50 ${
//                       idx % 2 === 0 ? "bg-white" : "bg-gray-50"
//                     }`}
//                   >
//                     <td className="border px-4 py-2 font-medium text-gray-800">
//                       {row.project}
//                     </td>
//                     {row.values.map((val, colIdx) => (
//                       <td key={colIdx} className="border px-4 py-2 text-center">
//                         {val}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p className="text-gray-500 text-center py-6">
//               No results found for this project.
//             </p>
//           )
//         ) : (
//           <p className="text-gray-500 text-center py-6">
//             Please select a project to see data.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// =============================================================== zzz

// import React, { useState } from "react";

// export default function ReportTable() {
//   const [selectedProject, setSelectedProject] = useState("");

//   const projects = ["Project A", "Project B", "Project C"];

//   const columns = Array.from({ length: 20 }, (_, i) => `Column ${i + 1}`);

//   const dummyData = Array.from({ length: 10 }, (_, rowIdx) => ({
//     id: rowIdx + 1,
//     project: projects[rowIdx % projects.length],
//     values: Array.from(
//       { length: 20 },
//       (_, colIdx) => `Data ${rowIdx + 1}-${colIdx + 1}`
//     ),
//   }));

//   const filteredData = selectedProject
//     ? dummyData.filter((d) => d.project === selectedProject)
//     : [];

//   return (
//     <div className="p-6 flex flex-col items-center">
//       {/* Project Selection */}
//       <div className="mb-4 w-4/5">
//         <label className="mr-2 font-medium text-gray-700">
//           Select Project:
//         </label>
//         <select
//           value={selectedProject}
//           onChange={(e) => setSelectedProject(e.target.value)}
//           className="border px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//         >
//           <option value="">-- Choose --</option>
//           {projects.map((p) => (
//             <option key={p} value={p}>
//               {p}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Table Wrapper */}
//       <div className="w-4/5  border border-gray-200 shadow-sm rounded-xl max-h-[70vh]">
//         <div className="overflow-x-auto">
//           {selectedProject ? (
//             filteredData.length > 0 ? (
//               <table className="min-w-full text-sm sm:text-base">
//                 <thead className="bg-gradient-to-r from-blue-100 to-purple-100 sticky top-0 z-20 shadow-md">
//                   <tr>
//                     <th className="border px-4 py-3 text-left font-semibold text-gray-700">
//                       Project Name
//                     </th>
//                     {columns.map((col) => (
//                       <th
//                         key={col}
//                         className="border px-4 py-3 text-center font-semibold text-gray-700 whitespace-nowrap"
//                       >
//                         {col}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredData.map((row, idx) => (
//                     <tr
//                       key={row.id}
//                       className={`hover:bg-blue-50 ${
//                         idx % 2 === 0 ? "bg-white" : "bg-gray-50"
//                       }`}
//                     >
//                       <td className="border px-4 py-2 font-medium text-gray-800">
//                         {row.project}
//                       </td>
//                       {row.values.map((val, colIdx) => (
//                         <td
//                           key={colIdx}
//                           className="border px-4 py-2 text-center"
//                         >
//                           {val}
//                         </td>
//                       ))}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             ) : (
//               <p className="text-gray-500 text-center py-6">
//                 No results found for this project.
//               </p>
//             )
//           ) : (
//             <p className="text-gray-500 text-center py-6">
//               Please select a project to see data.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// ===============================

// import React, { useState } from "react";

// export default function ReportTable() {
//   const [selectedProject, setSelectedProject] = useState("");

//   const projects = ["Project A", "Project B", "Project C"];

//   const columns = Array.from({ length: 20 }, (_, i) => `Column ${i + 1}`);
//   const rows = Array.from({ length: 30 }, (_, i) => ({
//     id: i + 1,
//     data: Array.from({ length: 20 }, () => `Data ${i + 1}`),
//   }));

//   return (
//     <div className="flex">
//       {/* Sidebar (fixed width like chat sidebar) */}
//       <div className="w-64 bg-gray-800 text-white p-4">Sidebar</div>

//       {/* Right content (fixed width container for table) */}
//       <div className="flex-1 p-4">
//         {/* Dropdown */}
//         <select
//           value={selectedProject}
//           onChange={(e) => setSelectedProject(e.target.value)}
//           className="border p-2 mb-4"
//         >
//           <option value="">Select Project</option>
//           {projects.map((project, idx) => (
//             <option key={idx} value={project}>
//               {project}
//             </option>
//           ))}
//         </select>

//         {/* Table wrapper with fixed width + scroll */}
//         <div className="w-full max-w-[1000px] overflow-x-auto border">
//           <table className="min-w-max border-collapse border">
//             <thead>
//               <tr>
//                 <th className="border px-4 py-2">ID</th>
//                 {columns.map((col, idx) => (
//                   <th key={idx} className="border px-4 py-2 whitespace-nowrap">
//                     {col}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {rows.map((row) => (
//                 <tr key={row.id}>
//                   <td className="border px-4 py-2">{row.id}</td>
//                   {row.data.map((cell, idx) => (
//                     <td
//                       key={idx}
//                       className="border px-4 py-2 whitespace-nowrap"
//                     >
//                       {cell}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// ---------------------

// import React, { useState } from "react";

// export default function ReportTable() {
//   const [selectedProject, setSelectedProject] = useState("");

//   const projects = ["Project A", "Project B", "Project C"];

//   const columns = Array.from({ length: 20 }, (_, i) => `Column ${i + 1}`);
//   const rows = Array.from({ length: 5 }, (_, i) => ({
//     id: i + 1,
//     data: Array.from({ length: 20 }, () => `Data ${i + 1}`),
//   }));

//   return (
//     <div className="p-4 w-full">
//       {/* Dropdown */}
//       <select
//         value={selectedProject}
//         onChange={(e) => setSelectedProject(e.target.value)}
//         className="border p-2 mb-4"
//       >
//         <option value="">Select Project</option>
//         {projects.map((project, idx) => (
//           <option key={idx} value={project}>
//             {project}
//           </option>
//         ))}
//       </select>

//       {/* Table wrapper with fixed width + scroll */}
//       <div className="w-full max-w-[1240px] overflow-x-auto border">
//         <table className="min-w-max border-collapse border">
//           <thead>
//             <tr>
//               <th className="border px-4 py-2">ID</th>
//               {columns.map((col, idx) => (
//                 <th key={idx} className="border px-4 py-2 whitespace-nowrap">
//                   {col}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((row) => (
//               <tr key={row.id}>
//                 <td className="border px-4 py-2">{row.id}</td>
//                 {row.data.map((cell, idx) => (
//                   <td key={idx} className="border px-4 py-2 whitespace-nowrap">
//                     {cell}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// ========= the upper code is good

// import React, { useState } from "react";

// export default function ReportTable() {
//   const [selectedProject, setSelectedProject] = useState("");

//   const projects = ["Project A", "Project B", "Project C"];

//   const columns = Array.from({ length: 20 }, (_, i) => `Column ${i + 1}`);
//   const rows = Array.from({ length: 5 }, (_, i) => ({
//     id: i + 1,
//     data: Array.from({ length: 20 }, () => `Data ${i + 1}`),
//   }));

//   return (
//     <div className="p-4 w-full">
//       {/* Dropdown */}
//       <select
//         value={selectedProject}
//         onChange={(e) => setSelectedProject(e.target.value)}
//         className="border p-2 mb-4"
//       >
//         <option value="">Select Project</option>
//         {projects.map((project, idx) => (
//           <option key={idx} value={project}>
//             {project}
//           </option>
//         ))}
//       </select>

//       {/* Table only shows when a project is selected */}
//       {selectedProject && (
//         <div className="w-full max-w-[1230px] overflow-x-auto border">
//           <table className="min-w-max border-collapse border">
//             <thead>
//               <tr>
//                 <th className="border px-4 py-2">ID</th>
//                 {columns.map((col, idx) => (
//                   <th key={idx} className="border px-4 py-2 whitespace-nowrap">
//                     {col}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {rows.map((row) => (
//                 <tr key={row.id}>
//                   <td className="border px-4 py-2">{row.id}</td>
//                   {row.data.map((cell, idx) => (
//                     <td
//                       key={idx}
//                       className="border px-4 py-2 whitespace-nowrap"
//                     >
//                       {cell}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }
//

// ==================upper code is perfect

// import React, { useState } from "react";

// export default function ReportTable() {
//   const [selectedProject, setSelectedProject] = useState("");

//   const projects = ["Project A", "Project B", "Project C"];

//   // Define your real columns
//   const columns = [
//     "View Detail",
//     "Tab Id",
//     "ChkList ID",
//     "Location",
//     "Category",
//     "Check List",
//     "Check Point",
//     "Observation",
//     "Severity",
//     "Rectifiable",
//     "Root Cause",
//     "Correction",
//     "Corrective Action",
//     "Latest Notes",
//     "Contractor",
//     "Latest Status",
//     "Last Chkd By",
//     "Originated Date",
//     "Server Originated Date",
//     "Last Updated",
//     "Server Last Updated",
//     "Showin3D",
//     "ReAssign",
//   ];

//   // Generate fake rows for each project
//   const generateRows = (project) => {
//     return Array.from({ length: 15 }, (_, i) => ({
//       id: i + 1,
//       ViewDetail: `View ${i + 1}`,
//       TabId: `T-${100 + i}`,
//       ChkListID: `CL-${200 + i}`,
//       Location: ["Site A", "Site B", "Site C"][i % 3],
//       Category: ["Electrical", "Plumbing", "Civil"][i % 3],
//       CheckList: `Checklist ${i + 1}`,
//       CheckPoint: `Checkpoint ${i + 1}`,
//       Observation: `Observation for row ${i + 1}`,
//       Severity: ["Low", "Medium", "High"][i % 3],
//       Rectifiable: i % 2 === 0 ? "Yes" : "No",
//       RootCause: `Cause ${i + 1}`,
//       Correction: `Correction ${i + 1}`,
//       CorrectiveAction: `Action ${i + 1}`,
//       LatestNotes: `Note ${i + 1}`,
//       Contractor: ["L&T", "Tata", "Adani"][i % 3],
//       LatestStatus: ["Open", "Closed", "In Progress"][i % 3],
//       LastChkdBy: ["Inspector A", "Inspector B", "Inspector C"][i % 3],
//       OriginatedDate: `2025-09-${String(i + 1).padStart(2, "0")}`,
//       ServerOriginatedDate: `2025-09-${String(i + 2).padStart(2, "0")}`,
//       LastUpdated: `2025-09-${String(i + 3).padStart(2, "0")}`,
//       ServerLastUpdated: `2025-09-${String(i + 4).padStart(2, "0")}`,
//       Showin3D: i % 2 === 0 ? "Yes" : "No",
//       ReAssign: i % 2 === 0 ? "Allowed" : "Not Allowed",
//     }));
//   };

//   // Prepare rows only when project selected
//   const rows = selectedProject ? generateRows(selectedProject) : [];

//   return (
//     <div className="p-4 w-full">
//       {/* Dropdown */}
//       <select
//         value={selectedProject}
//         onChange={(e) => setSelectedProject(e.target.value)}
//         className="border p-2 mb-4"
//       >
//         <option value="">Select Project</option>
//         {projects.map((project, idx) => (
//           <option key={idx} value={project}>
//             {project}
//           </option>
//         ))}
//       </select>

//       {/* Table only shows when project selected */}
//       {selectedProject && (
//         <div className="w-full max-w-[1205px] overflow-x-auto border rounded">
//           <table className="min-w-max border-collapse border">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-4 py-2">ID</th>
//                 {columns.map((col, idx) => (
//                   <th
//                     key={idx}
//                     className="border px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-700"
//                   >
//                     {col}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {rows.map((row) => (
//                 <tr key={row.id} className="hover:bg-gray-50">
//                   <td className="border px-4 py-2">{row.id}</td>
//                   {columns.map((col, idx) => (
//                     <td
//                       key={idx}
//                       className="border px-4 py-2 whitespace-nowrap"
//                     >
//                       {row[col.replace(/\s/g, "")] || row[col] || "-"}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// ============================ below code is ok

// import React, { useState } from "react";

// export default function ReportTable() {
//   const [selectedProject, setSelectedProject] = useState("");

//   const projects = ["Project A", "Project B", "Project C"];

//   // Columns
//   const columns = [
//     "View Detail",
//     "Tab Id",
//     "ChkList ID",
//     "Location",
//     "Category",
//     "Check List",
//     "Check Point",
//     "Observation",
//     "Severity",
//     "Rectifiable",
//     "Root Cause",
//     "Correction",
//     "Corrective Action",
//     "Latest Notes",
//     "Contractor",
//     "Latest Status",
//     "Last Chkd By",
//     "Originated Date",
//     "Server Originated Date",
//     "Last Updated",
//     "Server Last Updated",
//     "Showin3D",
//     "ReAssign",
//   ];

//   // Generate dummy rows
//   const generateRows = () => {
//     return Array.from({ length: 15 }, (_, i) => ({
//       id: i + 1,
//       ViewDetail: `View ${i + 1}`,
//       TabId: `T-${100 + i}`,
//       ChkListID: `CL-${200 + i}`,
//       Location: ["Site A", "Site B", "Site C"][i % 3],
//       Category: ["Electrical", "Plumbing", "Civil"][i % 3],
//       CheckList: `Checklist ${i + 1}`,
//       CheckPoint: `Checkpoint ${i + 1}`,
//       Observation: `Observation ${i + 1}`,
//       Severity: ["Low", "Medium", "High"][i % 3],
//       Rectifiable: i % 2 === 0 ? "Yes" : "No",
//       RootCause: `Cause ${i + 1}`,
//       Correction: `Correction ${i + 1}`,
//       CorrectiveAction: `Action ${i + 1}`,
//       LatestNotes: `Note ${i + 1}`,
//       Contractor: ["L&T", "Tata", "Adani"][i % 3],
//       LatestStatus: [
//         "NEW",
//         "COMPLETED",
//         "CLOSED",
//         "OPEN",
//         "REOPEN",
//         "APPROVED",
//         "REJECTED",
//       ][i % 7],
//       LastChkdBy: ["Inspector A", "Inspector B", "Inspector C"][i % 3],
//       OriginatedDate: `2025-09-${String(i + 1).padStart(2, "0")}`,
//       ServerOriginatedDate: `2025-09-${String(i + 2).padStart(2, "0")}`,
//       LastUpdated: `2025-09-${String(i + 3).padStart(2, "0")}`,
//       ServerLastUpdated: `2025-09-${String(i + 4).padStart(2, "0")}`,
//       Showin3D: i % 2 === 0 ? "Yes" : "No",
//       ReAssign: i % 2 === 0 ? "Allowed" : "Not Allowed",
//     }));
//   };

//   const rows = selectedProject ? generateRows() : [];

//   // Status colors mapping
//   const statusColors = {
//     NEW: "bg-green-500 text-white",
//     COMPLETED: "bg-yellow-500 text-white",
//     CLOSED: "bg-red-500 text-white",
//     OPEN: "bg-blue-500 text-white",
//     REOPEN: "bg-orange-500 text-white",
//     APPROVED: "bg-pink-500 text-white",
//     REJECTED: "bg-gray-500 text-white",
//   };

//   return (
//     <div className="p-4 w-full">
//       {/* Dropdown */}
//       <select
//         value={selectedProject}
//         onChange={(e) => setSelectedProject(e.target.value)}
//         className="border p-2 mb-4"
//       >
//         <option value="">Select Project</option>
//         {projects.map((project, idx) => (
//           <option key={idx} value={project}>
//             {project}
//           </option>
//         ))}
//       </select>

//       {/* Table only shows when project selected */}
//       {selectedProject && (
//         <div className="w-full max-w-[1240px] overflow-x-auto border rounded">
//           <table className="min-w-max border-collapse border">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-4 py-2">ID</th>
//                 {columns.map((col, idx) => (
//                   <th
//                     key={idx}
//                     className="border px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-700"
//                   >
//                     {col}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {rows.map((row) => (
//                 <tr key={row.id} className="hover:bg-gray-50">
//                   <td className="border px-4 py-2">{row.id}</td>
//                   {columns.map((col, idx) => {
//                     if (col === "Latest Status") {
//                       return (
//                         <td key={idx} className="border px-4 py-2">
//                           <span
//                             className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                               statusColors[row.LatestStatus] ||
//                               "bg-gray-400 text-white"
//                             }`}
//                           >
//                             {row.LatestStatus}
//                           </span>
//                         </td>
//                       );
//                     }
//                     // Access row data dynamically
//                     const key = col.replace(/\s/g, "");
//                     return (
//                       <td
//                         key={idx}
//                         className="border px-4 py-2 whitespace-nowrap"
//                       >
//                         {row[key] || row[col] || "-"}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// ========================================

// import React, { useState } from "react";

// export default function ReportTable() {
//   const [selectedProject, setSelectedProject] = useState("");

//   const projects = ["Project A", "Project B", "Project C"];

//   // Columns
//   const columns = [
//     "View Detail",
//     "Tab Id",
//     "ChkList ID",
//     "Location",
//     "Category",
//     "Check List",
//     "Check Point",
//     "Observation",
//     "Severity",
//     "Rectifiable",
//     "Root Cause",
//     "Correction",
//     "Corrective Action",
//     "Latest Notes",
//     "Contractor",
//     "Latest Status",
//     "Last Chkd By",
//     "Originated Date",
//     "Server Originated Date",
//     "Last Updated",
//     "Server Last Updated",
//     "Showin3D",
//     "ReAssign",
//   ];

//   // Dummy rows
//   const generateRows = () =>
//     Array.from({ length: 15 }, (_, i) => ({
//       id: i + 1,
//       ViewDetail: `View ${i + 1}`,
//       TabId: `T-${100 + i}`,
//       ChkListID: `CL-${200 + i}`,
//       Location: ["Site A", "Site B", "Site C"][i % 3],
//       Category: ["Electrical", "Plumbing", "Civil"][i % 3],
//       CheckList: `Checklist ${i + 1}`,
//       CheckPoint: `Checkpoint ${i + 1}`,
//       Observation: `Observation ${i + 1}`,
//       Severity: ["Low", "Medium", "High"][i % 3],
//       Rectifiable: i % 2 === 0 ? "Yes" : "No",
//       RootCause: `Cause ${i + 1}`,
//       Correction: `Correction ${i + 1}`,
//       CorrectiveAction: `Action ${i + 1}`,
//       LatestNotes: `Note ${i + 1}`,
//       Contractor: ["L&T", "Tata", "Adani"][i % 3],
//       LatestStatus: [
//         "NEW",
//         "COMPLETED",
//         "CLOSED",
//         "OPEN",
//         "REOPEN",
//         "APPROVED",
//         "REJECTED",
//       ][i % 7],
//       LastChkdBy: ["Inspector A", "Inspector B", "Inspector C"][i % 3],
//       OriginatedDate: `2025-09-${String(i + 1).padStart(2, "0")}`,
//       ServerOriginatedDate: `2025-09-${String(i + 2).padStart(2, "0")}`,
//       LastUpdated: `2025-09-${String(i + 3).padStart(2, "0")}`,
//       ServerLastUpdated: `2025-09-${String(i + 4).padStart(2, "0")}`,
//       Showin3D: i % 2 === 0 ? "Yes" : "No",
//       ReAssign: i % 2 === 0 ? "Allowed" : "Not Allowed",
//     }));

//   const rows = selectedProject ? generateRows() : [];

//   // Status colors
//   const statusColors = {
//     NEW: "bg-green-500 text-white",
//     COMPLETED: "bg-yellow-500 text-white",
//     CLOSED: "bg-red-500 text-white",
//     OPEN: "bg-blue-500 text-white",
//     REOPEN: "bg-orange-500 text-white",
//     APPROVED: "bg-pink-500 text-white",
//     REJECTED: "bg-gray-500 text-white",
//   };

//   return (
//     <div className="p-4 w-full">
//       {/* Dropdown */}
//       <select
//         value={selectedProject}
//         onChange={(e) => setSelectedProject(e.target.value)}
//         className="border p-2 mb-4"
//       >
//         <option value="">Select Project</option>
//         {projects.map((project, idx) => (
//           <option key={idx} value={project}>
//             {project}
//           </option>
//         ))}
//       </select>

//       {/* Table */}
//       {selectedProject && (
//         <div className="w-full border rounded overflow-x-auto">
//           <div className="min-w-[1200px]">
//             <table className="w-full border-collapse border text-sm">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="border px-4 py-2">ID</th>
//                   {columns.map((col, idx) => (
//                     <th
//                       key={idx}
//                       className="border px-4 py-2 whitespace-nowrap"
//                     >
//                       {col}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {rows.map((row) => (
//                   <tr key={row.id} className="hover:bg-gray-50">
//                     <td className="border px-4 py-2">{row.id}</td>
//                     {columns.map((col, idx) => {
//                       if (col === "Latest Status") {
//                         return (
//                           <td key={idx} className="border px-4 py-2">
//                             <span
//                               className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                                 statusColors[row.LatestStatus] ||
//                                 "bg-gray-400 text-white"
//                               }`}
//                             >
//                               {row.LatestStatus}
//                             </span>
//                           </td>
//                         );
//                       }
//                       const key = col.replace(/\s/g, "");
//                       return (
//                         <td
//                           key={idx}
//                           className="border px-4 py-2 whitespace-nowrap"
//                         >
//                           {row[key] || row[col] || "-"}
//                         </td>
//                       );
//                     })}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// =============

// import React, { useState } from "react";

// export default function ReportTable() {
//   const [selectedProject, setSelectedProject] = useState("");

//   const projects = ["Project A", "Project B", "Project C"];

//   const columns = [
//     "View Detail",
//     "Tab Id",
//     "ChkList ID",
//     "Location",
//     "Category",
//     "Check List",
//     "Check Point",
//     "Observation",
//     "Severity",
//     "Rectifiable",
//     "Root Cause",
//     "Correction",
//     "Corrective Action",
//     "Latest Notes",
//     "Contractor",
//     "Latest Status",
//     "Last Chkd By",
//     "Originated Date",
//     "Server Originated Date",
//     "Last Updated",
//     "Server Last Updated",
//     "Showin3D",
//     "ReAssign",
//   ];

//   const generateRows = () => {
//     return Array.from({ length: 15 }, (_, i) => ({
//       id: i + 1,
//       ViewDetail: `View ${i + 1}`,
//       TabId: `T-${100 + i}`,
//       ChkListID: `CL-${200 + i}`,
//       Location: ["Site A", "Site B", "Site C"][i % 3],
//       Category: ["Electrical", "Plumbing", "Civil"][i % 3],
//       CheckList: `Checklist ${i + 1}`,
//       CheckPoint: `Checkpoint ${i + 1}`,
//       Observation: `Observation ${i + 1}`,
//       Severity: ["Low", "Medium", "High"][i % 3],
//       Rectifiable: i % 2 === 0 ? "Yes" : "No",
//       RootCause: `Cause ${i + 1}`,
//       Correction: `Correction ${i + 1}`,
//       CorrectiveAction: `Action ${i + 1}`,
//       LatestNotes: `Note ${i + 1}`,
//       Contractor: ["L&T", "Tata", "Adani"][i % 3],
//       LatestStatus: [
//         "NEW",
//         "COMPLETED",
//         "CLOSED",
//         "OPEN",
//         "REOPEN",
//         "APPROVED",
//         "REJECTED",
//       ][i % 7],
//       LastChkdBy: ["Inspector A", "Inspector B", "Inspector C"][i % 3],
//       OriginatedDate: `2025-09-${String(i + 1).padStart(2, "0")}`,
//       ServerOriginatedDate: `2025-09-${String(i + 2).padStart(2, "0")}`,
//       LastUpdated: `2025-09-${String(i + 3).padStart(2, "0")}`,
//       ServerLastUpdated: `2025-09-${String(i + 4).padStart(2, "0")}`,
//       Showin3D: i % 2 === 0 ? "Yes" : "No",
//       ReAssign: i % 2 === 0 ? "Allowed" : "Not Allowed",
//     }));
//   };

//   const rows = selectedProject ? generateRows() : [];

//   const statusColors = {
//     NEW: "bg-green-500 text-white",
//     COMPLETED: "bg-yellow-500 text-white",
//     CLOSED: "bg-red-500 text-white",
//     OPEN: "bg-blue-500 text-white",
//     REOPEN: "bg-orange-500 text-white",
//     APPROVED: "bg-pink-500 text-white",
//     REJECTED: "bg-gray-500 text-white",
//   };

//   return (
//     <div className="p-4 w-full">
//       {/* Dropdown */}
//       <select
//         value={selectedProject}
//         onChange={(e) => setSelectedProject(e.target.value)}
//         className="border p-2 mb-4"
//       >
//         <option value="">Select Project</option>
//         {projects.map((project, idx) => (
//           <option key={idx} value={project}>
//             {project}
//           </option>
//         ))}
//       </select>

//       {/* Table only shows when project selected */}
//       {selectedProject && (
//         <div className="w-[80vw] overflow-x-auto border rounded">
//           <table className="min-w-max border-collapse border">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-4 py-2">ID</th>
//                 {columns.map((col, idx) => (
//                   <th
//                     key={idx}
//                     className="border px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-700"
//                   >
//                     {col}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {rows.map((row) => (
//                 <tr key={row.id} className="hover:bg-gray-50">
//                   <td className="border px-4 py-2">{row.id}</td>
//                   {columns.map((col, idx) => {
//                     if (col === "Latest Status") {
//                       return (
//                         <td key={idx} className="border px-4 py-2">
//                           <span
//                             className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                               statusColors[row.LatestStatus] ||
//                               "bg-gray-400 text-white"
//                             }`}
//                           >
//                             {row.LatestStatus}
//                           </span>
//                         </td>
//                       );
//                     }
//                     const key = col.replace(/\s/g, "");
//                     return (
//                       <td
//                         key={idx}
//                         className="border px-4 py-2 whitespace-nowrap"
//                       >
//                         {row[key] || row[col] || "-"}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// =========above code is perfect

// import React, { useState } from "react";

// export default function ReportTable() {
//   const [selectedProject, setSelectedProject] = useState("");

//   const projects = ["Project A", "Project B", "Project C"];

//   const columns = [
//     "View Detail",
//     "Tab Id",
//     "ChkList ID",
//     "Location",
//     "Category",
//     "Check List",
//     "Check Point",
//     "Observation",
//     "Severity",
//     "Rectifiable",
//     "Root Cause",
//     "Correction",
//     "Corrective Action",
//     "Latest Notes",
//     "Contractor",
//     "Latest Status",
//     "Last Chkd By",
//     "Originated Date",
//     "Server Originated Date",
//     "Last Updated",
//     "Server Last Updated",
//     "Showin3D",
//     "ReAssign",
//   ];

//   const generateRows = () => {
//     return Array.from({ length: 15 }, (_, i) => ({
//       id: i + 1,
//       ViewDetail: `View ${i + 1}`,
//       TabId: `T-${100 + i}`,
//       ChkListID: `CL-${200 + i}`,
//       Location: ["Site A", "Site B", "Site C"][i % 3],
//       Category: ["Electrical", "Plumbing", "Civil"][i % 3],
//       CheckList: `Checklist ${i + 1}`,
//       CheckPoint: `Checkpoint ${i + 1}`,
//       Observation: `Observation ${i + 1}`,
//       Severity: ["Low", "Medium", "High"][i % 3],
//       Rectifiable: i % 2 === 0 ? "Yes" : "No",
//       RootCause: `Cause ${i + 1}`,
//       Correction: `Correction ${i + 1}`,
//       CorrectiveAction: `Action ${i + 1}`,
//       LatestNotes: `Note ${i + 1}`,
//       Contractor: ["L&T", "Tata", "Adani"][i % 3],
//       LatestStatus: [
//         "NEW",
//         "COMPLETED",
//         "CLOSED",
//         "OPEN",
//         "REOPEN",
//         "APPROVED",
//         "REJECTED",
//       ][i % 7],
//       LastChkdBy: ["Inspector A", "Inspector B", "Inspector C"][i % 3],
//       OriginatedDate: `2025-09-${String(i + 1).padStart(2, "0")}`,
//       ServerOriginatedDate: `2025-09-${String(i + 2).padStart(2, "0")}`,
//       LastUpdated: `2025-09-${String(i + 3).padStart(2, "0")}`,
//       ServerLastUpdated: `2025-09-${String(i + 4).padStart(2, "0")}`,
//       Showin3D: i % 2 === 0 ? "Yes" : "No",
//       ReAssign: i % 2 === 0 ? "Allowed" : "Not Allowed",
//     }));
//   };

//   const rows = selectedProject ? generateRows() : [];

//   const statusColors = {
//     NEW: "bg-green-500 text-white",
//     COMPLETED: "bg-yellow-500 text-white",
//     CLOSED: "bg-red-500 text-white",
//     OPEN: "bg-blue-500 text-white",
//     REOPEN: "bg-orange-500 text-white",
//     APPROVED: "bg-pink-500 text-white",
//     REJECTED: "bg-gray-500 text-white",
//   };

//   return (
//     <div className="p-4 w-full">
//       {/* Dropdown */}
//       <select
//         value={selectedProject}
//         onChange={(e) => setSelectedProject(e.target.value)}
//         className="border p-2 mb-4"
//       >
//         <option value="">Select Project</option>
//         {projects.map((project, idx) => (
//           <option key={idx} value={project}>
//             {project}
//           </option>
//         ))}
//       </select>

//       {/* Table only shows when project selected */}
//       {selectedProject && (
//         <div className="w-[95vw] md:w-[85vw] lg:w-[80vw] overflow-x-auto border rounded">
//           <table className="min-w-max border-collapse border text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-2 py-2">ID</th>
//                 {columns.map((col, idx) => (
//                   <th
//                     key={idx}
//                     className="border px-2 py-2 whitespace-nowrap text-sm font-semibold text-gray-700"
//                   >
//                     {col}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {rows.map((row) => (
//                 <tr key={row.id} className="hover:bg-gray-50">
//                   <td className="border px-2 py-2">{row.id}</td>
//                   {columns.map((col, idx) => {
//                     if (col === "Latest Status") {
//                       return (
//                         <td key={idx} className="border px-2 py-2">
//                           <span
//                             className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                               statusColors[row.LatestStatus] ||
//                               "bg-gray-400 text-white"
//                             }`}
//                           >
//                             {row.LatestStatus}
//                           </span>
//                         </td>
//                       );
//                     }
//                     const key = col.replace(/\s/g, "");
//                     return (
//                       <td
//                         key={idx}
//                         className="border px-2 py-2 whitespace-nowrap"
//                       >
//                         {row[key] || row[col] || "-"}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// ============================================upper is 10

// import React, { useState } from "react";

// export default function ReportTable() {
//   const [selectedProject, setSelectedProject] = useState("");
//   const [filters, setFilters] = useState({});
//   const [showTable, setShowTable] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 10;

//   const projects = ["Project A", "Project B", "Project C"];

//   const columns = [
//     "View Detail",
//     "Tab Id",
//     "ChkList ID",
//     "Location",
//     "Category",
//     "Check List",
//     "Check Point",
//     "Observation",
//     "Severity",
//     "Rectifiable",
//     "Root Cause",
//     "Correction",
//     "Corrective Action",
//     "Latest Notes",
//     "Contractor",
//     "Latest Status",
//     "Last Chkd By",
//     "Originated Date",
//     "Server Originated Date",
//     "Last Updated",
//     "Server Last Updated",
//     "Showin3D",
//     "ReAssign",
//   ];

//   const generateRows = () => {
//     return Array.from({ length: 55 }, (_, i) => ({
//       id: i + 1,
//       ViewDetail: `View ${i + 1}`,
//       TabId: `T-${100 + i}`,
//       ChkListID: `CL-${200 + i}`,
//       Location: ["Tower A", "Tower B", "Tower C"][i % 3],
//       Category: ["Electrical", "Plumbing", "Civil"][i % 3],
//       CheckList: `Checklist ${i + 1}`,
//       CheckPoint: `Checkpoint ${i + 1}`,
//       Observation: `Observation ${i + 1}`,
//       Severity: ["Low", "Medium", "High"][i % 3],
//       Rectifiable: i % 2 === 0 ? "Yes" : "No",
//       RootCause: `Cause ${i + 1}`,
//       Correction: `Correction ${i + 1}`,
//       CorrectiveAction: `Action ${i + 1}`,
//       LatestNotes: `Note ${i + 1}`,
//       Contractor: ["L&T", "Tata", "Adani"][i % 3],
//       LatestStatus: [
//         "NEW",
//         "COMPLETED",
//         "CLOSED",
//         "OPEN",
//         "REOPEN",
//         "APPROVED",
//         "REJECTED",
//       ][i % 7],
//       LastChkdBy: ["Inspector A", "Inspector B", "Inspector C"][i % 3],
//       OriginatedDate: `2025-09-${String(i + 1).padStart(2, "0")}`,
//       ServerOriginatedDate: `2025-09-${String(i + 2).padStart(2, "0")}`,
//       LastUpdated: `2025-09-${String(i + 3).padStart(2, "0")}`,
//       ServerLastUpdated: `2025-09-${String(i + 4).padStart(2, "0")}`,
//       Showin3D: i % 2 === 0 ? "Yes" : "No",
//       ReAssign: i % 2 === 0 ? "Allowed" : "Not Allowed",
//     }));
//   };

//   const allRows = selectedProject ? generateRows() : [];

//   const statusColors = {
//     NEW: "bg-green-500 text-white",
//     COMPLETED: "bg-yellow-500 text-white",
//     CLOSED: "bg-red-500 text-white",
//     OPEN: "bg-blue-500 text-white",
//     REOPEN: "bg-orange-500 text-white",
//     APPROVED: "bg-pink-500 text-white",
//     REJECTED: "bg-gray-500 text-white",
//   };

//   // Pagination
//   const indexOfLast = currentPage * rowsPerPage;
//   const indexOfFirst = indexOfLast - rowsPerPage;
//   const currentRows = allRows.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(allRows.length / rowsPerPage);

//   return (
//     <div className="p-4 w-full space-y-4">
//       {/* Project Selection */}
//       <div className="flex flex-wrap gap-2 items-center">
//         <select
//           value={selectedProject}
//           onChange={(e) => setSelectedProject(e.target.value)}
//           className="border p-2 rounded shadow-sm"
//         >
//           <option value="">Select Project</option>
//           {projects.map((project, idx) => (
//             <option key={idx} value={project}>
//               {project}
//             </option>
//           ))}
//         </select>

//         <button
//           onClick={() => setShowTable(true)}
//           disabled={!selectedProject}
//           className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow disabled:bg-gray-400"
//         >
//           OK
//         </button>
//       </div>

//       {/* Filters (dummy for now) */}
//       {selectedProject && (
//         <div className="flex flex-wrap gap-3 bg-gray-50 p-3 rounded border">
//           {[
//             "Tower",
//             "Floor",
//             "Flat",
//             "Room",
//             "Unit",
//             "Further Unit",
//             "Type",
//             "Category",
//             "Status",
//           ].map((f) => (
//             <select key={f} className="border p-2 rounded text-sm">
//               <option>{f}</option>
//               <option>{f} 1</option>
//               <option>{f} 2</option>
//             </select>
//           ))}
//           <input type="date" className="border p-2 rounded text-sm" />
//           <input type="date" className="border p-2 rounded text-sm" />
//           <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow">
//             Apply Filters
//           </button>
//         </div>
//       )}

//       {/* Search */}
//       {showTable && (
//         <div className="flex justify-between items-center">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="border p-2 rounded w-60"
//           />
//         </div>
//       )}

//       {/* Table */}
//       {showTable && (
//         <div className="w-[95vw] md:w-[85vw] lg:w-[80vw] overflow-x-auto border rounded">
//           <table className="min-w-max border-collapse border text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-2 py-2">ID</th>
//                 {columns.map((col, idx) => (
//                   <th
//                     key={idx}
//                     className="border px-2 py-2 whitespace-nowrap text-sm font-semibold text-gray-700"
//                   >
//                     {col}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {currentRows.map((row) => (
//                 <tr key={row.id} className="hover:bg-gray-50">
//                   <td className="border px-2 py-2">{row.id}</td>
//                   {columns.map((col, idx) => {
//                     if (col === "Latest Status") {
//                       return (
//                         <td key={idx} className="border px-2 py-2">
//                           <span
//                             className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                               statusColors[row.LatestStatus] ||
//                               "bg-gray-400 text-white"
//                             }`}
//                           >
//                             {row.LatestStatus}
//                           </span>
//                         </td>
//                       );
//                     }
//                     const key = col.replace(/\s/g, "");
//                     return (
//                       <td
//                         key={idx}
//                         className="border px-2 py-2 whitespace-nowrap"
//                       >
//                         {row[key] || row[col] || "-"}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Pagination */}
//       {showTable && totalPages > 1 && (
//         <div className="flex justify-center gap-2 mt-4">
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//             disabled={currentPage === 1}
//             className="px-3 py-1 border rounded disabled:opacity-50"
//           >
//             Prev
//           </button>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1 border rounded ${
//                 currentPage === i + 1
//                   ? "bg-blue-500 text-white"
//                   : "bg-white hover:bg-gray-100"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//             disabled={currentPage === totalPages}
//             className="px-3 py-1 border rounded disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// ==upper is greatest all good

// import React, { useState } from "react";

// export default function ReportTable() {
//   const [selectedProject, setSelectedProject] = useState("");
//   const [filters, setFilters] = useState({});
//   const [showTable, setShowTable] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const rowsPerPage = 10;

//   const projects = ["Project A", "Project B", "Project C"];

//   const columns = [
//     "View Detail",
//     "Tab Id",
//     "ChkList ID",
//     "Location",
//     "Category",
//     "Check List",
//     "Check Point",
//     "Observation",
//     "Severity",
//     "Rectifiable",
//     "Root Cause",
//     "Correction",
//     "Corrective Action",
//     "Latest Notes",
//     "Contractor",
//     "Latest Status",
//     "Last Chkd By",
//     "Originated Date",
//     "Server Originated Date",
//     "Last Updated",
//     "Server Last Updated",
//     "Showin3D",
//     "ReAssign",
//   ];

//   const generateRows = () => {
//     return Array.from({ length: 55 }, (_, i) => ({
//       id: i + 1,
//       ViewDetail: `View ${i + 1}`,
//       TabId: `T-${100 + i}`,
//       ChkListID: `CL-${200 + i}`,
//       Location: ["Tower A", "Tower B", "Tower C"][i % 3],
//       Category: ["Electrical", "Plumbing", "Civil"][i % 3],
//       CheckList: `Checklist ${i + 1}`,
//       CheckPoint: `Checkpoint ${i + 1}`,
//       Observation: `Observation ${i + 1}`,
//       Severity: ["Low", "Medium", "High"][i % 3],
//       Rectifiable: i % 2 === 0 ? "Yes" : "No",
//       RootCause: `Cause ${i + 1}`,
//       Correction: `Correction ${i + 1}`,
//       CorrectiveAction: `Action ${i + 1}`,
//       LatestNotes: `Note ${i + 1}`,
//       Contractor: ["L&T", "Tata", "Adani"][i % 3],
//       LatestStatus: [
//         "NEW",
//         "COMPLETED",
//         "CLOSED",
//         "OPEN",
//         "REOPEN",
//         "APPROVED",
//         "REJECTED",
//       ][i % 7],
//       LastChkdBy: ["Inspector A", "Inspector B", "Inspector C"][i % 3],
//       OriginatedDate: `2025-09-${String(i + 1).padStart(2, "0")}`,
//       ServerOriginatedDate: `2025-09-${String(i + 2).padStart(2, "0")}`,
//       LastUpdated: `2025-09-${String(i + 3).padStart(2, "0")}`,
//       ServerLastUpdated: `2025-09-${String(i + 4).padStart(2, "0")}`,
//       Showin3D: i % 2 === 0 ? "Yes" : "No",
//       ReAssign: i % 2 === 0 ? "Allowed" : "Not Allowed",
//     }));
//   };

//   const allRows = selectedProject ? generateRows() : [];

//   // ✅ Search + Filters (dummy filters for now)
//   const filteredRows = allRows.filter((row) =>
//     Object.values(row).some((val) =>
//       String(val).toLowerCase().includes(searchQuery.toLowerCase())
//     )
//   );

//   // Pagination
//   const indexOfLast = currentPage * rowsPerPage;
//   const indexOfFirst = indexOfLast - rowsPerPage;
//   const currentRows = filteredRows.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

//   const statusColors = {
//     NEW: "bg-green-500 text-white",
//     COMPLETED: "bg-yellow-500 text-white",
//     CLOSED: "bg-red-500 text-white",
//     OPEN: "bg-blue-500 text-white",
//     REOPEN: "bg-orange-500 text-white",
//     APPROVED: "bg-pink-500 text-white",
//     REJECTED: "bg-gray-500 text-white",
//   };

//   return (
//     <div className="p-4 w-full space-y-4">
//       {/* Project Selection */}
//       <div className="flex flex-wrap gap-2 items-center">
//         <select
//           value={selectedProject}
//           onChange={(e) => {
//             setSelectedProject(e.target.value);
//             setShowTable(false);
//             setSearchQuery("");
//             setCurrentPage(1);
//           }}
//           className="border p-2 rounded shadow-sm"
//         >
//           <option value="">Select Project</option>
//           {projects.map((project, idx) => (
//             <option key={idx} value={project}>
//               {project}
//             </option>
//           ))}
//         </select>

//         <button
//           onClick={() => setShowTable(true)}
//           disabled={!selectedProject}
//           className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow disabled:bg-gray-400"
//         >
//           OK
//         </button>
//       </div>

//       {/* Filters (dummy for now) */}
//       {selectedProject && (
//         <div className="flex flex-wrap gap-3 bg-gray-50 p-3 rounded border">
//           {[
//             "Tower",
//             "Floor",
//             "Flat",
//             "Room",
//             "Unit",
//             "Further Unit",
//             "Type",
//             "Category",
//             "Status",
//           ].map((f) => (
//             <select key={f} className="border p-2 rounded text-sm">
//               <option>{f}</option>
//               <option>{f} 1</option>
//               <option>{f} 2</option>
//             </select>
//           ))}
//           <input type="date" className="border p-2 rounded text-sm" />
//           <input type="date" className="border p-2 rounded text-sm" />
//           <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow">
//             Apply Filters
//           </button>
//         </div>
//       )}

//       {/* Search */}
//       {showTable && (
//         <div className="flex justify-between items-center">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={(e) => {
//               setSearchQuery(e.target.value);
//               setCurrentPage(1); // reset to first page on search
//             }}
//             className="border p-2 rounded w-60"
//           />
//         </div>
//       )}

//       {/* Table */}
//       {showTable && (
//         <div className="w-[95vw] md:w-[85vw] lg:w-[80vw] overflow-x-auto border rounded">
//           <table className="min-w-max border-collapse border text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-2 py-2">ID</th>
//                 {columns.map((col, idx) => (
//                   <th
//                     key={idx}
//                     className="border px-2 py-2 whitespace-nowrap text-sm font-semibold text-gray-700"
//                   >
//                     {col}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {currentRows.length > 0 ? (
//                 currentRows.map((row) => (
//                   <tr key={row.id} className="hover:bg-gray-50">
//                     <td className="border px-2 py-2">{row.id}</td>
//                     {columns.map((col, idx) => {
//                       if (col === "Latest Status") {
//                         return (
//                           <td key={idx} className="border px-2 py-2">
//                             <span
//                               className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                                 statusColors[row.LatestStatus] ||
//                                 "bg-gray-400 text-white"
//                               }`}
//                             >
//                               {row.LatestStatus}
//                             </span>
//                           </td>
//                         );
//                       }
//                       const key = col.replace(/\s/g, "");
//                       return (
//                         <td
//                           key={idx}
//                           className="border px-2 py-2 whitespace-nowrap"
//                         >
//                           {row[key] || row[col] || "-"}
//                         </td>
//                       );
//                     })}
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan={columns.length + 1}
//                     className="text-center p-4 text-gray-500"
//                   >
//                     No records found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Pagination */}
//       {showTable && totalPages > 1 && (
//         <div className="flex justify-center gap-2 mt-4">
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//             disabled={currentPage === 1}
//             className="px-3 py-1 border rounded disabled:opacity-50"
//           >
//             Prev
//           </button>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1 border rounded ${
//                 currentPage === i + 1
//                   ? "bg-blue-500 text-white"
//                   : "bg-white hover:bg-gray-100"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//             disabled={currentPage === totalPages}
//             className="px-3 py-1 border rounded disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// ===========upper is god

// import React, { useState } from "react";

// export default function ReportTable() {
//   const [selectedProject, setSelectedProject] = useState("");
//   const [filters, setFilters] = useState({});
//   const [showTable, setShowTable] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const rowsPerPage = 10;

//   const projects = ["Project A", "Project B", "Project C"];

//   const columns = [
//     "View Detail",
//     "Tab Id",
//     "ChkList ID",
//     "Location",
//     "Category",
//     "Check List",
//     "Check Point",
//     "Observation",
//     "Severity",
//     "Rectifiable",
//     "Root Cause",
//     "Correction",
//     "Corrective Action",
//     "Latest Notes",
//     "Contractor",
//     "Latest Status",
//     "Last Chkd By",
//     "Originated Date",
//     "Server Originated Date",
//     "Last Updated",
//     "Server Last Updated",
//     "Showin3D",
//     "ReAssign",
//   ];

//   const generateRows = () => {
//     return Array.from({ length: 55 }, (_, i) => ({
//       id: i + 1,
//       ViewDetail: `View ${i + 1}`,
//       TabId: `T-${100 + i}`,
//       ChkListID: `CL-${200 + i}`,
//       Location: ["Tower A", "Tower B", "Tower C"][i % 3],
//       Category: ["Electrical", "Plumbing", "Civil"][i % 3],
//       CheckList: `Checklist ${i + 1}`,
//       CheckPoint: `Checkpoint ${i + 1}`,
//       Observation: `Observation ${i + 1}`,
//       Severity: ["Low", "Medium", "High"][i % 3],
//       Rectifiable: i % 2 === 0 ? "Yes" : "No",
//       RootCause: `Cause ${i + 1}`,
//       Correction: `Correction ${i + 1}`,
//       CorrectiveAction: `Action ${i + 1}`,
//       LatestNotes: `Note ${i + 1}`,
//       Contractor: ["L&T", "Tata", "Adani"][i % 3],
//       LatestStatus: [
//         "NEW",
//         "COMPLETED",
//         "CLOSED",
//         "OPEN",
//         "REOPEN",
//         "APPROVED",
//         "REJECTED",
//       ][i % 7],
//       LastChkdBy: ["Inspector A", "Inspector B", "Inspector C"][i % 3],
//       OriginatedDate: `2025-09-${String(i + 1).padStart(2, "0")}`,
//       ServerOriginatedDate: `2025-09-${String(i + 2).padStart(2, "0")}`,
//       LastUpdated: `2025-09-${String(i + 3).padStart(2, "0")}`,
//       ServerLastUpdated: `2025-09-${String(i + 4).padStart(2, "0")}`,
//       Showin3D: i % 2 === 0 ? "Yes" : "No",
//       ReAssign: i % 2 === 0 ? "Allowed" : "Not Allowed",
//     }));
//   };

//   const allRows = selectedProject ? generateRows() : [];

//   // ✅ Search + Filters (dummy for now)
//   const filteredRows = allRows.filter((row) =>
//     Object.values(row).some((val) =>
//       String(val).toLowerCase().includes(searchQuery.toLowerCase())
//     )
//   );

//   // Pagination
//   const indexOfLast = currentPage * rowsPerPage;
//   const indexOfFirst = indexOfLast - rowsPerPage;
//   const currentRows = filteredRows.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

// const statusColors = {
//   NEW: "bg-gradient-to-r from-green-400 to-green-600 text-white",
//   COMPLETED: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white",
//   CLOSED: "bg-gradient-to-r from-red-400 to-red-600 text-white",
//   OPEN: "bg-gradient-to-r from-blue-400 to-blue-600 text-white",
//   REOPEN: "bg-gradient-to-r from-orange-400 to-orange-600 text-white",
//   APPROVED: "bg-gradient-to-r from-pink-400 to-pink-600 text-white",
//   REJECTED: "bg-gradient-to-r from-gray-400 to-gray-600 text-white",
// };

//   return (
//     <div className="p-4 w-full space-y-4">
//       {/* Project Selection */}
//       <div className="flex flex-wrap gap-2 items-center">
//         <select
//           value={selectedProject}
//           onChange={(e) => {
//             setSelectedProject(e.target.value);
//             setShowTable(false);
//             setSearchQuery("");
//             setCurrentPage(1);
//           }}
//           className="border p-2 rounded shadow-sm"
//         >
//           <option value="">Select Project</option>
//           {projects.map((project, idx) => (
//             <option key={idx} value={project}>
//               {project}
//             </option>
//           ))}
//         </select>

//         <button
//           onClick={() => setShowTable(true)}
//           disabled={!selectedProject}
//           className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-5 py-2 rounded-lg shadow transition-all duration-200 disabled:from-gray-400 disabled:to-gray-500"
//         >
//           OK
//         </button>
//       </div>

//       {/* Filters (dummy for now) */}
//       {selectedProject && (
//         <div className="flex flex-wrap gap-3 bg-gray-50 p-3 rounded border shadow-sm">
//           {[
//             "Tower",
//             "Floor",
//             "Flat",
//             "Room",
//             "Unit",
//             "Further Unit",
//             "Type",
//             "Category",
//             "Status",
//           ].map((f) => (
//             <select key={f} className="border p-2 rounded text-sm">
//               <option>{f}</option>
//               <option>{f} 1</option>
//               <option>{f} 2</option>
//             </select>
//           ))}
//           <input type="date" className="border p-2 rounded text-sm" />
//           <input type="date" className="border p-2 rounded text-sm" />
//           <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-5 py-2 rounded-lg shadow transition-all duration-200">
//             Apply Filters
//           </button>
//         </div>
//       )}

//       {/* Search */}
//       {showTable && (
//         <div className="flex justify-between items-center">
//           <input
//             type="text"
//             placeholder="🔍 Search..."
//             value={searchQuery}
//             onChange={(e) => {
//               setSearchQuery(e.target.value);
//               setCurrentPage(1); // reset to first page on search
//             }}
//             className="border px-4 py-2 rounded-lg w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
//           />
//         </div>
//       )}

//       {/* Table */}
//       {showTable && (
//         <div className="w-[95vw] md:w-[85vw] lg:w-[80vw] overflow-x-auto border rounded shadow">
//           <table className="min-w-max border-collapse border text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-2 py-2">ID</th>
//                 {columns.map((col, idx) => (
//                   <th
//                     key={idx}
//                     className="border px-2 py-2 whitespace-nowrap text-sm font-semibold text-gray-700"
//                   >
//                     {col}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {currentRows.length > 0 ? (
//                 currentRows.map((row) => (
//                   <tr
//                     key={row.id}
//                     className="hover:bg-blue-50 transition-all duration-150"
//                   >
//                     <td className="border px-2 py-2">{row.id}</td>
//                     {columns.map((col, idx) => {
//                       if (col === "Latest Status") {
//                         return (
//                           <td key={idx} className="border px-2 py-2">
//                             <span
//                               className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                                 statusColors[row.LatestStatus] ||
//                                 "bg-gray-400 text-white"
//                               }`}
//                             >
//                               {row.LatestStatus}
//                             </span>
//                           </td>
//                         );
//                       }
//                       const key = col.replace(/\s/g, "");
//                       return (
//                         <td
//                           key={idx}
//                           className="border px-2 py-2 whitespace-nowrap"
//                         >
//                           {row[key] || row[col] || "-"}
//                         </td>
//                       );
//                     })}
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan={columns.length + 1}
//                     className="text-center p-4 text-gray-500"
//                   >
//                     No records found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Pagination */}
//       {showTable && totalPages > 1 && (
//         <div className="flex justify-center gap-2 mt-4">
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//             disabled={currentPage === 1}
//             className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
//           >
//             Prev
//           </button>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1 rounded-lg transition ${
//                 currentPage === i + 1
//                   ? "bg-blue-500 text-white shadow"
//                   : "bg-gray-100 hover:bg-gray-200"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//             disabled={currentPage === totalPages}
//             className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// uper is god level like a pro

// import React, { useState } from "react";

// export default function ReportTable() {
//   const [selectedProject, setSelectedProject] = useState("");
//   const [filters, setFilters] = useState({});
//   const [showTable, setShowTable] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

//   const rowsPerPage = 10;

//   const projects = ["Project A", "Project B", "Project C"];

//   const columns = [
//     "View Detail",
//     "Tab Id",
//     "ChkList ID",
//     "Location",
//     "Category",
//     "Check List",
//     "Check Point",
//     "Observation",
//     "Severity",
//     "Rectifiable",
//     "Root Cause",
//     "Correction",
//     "Corrective Action",
//     "Latest Notes",
//     "Contractor",
//     "Latest Status",
//     "Last Chkd By",
//     "Originated Date",
//     "Server Originated Date",
//     "Last Updated",
//     "Server Last Updated",
//     "Showin3D",
//     "ReAssign",
//   ];

//   const generateRows = () => {
//     return Array.from({ length: 55 }, (_, i) => ({
//       id: i + 1,
//       ViewDetail: `View ${i + 1}`,
//       TabId: `T-${100 + i}`,
//       ChkListID: `CL-${200 + i}`,
//       Location: ["Tower A", "Tower B", "Tower C"][i % 3],
//       Category: ["Electrical", "Plumbing", "Civil"][i % 3],
//       CheckList: `Checklist ${i + 1}`,
//       CheckPoint: `Checkpoint ${i + 1}`,
//       Observation: `Observation ${i + 1}`,
//       Severity: ["Low", "Medium", "High"][i % 3],
//       Rectifiable: i % 2 === 0 ? "Yes" : "No",
//       RootCause: `Cause ${i + 1}`,
//       Correction: `Correction ${i + 1}`,
//       CorrectiveAction: `Action ${i + 1}`,
//       LatestNotes: `Note ${i + 1}`,
//       Contractor: ["L&T", "Tata", "Adani"][i % 3],
//       LatestStatus: [
//         "NEW",
//         "COMPLETED",
//         "CLOSED",
//         "OPEN",
//         "REOPEN",
//         "APPROVED",
//         "REJECTED",
//       ][i % 7],
//       LastChkdBy: ["Inspector A", "Inspector B", "Inspector C"][i % 3],
//       OriginatedDate: `2025-09-${String(i + 1).padStart(2, "0")}`,
//       ServerOriginatedDate: `2025-09-${String(i + 2).padStart(2, "0")}`,
//       LastUpdated: `2025-09-${String(i + 3).padStart(2, "0")}`,
//       ServerLastUpdated: `2025-09-${String(i + 4).padStart(2, "0")}`,
//       Showin3D: i % 2 === 0 ? "Yes" : "No",
//       ReAssign: i % 2 === 0 ? "Allowed" : "Not Allowed",
//     }));
//   };

//   const allRows = selectedProject ? generateRows() : [];

//   // ✅ Search
//   let filteredRows = allRows.filter((row) =>
//     Object.values(row).some((val) =>
//       String(val).toLowerCase().includes(searchQuery.toLowerCase())
//     )
//   );

//   // ✅ Sorting
//   if (sortConfig.key) {
//     filteredRows = [...filteredRows].sort((a, b) => {
//       const aVal = a[sortConfig.key] || "";
//       const bVal = b[sortConfig.key] || "";
//       if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
//       if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
//       return 0;
//     });
//   }

//   // ✅ Pagination
//   const indexOfLast = currentPage * rowsPerPage;
//   const indexOfFirst = indexOfLast - rowsPerPage;
//   const currentRows = filteredRows.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

//   const statusColors = {
//     NEW: "bg-green-500 text-white",
//     COMPLETED: "bg-yellow-500 text-white",
//     CLOSED: "bg-red-500 text-white",
//     OPEN: "bg-blue-500 text-white",
//     REOPEN: "bg-orange-500 text-white",
//     APPROVED: "bg-pink-500 text-white",
//     REJECTED: "bg-gray-500 text-white",
//   };

//   const handleSort = (col) => {
//     const key = col.replace(/\s/g, "");
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });
//   };

//   const getSortIcon = (col) => {
//     const key = col.replace(/\s/g, "");
//     if (sortConfig.key === key) {
//       return sortConfig.direction === "asc" ? "▲" : "▼";
//     }
//     return "⇅";
//   };

//   return (
//     <div className="p-4 w-full space-y-4">
//       {/* Project Selection */}
//       <div className="flex flex-wrap gap-2 items-center">
//         <select
//           value={selectedProject}
//           onChange={(e) => {
//             setSelectedProject(e.target.value);
//             setShowTable(false);
//             setSearchQuery("");
//             setCurrentPage(1);
//           }}
//           className="border p-2 rounded shadow-sm"
//         >
//           <option value="">Select Project</option>
//           {projects.map((project, idx) => (
//             <option key={idx} value={project}>
//               {project}
//             </option>
//           ))}
//         </select>

//         <button
//           onClick={() => setShowTable(true)}
//           disabled={!selectedProject}
//           className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-5 py-2 rounded-lg shadow transition-all duration-200 disabled:from-gray-400 disabled:to-gray-500"
//         >
//           OK
//         </button>
//       </div>

//       {/* Search */}
//       {showTable && (
//         <div className="flex justify-between items-center">
//           <input
//             type="text"
//             placeholder="🔍 Search..."
//             value={searchQuery}
//             onChange={(e) => {
//               setSearchQuery(e.target.value);
//               setCurrentPage(1);
//             }}
//             className="border px-4 py-2 rounded-lg w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
//           />
//         </div>
//       )}

//       {/* Table */}
//       {showTable && (
//         <div className="w-[95vw] md:w-[85vw] lg:w-[80vw] overflow-x-auto border rounded shadow">
//           <table className="min-w-max border-collapse border text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th
//                   onClick={() => handleSort("id")}
//                   className="border px-2 py-2 cursor-pointer hover:bg-gray-200"
//                 >
//                   ID {getSortIcon("id")}
//                 </th>
//                 {columns.map((col, idx) => (
//                   <th
//                     key={idx}
//                     onClick={() => handleSort(col)}
//                     className="border px-2 py-2 whitespace-nowrap text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200"
//                   >
//                     {col} {getSortIcon(col)}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {currentRows.length > 0 ? (
//                 currentRows.map((row) => (
//                   <tr
//                     key={row.id}
//                     className="hover:bg-blue-50 transition-all duration-150"
//                   >
//                     <td className="border px-2 py-2">{row.id}</td>
//                     {columns.map((col, idx) => {
//                       if (col === "Latest Status") {
//                         return (
//                           <td key={idx} className="border px-2 py-2">
//                             <span
//                               className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                                 statusColors[row.LatestStatus] ||
//                                 "bg-gray-400 text-white"
//                               }`}
//                             >
//                               {row.LatestStatus}
//                             </span>
//                           </td>
//                         );
//                       }
//                       const key = col.replace(/\s/g, "");
//                       return (
//                         <td
//                           key={idx}
//                           className="border px-2 py-2 whitespace-nowrap"
//                         >
//                           {row[key] || row[col] || "-"}
//                         </td>
//                       );
//                     })}
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan={columns.length + 1}
//                     className="text-center p-4 text-gray-500"
//                   >
//                     No records found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Pagination */}
//       {showTable && totalPages > 1 && (
//         <div className="flex justify-center gap-2 mt-4">
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//             disabled={currentPage === 1}
//             className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
//           >
//             Prev
//           </button>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1 rounded-lg transition ${
//                 currentPage === i + 1
//                   ? "bg-blue-500 text-white shadow"
//                   : "bg-gray-100 hover:bg-gray-200"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//             disabled={currentPage === totalPages}
//             className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// ===uper se uper god level ye uper wala with no filters

// import React, { useState } from "react";

// export default function ReportTable() {
//   const [selectedProject, setSelectedProject] = useState("");
//   const [showFilters, setShowFilters] = useState(false); // NEW: toggle filters
//   const [filters, setFilters] = useState({});
//   const [showTable, setShowTable] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

//   const rowsPerPage = 15;

//   const projects = ["Project A", "Project B", "Project C"];

//   const columns = [
//     "View Detail",
//     "Tab Id",
//     "ChkList ID",
//     "Location",
//     "Category",
//     "Check List",
//     "Check Point",
//     "Observation",
//     "Severity",
//     "Rectifiable",
//     "Root Cause",
//     "Correction",
//     "Corrective Action",
//     "Latest Notes",
//     "Contractor",
//     "Latest Status",
//     "Last Chkd By",
//     "Originated Date",
//     "Server Originated Date",
//     "Last Updated",
//     "Server Last Updated",
//     "Showin3D",
//     "ReAssign",
//   ];

//   const generateRows = () => {
//     return Array.from({ length: 55 }, (_, i) => ({
//       id: i + 1,
//       ViewDetail: `View ${i + 1}`,
//       TabId: `T-${100 + i}`,
//       ChkListID: `CL-${200 + i}`,
//       Location: ["Tower A", "Tower B", "Tower C"][i % 3],
//       Category: ["Electrical", "Plumbing", "Civil"][i % 3],
//       CheckList: `Checklist ${i + 1}`,
//       CheckPoint: `Checkpoint ${i + 1}`,
//       Observation: `Observation ${i + 1}`,
//       Severity: ["Low", "Medium", "High"][i % 3],
//       Rectifiable: i % 2 === 0 ? "Yes" : "No",
//       RootCause: `Cause ${i + 1}`,
//       Correction: `Correction ${i + 1}`,
//       CorrectiveAction: `Action ${i + 1}`,
//       LatestNotes: `Note ${i + 1}`,
//       Contractor: ["L&T", "Tata", "Adani"][i % 3],
//       LatestStatus: [
//         "NEW",
//         "COMPLETED",
//         "CLOSED",
//         "OPEN",
//         "REOPEN",
//         "APPROVED",
//         "REJECTED",
//       ][i % 7],
//       LastChkdBy: ["Inspector A", "Inspector B", "Inspector C"][i % 3],
//       OriginatedDate: `2025-09-${String(i + 1).padStart(2, "0")}`,
//       ServerOriginatedDate: `2025-09-${String(i + 2).padStart(2, "0")}`,
//       LastUpdated: `2025-09-${String(i + 3).padStart(2, "0")}`,
//       ServerLastUpdated: `2025-09-${String(i + 4).padStart(2, "0")}`,
//       Showin3D: i % 2 === 0 ? "Yes" : "No",
//       ReAssign: i % 2 === 0 ? "Allowed" : "Not Allowed",
//     }));
//   };

//   const allRows = selectedProject ? generateRows() : [];

//   // Search + Filters (filters are dummy; ready for wiring)
//   // let filteredRows = allRows.filter((row) =>
//   //   Object.values(row).some((val) =>
//   //     String(val).toLowerCase().includes(searchQuery.toLowerCase())
//   //   )
//   // );

//   // Search + Filters (filters are dummy; ready for wiring)
//   let filteredRows = allRows.filter((row) => {
//     const query = searchQuery.toLowerCase().trim();

//     // Check if query contains a space -> treat as "TabId ChkListID" search
//     if (query.includes(" ")) {
//       const [tabPart, chkPart] = query.split(" ");
//       if (
//         row.TabId.toLowerCase().includes(tabPart) &&
//         row.ChkListID.toLowerCase().includes(chkPart)
//       ) {
//         return true;
//       }
//     }

//     // Otherwise do global search like before
//     return Object.values(row).some((val) =>
//       String(val).toLowerCase().includes(query)
//     );
//   });

//   // Sorting
//   if (sortConfig.key) {
//     filteredRows = [...filteredRows].sort((a, b) => {
//       const aVal = a[sortConfig.key] ?? "";
//       const bVal = b[sortConfig.key] ?? "";
//       // compare as strings (works for dates in YYYY-MM-DD format too)
//       if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
//       if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
//       return 0;
//     });
//   }

//   // Pagination
//   const indexOfLast = currentPage * rowsPerPage;
//   const indexOfFirst = indexOfLast - rowsPerPage;
//   const currentRows = filteredRows.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.max(1, Math.ceil(filteredRows.length / rowsPerPage));

//   const statusColors = {
//     NEW: "bg-gradient-to-r from-green-400 to-green-600 text-white",
//     COMPLETED: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white",
//     CLOSED: "bg-gradient-to-r from-red-400 to-red-600 text-white",
//     OPEN: "bg-gradient-to-r from-blue-400 to-blue-600 text-white",
//     REOPEN: "bg-gradient-to-r from-orange-400 to-orange-600 text-white",
//     APPROVED: "bg-gradient-to-r from-pink-400 to-pink-600 text-white",
//     REJECTED: "bg-gradient-to-r from-gray-400 to-gray-600 text-white",
//   };

//   const handleSort = (col) => {
//     const key = col.replace(/\s/g, "");
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });
//     setCurrentPage(1);
//   };

//   const getSortIcon = (col) => {
//     const key = col.replace(/\s/g, "");
//     if (sortConfig.key === key) {
//       return sortConfig.direction === "asc" ? "▲" : "▼";
//     }
//     return "⇅";
//   };

//   // toggle filters panel
//   const toggleFilters = () => setShowFilters((s) => !s);

//   return (
//     <div className="p-4 w-full space-y-4">
//       {/* Top row: project select, OK and Filters toggle */}
//       <div className="flex flex-wrap gap-2 items-center">
//         <select
//           value={selectedProject}
//           onChange={(e) => {
//             setSelectedProject(e.target.value);
//             setShowTable(false);
//             setSearchQuery("");
//             setCurrentPage(1);
//           }}
//           className="border p-2 rounded shadow-sm"
//         >
//           <option value="">Select Project</option>
//           {projects.map((project, idx) => (
//             <option key={idx} value={project}>
//               {project}
//             </option>
//           ))}
//         </select>

//         <button
//           onClick={() => setShowTable(true)}
//           disabled={!selectedProject}
//           className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-5 py-2 rounded-lg shadow transition-all duration-200 disabled:from-gray-400 disabled:to-gray-500"
//         >
//           OK
//         </button>

//         {/* FILTERS TOGGLE BUTTON */}
//         <button
//           onClick={toggleFilters}
//           disabled={!selectedProject}
//           aria-expanded={showFilters}
//           className="ml-2 flex items-center gap-2 bg-white border rounded px-3 py-2 shadow-sm hover:shadow-md transition"
//         >
//           <svg
//             className={`w-4 h-4 transform transition-transform ${
//               showFilters ? "rotate-180" : ""
//             }`}
//             viewBox="0 0 24 24"
//             fill="none"
//           >
//             <path
//               d="M4 6h16M7 12h10M10 18h4"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           <span className="text-sm font-medium">Filters</span>
//         </button>
//       </div>

//       {/* COLLAPSIBLE FILTERS PANEL */}
//       {/* We use max-h + overflow-hidden to animate. Filters are dummy selects for now. */}
//       <div
//         className={`overflow-hidden transition-[max-height,_opacity] duration-300 ${
//           showFilters ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//         aria-hidden={!showFilters}
//       >
//         {selectedProject && (
//           <div className="mt-3 flex flex-wrap gap-3 bg-gray-50 p-3 rounded border shadow-sm">
//             {[
//               "Tower",
//               "Floor",
//               "Flat",
//               "Room",
//               "Unit",
//               "Further Unit",
//               "Type",
//               "Category",
//               "Status",
//             ].map((f) => (
//               <select key={f} className="border p-2 rounded text-sm">
//                 <option>{f}</option>
//                 <option>{f} 1</option>
//                 <option>{f} 2</option>
//               </select>
//             ))}
//             <input type="date" className="border p-2 rounded text-sm" />
//             <input type="date" className="border p-2 rounded text-sm" />
//             <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-5 py-2 rounded-lg shadow transition-all duration-200">
//               Apply Filters
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Search */}
//       {showTable && (
//         <div className="flex justify-between items-center">
//           <input
//             type="text"
//             placeholder="🔍 Search..."
//             value={searchQuery}
//             onChange={(e) => {
//               setSearchQuery(e.target.value);
//               setCurrentPage(1); // reset to first page on search
//             }}
//             className="border px-4 py-2 rounded-lg w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
//           />
//         </div>
//       )}

//       {/* Table */}
//       {showTable && (
//         <div className="w-[95vw] md:w-[85vw] lg:w-[80vw] overflow-x-auto border rounded shadow">
//           <table className="min-w-max border-collapse border text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th
//                   onClick={() => handleSort("id")}
//                   className="border px-2 py-2 cursor-pointer hover:bg-gray-200 select-none"
//                 >
//                   ID {getSortIcon("id")}
//                 </th>
//                 {columns.map((col, idx) => (
//                   <th
//                     key={idx}
//                     onClick={() => handleSort(col)}
//                     className="border px-2 py-2 whitespace-nowrap text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 select-none"
//                   >
//                     {col}{" "}
//                     <span className="text-xs ml-1">{getSortIcon(col)}</span>
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {currentRows.length > 0 ? (
//                 currentRows.map((row) => (
//                   <tr
//                     key={row.id}
//                     className="hover:bg-blue-50 transition-all duration-150"
//                   >
//                     <td className="border px-2 py-2">{row.id}</td>
//                     {columns.map((col, idx) => {
//                       if (col === "Latest Status") {
//                         return (
//                           <td key={idx} className="border px-2 py-2">
//                             <span
//                               className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                                 statusColors[row.LatestStatus] ||
//                                 "bg-gray-400 text-white"
//                               }`}
//                             >
//                               {row.LatestStatus}
//                             </span>
//                           </td>
//                         );
//                       }
//                       const key = col.replace(/\s/g, "");
//                       return (
//                         <td
//                           key={idx}
//                           className="border px-2 py-2 whitespace-nowrap"
//                         >
//                           {row[key] || row[col] || "-"}
//                         </td>
//                       );
//                     })}
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan={columns.length + 1}
//                     className="text-center p-4 text-gray-500"
//                   >
//                     No records found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Pagination */}
//       {showTable && totalPages > 1 && (
//         <div className="flex justify-center gap-2 mt-4">
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//             disabled={currentPage === 1}
//             className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
//           >
//             Prev
//           </button>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1 rounded-lg transition ${
//                 currentPage === i + 1
//                   ? "bg-blue-500 text-white shadow"
//                   : "bg-gray-100 hover:bg-gray-200"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//             disabled={currentPage === totalPages}
//             className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// -----------upper code is on extream level--------------

// import React, { useState } from "react";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// export default function ReportTable() {
//   const [selectedProject, setSelectedProject] = useState("");
//   const [showFilters, setShowFilters] = useState(false);
//   const [filters, setFilters] = useState({});
//   const [showTable, setShowTable] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

//   const rowsPerPage = 15;
//   const projects = ["Project A", "Project B", "Project C"];
//   const columns = [
//     "View Detail",
//     "Tab Id",
//     "ChkList ID",
//     "Location",
//     "Category",
//     "Check List",
//     "Check Point",
//     "Observation",
//     "Severity",
//     "Rectifiable",
//     "Root Cause",
//     "Correction",
//     "Corrective Action",
//     "Latest Notes",
//     "Contractor",
//     "Latest Status",
//     "Last Chkd By",
//     "Originated Date",
//     "Server Originated Date",
//     "Last Updated",
//     "Server Last Updated",
//     "Showin3D",
//     "ReAssign",
//   ];

//   const generateRows = () =>
//     Array.from({ length: 55 }, (_, i) => ({
//       id: i + 1,
//       ViewDetail: `View ${i + 1}`,
//       TabId: `T-${100 + i}`,
//       ChkListID: `CL-${200 + i}`,
//       Location: ["Tower A", "Tower B", "Tower C"][i % 3],
//       Category: ["Electrical", "Plumbing", "Civil"][i % 3],
//       CheckList: `Checklist ${i + 1}`,
//       CheckPoint: `Checkpoint ${i + 1}`,
//       Observation: `Observation ${i + 1}`,
//       Severity: ["Low", "Medium", "High"][i % 3],
//       Rectifiable: i % 2 === 0 ? "Yes" : "No",
//       RootCause: `Cause ${i + 1}`,
//       Correction: `Correction ${i + 1}`,
//       CorrectiveAction: `Action ${i + 1}`,
//       LatestNotes: `Note ${i + 1}`,
//       Contractor: ["L&T", "Tata", "Adani"][i % 3],
//       LatestStatus: [
//         "NEW",
//         "COMPLETED",
//         "CLOSED",
//         "OPEN",
//         "REOPEN",
//         "APPROVED",
//         "REJECTED",
//       ][i % 7],
//       LastChkdBy: ["Inspector A", "Inspector B", "Inspector C"][i % 3],
//       OriginatedDate: `2025-09-${String(i + 1).padStart(2, "0")}`,
//       ServerOriginatedDate: `2025-09-${String(i + 2).padStart(2, "0")}`,
//       LastUpdated: `2025-09-${String(i + 3).padStart(2, "0")}`,
//       ServerLastUpdated: `2025-09-${String(i + 4).padStart(2, "0")}`,
//       Showin3D: i % 2 === 0 ? "Yes" : "No",
//       ReAssign: i % 2 === 0 ? "Allowed" : "Not Allowed",
//     }));

//   const allRows = selectedProject ? generateRows() : [];

//   // Search + Filters (including TabId + ChkListID combination)
//   // let filteredRows = allRows.filter((row) => {
//   //   const query = searchQuery.toLowerCase();
//   //   return (
//   //     Object.values(row).some((val) =>
//   //       String(val).toLowerCase().includes(query)
//   //     ) || `${row.TabId}${row.ChkListID}`.toLowerCase().includes(query)
//   //   );
//   // });

//   // Inside filteredRows
//   let filteredRows = allRows.filter((row) => {
//     const query = searchQuery.toLowerCase().trim();

//     // Normal search on all values
//     const normalSearch = Object.values(row).some((val) =>
//       String(val).toLowerCase().includes(query)
//     );

//     // TabId + ChkListID combination search (with optional separator)
//     const combination = `${row.TabId} ${row.ChkListID}`.toLowerCase();
//     const combinationDash = `${row.TabId}-${row.ChkListID}`.toLowerCase();

//     return (
//       normalSearch ||
//       combination.includes(query) ||
//       combinationDash.includes(query)
//     );
//   });

//   // Sorting
//   if (sortConfig.key) {
//     filteredRows = [...filteredRows].sort((a, b) => {
//       const aVal = a[sortConfig.key] ?? "";
//       const bVal = b[sortConfig.key] ?? "";
//       if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
//       if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
//       return 0;
//     });
//   }

//   // Pagination
//   const indexOfLast = currentPage * rowsPerPage;
//   const indexOfFirst = indexOfLast - rowsPerPage;
//   const currentRows = filteredRows.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.max(1, Math.ceil(filteredRows.length / rowsPerPage));

//   const statusColors = {
//     NEW: "bg-gradient-to-r from-green-400 to-green-600 text-white",
//     COMPLETED: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white",
//     CLOSED: "bg-gradient-to-r from-red-400 to-red-600 text-white",
//     OPEN: "bg-gradient-to-r from-blue-400 to-blue-600 text-white",
//     REOPEN: "bg-gradient-to-r from-orange-400 to-orange-600 text-white",
//     APPROVED: "bg-gradient-to-r from-pink-400 to-pink-600 text-white",
//     REJECTED: "bg-gradient-to-r from-gray-400 to-gray-600 text-white",
//   };

//   const handleSort = (col) => {
//     const key = col.replace(/\s/g, "");
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc")
//       direction = "desc";
//     setSortConfig({ key, direction });
//     setCurrentPage(1);
//   };

//   const getSortIcon = (col) => {
//     const key = col.replace(/\s/g, "");
//     if (sortConfig.key === key)
//       return sortConfig.direction === "asc" ? "▲" : "▼";
//     return "⇅";
//   };

//   const toggleFilters = () => setShowFilters((s) => !s);

//   const exportToExcel = () => {
//     const dataToExport = filteredRows.map((row) => {
//       const exportRow = {};
//       columns.forEach((col) => {
//         const key = col.replace(/\s/g, "");
//         exportRow[col] = row[key] || row[col] || "-";
//       });
//       return exportRow;
//     });

//     const worksheet = XLSX.utils.json_to_sheet(dataToExport);
//     worksheet["!cols"] = columns.map((col) => ({
//       wch:
//         Math.max(col.length, ...dataToExport.map((r) => r[col]?.length || 0)) +
//         2,
//     }));

//     // Color Latest Status
//     dataToExport.forEach((row, idx) => {
//       const rowIndex = idx + 2;
//       const status = row["Latest Status"];
//       if (!status) return;
//       let color;
//       switch (status) {
//         case "NEW":
//           color = "FF38A169";
//           break;
//         case "COMPLETED":
//           color = "FFECC94B";
//           break;
//         case "CLOSED":
//           color = "FFEF4444";
//           break;
//         case "OPEN":
//           color = "FF3B82F6";
//           break;
//         case "REOPEN":
//           color = "FFF97316";
//           break;
//         case "APPROVED":
//           color = "FFEC4899";
//           break;
//         case "REJECTED":
//           color = "FF6B7280";
//           break;
//         default:
//           color = "FFFFFFFF";
//           break;
//       }
//       const colIndex = columns.indexOf("Latest Status");
//       const cellRef = XLSX.utils.encode_cell({ r: rowIndex - 1, c: colIndex });
//       if (!worksheet[cellRef]) return;
//       worksheet[cellRef].s = {
//         fill: { fgColor: { rgb: color } },
//         font: { bold: true },
//       };
//     });

//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
//     const excelBuffer = XLSX.write(workbook, {
//       bookType: "xlsx",
//       type: "array",
//       cellStyles: true,
//     });
//     const data = new Blob([excelBuffer], { type: "application/octet-stream" });
//     saveAs(data, `${selectedProject || "Report"}_Export.xlsx`);
//   };

//   return (
//     <div className="p-4 w-full space-y-4">
//       <div className="flex flex-wrap gap-2 items-center">
//         <select
//           value={selectedProject}
//           onChange={(e) => {
//             setSelectedProject(e.target.value);
//             setShowTable(false);
//             setSearchQuery("");
//             setCurrentPage(1);
//           }}
//           className="border p-2 rounded shadow-sm"
//         >
//           <option value="">Select Project</option>
//           {projects.map((project, idx) => (
//             <option key={idx} value={project}>
//               {project}
//             </option>
//           ))}
//         </select>

//         <button
//           onClick={() => setShowTable(true)}
//           disabled={!selectedProject}
//           className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-5 py-2 rounded-lg shadow transition-all duration-200 disabled:from-gray-400 disabled:to-gray-500"
//         >
//           OK
//         </button>

//         <button
//           onClick={toggleFilters}
//           disabled={!selectedProject}
//           aria-expanded={showFilters}
//           className="ml-2 flex items-center gap-2 bg-white border rounded px-3 py-2 shadow-sm hover:shadow-md transition"
//         >
//           <svg
//             className={`w-4 h-4 transform transition-transform ${
//               showFilters ? "rotate-180" : ""
//             }`}
//             viewBox="0 0 24 24"
//             fill="none"
//           >
//             <path
//               d="M4 6h16M7 12h10M10 18h4"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           <span className="text-sm font-medium">Filters</span>
//         </button>

//         <button
//           onClick={exportToExcel}
//           disabled={!showTable || filteredRows.length === 0}
//           className="ml-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow transition-all duration-200 disabled:opacity-50"
//         >
//           Export to Excel
//         </button>
//       </div>

//       <div
//         className={`overflow-hidden transition-[max-height,_opacity] duration-300 ${
//           showFilters ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//         aria-hidden={!showFilters}
//       >
//         {selectedProject && (
//           <div className="mt-3 flex flex-wrap gap-3 bg-gray-50 p-3 rounded border shadow-sm">
//             {[
//               "Tower",
//               "Floor",
//               "Flat",
//               "Room",
//               "Unit",
//               "Further Unit",
//               "Type",
//               "Category",
//               "Status",
//             ].map((f) => (
//               <select key={f} className="border p-2 rounded text-sm">
//                 <option>{f}</option>
//                 <option>{f} 1</option>
//                 <option>{f} 2</option>
//               </select>
//             ))}
//             <input type="date" className="border p-2 rounded text-sm" />
//             <input type="date" className="border p-2 rounded text-sm" />
//             <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-5 py-2 rounded-lg shadow transition-all duration-200">
//               Apply Filters
//             </button>
//           </div>
//         )}
//       </div>

//       {showTable && (
//         <div className="flex justify-between items-center">
//           <input
//             type="text"
//             placeholder="🔍 Search..."
//             value={searchQuery}
//             onChange={(e) => {
//               setSearchQuery(e.target.value);
//               setCurrentPage(1);
//             }}
//             className="border px-4 py-2 rounded-lg w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
//           />
//         </div>
//       )}

//       {showTable && (
//         <div className="w-[95vw] md:w-[85vw] lg:w-[80vw] overflow-x-auto border rounded shadow">
//           <table className="min-w-max border-collapse border text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th
//                   onClick={() => handleSort("id")}
//                   className="border px-2 py-2 cursor-pointer hover:bg-gray-200 select-none"
//                 >
//                   ID {getSortIcon("id")}
//                 </th>
//                 {columns.map((col, idx) => (
//                   <th
//                     key={idx}
//                     onClick={() => handleSort(col)}
//                     className="border px-2 py-2 whitespace-nowrap text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 select-none"
//                   >
//                     {col}{" "}
//                     <span className="text-xs ml-1">{getSortIcon(col)}</span>
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {currentRows.length > 0 ? (
//                 currentRows.map((row) => (
//                   <tr
//                     key={row.id}
//                     className="hover:bg-blue-50 transition-all duration-150"
//                   >
//                     <td className="border px-2 py-2">{row.id}</td>
//                     {columns.map((col, idx) => {
//                       if (col === "Latest Status")
//                         return (
//                           <td key={idx} className="border px-2 py-2">
//                             <span
//                               className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                                 statusColors[row.LatestStatus] ||
//                                 "bg-gray-400 text-white"
//                               }`}
//                             >
//                               {row.LatestStatus}
//                             </span>
//                           </td>
//                         );
//                       const key = col.replace(/\s/g, "");
//                       return (
//                         <td
//                           key={idx}
//                           className="border px-2 py-2 whitespace-nowrap"
//                         >
//                           {row[key] || row[col] || "-"}
//                         </td>
//                       );
//                     })}
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan={columns.length + 1}
//                     className="text-center p-4 text-gray-500"
//                   >
//                     No records found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {showTable && totalPages > 1 && (
//         <div className="flex justify-center gap-2 mt-4">
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//             disabled={currentPage === 1}
//             className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
//           >
//             Prev
//           </button>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1 rounded-lg transition ${
//                 currentPage === i + 1
//                   ? "bg-blue-500 text-white shadow"
//                   : "bg-gray-100 hover:bg-gray-200"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//             disabled={currentPage === totalPages}
//             className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// ===========upper is 10

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// export default function ReportTable() {
//   const [selectedProject, setSelectedProject] = useState("");
//   const [showFilters, setShowFilters] = useState(false);
//   const [filters, setFilters] = useState({});
//   const [showTable, setShowTable] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
//   const [reportData, setReportData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const rowsPerPage = 15;
//   const projects = ["Project A", "Project B", "Project C"];
//   const columns = [
//     "View Detail",
//     "Tab Id",
//     "ChkList ID",
//     "Location",
//     "Category",
//     "Check List",
//     "Check Point",
//     "Observation",
//     "Severity",
//     "Rectifiable",
//     "Root Cause",
//     "Correction",
//     "Corrective Action",
//     "Latest Notes",
//     "Contractor",
//     "Latest Status",
//     "Last Chkd By",
//     "Originated Date",
//     "Server Originated Date",
//     "Last Updated",
//     "Server Last Updated",
//     "Showin3D",
//     "ReAssign",
//   ];

//   // Fetch API data
//   useEffect(() => {
//     if (!selectedProject) return;

//     setLoading(true);
//     axios
//       .get("http://localhost:5000/nc-reports")
//       .then((res) => {
//         // Map API data to table keys
//         const mappedData = res.data.map((row, index) => ({
//           id: index + 1,
//           TabId: row.tab_id,
//           ChkListID: row.chklist_id,
//           Location: row.location,
//           Category: row.category,
//           CheckList: row.check_list,
//           CheckPoint: row.check_point,
//           Observation: row.observation,
//           Severity: row.severity,
//           Rectifiable: row.rectifiable === "Y" ? "Yes" : "No",
//           RootCause: row.root_cause,
//           Correction: row.correction,
//           CorrectiveAction: row.corrective_action,
//           LatestNotes: row.latest_notes,
//           Contractor: row.contractor,
//           LatestStatus: row.latest_status,
//           LastChkdBy: row.last_chkd_by,
//           OriginatedDate: row.originated_date,
//           ServerOriginatedDate: row.server_originated_date,
//           LastUpdated: row.last_updated,
//           ServerLastUpdated: row.server_last_updated,
//           Showin3D: row.show_in_3d || "No",
//           ReAssign: row.re_assign || "Not Allowed",
//         }));
//         setReportData(mappedData);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Failed to fetch report data:", err);
//         setLoading(false);
//       });
//   }, [selectedProject]);

//   // Filter rows
//   let filteredRows = reportData.filter((row) => {
//     const query = searchQuery.toLowerCase().trim();
//     const normalSearch = Object.values(row).some((val) =>
//       String(val).toLowerCase().includes(query)
//     );
//     const combination = `${row.TabId} ${row.ChkListID}`.toLowerCase();
//     const combinationDash = `${row.TabId}-${row.ChkListID}`.toLowerCase();
//     return (
//       normalSearch ||
//       combination.includes(query) ||
//       combinationDash.includes(query)
//     );
//   });

//   // Sorting
//   if (sortConfig.key) {
//     filteredRows = [...filteredRows].sort((a, b) => {
//       const aVal = a[sortConfig.key] ?? "";
//       const bVal = b[sortConfig.key] ?? "";
//       if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
//       if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
//       return 0;
//     });
//   }

//   // Pagination
//   const indexOfLast = currentPage * rowsPerPage;
//   const indexOfFirst = indexOfLast - rowsPerPage;
//   const currentRows = filteredRows.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.max(1, Math.ceil(filteredRows.length / rowsPerPage));

//   const statusColors = {
//     NEW: "bg-gradient-to-r from-green-400 to-green-600 text-white",
//     COMPLETED: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white",
//     CLOSED: "bg-gradient-to-r from-red-400 to-red-600 text-white",
//     OPEN: "bg-gradient-to-r from-blue-400 to-blue-600 text-white",
//     REOPEN: "bg-gradient-to-r from-orange-400 to-orange-600 text-white",
//     APPROVED: "bg-gradient-to-r from-pink-400 to-pink-600 text-white",
//     REJECTED: "bg-gradient-to-r from-gray-400 to-gray-600 text-white",
//   };

//   const handleSort = (col) => {
//     const key = col.replace(/\s/g, "");
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc")
//       direction = "desc";
//     setSortConfig({ key, direction });
//     setCurrentPage(1);
//   };

//   const getSortIcon = (col) => {
//     const key = col.replace(/\s/g, "");
//     if (sortConfig.key === key)
//       return sortConfig.direction === "asc" ? "▲" : "▼";
//     return "⇅";
//   };

//   const toggleFilters = () => setShowFilters((s) => !s);

//   const exportToExcel = () => {
//     const dataToExport = filteredRows.map((row) => {
//       const exportRow = {};
//       columns.forEach((col) => {
//         const key = col.replace(/\s/g, "");
//         exportRow[col] = row[key] || row[col] || "-";
//       });
//       return exportRow;
//     });
//     const worksheet = XLSX.utils.json_to_sheet(dataToExport);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
//     const excelBuffer = XLSX.write(workbook, {
//       bookType: "xlsx",
//       type: "array",
//     });
//     const data = new Blob([excelBuffer], { type: "application/octet-stream" });
//     saveAs(data, `${selectedProject || "Report"}_Export.xlsx`);
//   };

//   return (
//     <div className="p-4 w-full space-y-4">
//       <div className="flex flex-wrap gap-2 items-center">
//         <select
//           value={selectedProject}
//           onChange={(e) => {
//             setSelectedProject(e.target.value);
//             setShowTable(false);
//             setSearchQuery("");
//             setCurrentPage(1);
//           }}
//           className="border p-2 rounded shadow-sm"
//         >
//           <option value="">Select Project</option>
//           {projects.map((project, idx) => (
//             <option key={idx} value={project}>
//               {project}
//             </option>
//           ))}
//         </select>

//         <button
//           onClick={() => setShowTable(true)}
//           disabled={!selectedProject}
//           className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-5 py-2 rounded-lg shadow transition-all duration-200 disabled:from-gray-400 disabled:to-gray-500"
//         >
//           OK
//         </button>

//         <button
//           onClick={toggleFilters}
//           disabled={!selectedProject}
//           aria-expanded={showFilters}
//           className="ml-2 flex items-center gap-2 bg-white border rounded px-3 py-2 shadow-sm hover:shadow-md transition"
//         >
//           Filters
//         </button>

//         <button
//           onClick={exportToExcel}
//           disabled={!showTable || filteredRows.length === 0}
//           className="ml-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow transition-all duration-200 disabled:opacity-50"
//         >
//           Export to Excel
//         </button>
//       </div>

//       {showTable && (
//         <div className="w-[95vw] md:w-[85vw] lg:w-[80vw] overflow-x-auto border rounded shadow">
//           <table className="min-w-max border-collapse border text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th
//                   onClick={() => handleSort("id")}
//                   className="border px-2 py-2 cursor-pointer"
//                 >
//                   ID {getSortIcon("id")}
//                 </th>
//                 {columns.map((col, idx) => (
//                   <th
//                     key={idx}
//                     onClick={() => handleSort(col)}
//                     className="border px-2 py-2 cursor-pointer"
//                   >
//                     {col} {getSortIcon(col)}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 <tr>
//                   <td colSpan={columns.length + 1} className="text-center p-4">
//                     Loading...
//                   </td>
//                 </tr>
//               ) : currentRows.length > 0 ? (
//                 currentRows.map((row) => (
//                   <tr
//                     key={row.id}
//                     className="hover:bg-blue-50 transition-all duration-150"
//                   >
//                     <td className="border px-2 py-2">{row.id}</td>
//                     {columns.map((col, idx) => {
//                       if (col === "Latest Status")
//                         return (
//                           <td key={idx} className="border px-2 py-2">
//                             <span
//                               className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                                 statusColors[row.LatestStatus] ||
//                                 "bg-gray-400 text-white"
//                               }`}
//                             >
//                               {row.LatestStatus}
//                             </span>
//                           </td>
//                         );
//                       const key = col.replace(/\s/g, "");
//                       return (
//                         <td
//                           key={idx}
//                           className="border px-2 py-2 whitespace-nowrap"
//                         >
//                           {row[key] || "-"}
//                         </td>
//                       );
//                     })}
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan={columns.length + 1}
//                     className="text-center p-4 text-gray-500"
//                   >
//                     No records found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {showTable && totalPages > 1 && (
//         <div className="flex justify-center gap-2 mt-4">
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//             disabled={currentPage === 1}
//             className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
//           >
//             Prev
//           </button>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1 rounded-lg transition ${
//                 currentPage === i + 1
//                   ? "bg-blue-500 text-white shadow"
//                   : "bg-gray-100 hover:bg-gray-200"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//             disabled={currentPage === totalPages}
//             className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
// ==============================================================

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// export default function ReportTable() {
//   const [selectedProject, setSelectedProject] = useState("");
//   const [showFilters, setShowFilters] = useState(false);
//   const [filters, setFilters] = useState({});
//   const [showTable, setShowTable] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
//   const [allRows, setAllRows] = useState([]);

//   const rowsPerPage = 15;
//   const projects = ["Project A", "Project B", "Project C"];
//   const columns = [
//     "View Detail",
//     "Tab Id",
//     "ChkList ID",
//     "Location",
//     "Category",
//     "Check List",
//     "Check Point",
//     "Observation",
//     "Severity",
//     "Rectifiable",
//     "Root Cause",
//     "Correction",
//     "Corrective Action",
//     "Latest Notes",
//     "Contractor",
//     "Latest Status",
//     "Last Chkd By",
//     "Originated Date",
//     "Server Originated Date",
//     "Last Updated",
//     "Server Last Updated",
//     "Showin3D",
//     "ReAssign",
//   ];

//   const fieldMapping = {
//     "Tab Id": "tab_id",
//     "ChkList ID": "chklist_id",
//     Location: "location",
//     Category: "category",
//     "Check List": "check_list",
//     "Check Point": "check_point",
//     Observation: "observation",
//     Severity: "severity",
//     Rectifiable: "rectifiable",
//     "Root Cause": "root_cause",
//     Correction: "correction",
//     "Corrective Action": "corrective_action",
//     "Latest Notes": "latest_notes",
//     Contractor: "contractor",
//     "Latest Status": "latest_status",
//     "Last Chkd By": "last_chkd_by",
//     "Originated Date": "originated_date",
//     "Server Originated Date": "server_originated_date",
//     "Last Updated": "last_updated",
//     "Server Last Updated": "server_last_updated",
//     Showin3D: "showin3d",
//     ReAssign: "reassign",
//     "View Detail": "view_detail",
//   };

//   const statusColors = {
//     NEW: "bg-gradient-to-r from-green-400 to-green-600 text-white",
//     COMPLETED: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white",
//     CLOSED: "bg-gradient-to-r from-red-400 to-red-600 text-white",
//     OPEN: "bg-gradient-to-r from-blue-400 to-blue-600 text-white",
//     REOPEN: "bg-gradient-to-r from-orange-400 to-orange-600 text-white",
//     APPROVERCLOSED: "bg-gradient-to-r from-pink-400 to-pink-600 text-white",
//     REJECTED: "bg-gradient-to-r from-gray-400 to-gray-600 text-white",
//   };

//   useEffect(() => {
//     if (!showTable) return;
//     axios
//       .get("/api/nc-reports")
//       .then((res) => {
//         setAllRows(res.data || []);
//       })
//       .catch((err) => {
//         console.error("Error fetching reports:", err);
//         setAllRows([]);
//       });
//   }, [showTable]);

//   let filteredRows = allRows.filter((row) => {
//     const query = searchQuery.toLowerCase().trim();
//     const normalSearch = Object.values(row).some((val) =>
//       String(val).toLowerCase().includes(query)
//     );
//     const combination = `${row.tab_id} ${row.chklist_id}`.toLowerCase();
//     const combinationDash = `${row.tab_id}-${row.chklist_id}`.toLowerCase();
//     return (
//       normalSearch ||
//       combination.includes(query) ||
//       combinationDash.includes(query)
//     );
//   });

//   // Sorting
//   if (sortConfig.key) {
//     filteredRows = [...filteredRows].sort((a, b) => {
//       const aVal = a[sortConfig.key] ?? "";
//       const bVal = b[sortConfig.key] ?? "";
//       if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
//       if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
//       return 0;
//     });
//   }

//   // Pagination
//   const indexOfLast = currentPage * rowsPerPage;
//   const indexOfFirst = indexOfLast - rowsPerPage;
//   const currentRows = filteredRows.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.max(1, Math.ceil(filteredRows.length / rowsPerPage));

//   const handleSort = (col) => {
//     const key = fieldMapping[col] || col.replace(/\s/g, "");
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc")
//       direction = "desc";
//     setSortConfig({ key, direction });
//     setCurrentPage(1);
//   };

//   const getSortIcon = (col) => {
//     const key = fieldMapping[col] || col.replace(/\s/g, "");
//     if (sortConfig.key === key)
//       return sortConfig.direction === "asc" ? "▲" : "▼";
//     return "⇅";
//   };

//   const toggleFilters = () => setShowFilters((s) => !s);

//   const exportToExcel = () => {
//     const dataToExport = filteredRows.map((row) => {
//       const exportRow = {};
//       columns.forEach((col) => {
//         const apiKey = fieldMapping[col];
//         exportRow[col] = row[apiKey] ?? "-";
//       });
//       return exportRow;
//     });

//     const worksheet = XLSX.utils.json_to_sheet(dataToExport);
//     worksheet["!cols"] = columns.map((col) => ({
//       wch:
//         Math.max(col.length, ...dataToExport.map((r) => r[col]?.length || 0)) +
//         2,
//     }));

//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
//     const excelBuffer = XLSX.write(workbook, {
//       bookType: "xlsx",
//       type: "array",
//     });
//     const data = new Blob([excelBuffer], { type: "application/octet-stream" });
//     saveAs(data, `${selectedProject || "Report"}_Export.xlsx`);
//   };

//   return (
//     <div className="p-4 w-full space-y-4">
//       <div className="flex flex-wrap gap-2 items-center">
//         <select
//           value={selectedProject}
//           onChange={(e) => {
//             setSelectedProject(e.target.value);
//             setShowTable(false);
//             setSearchQuery("");
//             setCurrentPage(1);
//           }}
//           className="border p-2 rounded shadow-sm"
//         >
//           <option value="">Select Project</option>
//           {projects.map((project, idx) => (
//             <option key={idx} value={project}>
//               {project}
//             </option>
//           ))}
//         </select>

//         <button
//           onClick={() => setShowTable(true)}
//           disabled={!selectedProject}
//           className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-5 py-2 rounded-lg shadow transition-all duration-200 disabled:from-gray-400 disabled:to-gray-500"
//         >
//           OK
//         </button>

//         <button
//           onClick={toggleFilters}
//           disabled={!selectedProject}
//           aria-expanded={showFilters}
//           className="ml-2 flex items-center gap-2 bg-white border rounded px-3 py-2 shadow-sm hover:shadow-md transition"
//         >
//           <span className="text-sm font-medium">Filters</span>
//         </button>

//         <button
//           onClick={exportToExcel}
//           disabled={!showTable || filteredRows.length === 0}
//           className="ml-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow transition-all duration-200 disabled:opacity-50"
//         >
//           Export to Excel
//         </button>
//       </div>

//       {showTable && (
//         <>
//           <div className="flex justify-between items-center mt-3">
//             <input
//               type="text"
//               placeholder="🔍 Search..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="border px-4 py-2 rounded-lg w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
//             />
//           </div>

//           <div className="w-[95vw] md:w-[85vw] lg:w-[80vw] overflow-x-auto border rounded shadow mt-2">
//             <table className="min-w-max border-collapse border text-sm">
//               <thead className="bg-gray-100">
//                 <tr>
//                   {columns.map((col, idx) => (
//                     <th
//                       key={idx}
//                       onClick={() => handleSort(col)}
//                       className="border px-2 py-2 whitespace-nowrap text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 select-none"
//                     >
//                       {col}{" "}
//                       <span className="text-xs ml-1">{getSortIcon(col)}</span>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentRows.length > 0 ? (
//                   currentRows.map((row, rIdx) => (
//                     <tr
//                       key={rIdx}
//                       className="hover:bg-blue-50 transition-all duration-150"
//                     >
//                       {columns.map((col, cIdx) => {
//                         const apiKey = fieldMapping[col];
//                         if (col === "Latest Status") {
//                           return (
//                             <td key={cIdx} className="border px-2 py-2">
//                               <span
//                                 className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                                   statusColors[
//                                     (row[apiKey] || "").toUpperCase()
//                                   ] || "bg-gray-400 text-white"
//                                 }`}
//                               >
//                                 {row[apiKey] || "-"}
//                               </span>
//                             </td>
//                           );
//                         }
//                         return (
//                           <td
//                             key={cIdx}
//                             className="border px-2 py-2 whitespace-nowrap"
//                           >
//                             {row[apiKey] || "-"}
//                           </td>
//                         );
//                       })}
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td
//                       colSpan={columns.length}
//                       className="text-center p-4 text-gray-500"
//                     >
//                       No records found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {totalPages > 1 && (
//             <div className="flex justify-center gap-2 mt-4">
//               <button
//                 onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//                 disabled={currentPage === 1}
//                 className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
//               >
//                 Prev
//               </button>
//               {Array.from({ length: totalPages }, (_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrentPage(i + 1)}
//                   className={`px-3 py-1 rounded-lg transition ${
//                     currentPage === i + 1
//                       ? "bg-blue-500 text-white shadow"
//                       : "bg-gray-100 hover:bg-gray-200"
//                   }`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//               <button
//                 onClick={() =>
//                   setCurrentPage((p) => Math.min(p + 1, totalPages))
//                 }
//                 disabled={currentPage === totalPages}
//                 className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// ==============upper without filtes 30sep upper code is good when i mistanly mess something

// ReportTable.jsx
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

/**
 * Pro ReportTable
 * - Horizontal scroll (no hidden columns on 100% screen)
 * - Sticky header
 * - Scroll edge shadows (left / right)
 * - Column visibility toggle
 * - Mobile card view (auto on small screens) + optional toggle
 * - Search, sort, pagination, export to Excel
 * - iOS momentum scrolling (WebKit)
 */

export default function ReportTable() {
  // ----- column definitions & mapping (kept from your original) -----
  const columns = [
    "View Detail",
    "Tab Id",
    "ChkList ID",
    "Location",
    "Category",
    "Check List",
    "Check Point",
    "Observation",
    "Severity",
    "Rectifiable",
    "Root Cause",
    "Correction",
    "Corrective Action",
    "Latest Notes",
    "Contractor",
    "Latest Status",
    "Last Chkd By",
    "Originated Date",
    "Server Originated Date",
    "Last Updated",
    "Server Last Updated",
    "Showin3D",
    "ReAssign",
  ];

  const fieldMapping = {
    "Tab Id": "tab_id",
    "ChkList ID": "chklist_id",
    Location: "location",
    Category: "category",
    "Check List": "check_list",
    "Check Point": "check_point",
    Observation: "observation",
    Severity: "severity",
    Rectifiable: "rectifiable",
    "Root Cause": "root_cause",
    Correction: "correction",
    "Corrective Action": "corrective_action",
    "Latest Notes": "latest_notes",
    Contractor: "contractor",
    "Latest Status": "latest_status",
    "Last Chkd By": "last_chkd_by",
    "Originated Date": "originated_date",
    "Server Originated Date": "server_originated_date",
    "Last Updated": "last_updated",
    "Server Last Updated": "server_last_updated",
    Showin3D: "showin3d",
    ReAssign: "reassign",
    "View Detail": "view_detail",
  };

  const statusColors = {
    NEW: "bg-gradient-to-r from-green-400 to-green-600 text-white",
    COMPLETED: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white",
    CLOSED: "bg-gradient-to-r from-red-400 to-red-600 text-white",
    OPEN: "bg-gradient-to-r from-blue-400 to-blue-600 text-white",
    REOPEN: "bg-gradient-to-r from-orange-400 to-orange-600 text-white",
    APPROVERCLOSED: "bg-gradient-to-r from-pink-400 to-pink-600 text-white",
    REJECTED: "bg-gradient-to-r from-gray-400 to-gray-600 text-white",
  };

  // ----- states -----
  const [selectedProject, setSelectedProject] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({});
  const [showTable, setShowTable] = useState(false);

  const [allRows, setAllRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 15;

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // UI helpers
  const [visibleColumns, setVisibleColumns] = useState(columns.slice()); // which columns are visible
  const [showColumnToggle, setShowColumnToggle] = useState(false);
  const [showViewToggle, setShowViewToggle] = useState(false); // show small control to switch
  const [forceView, setForceView] = useState(null); // null | "table" | "cards"

  // responsive and scroll shadows
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );
  const scrollRef = useRef(null);
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(false);

  // demo projects (replace or keep)
  const projects = ["Project A", "Project B", "Project C"];

  // ----- effects -----
  // fetch data when user clicks OK / showTable becomes true
  useEffect(() => {
    if (!showTable) return;
    let cancel = false;
    (async () => {
      try {
        const res = await axios.get("/api/nc-reports"); // keep your API
        if (!cancel) {
          setAllRows(Array.isArray(res.data) ? res.data : []);
        }
      } catch (err) {
        console.error("Error fetching reports:", err);
        if (!cancel) setAllRows([]);
      }
    })();
    return () => {
      cancel = true;
    };
  }, [showTable]);

  // keep shadows correct on mount / resize / data changes
  useEffect(() => {
    const el = scrollRef.current;
    const calcShadows = () => {
      if (!el) return;
      setShowLeftShadow(el.scrollLeft > 10);
      setShowRightShadow(el.scrollWidth - el.clientWidth - el.scrollLeft > 10);
    };
    calcShadows();

    // scroll handler
    const onScroll = () => calcShadows();
    el?.addEventListener?.("scroll", onScroll);

    // resize handler
    const onResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // recalc after layout changes
      setTimeout(calcShadows, 50);
    };
    window.addEventListener("resize", onResize);

    return () => {
      el?.removeEventListener?.("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [allRows, visibleColumns]);

  // set right shadow if content wider than container
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    setTimeout(() => {
      setShowRightShadow(el.scrollWidth > el.clientWidth + 2);
    }, 50);
  }, [allRows, visibleColumns]);

  // ----- derived state & helpers -----
  // computed filtered rows (search + combination search)
  const filteredRows = allRows.filter((row) => {
    const q = searchQuery?.toString().toLowerCase().trim() || "";
    if (!q) return true;
    // search across all values
    const normalSearch = Object.values(row).some((val) =>
      String(val ?? "")
        .toLowerCase()
        .includes(q)
    );
    // combination support like "tab_id chklist_id" or "tabid-chklistid"
    const combination = `${row.tab_id ?? ""} ${
      row.chklist_id ?? ""
    }`.toLowerCase();
    const combinationDash = `${row.tab_id ?? ""}-${
      row.chklist_id ?? ""
    }`.toLowerCase();
    return (
      normalSearch || combination.includes(q) || combinationDash.includes(q)
    );
  });

  // sorting
  let sortedRows = [...filteredRows];
  if (sortConfig.key) {
    sortedRows.sort((a, b) => {
      const aVal = a[sortConfig.key] ?? "";
      const bVal = b[sortConfig.key] ?? "";
      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  const totalPages = Math.max(1, Math.ceil(sortedRows.length / rowsPerPage));
  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentRows = sortedRows.slice(indexOfFirst, indexOfLast);

  const handleSort = (col) => {
    const key = fieldMapping[col] || col.replace(/\s/g, "");
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc")
      direction = "desc";
    setSortConfig({ key, direction });
    setCurrentPage(1);
  };

  const getSortIcon = (col) => {
    const key = fieldMapping[col] || col.replace(/\s/g, "");
    if (sortConfig.key === key)
      return sortConfig.direction === "asc" ? "▲" : "▼";
    return "⇅";
  };

  // toggle column show/hide
  const toggleColumn = (col) => {
    setVisibleColumns((prev) =>
      prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]
    );
  };

  // export (only visible + filtered rows)
  const exportToExcel = () => {
    const dataToExport = sortedRows.map((row) => {
      const exportRow = {};
      visibleColumns.forEach((col) => {
        const apiKey = fieldMapping[col];
        exportRow[col] = String(row[apiKey] ?? "-");
      });
      return exportRow;
    });

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    worksheet["!cols"] = visibleColumns.map((col) => ({
      wch:
        Math.max(
          col.length,
          ...dataToExport.map((r) => (r[col] ? r[col].length : 0))
        ) + 2,
    }));

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, `${selectedProject || "Report"}_Export.xlsx`);
  };

  // View mode: auto -> cards on mobile, table on desktop. Force overrides.
  const useCardView = (() => {
    if (forceView === "cards") return true;
    if (forceView === "table") return false;
    return isMobile; // auto: mobile = cards
  })();

  // small helper to render a value safely and allow wrapping
  const renderValue = (val) => {
    if (val === null || typeof val === "undefined") return "-";
    return String(val);
  };

  // ----- render -----
  return (
    <div className="p-4 w-full space-y-4 ">
      {/* Controls top */}
      <div className="flex flex-wrap gap-3 items-center ">
        <select
          value={selectedProject}
          onChange={(e) => {
            setSelectedProject(e.target.value);
            setShowTable(false);
            setSearchQuery("");
            setCurrentPage(1);
          }}
          className="border p-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Project</option>
          {projects.map((p, i) => (
            <option key={i} value={p}>
              {p}
            </option>
          ))}
        </select>

        <button
          onClick={() => setShowTable(true)}
          disabled={!selectedProject}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-5 py-2 rounded-lg shadow transition-all duration-200 disabled:opacity-50"
        >
          OK
        </button>

        {/* <button
          onClick={() => setShowFilters((s) => !s)}
          disabled={!selectedProject}
          className="ml-1 flex items-center gap-2 bg-white border rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition disabled:opacity-50"
        >
          Filters
        </button> */}

        <button
          onClick={() => setShowColumnToggle((s) => !s)}
          disabled={!showTable}
          className="ml-1 px-3 py-2 bg-gray-100 border rounded-lg hover:bg-gray-200 text-sm"
        >
          Columns
        </button>

        <button
          onClick={() => {
            setForceView((f) => (f === "cards" ? null : "cards"));
            setShowViewToggle(true);
          }}
          disabled={!showTable}
          className="ml-1 px-3 py-2 bg-gray-100 border rounded-lg hover:bg-gray-200 text-sm"
        >
          Card View
        </button>

        <button
          onClick={() => {
            setForceView((f) => (f === "table" ? null : "table"));
            setShowViewToggle(true);
          }}
          disabled={!showTable}
          className="ml-1 px-3 py-2 bg-gray-100 border rounded-lg hover:bg-gray-200 text-sm"
        >
          Table View
        </button>

        <button
          onClick={exportToExcel}
          disabled={!showTable || sortedRows.length === 0}
          className="ml-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow transition-all duration-200 disabled:opacity-50"
        >
          Export Excel
        </button>
      </div>

      {/* Column toggle panel */}
      {showColumnToggle && (
        <div className="p-3 border rounded-lg bg-gray-50 flex flex-wrap gap-2 md:w-[calc(100%-250px)]">
          {columns.map((col) => (
            <label key={col} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={visibleColumns.includes(col)}
                onChange={() => toggleColumn(col)}
                className="h-4 w-4"
              />
              <span className="select-none">{col}</span>
            </label>
          ))}
        </div>
      )}

      {/* Filters placeholder (you can extend) */}
      {showFilters && (
        <div className="p-3 border rounded-lg bg-white">
          {/* Add your filter controls here (date range, status, contractor etc.) */}
          <div className="text-sm text-gray-600">
            Filter UI (extend as needed)
          </div>
        </div>
      )}

      {/* Search */}
      {showTable && (
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="🔍 Search (tab id, checklist id, any text...)"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-4 py-2 rounded-lg w-full md:w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <div className="text-sm text-gray-500">
            {sortedRows.length} result{sortedRows.length === 1 ? "" : "s"}
          </div>
        </div>
      )}

      {/* Table or Cards */}
      {showTable && (
        <>
          {/* Table mode */}
          {!useCardView && (
            <div className="relative">
              {/* left shadow */}
              <div
                aria-hidden
                className={`pointer-events-none absolute left-0 top-0 h-full w-10 transition-opacity duration-200 ${
                  showLeftShadow ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.06), rgba(255,255,255,0))",
                }}
              />
              {/* right shadow */}
              <div
                aria-hidden
                className={`pointer-events-none absolute right-0 top-0 h-full w-10 transition-opacity duration-200 ${
                  showRightShadow ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background:
                    "linear-gradient(270deg, rgba(0,0,0,0.06), rgba(255,255,255,0))",
                }}
              />

              <div
                ref={scrollRef}
                className="w-f overflow-x-auto border rounded-lg shadow mt-2 bg-white md:w-[calc(100%-250px)]"
                // enable iOS momentum scrolling
                style={{
                  WebkitOverflowScrolling: "touch",
                  // width: "calc(100% - 250px)",
                }}
              >
                <table className="  min-w-max w-full table-auto text-sm border-collapse">
                  <thead className="bg-gray-100 sticky top-0 z-20">
                    <tr>
                      {visibleColumns.map((col) => (
                        <th
                          key={col}
                          onClick={() => handleSort(col)}
                          className="border px-3 py-2 whitespace-nowrap text-xs md:text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 select-none"
                        >
                          <div className="flex items-center gap-2">
                            <span>{col}</span>
                            <span className="text-xs text-gray-500">
                              {getSortIcon(col)}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {currentRows.length > 0 ? (
                      currentRows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className="hover:bg-blue-50 transition-colors duration-150 align-top"
                        >
                          {visibleColumns.map((col, cIdx) => {
                            const apiKey = fieldMapping[col];
                            // Latest Status -> show badge
                            if (col === "Latest Status") {
                              const st = (row[apiKey] || "").toString();
                              const cls =
                                statusColors[(st || "").toUpperCase()] ||
                                "bg-gray-400 text-white";
                              return (
                                <td
                                  key={cIdx}
                                  className="border px-2 py-2 text-center align-middle"
                                >
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs font-semibold ${cls}`}
                                  >
                                    {st || "-"}
                                  </span>
                                </td>
                              );
                            }

                            // Allow content to wrap in table cells for long text, but trim visually
                            return (
                              <td
                                key={cIdx}
                                className="border px-3 py-2 align-top max-w-xs break-words"
                              >
                                {renderValue(row[apiKey])}
                              </td>
                            );
                          })}
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={visibleColumns.length}
                          className="text-center p-6 text-gray-500"
                        >
                          No records found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Card mode (mobile-like stacked cards) */}
          {useCardView && (
            <div className="mt-3">
              {currentRows.length > 0 ? (
                currentRows.map((row, idx) => (
                  <div
                    key={idx}
                    className="p-3 mb-3 bg-white rounded-lg shadow-sm border"
                  >
                    {/* Top row: primary identifiers + status */}
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <div>
                        <div className="text-sm font-semibold">
                          {renderValue(row[fieldMapping["Tab Id"]])}
                          {row[fieldMapping["ChkList ID"]]
                            ? ` • ${renderValue(
                                row[fieldMapping["ChkList ID"]]
                              )}`
                            : ""}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {renderValue(row[fieldMapping["Location"]])}
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <div>
                          {/* status badge */}
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              statusColors[
                                (
                                  (
                                    row[fieldMapping["Latest Status"]] || ""
                                  ).toString() || ""
                                ).toUpperCase()
                              ] || "bg-gray-400 text-white"
                            }`}
                          >
                            {renderValue(row[fieldMapping["Latest Status"]])}
                          </span>
                        </div>
                        <div className="text-xs text-gray-400">
                          {renderValue(row[fieldMapping["Originated Date"]])}
                        </div>
                      </div>
                    </div>

                    {/* card body: show visible columns as label:value pairs */}
                    <div className="grid grid-cols-1 gap-1">
                      {visibleColumns.map((col) => {
                        // skip showing label twice (we already showed Tab Id, ChkList, Location, Latest Status, Originated Date)
                        if (
                          [
                            "Tab Id",
                            "ChkList ID",
                            "Location",
                            "Latest Status",
                            "Originated Date",
                          ].includes(col)
                        ) {
                          return null;
                        }
                        const apiKey = fieldMapping[col];
                        return (
                          <div
                            key={col}
                            className="flex justify-between items-start gap-2"
                          >
                            <div className="text-xs text-gray-500 w-1/3">
                              {col}
                            </div>
                            <div className="text-sm text-gray-800 w-2/3 break-words">
                              {renderValue(row[apiKey])}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center p-6 text-gray-500">
                  No records found
                </div>
              )}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-4 flex-wrap">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded-lg transition ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white shadow"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      {/* small note */}
      {/* <div className="text-xs text-gray-400">
        Tip: For very wide reports, use horizontal scroll (desktop) or card view
        (mobile). You can toggle columns & views above.
      </div> */}
    </div>
  );
}

// ====================  upper is my final code
