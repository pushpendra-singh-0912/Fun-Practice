

// ================ ========== =========== =========== ========== =======          =           ====        ====

import React, { useState, useRef, useEffect } from "react";

const ProjectLevelDetails = () => {
  const levels = ["Tower", "Floor", "Flat", "Room", "Unit", "FurtherUnit"];
  const levelColors = {
    Tower: "bg-blue-50 border-blue-400",
    Floor: "bg-green-50 border-green-400",
    Flat: "bg-yellow-50 border-yellow-400",
    Room: "bg-purple-50 border-purple-400",
    Unit: "bg-pink-50 border-pink-400",
    FurtherUnit: "bg-gray-50 border-gray-400",
  };

  const [selectedProject, setSelectedProject] = useState("");
  const [hierarchy, setHierarchy] = useState({
    Tower: { "Wing A": [], "Wing B": [] },
    Floor: {},
    Flat: {},
    Room: {},
    Unit: {},
    FurtherUnit: {},
  });
  const [selected, setSelected] = useState({
    Tower: [],
    Floor: [],
    Flat: [],
    Room: [],
    Unit: [],
    FurtherUnit: [],
  });
  const [inputs, setInputs] = useState({
    Tower: "",
    Floor: "",
    Flat: "",
    Room: "",
    Unit: "",
    FurtherUnit: "",
  });

  const inputRefs = useRef({});

  useEffect(() => {
    levels.forEach((level) => {
      if (inputRefs.current[level]) {
        inputRefs.current[level].focus();
      }
    });
  }, [inputs]);

  const getOptions = (level) => {
    if (level === "Tower") return Object.keys(hierarchy.Tower);
    const parentLevel = levels[levels.indexOf(level) - 1];
    const parent = selected[parentLevel][0];
    if (!parent) return [];
    return hierarchy[parentLevel][parent] || [];
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
      if (level === "Tower") {
        if (!updated.Tower[newValue]) updated.Tower[newValue] = [];
      } else {
        const parentLevel = levels[levelIndex - 1];
        const parent = selected[parentLevel][0];
        if (!parent) return prev;

        if (!updated[parentLevel][parent]) updated[parentLevel][parent] = [];
        if (!updated[parentLevel][parent].includes(newValue))
          updated[parentLevel][parent].push(newValue);

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

  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Project Level Details
      </h2>

      {/* Project Selector */}
      <div className="bg-white shadow-md rounded-2xl p-4 md:p-6 mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Select Project
        </label>
        <select
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
          className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Select a Project --</option>
          <option value="Project Alpha">Project Alpha</option>
          <option value="Project Beta">Project Beta</option>
        </select>
      </div>

      {selectedProject && (
        <div className="space-y-6">
          {levels.map((level, index) => {
            const parentSelected =
              level === "Tower" || selected[levels[index - 1]]?.length;
            if (!parentSelected) return null;

            const options = getOptions(level);
            const isDisabled = !parentSelected;

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
                    disabled={isDisabled}
                    className={`w-full border rounded-xl px-3 py-2 h-12 focus:ring-2 focus:ring-blue-500 ${
                      isDisabled ? "bg-gray-100 cursor-not-allowed" : ""
                    }`}
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
                    onClick={() => handleAddNew(level)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700"
                  >
                    Add
                  </button>
                  <button
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
      )}
    </div>
  );
};

export default ProjectLevelDetails;
