

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
