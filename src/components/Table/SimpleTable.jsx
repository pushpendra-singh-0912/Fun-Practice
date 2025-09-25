import React from "react";

export default function SimpleTable() {
  const headers = [
    "ID",
    "Name",
    "Email",
    "Phone",
    "Address",
    "City",
    "State",
    "Country",
    "Zip",
    "Department",
    "Role",
    "Project",
    "Tower",
    "Floor",
    "Flat",
    "Room",
    "Unit",
    "Category",
    "Status",
    "Date",
  ];

  const dummyData = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    phone: `+91 98765${10000 + i}`,
    address: `Street ${i + 1}`,
    city: `City ${i + 1}`,
    state: `State ${i + 1}`,
    country: "India",
    zip: `1100${i}`,
    department: ["HR", "IT", "Finance", "Ops"][i % 4],
    role: ["Admin", "User", "Manager", "Staff"][i % 4],
    project: `Project ${i + 1}`,
    tower: `Tower ${String.fromCharCode(65 + (i % 5))}`, // Tower A–E
    floor: `${(i % 10) + 1}th`,
    flat: `Flat ${100 + i}`,
    room: ["Living", "Bedroom", "Kitchen"][i % 3],
    unit: `Unit-${i + 1}`,
    category: ["Electrical", "Civil", "Plumbing"][i % 3],
    status: ["Pending", "Completed", "In Progress"][i % 3],
    date: `2025-09-${(i + 1).toString().padStart(2, "0")}`,
  }));

  return (
    <div className="w-full h-[500px] overflow-auto border rounded-lg shadow bg-white">
      <table className="min-w-[2000px] border border-gray-200 text-sm">
        <thead className="bg-gray-100 text-gray-700 uppercase text-xs sticky top-0">
          <tr>
            {headers.map((head) => (
              <th
                key={head}
                className="px-4 py-2 border-b text-left font-semibold whitespace-nowrap"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dummyData.map((row) => (
            <tr
              key={row.id}
              className="odd:bg-white even:bg-gray-50 hover:bg-gray-100"
            >
              <td className="px-4 py-2 border-b whitespace-nowrap">{row.id}</td>
              <td className="px-4 py-2 border-b whitespace-nowrap">
                {row.name}
              </td>
              <td className="px-4 py-2 border-b whitespace-nowrap">
                {row.email}
              </td>
              <td className="px-4 py-2 border-b whitespace-nowrap">
                {row.phone}
              </td>
              <td className="px-4 py-2 border-b whitespace-nowrap">
                {row.address}
              </td>
              <td className="px-4 py-2 border-b whitespace-nowrap">
                {row.city}
              </td>
              <td className="px-4 py-2 border-b whitespace-nowrap">
                {row.state}
              </td>
              <td className="px-4 py-2 border-b whitespace-nowrap">
                {row.country}
              </td>
              <td className="px-4 py-2 border-b whitespace-nowrap">
                {row.zip}
              </td>
              <td className="px-4 py-2 border-b whitespace-nowrap">
                {row.department}
              </td>
              <td className="px-4 py-2 border-b whitespace-nowrap">
                {row.role}
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
                {row.category}
              </td>
              <td className="px-4 py-2 border-b whitespace-nowrap">
                {row.status}
              </td>
              <td className="px-4 py-2 border-b whitespace-nowrap">
                {row.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
