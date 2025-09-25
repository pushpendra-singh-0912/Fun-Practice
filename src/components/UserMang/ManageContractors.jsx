

// ===========     ======================   all three part of the page

import React, { useState } from "react";

export default function ManageContractors() {
  const [formData, setFormData] = useState({
    contractorCode: "",
    contractorName: "",
    contractorAddress: "",
    contactName: "",
    phone: "",
    email: "",
  });

  const [availableRoles, setAvailableRoles] = useState([
    "Manager",
    "Supervisor",
    "Engineer",
    "Worker",
  ]);
  const [assignedRoles, setAssignedRoles] = useState([]);

  const [availableTrades, setAvailableTrades] = useState([
    "Electrical",
    "Plumbing",
    "Civil",
    "Carpentry",
  ]);
  const [assignedTrades, setAssignedTrades] = useState([]);

  const [availableActivities, setAvailableActivities] = useState([
    "Inspection",
    "Safety",
    "Quality",
    "Maintenance",
  ]);
  const [assignedActivities, setAssignedActivities] = useState([]);

  // 🔹 Fake data for bottom table
  const [contractors, setContractors] = useState([
    {
      id: 1,
      code: "C001",
      name: "Alpha Constructions",
      address: "123 Main St, Delhi",
      email: "alpha@company.com",
      role: "Manager",
      trade: "Civil",
      activity: "Inspection",
    },
    {
      id: 2,
      code: "C002",
      name: "Beta Infra",
      address: "45 Industrial Area, Mumbai",
      email: "beta@company.com",
      role: "Engineer",
      trade: "Electrical",
      activity: "Safety",
    },
    {
      id: 3,
      code: "C003",
      name: "Gamma Builders",
      address: "78 Sector 10, Noida",
      email: "gamma@company.com",
      role: "Supervisor",
      trade: "Plumbing",
      activity: "Quality",
    },
    {
      id: 4,
      code: "C004",
      name: "Delta Works",
      address: "56 Ring Road, Bangalore",
      email: "delta@company.com",
      role: "Worker",
      trade: "Carpentry",
      activity: "Maintenance",
    },
    {
      id: 5,
      code: "C005",
      name: "Epsilon Contractors",
      address: "91 Tech Park, Pune",
      email: "epsilon@company.com",
      role: "Engineer",
      trade: "Civil",
      activity: "Safety",
    },
  ]);

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    console.log("Roles:", assignedRoles);
    console.log("Trades:", assignedTrades);
    console.log("Activities:", assignedActivities);
  };

  const moveItem = (item, fromList, setFromList, toList, setToList) => {
    setFromList(fromList.filter((i) => i !== item));
    setToList([...toList, item]);
  };

  const DualList = ({
    title,
    available,
    assigned,
    setAvailable,
    setAssigned,
  }) => {
    const [newValue, setNewValue] = useState("");

    const handleAdd = () => {
      if (newValue.trim() !== "" && !available.includes(newValue)) {
        setAvailable([...available, newValue.trim()]);
        setNewValue("");
      }
    };

    return (
      <div className="flex flex-col bg-white p-4 rounded-md shadow-md w-full md:w-1/3">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">{title}</h3>

        <div className="flex gap-4">
          {/* Available */}
          <div className="flex-1">
            <p className="text-xs text-gray-500 mb-1">Available</p>
            <div className="border rounded-md h-40 overflow-y-auto p-2 space-y-1 bg-gray-50">
              {available.map((item, i) => (
                <div
                  key={i}
                  onClick={() =>
                    moveItem(
                      item,
                      available,
                      setAvailable,
                      assigned,
                      setAssigned
                    )
                  }
                  className="cursor-pointer px-2 py-1 bg-white rounded hover:bg-blue-100 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Assigned */}
          <div className="flex-1">
            <p className="text-xs text-gray-500 mb-1">Assigned</p>
            <div className="border rounded-md h-40 overflow-y-auto p-2 space-y-1 bg-gray-50">
              {assigned.map((item, i) => (
                <div
                  key={i}
                  onClick={() =>
                    moveItem(
                      item,
                      assigned,
                      setAssigned,
                      available,
                      setAvailable
                    )
                  }
                  className="cursor-pointer px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add New Input */}
        <div className="flex items-center gap-2 mt-3">
          <input
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            placeholder={`Add new ${title}`}
            className="flex-1 border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={handleAdd}
            className="px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className=" bg-gray-100 min-h-screen">
      {/* 🔹 Top Section: Contractor Form */}
      <div className="p-6 bg-white shadow-md rounded-lg max-w-6xl mx-auto mb-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          Manage Contractors
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contractor Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contractorCode"
                value={formData.contractorCode}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contractor Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contractorName"
                value={formData.contractorName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contractor Address
              </label>
              <input
                type="text"
                name="contractorAddress"
                value={formData.contractorAddress}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact Name
              </label>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      {/* 🔹 Middle Section: Dual Lists with Add New */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 mb-8">
        <DualList
          title="Roles"
          available={availableRoles}
          assigned={assignedRoles}
          setAvailable={setAvailableRoles}
          setAssigned={setAssignedRoles}
        />

        <DualList
          title="Trade"
          available={availableTrades}
          assigned={assignedTrades}
          setAvailable={setAvailableTrades}
          setAssigned={setAssignedTrades}
        />

        <DualList
          title="Activity"
          available={availableActivities}
          assigned={assignedActivities}
          setAvailable={setAvailableActivities}
          setAssigned={setAssignedActivities}
        />
      </div>

      {/* 🔹 Bottom Section: Table */}
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Contractors List
          </h3>
          <input
            type="text"
            placeholder="Search by contractor name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-sm text-gray-700">
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Code</th>
                <th className="px-4 py-2 border">Contractor Name</th>
                <th className="px-4 py-2 border">Contractor Address</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Role</th>
                <th className="px-4 py-2 border">Trade</th>
                <th className="px-4 py-2 border">Activity</th>
                <th className="px-4 py-2 border">Edit</th>
              </tr>
            </thead>
            <tbody>
              {contractors
                .filter((c) =>
                  c.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((c) => (
                  <tr key={c.id} className="text-sm hover:bg-gray-100">
                    <td className="px-4 py-2 border">{c.id}</td>
                    <td className="px-4 py-2 border">{c.code}</td>
                    <td className="px-4 py-2 border">{c.name}</td>
                    <td className="px-4 py-2 border">{c.address}</td>
                    <td className="px-4 py-2 border">{c.email}</td>
                    <td className="px-4 py-2 border">{c.role}</td>
                    <td className="px-4 py-2 border">{c.trade}</td>
                    <td className="px-4 py-2 border">{c.activity}</td>
                    <td className="px-4 py-2 border text-center">
                      <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-xs">
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
}
