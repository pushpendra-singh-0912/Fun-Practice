

// =====================

import React, { useState } from "react";
import data from "../../data/userMapping.json";

export default function UserMapping() {
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedAccess, setSelectedAccess] = useState("");

  const accessColumns = [
    "Proj. Access",
    "QA Access",
    "HSE Access",
    "Snag Access",
    "NC Access",
    "PM Access",
    "Mat. Access",
    "DLR Access",
    "POUR Access",
    "HO Access",
    "Training Access",
    "Audit Access",
  ];

  const [permissions, setPermissions] = useState(
    data.reduce((acc, user) => {
      acc[user.id] = accessColumns.reduce((colAcc, col) => {
        colAcc[col] = false;
        return colAcc;
      }, {});
      return acc;
    }, {})
  );

  const handleCheckboxChange = (userId, column) => {
    setPermissions((prev) => ({
      ...prev,
      [userId]: {
        ...prev[userId],
        [column]: !prev[userId][column],
      },
    }));
  };

  const filteredData = data.filter((item) => {
    return (
      (selectedProject ? item.project === selectedProject : true) &&
      (selectedAccess ? item.accessRight === selectedAccess : true)
    );
  });

  const clearFilters = () => {
    setSelectedProject("");
    setSelectedAccess("");
  };

  const projects = [...new Set(data.map((item) => item.project))];
  const accessRights = [...new Set(data.map((item) => item.accessRight))];

  // Dummy save handler
  const handleSave = () => {
    console.log("Saving permissions:", permissions);
    alert("Save button clicked! (Hook this to API later)");
  };

  return (
    <div className=" sm:p-6 max-w-full mx-auto bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-2 pb-24">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          User Mapping
        </h2>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center items-center">
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto shadow-sm"
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
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto shadow-sm"
          >
            <option value="">Select Access Right</option>
            {accessRights.map((access) => (
              <option key={access} value={access}>
                {access}
              </option>
            ))}
          </select>

          <button
            onClick={clearFilters}
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition shadow-md w-full sm:w-auto"
          >
            Clear Filters
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm max-h-[70vh]">
          {(selectedProject || selectedAccess) && filteredData.length > 0 ? (
            <table className="w-full text-sm sm:text-base">
              <thead className="bg-gradient-to-r from-blue-100 to-purple-100 sticky top-0 z-20 shadow-md">
                <tr>
                  <th className="border px-4 py-3 text-left font-semibold text-gray-700">
                    Username
                  </th>
                  {accessColumns.map((col) => (
                    <th
                      key={col}
                      className="border px-4 py-3 text-center font-semibold text-gray-700 whitespace-nowrap"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((user, idx) => (
                  <tr
                    key={user.id}
                    className={`hover:bg-blue-50 ${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="border px-4 py-2 font-medium text-gray-800">
                      {user.name}
                    </td>
                    {accessColumns.map((col) => (
                      <td key={col} className="border px-4 py-2 text-center">
                        <input
                          type="checkbox"
                          checked={permissions[user.id][col]}
                          onChange={() => handleCheckboxChange(user.id, col)}
                          className="h-4 w-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-400"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500 text-center py-6">
              {selectedProject || selectedAccess
                ? "No results found for selected filters."
                : "Please select a filter to see data."}
            </p>
          )}
        </div>
      </div>

      {/* Sticky Save Button (centered at bottom) */}
      {(selectedProject || selectedAccess) && filteredData.length > 0 && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-6 py-3  rounded-lg shadow-lg 
        hover:bg-green-700 transition relative"
          >
            <span className="relative z-10">Save</span>
            {/* Glowing effect */}
            <span className="absolute inset-0 rounded-lg bg-green-500 blur-lg opacity-50 animate-pulse"></span>
          </button>
        </div>
      )}
    </div>
  );
}
