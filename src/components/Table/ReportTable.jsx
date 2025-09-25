// // src/components/ReportTable.jsx
// import React, { useState } from "react";
// import { reportData } from "../../data/tableData";
// import { ChevronUp, ChevronDown } from "lucide-react";

// const ReportTable = ({ filters }) => {
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
//   const [search, setSearch] = useState("");

//   const handleSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });
//   };

//   const sortedData = [...reportData].sort((a, b) => {
//     if (!sortConfig.key) return 0;
//     if (a[sortConfig.key] < b[sortConfig.key]) {
//       return sortConfig.direction === "asc" ? -1 : 1;
//     }
//     if (a[sortConfig.key] > b[sortConfig.key]) {
//       return sortConfig.direction === "asc" ? 1 : -1;
//     }
//     return 0;
//   });

//   const filteredData = sortedData.filter((row) => {
//     if (
//       search &&
//       !JSON.stringify(row).toLowerCase().includes(search.toLowerCase())
//     ) {
//       return false;
//     }
//     if (filters.project && filters.project !== "test") return false;
//     // TODO: add more filter conditions (tower, floor, etc.)
//     return true;
//   });

//   const headers = [
//     "tabId",
//     "rfiId",
//     "location",
//     "location1",
//     "category",
//     "notes",
//     "status",
//     "raisedBy",
//     "intimatedTo",
//     "approver",
//     "lastChkBy",
//     "originatedDate",
//     "serverOriginatedDate",
//     "irDate",
//     "lastUpdated",
//     "serverLastUpdated",
//   ];

//   return (
//     <div className="bg-white shadow rounded-lg overflow-x-auto">
//       {/* Search */}
//       <div className="p-3">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full border p-2 rounded-md"
//         />
//       </div>

//       <table className="min-w-full text-sm border-collapse">
//         <thead className="bg-gray-200 text-gray-700 uppercase">
//           <tr>
//             {headers.map((h) => (
//               <th
//                 key={h}
//                 onClick={() => handleSort(h)}
//                 className="px-4 py-2 font-semibold text-left cursor-pointer"
//               >
//                 {h}
//                 {sortConfig.key === h &&
//                   (sortConfig.direction === "asc" ? (
//                     <ChevronUp className="inline ml-1 w-4 h-4" />
//                   ) : (
//                     <ChevronDown className="inline ml-1 w-4 h-4" />
//                   ))}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((row, idx) => (
//             <tr key={idx} className="odd:bg-white even:bg-gray-50">
//               {headers.map((h) => (
//                 <td key={h} className="px-4 py-2 border-t">
//                   {row[h]}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ReportTable;

// ==========================

// src/components/ReportTable.jsx
// import React, { useState } from "react";
// import { reportData } from "../../data/tableData";
// import { ChevronUp, ChevronDown } from "lucide-react";

// const ReportTable = ({ filters }) => {
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
//   const [search, setSearch] = useState("");

//   const handleSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });
//   };

//   const sortedData = [...reportData].sort((a, b) => {
//     if (!sortConfig.key) return 0;
//     if (a[sortConfig.key] < b[sortConfig.key]) {
//       return sortConfig.direction === "asc" ? -1 : 1;
//     }
//     if (a[sortConfig.key] > b[sortConfig.key]) {
//       return sortConfig.direction === "asc" ? 1 : -1;
//     }
//     return 0;
//   });

//   const filteredData = sortedData.filter((row) => {
//     if (
//       search &&
//       !JSON.stringify(row).toLowerCase().includes(search.toLowerCase())
//     ) {
//       return false;
//     }
//     if (filters.project && filters.project !== "test") return false;
//     return true;
//   });

//   const headers = [
//     "tabId",
//     "rfiId",
//     "location",
//     "location1",
//     "category",
//     "notes",
//     "status",
//     "raisedBy",
//     "intimatedTo",
//     "approver",
//     "lastChkBy",
//     "originatedDate",
//     "serverOriginatedDate",
//     "irDate",
//     "lastUpdated",
//     "serverLastUpdated",
//   ];

//   return (
//     <div className="bg-white shadow rounded-lg">
//       {/* Search bar */}
//       <div className="p-3">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full border p-2 rounded-md"
//         />
//       </div>

//       {/* Table wrapper for horizontal scroll */}
//       <div className="overflow-x-auto w-full">
//         <table className="min-w-[1200px] w-full text-sm border-collapse">
//           <thead className="bg-gray-200 text-gray-700 uppercase">
//             <tr>
//               {headers.map((h) => (
//                 <th
//                   key={h}
//                   onClick={() => handleSort(h)}
//                   className="px-4 py-2 font-semibold text-left cursor-pointer whitespace-nowrap"
//                 >
//                   {h}
//                   {sortConfig.key === h &&
//                     (sortConfig.direction === "asc" ? (
//                       <ChevronUp className="inline ml-1 w-4 h-4" />
//                     ) : (
//                       <ChevronDown className="inline ml-1 w-4 h-4" />
//                     ))}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.map((row, idx) => (
//               <tr key={idx} className="odd:bg-white even:bg-gray-50">
//                 {headers.map((h) => (
//                   <td key={h} className="px-4 py-2 border-t whitespace-nowrap">
//                     {row[h]}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ReportTable;

// ======================================

import React from "react";

export default function ReportTable({ data }) {
  const headers = [
    "Tab ID",
    "RFI ID",
    "Project",
    "Tower",
    "Floor",
    "Flat",
    "Room",
    "Unit",
    "Further Unit",
    "Type",
    "Category",
    "Status",
    "Date",
  ];

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-[1500px] border border-gray-200 text-sm">
        <thead className="bg-gray-100 text-gray-700 uppercase text-xs sticky top-0 z-10">
          <tr>
            {headers.map((head) => (
              <th
                key={head}
                className="px-4 py-3 text-left font-semibold whitespace-nowrap border-b"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((row, idx) => (
              <tr
                key={idx}
                className="odd:bg-white even:bg-gray-50 hover:bg-gray-100"
              >
                <td className="px-4 py-2 border-b whitespace-nowrap">
                  {row.tabId}
                </td>
                <td className="px-4 py-2 border-b whitespace-nowrap">
                  {row.rfiId}
                </td>
                <td className="px-4 py-2 border-b whitespace-nowrap">
                  {row.project}
                </td>
                <td className="px-4 py-2 border-b whitespace-nowrap">
                  {row.tower}
                </td>
                <td className="px-4 py-2 border-b whitespace-nowrap">
                  {row.floor}
                </td>
                <td className="px-4 py-2 border-b whitespace-nowrap">
                  {row.flat}
                </td>
                <td className="px-4 py-2 border-b whitespace-nowrap">
                  {row.room}
                </td>
                <td className="px-4 py-2 border-b whitespace-nowrap">
                  {row.unit}
                </td>
                <td className="px-4 py-2 border-b whitespace-nowrap">
                  {row.furtherUnit}
                </td>
                <td className="px-4 py-2 border-b whitespace-nowrap">
                  {row.type}
                </td>
                <td className="px-4 py-2 border-b whitespace-nowrap">
                  {row.category}
                </td>
                <td className="px-4 py-2 border-b whitespace-nowrap">
                  {row.status}
                </td>
                <td className="px-4 py-2 border-b whitespace-nowrap">
                  {row.date}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={headers.length}
                className="px-4 py-6 text-center text-gray-500"
              >
                No matching records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
