// import TableHeader from "./TableHeader";
// import TableRow from "./TableRow";
// import tableData from "../../data/tableData";

// export default function Table() {
//   const headers = [
//     "TAB ID",
//     "RFI ID",
//     "LOCATION",
//     "LOCATION 1",
//     "CATEGORY",
//     "NOTES",
//     "LATEST STATUS",
//     "RAISED BY",
//     "INTIMATED TO",
//     "APPROVER",
//     "LAST CHKD BY",
//     "ORIGINATED DATE",
//   ];

//   return (
//     <div className="overflow-x-auto rounded-lg shadow bg-white">
//       <table className="min-w-full text-sm">
//         <TableHeader headers={headers} />
//         <tbody>
//           {tableData.map((row, i) => (
//             <TableRow key={i} row={row} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// https://chatgpt.com/share/68b04ebd-0250-8007-918d-d208ea385592 full documentation how this all work only report -> tables logic

// ------------------------------------------

import { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import tableData from "../../data/tableData";
// import Sidebar from "../../pages/Sidebar";

export default function Table() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7; // ✅ Change this if you want different page size

  const headers = [
    { label: "TAB ID", key: "tabId" },
    { label: "RFI ID", key: "rfiId" },
    { label: "LOCATION", key: "location" },
    { label: "LOCATION 1", key: "location1" },
    { label: "CATEGORY", key: "category" },
    { label: "NOTES", key: "notes" },
    { label: "LATEST STATUS", key: "status" },
    { label: "RAISED BY", key: "raisedBy" },
    { label: "INTIMATED TO", key: "intimatedTo" },
    { label: "APPROVER", key: "approver" },
    { label: "LAST CHKD BY", key: "lastChkBy" },
    { label: "ORIGINATED DATE", key: "originatedDate" },
  ];

  // ✅ Filter data
  const filteredData = tableData.filter((row) =>
    Object.values(row).some((val) =>
      val.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // ✅ Sort data
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const valA = a[sortConfig.key].toString().toLowerCase();
    const valB = b[sortConfig.key].toString().toLowerCase();

    if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
    if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  // ✅ Pagination logic
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + rowsPerPage);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      {/* <di className="">
        <Sidebar />
      </di> */}
      <div className="bg-white rounded-lg shadow p-4">
        {/* 🔍 Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // reset to first page on search
            }}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* 📊 Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <TableHeader
              headers={headers}
              sortConfig={sortConfig}
              onSort={handleSort}
            />
            <tbody>
              {paginatedData.map((row, i) => (
                <TableRow key={i} row={row} />
              ))}
            </tbody>
          </table>
        </div>

        {/* 📌 Pagination Controls */}
        <div className="flex items-center justify-between mt-4 text-sm">
          <p>
            Showing <span className="font-semibold">{startIndex + 1}</span> to{" "}
            <span className="font-semibold">
              {Math.min(startIndex + rowsPerPage, sortedData.length)}
            </span>{" "}
            of <span className="font-semibold">{sortedData.length}</span>{" "}
            entries
          </p>

          <div className="flex gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`px-3 py-1 rounded-md border ${
                currentPage === 1
                  ? "text-gray-400 border-gray-300 cursor-not-allowed"
                  : "text-blue-600 border-blue-500 hover:bg-blue-50"
              }`}
            >
              Prev
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className={`px-3 py-1 rounded-md border ${
                currentPage === totalPages
                  ? "text-gray-400 border-gray-300 cursor-not-allowed"
                  : "text-blue-600 border-blue-500 hover:bg-blue-50"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// =================================
