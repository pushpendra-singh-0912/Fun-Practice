

// ==============================         ======================           ======================          ===============

import React, { useState, useRef, useEffect } from "react";

const ProjectDetail = () => {
  // form state
  const [form, setForm] = useState({
    projectName: "",
    projectCode: "",
    startDate: "",
    endDate: "",
    customer: "",
    location: "",
    description: "",
    leader: "",
    status: "Active",
    autoEmail: false,
  });

  // --- Hierarchical dual-list state ---
  const levels = ["Contractor", "Contacts", "Roles", "Trades", "Activity"];
  const levelColors = {
    Contractor: "bg-blue-50 border-blue-400",
    Contacts: "bg-green-50 border-green-400",
    Roles: "bg-yellow-50 border-yellow-400",
    Trades: "bg-purple-50 border-purple-400",
    Activity: "bg-pink-50 border-pink-400",
  };

  const [hierarchy, setHierarchy] = useState({
    Contractor: {},
    Contacts: {},
    Roles: {},
    Trades: {},
    Activity: {},
  });

  const [selected, setSelected] = useState({
    Contractor: [],
    Contacts: [],
    Roles: [],
    Trades: [],
    Activity: [],
  });

  const [inputs, setInputs] = useState({
    Contractor: "",
    Contacts: "",
    Roles: "",
    Trades: "",
    Activity: "",
  });

  const inputRefs = useRef({});

  useEffect(() => {
    levels.forEach((level) => {
      if (inputRefs.current[level]) inputRefs.current[level].focus();
    });
  }, [inputs]);

  // Dummy initial data
  const contractorOptions = [
    "Ahluwalia",
    "Antara Sanitation",
    "Artwalk Buildcon Pvt. Ltd.",
    "Contractor Maker",
    "BuildX Construction",
    "Prime Constructions",
  ];

  const getOptions = (level) => {
    if (!Object.keys(hierarchy[level]).length) return contractorOptions;
    const parent = selected[level][0];
    if (!parent) return [];
    return hierarchy[level][parent] || [];
  };

  const handleSelect = (level, value) => {
    setSelected((prev) => {
      const updated = { ...prev };
      updated[level] = value ? [value] : [];
      const index = levels.indexOf(level);
      for (let i = index + 1; i < levels.length; i++) updated[levels[i]] = [];
      return updated;
    });
  };

  const handleAddNew = (level) => {
    const newValue = inputs[level].trim();
    if (!newValue) return;

    const levelIndex = levels.indexOf(level);

    setHierarchy((prev) => {
      const updated = { ...prev };
      const parent = selected[level][0] || null;

      if (parent) {
        if (!updated[level][parent]) updated[level][parent] = [];
        if (!updated[level][parent].includes(newValue))
          updated[level][parent].push(newValue);
      } else {
        if (!updated[level][newValue]) updated[level][newValue] = [];
      }

      return updated;
    });

    setSelected((prev) => {
      const updated = { ...prev };
      updated[level] = [newValue];
      for (let i = levelIndex + 1; i < levels.length; i++)
        updated[levels[i]] = [];
      return updated;
    });

    setInputs((prev) => ({ ...prev, [level]: "" }));
    inputRefs.current[level]?.focus();
  };

  const handleClear = (level) => {
    const index = levels.indexOf(level);
    setSelected((prev) => {
      const updated = { ...prev };
      updated[level] = [];
      for (let i = index + 1; i < levels.length; i++) updated[levels[i]] = [];
      return updated;
    });
  };

  // --- Original Project Form ---
  const clearAll = () => {
    setForm({
      projectName: "",
      projectCode: "",
      startDate: "",
      endDate: "",
      customer: "",
      location: "",
      description: "",
      leader: "",
      status: "Active",
      autoEmail: false,
    });
    setInputs({
      Contractor: "",
      Contacts: "",
      Roles: "",
      Trades: "",
      Activity: "",
    });
    setSelected({
      Contractor: [],
      Contacts: [],
      Roles: [],
      Trades: [],
      Activity: [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form:", form);
    console.log("Selected Hierarchy:", selected);
    alert("Form submitted — check console for data");
  };

  // --- Fake Project List Data ---
  const fakeProjects = [
    {
      code: "SANMAN",
      name: "DS Max Sanman",
      customer: "DS Max",
      startDate: "29-07-2024",
      endDate: "29-07-2027",
    },
    {
      code: "TEST",
      name: "Test Project",
      customer: "Test",
      startDate: "01-08-2024",
      endDate: "01-08-2025",
    },
    {
      code: "ALPHA",
      name: "Alpha Heights",
      customer: "Alpha Group",
      startDate: "15-09-2024",
      endDate: "15-09-2028",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-6">
      {/* Main card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Project Details
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left and right column fields same as before */}
          <div className="space-y-4">
            {/* Project Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Project Name *
              </label>
              <input
                value={form.projectName}
                onChange={(e) =>
                  setForm((f) => ({ ...f, projectName: e.target.value }))
                }
                type="text"
                placeholder="Enter project name"
                className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Project Code */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Project Code *
              </label>
              <input
                value={form.projectCode}
                onChange={(e) =>
                  setForm((f) => ({ ...f, projectCode: e.target.value }))
                }
                type="text"
                placeholder="Enter project code"
                className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Start Date */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Starting Date *
              </label>
              <input
                value={form.startDate}
                onChange={(e) =>
                  setForm((f) => ({ ...f, startDate: e.target.value }))
                }
                type="date"
                className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Customer */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Customer
              </label>
              <input
                value={form.customer}
                onChange={(e) =>
                  setForm((f) => ({ ...f, customer: e.target.value }))
                }
                type="text"
                placeholder="Enter customer name"
                className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Location *
              </label>
              <input
                value={form.location}
                onChange={(e) =>
                  setForm((f) => ({ ...f, location: e.target.value }))
                }
                type="text"
                placeholder="Enter location"
                className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Status
              </label>
              <select
                value={form.status}
                onChange={(e) =>
                  setForm((f) => ({ ...f, status: e.target.value }))
                }
                className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
              >
                <option>Active</option>
                <option>Inactive</option>
                <option>On Hold</option>
                <option>Completed</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Project Description
              </label>
              <textarea
                value={form.description}
                onChange={(e) =>
                  setForm((f) => ({ ...f, description: e.target.value }))
                }
                rows="3"
                placeholder="Enter description"
                className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* End Date */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                End Date *
              </label>
              <input
                value={form.endDate}
                onChange={(e) =>
                  setForm((f) => ({ ...f, endDate: e.target.value }))
                }
                type="date"
                className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Automatic Email */}
            <div className="flex items-center gap-2">
              <input
                id="autoEmail"
                type="checkbox"
                checked={form.autoEmail}
                onChange={(e) =>
                  setForm((f) => ({ ...f, autoEmail: e.target.checked }))
                }
                className="h-4 w-4"
              />
              <label htmlFor="autoEmail" className="text-sm text-gray-600">
                Automatic Email
              </label>
            </div>

            {/* Leader */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Leader *
              </label>
              <select
                value={form.leader}
                onChange={(e) =>
                  setForm((f) => ({ ...f, leader: e.target.value }))
                }
                className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
              >
                <option value="">-- Please select --</option>
                <option>John Doe</option>
                <option>Jane Smith</option>
                <option>Michael Johnson</option>
              </select>
            </div>
          </div>
        </form>

        {/* Dual-list section */}
        <div className="space-y-6 mt-8">
          {levels.map((level) => {
            const parentSelected =
              level === "Contractor" ||
              selected[levels[levels.indexOf(level) - 1]]?.length;
            if (!parentSelected) return null;
            const options = getOptions(level);
            return (
              <div
                key={level}
                className={`flex flex-col md:flex-row md:items-end md:gap-4 p-4 border-l-4 ${levelColors[level]} rounded-xl`}
              >
                <div className="flex-1">
                  <label className="block text-gray-700 font-medium mb-1">
                    {level}
                  </label>
                  <select
                    value={selected[level][0] || ""}
                    onChange={(e) => handleSelect(level, e.target.value)}
                    className="w-full border rounded-xl px-3 py-2 h-12 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">-- Select {level} --</option>
                    {options.length ? (
                      options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))
                    ) : (
                      <option disabled>No options available</option>
                    )}
                  </select>
                </div>

                <div className="flex-1 mt-2 md:mt-0">
                  <label className="block text-gray-700 font-medium mb-1">
                    Add New {level}
                  </label>
                  <input
                    type="text"
                    value={inputs[level]}
                    ref={(el) => (inputRefs.current[level] = el)}
                    onChange={(e) =>
                      setInputs({ ...inputs, [level]: e.target.value })
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddNew(level);
                      }
                    }}
                    placeholder={`Enter new ${level}`}
                    className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex gap-2 mt-3 md:mt-0">
                  <button
                    type="button"
                    onClick={() => handleAddNew(level)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    onClick={() => handleClear(level)}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl shadow hover:bg-gray-300"
                  >
                    Clear
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            type="button"
            onClick={clearAll}
            className="bg-gray-300 px-6 py-2 rounded-lg hover:bg-gray-400"
          >
            Clear All
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Continue
          </button>
        </div>
      </div>

      {/* Bottom Project List Table */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mt-8 max-w-6xl mx-auto">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Project List
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm">
                <th className="border p-2 text-left">Project Code</th>
                <th className="border p-2 text-left">Project Name</th>
                <th className="border p-2 text-left">Customer</th>
                <th className="border p-2 text-left">Start Date</th>
                <th className="border p-2 text-left">End Date</th>
                <th className="border p-2 text-left">Edit</th>
              </tr>
            </thead>
            <tbody>
              {fakeProjects.map((p, i) => (
                <tr key={i} className="text-sm hover:bg-gray-50 transition">
                  <td className="border p-2">{p.code}</td>
                  <td className="border p-2">{p.name}</td>
                  <td className="border p-2">{p.customer}</td>
                  <td className="border p-2">{p.startDate}</td>
                  <td className="border p-2">{p.endDate}</td>
                  <td className="border p-2">
                    <button className="text-blue-600 hover:underline">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
