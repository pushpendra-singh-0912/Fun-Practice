// src/components/Filters.jsx
import React, { useState } from "react";

const Filters = ({ onApply }) => {
  const [project, setProject] = useState("");
  const [filters, setFilters] = useState({
    tower: "",
    floor: "",
    flat: "",
    room: "",
    unit: "",
    furtherUnit: "",
    type: "",
    category: "",
    status: "",
    dateFrom: "",
    dateTo: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleApply = () => {
    onApply({ project, ...filters });
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg mb-4">
      {/* Project filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Select Project</label>
        <select
          value={project}
          onChange={(e) => setProject(e.target.value)}
          className="mt-1 block w-full border rounded-md p-2"
        >
          <option value="">-- Select --</option>
          <option value="test">Test</option>
        </select>
      </div>

      {/* Only enable filters when project selected */}
      {project && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.keys(filters).map((key) => (
            <div key={key}>
              <label className="block text-sm font-medium capitalize">
                {key}
              </label>
              <input
                type={key === "dateFrom" || key === "dateTo" ? "date" : "text"}
                name={key}
                value={filters[key]}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md p-2"
              />
            </div>
          ))}
        </div>
      )}

      {project && (
        <div className="mt-4">
          <button
            onClick={handleApply}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default Filters;
