

// ========================================================================

import { useState } from "react";
import { Edit } from "lucide-react";

export default function UsersTable() {
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

  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const filteredUsers = allUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = filterRole === "All" || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div className="m-4 sm:m-6 bg-white shadow rounded-2xl overflow-hidden">
      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 gap-2 sm:gap-0">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="px-4 py-2 border rounded-lg w-full sm:w-1/3"
        />
        <select
          value={filterRole}
          onChange={(e) => {
            setFilterRole(e.target.value);
            setCurrentPage(1);
          }}
          className="px-4 py-2 border rounded-lg w-full sm:w-auto"
        >
          <option value="All">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
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
                  <td className="py-3 px-4 text-center flex justify-center gap-2">
                    <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200">
                      <Edit size={16} />
                    </button>
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
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-t gap-2 sm:gap-0">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 w-full sm:w-auto"
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
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 w-full sm:w-auto"
        >
          Next
        </button>
      </div>
    </div>
  );
}
